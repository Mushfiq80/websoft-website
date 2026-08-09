import Image from "next/image"
import { Badge } from "@workspace/ui/components/badge"
import { CLIENTS, TESTIMONIALS } from "@/data/clients"
import { Marquee } from "@workspace/ui/components/marquee"
import { Quote } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Our Clients</Badge>
            <h1 className="mb-6 text-4xl font-bold text-[rgb(var(--text-primary))] md:text-5xl lg:text-6xl">
              Trusted by <span className="text-[rgb(var(--primary))]">Leading Organizations</span>
            </h1>
            <p className="text-lg leading-relaxed text-[rgb(var(--text-muted))] md:text-xl">
              From multilateral organizations like the World Bank and JICA to government agencies and private
              enterprises, we&apos;ve had the privilege of serving 950+ clients across Bangladesh and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — All Clients */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))] md:text-sm">
              Our Clients
            </p>
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] md:text-4xl">
              Organizations We&apos;ve Served
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--text-muted))]">
              Government, multilateral, NGO and private-sector organizations that trust Web Soft BD.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                title={client.name}
                className="flex aspect-[3/2] items-center justify-center rounded-xl border border-[rgb(var(--border-subtle))] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--primary))] hover:shadow-md"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Client Reviews (auto-playing swiper) */}
      <section className="overflow-hidden bg-[rgb(var(--surface))] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))] md:text-sm">
              In Their Own Words
            </p>
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--text-muted))]">
              A snapshot of the work we&apos;ve delivered for our clients.
            </p>
          </div>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:50s] [--gap:1.5rem]">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[320px] shrink-0 rounded-2xl border border-[rgb(var(--border-subtle))] bg-white p-6 shadow-sm md:w-[380px] md:p-8"
              >
                <Quote className="mb-4 h-9 w-9 text-[rgb(var(--primary-pale))]" />

                <p className="mb-6 text-sm leading-relaxed text-[rgb(var(--text-muted))] md:text-base">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  {testimonial.orgLogo && (
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={testimonial.orgLogo}
                        alt={testimonial.org}
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="truncate font-medium text-[rgb(var(--text-primary))]">{testimonial.org}</div>
                    {testimonial.project && (
                      <div className="text-xs text-[rgb(var(--text-subtle))]">{testimonial.project}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[rgb(var(--surface))] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[rgb(var(--surface))] to-transparent" />
        </div>
      </section>
    </div>
  )
}
