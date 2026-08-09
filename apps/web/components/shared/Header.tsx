"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { Menu, X, ChevronDown } from "lucide-react"
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
            {NAVIGATION.main.map((item) => {
              const linkClass =
                "relative rounded-lg px-3 py-2 text-sm font-medium text-[rgb(var(--text-muted))] transition-all duration-300 hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"

              if (item.children) {
                return (
                  <div key={item.name} className="group relative">
                    <button className={`${linkClass} inline-flex items-center gap-1`}>
                      {item.name}
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* pt-2 keeps the hover area contiguous with the trigger */}
                    <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="min-w-[180px] rounded-xl border border-[rgb(var(--border-subtle))] bg-white p-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-[rgb(var(--text-muted))] transition-colors hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              if (item.external) {
                return (
                  <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {item.name}
                  </a>
                )
              }

              return (
                <Link key={item.name} href={item.href} className={linkClass}>
                  {item.name}
                </Link>
              )
            })}
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
            {NAVIGATION.main.map((item) => {
              const itemClass = `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--primary-faint))] hover:text-[rgb(var(--primary))]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`

              if (item.children) {
                return (
                  <div key={item.name}>
                    <p className={`px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider ${scrolled ? "text-[rgb(var(--text-subtle))]" : "text-white/50"}`}>
                      {item.name}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`${itemClass} pl-6`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )
              }

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={itemClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={itemClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}

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
