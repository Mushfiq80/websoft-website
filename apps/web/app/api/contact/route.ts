import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Force the Node.js runtime (nodemailer needs Node, not the Edge runtime).
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const {
      name = "",
      email = "",
      phone = "",
      organization = "",
      service = "",
      message = "",
      website = "", // honeypot — real users leave this empty
    } = data ?? {}

    // Bots fill hidden fields; silently accept and drop.
    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email and message." },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    if (!host || !user || !pass) {
      console.error("Contact form: SMTP env vars are not configured.")
      return NextResponse.json(
        { ok: false, error: "Mail service is not configured. Please email us directly." },
        { status: 500 }
      )
    }

    const port = Number(process.env.SMTP_PORT || 587)
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user, pass },
    })

    // Comma-separated list of recipients.
    const to = process.env.CONTACT_TO || "info@websoftbd.net, fakrul1976@gmail.com"
    const from = process.env.SMTP_FROM || user

    const rows: [string, string][] = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Organization", organization || "—"],
      ["Service of Interest", service || "—"],
    ]

    const text =
      rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a2e;max-width:640px">
        <h2 style="color:#7370D8;margin:0 0 16px">New enquiry from websoftbd.net</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr>
                  <td style="padding:8px 12px;background:#f5f4fc;font-weight:600;width:180px;border:1px solid #e2e8f0">${k}</td>
                  <td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(v)}</td>
                </tr>`
            )
            .join("")}
        </table>
        <h3 style="margin:20px 0 8px">Message</h3>
        <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
      </div>`

    await transporter.sendMail({
      from: `"Web Soft BD Website" <${from}>`,
      to,
      replyTo: email,
      subject: `Website enquiry: ${name}${organization ? " — " + organization : ""}`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { ok: false, error: "Sorry, the message could not be sent. Please email us directly." },
      { status: 500 }
    )
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
