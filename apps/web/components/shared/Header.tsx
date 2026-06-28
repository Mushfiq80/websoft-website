"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { Menu, X } from "lucide-react"
import { NAVIGATION } from "@/data/navigation"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-white/70 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Image
              src="/images/logo/web-soft-logo.png"
              alt="Web Soft BD"
              width={525}
              height={400}
              className="h-10 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              asChild
              className={`rounded-full px-6 font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[rgb(var(--primary))] text-white shadow-md hover:bg-[rgb(var(--primary-dark))] hover:shadow-lg"
                  : "bg-[rgb(var(--primary))] text-white shadow-md hover:bg-[rgb(var(--primary-dark))] hover:shadow-lg"
              }`}
            >
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`rounded-lg p-2.5 transition-all duration-300 lg:hidden ${
              scrolled
                ? "text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--primary-faint))]"
                : "text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--primary-faint))]"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`border-t backdrop-blur-xl lg:hidden ${
            scrolled ? "bg-white/95" : "bg-black/90"
          }`}
        >
          <nav className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto p-4 md:p-6">
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Button
              asChild
              className={`mt-4 w-full rounded-full ${
                scrolled
                  ? "bg-[rgb(var(--primary))] text-white"
                  : "bg-white text-[rgb(var(--primary))]"
              }`}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
