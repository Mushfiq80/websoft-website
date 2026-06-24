"use client"

import * as React from "react"
import { X } from "lucide-react"

const ANNOUNCEMENTS = [
  {
    id: 1,
    text: "WebsoftBD & JICA sign new agreement for Bangladesh flood forecasting system 2026",
    link: "Read More"
  }
]

export function AnnouncementBar() {
  const [dismissed, setDismissed] = React.useState(false)
  const announcement = ANNOUNCEMENTS[0]

  if (dismissed || !announcement) return null

  return (
    <div className="bg-[rgb(var(--success-light))] border-b border-[rgb(var(--success))] py-2 px-4 md:px-8 text-center">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-[rgb(var(--success))]">{announcement.text}</span>
        <a href="#" className="text-[rgb(var(--success))] font-medium underline underline-offset-2">
          {announcement.link}
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="ml-4 text-[rgb(var(--success))] hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
