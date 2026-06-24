import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { SITE_CONFIG, CERTIFICATIONS } from "@/data/site"
import { NAVIGATION } from "@/data/navigation"
import { ShinyButton } from "@workspace/ui/components/shiny-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#081428]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <ShinyButton className="!rounded-xl !px-4 !py-2">
                  <Image
                    src="/images/logo/web-soft-logo.png"
                    alt="Web Soft BD"
                    width={225}
                    height={100}
                    className="h-10 w-auto md:h-14"
                    priority
                  />
                </ShinyButton>
              </Link>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              {SITE_CONFIG.company.tagline}
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={SITE_CONFIG.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Solutions
            </h5>
            <ul className="space-y-3">
              {NAVIGATION.footer.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                    <ExternalLink
                      size={10}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h5 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Featured Projects
            </h5>
            <ul className="space-y-3">
              {NAVIGATION.footer.featuredProjects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                    <ExternalLink
                      size={10}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Useful Links
            </h5>
            <ul className="space-y-3">
              {NAVIGATION.footer.usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.external ? link.href : undefined}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink
                        size={10}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Map Section - Mobile Stacked */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h5 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                Contact Us
              </h5>

              {/* Addresses */}
              <div className="mb-8 space-y-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="flex-shrink-0 text-[rgb(var(--primary))]"
                    />
                    <p className="text-xs tracking-wider text-white/50 uppercase">
                      Registered Office
                    </p>
                  </div>
                  <p className="pl-6 text-sm text-white/80">
                    {SITE_CONFIG.contact.registeredOffice}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="flex-shrink-0 text-[rgb(var(--primary))]"
                    />
                    <p className="text-xs tracking-wider text-white/50 uppercase">
                      Sales Office
                    </p>
                  </div>
                  <p className="pl-6 text-sm text-white/80">
                    {SITE_CONFIG.contact.salesOffice}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-2">
                  <Phone
                    size={16}
                    className="flex-shrink-0 text-[rgb(var(--primary))]"
                  />
                  <p className="text-xs tracking-wider text-white/50 uppercase">
                    Phone
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-1 pl-6 sm:grid-cols-1">
                  {SITE_CONFIG.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[\s+]/g, "")}`}
                      className="block text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Mail
                    size={16}
                    className="flex-shrink-0 text-[rgb(var(--primary))]"
                  />
                  <p className="text-xs tracking-wider text-white/50 uppercase">
                    Email
                  </p>
                </div>
                <div className="space-y-1 pl-6">
                  {SITE_CONFIG.contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block overflow-hidden text-sm text-ellipsis text-white/80 transition-colors hover:text-white"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h5 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                Find Us
              </h5>
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1101.2780269798823!2d90.36457804736773!3d23.8219236328892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1003ec171d5%3A0x9b15f733f43e73b9!2sWEB%20SOFT%20BD%20-%20Sales%20Office!5e1!3m2!1sen!2ssg!4v1782258439017!5m2!1sen!2ssg"
                  width="100%"
                  height="250"
                  style={{ border: 0, minHeight: "200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CERTIFICATIONS.slice(0, 6).map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
              >
                <div className="relative h-6 w-6">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
                <span className="hidden sm:inline">
                  {cert.short || cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {SITE_CONFIG.company.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
