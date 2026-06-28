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
        <div className="relative flex items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src={certification.logo}
              alt={certification.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 96px, 128px"
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
        <Marquee pauseOnHover className="[--duration:80s]">
          {marqueeContent.map((cert, index) => (
            <CertificationCard key={`left-${index}`} certification={cert} />
          ))}
        </Marquee>

        {/* Second marquee - right to left (reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:90s]">
          {marqueeContent.map((cert, index) => (
            <CertificationCard key={`right-${index}`} certification={cert} />
          ))}
        </Marquee>
      </TooltipProvider>
    </div>
  )
}
