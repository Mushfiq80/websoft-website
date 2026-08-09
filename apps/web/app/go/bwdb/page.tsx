"use client"

import * as React from "react"

// Primary BWDB HIFM portal. If it cannot be reached, users are
// automatically forwarded to the Web Soft BD mirror.
const PRIMARY = "https://hifm.bwdb.gov.bd/bwdb"
const FALLBACK = "https://hifm.websoftbd.net/bwdb/"

export default function BwdbRedirect() {
  React.useEffect(() => {
    let settled = false
    const go = (url: string) => {
      if (settled) return
      settled = true
      window.location.replace(url)
    }

    // If the reachability check hasn't resolved quickly, use the fallback.
    const timer = setTimeout(() => go(FALLBACK), 4000)

    // A no-cors request resolves if the host is reachable and rejects on a
    // network/DNS failure — a good-enough signal for "failed to load".
    fetch(PRIMARY, { mode: "no-cors", cache: "no-store" })
      .then(() => {
        clearTimeout(timer)
        go(PRIMARY)
      })
      .catch(() => {
        clearTimeout(timer)
        go(FALLBACK)
      })

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[rgb(var(--primary))] border-t-transparent" />
      <p className="text-[rgb(var(--text-muted))]">
        Opening the BWDB HIFM portal…
      </p>
      <p className="text-sm text-[rgb(var(--text-subtle))]">
        If it does not open,{" "}
        <a href={FALLBACK} className="text-[rgb(var(--primary))] underline">
          continue here
        </a>
        .
      </p>
    </div>
  )
}
