# Content Guide — Contact (`/contact`)

Current state: `app/contact/page.tsx` is a stub. Good news: `components/shared/Footer.tsx` already has most of the real contact data wired up, including a working Google Maps embed — the Contact page's job is mostly to surface what's already correct there, fix what's incomplete, and add a form.

## Verified contact details (verbatim from the profile PDF, cross-checked against `CLAUDE.md` and the live Footer)

**Registered Office** (currently shown nowhere in the live build — Footer only has Sales Office):
> 10th Floor, Shah Ali Tower, 33 Kawran Bazar, Dhaka-1215, Bangladesh

**Sales Office** (already in `Footer.tsx`, correct):
> Level-2B, House-30, Road-02, Block-B, Pallabi, Section-12, Mirpur, Dhaka-1216, Bangladesh

**Two project-specific field offices** (PDF only — optional, lower priority, but a credible trust signal for government-sector visitors specifically):
> BAMIS Project Office — Room #708, 7th Floor, Middle Building, Department of Agricultural Extension (DAE), Khamarbari, Farmgate, Dhaka, Bangladesh
> BMD Project Office — Storm Warning Centre (SWC), Bangladesh Meteorological Department (BMD), Agargaon, Dhaka, Bangladesh

**Phone — 4 numbers** (Footer currently only has 3; `+8801601784580` is missing from the live component):
> +88 01716-983511 · +88 01681-784574 · +88 01330-004541 · +88 01601-784580

**WhatsApp** (called out separately in the PDF, twice — worth a dedicated click-to-chat button rather than folding it into the phone list):
> +880 1716-983511

**Email:**
> info@websoftbd.net · fakrulebt@yahoo.com · fakrul1976@gmail.com

**Website:**
> www.websoftbd.net · www.websoft.com.bd

**Social** (from `CLAUDE.md`'s `site.json` schema):
> facebook.com/websoftbangladesh · linkedin.com/company/websoftbd

## Map

`Footer.tsx` already has a working embed pinned to "WEB SOFT BD - Sales Office":
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1101.27...!2sWEB%20SOFT%20BD%20-%20Sales%20Office...
```
Reuse the same embed on the Contact page rather than re-geocoding. If you want to show the Registered Office too, that'll need a second pin — there isn't an existing embed URL for it, so either get one from Google My Maps or skip the second map and just list the address as text.

## Contact form — needs a decision before building

`CLAUDE.md` is explicit that this is a 100% static frontend project with **no API routes, no backend**. A contact form needs somewhere to send submissions, so one of these has to be chosen before the form gets built — it's not specified anywhere currently:
- A `mailto:` link (zero setup, but opens the visitor's own mail client — lower completion rate)
- A third-party static-friendly form backend (Formspree, Web3Forms, EmailJS, etc.) — keeps the "no backend" rule intact while still landing in an inbox
- A serverless function on the hosting platform (e.g. a Vercel API route) — but this would contradict the "NO API routes" rule in `CLAUDE.md`, so only do this if that rule is being knowingly relaxed for this one form

Suggested fields, mapped to the company's actual service list so submissions arrive pre-qualified:
> Name · Email · Phone · Organization · Service of interest (dropdown: Web Solution, Mail Solution, Server Solution, Apps Development, Portal Development, A.I. Solution, Automation Solution, System Development, Data Center Solution, Software Development, ERP Development, API Development, Corporate Support, Domain Expert Solution — the same 14 from `02-our-solutions.md`) · Message

## Suggested page structure

1. Hero — "Talk to our specialists" or similar, short subtitle.
2. Two-column layout: contact form (left) + office details/map (right) — this mirrors the pattern the Footer already uses.
3. Office cards: Registered Office and Sales Office side by side (currently the Registered Office appears nowhere on the live build — this page is the place to fix that gap).
4. Phone/WhatsApp/Email block — use all 4 phone numbers, with a separate WhatsApp button.
5. Optional: a small "Government project offices" note for BAMIS/BMD if you want that credibility signal — low priority, skip if the page feels crowded.
