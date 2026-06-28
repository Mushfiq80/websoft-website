"use client"

import * as React from "react"
import Image from "next/image"
import { Marquee } from "@workspace/ui/components/marquee"

interface Client {
  name: string
  logo: string
  abbr: string
}

interface ClientMarqueeProps {
  clients: Client[]
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex-shrink-0 mx-4 px-6 py-4 bg-gray-50 border border-[rgb(var(--border-subtle))] rounded-lg hover:border-[rgb(var(--primary))] hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group flex items-center justify-center min-w-[140px] h-[70px]">
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={40}
        className="max-h-[40px] w-auto object-contain transition-all duration-300"
      />
    </div>
  )
}

export function ClientMarquee({ clients }: ClientMarqueeProps) {
  // Split clients into two rows for better visual balance
  const row1Clients = clients.slice(0, Math.ceil(clients.length / 2))
  const row2Clients = clients.slice(Math.ceil(clients.length / 2))

  // Duplicate for seamless infinite scroll
  const row1Content = [...row1Clients, ...row1Clients, ...row1Clients]
  const row2Content = [...row2Clients, ...row2Clients, ...row2Clients]

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* First marquee - left to right */}
      <Marquee pauseOnHover className="[--duration:80s] mb-4">
        {row1Content.map((client, index) => (
          <ClientCard key={`row1-${index}`} client={client} />
        ))}
      </Marquee>

      {/* Second marquee - right to left (reversed) */}
      <Marquee reverse pauseOnHover className="[--duration:90s]">
        {row2Content.map((client, index) => (
          <ClientCard key={`row2-${index}`} client={client} />
        ))}
      </Marquee>
    </div>
  )
}
