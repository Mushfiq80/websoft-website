"use client"

import * as React from "react"
import Image from "next/image"
import { Marquee } from "@workspace/ui/components/marquee"
import { HyperText } from "@workspace/ui/components/hyper-text"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { CERTIFICATIONS } from "@/data/site"

function CertificationCard({ certification }: { certification: typeof CERTIFICATIONS[number] }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* Fixed width keeps every logo on the same line with even spacing,
            regardless of how wide or narrow the logo artwork is. */}
        <div className="flex w-40 shrink-0 items-center justify-center p-4 md:w-48">
          <div className="relative h-20 w-full md:h-24">
            <Image
              src={certification.logo}
              alt={certification.name}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{certification.name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function CertificationMarquee() {
  // Duplicate certifications for seamless infinite scroll
  const marqueeContent = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS]

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[rgb(var(--text-primary))]">
          <HyperText className="!text-2xl !md:text-3xl !font-bold !text-[rgb(var(--text-primary))]">
            Certifications & Accreditations
          </HyperText>
        </h2>
        <p className="text-center text-[rgb(var(--text-muted))] mt-2">
          Internationally recognized quality standards and professional memberships
        </p>
      </div>

      <TooltipProvider>
        {/* First marquee - left to right */}
        <Marquee pauseOnHover className="mb-6 [--duration:80s] [--gap:2rem]">
          {marqueeContent.map((cert, index) => (
            <CertificationCard key={`left-${index}`} certification={cert} />
          ))}
        </Marquee>

        {/* Second marquee - right to left (reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:90s] [--gap:2rem]">
          {marqueeContent.map((cert, index) => (
            <CertificationCard key={`right-${index}`} certification={cert} />
          ))}
        </Marquee>
      </TooltipProvider>
    </div>
  )
}
