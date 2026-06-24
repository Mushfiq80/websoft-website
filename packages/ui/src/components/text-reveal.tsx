"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
}

const TextReveal = ({ text, className }: TextRevealProps) => {
  const words = text.split(" ")

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text leading-snug tracking-wide">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block animate-in slide-in-from-bottom fade-in duration-500"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
            >
              {word}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { TextReveal }
