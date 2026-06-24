"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  header?: React.ReactNode
  icon?: React.ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
  colSpan = 1,
  rowSpan = 1,
  children,
  ...props
}: BentoGridItemProps) => {
  // Define span class mappings that Tailwind can detect
  const colSpanClasses: Record<number, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  }

  const rowSpanClasses: Record<number, string> = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
  }

  return (
    <div
      className={cn(
        "group/card relative overflow-hidden rounded-3xl border border-white/[0.2] bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[rgb(var(--primary))]",
        colSpanClasses[colSpan] || "md:col-span-1",
        rowSpanClasses[rowSpan] || "md:row-span-1",
        className
      )}
      {...props}
    >
      {header}
      <div className="flex flex-col gap-2">
        {icon && <div className="mb-2">{icon}</div>}
        {title && (
          <div className="text-xl font-bold text-[rgb(var(--text-primary))] group-hover/card:text-[rgb(var(--primary))] transition-colors">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-[rgb(var(--text-muted))]">{description}</div>
        )}
        {children}
      </div>
    </div>
  )
}

export { BentoGrid, BentoGridItem }
