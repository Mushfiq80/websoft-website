import Image from "next/image"
import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { CLIENTS, TESTIMONIALS, CLIENT_CHALLENGES, ANCHOR_CLIENTS } from "@/data/clients"
import { Quote, Building2, ArrowRight, CheckCircle2, Users, Zap } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Our Clients</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Trusted by{" "}
              <span className="text-[rgb(var(--primary))]">Leading Organizations</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              From multilateral organizations like the World Bank and JICA to government agencies and private enterprises,
              we've had the privilege of serving 2000+ clients across Bangladesh and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Anchor Clients */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Trusted by the Best
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Our anchor clients include multilateral organizations, government agencies, and leading enterprises
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {ANCHOR_CLIENTS.slice(0, 10).map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[rgb(var(--border-subtle))] flex items-center justify-center aspect-square hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Challenges - Case Studies */}
      <section className="py-12 md:py-16 bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Challenges We've Solved
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Real problems, real solutions, real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CLIENT_CHALLENGES.map((challenge) => (
              <div
                key={challenge.client}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[rgb(var(--border-subtle))] hover:shadow-md transition-shadow"
              >
                {/* Client Header */}
                <div className="flex items-center gap-4 mb-6">
                  {challenge.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={challenge.logo}
                        alt={challenge.client}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[rgb(var(--text-primary))] truncate">{challenge.client}</h3>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <h4 className="font-medium text-[rgb(var(--text-primary))]">The Challenge</h4>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-muted))] pl-7">{challenge.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[rgb(var(--primary))]" />
                    <h4 className="font-medium text-[rgb(var(--text-primary))]">Our Solution</h4>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-muted))] pl-7">{challenge.solution}</p>
                </div>

                {/* Result */}
                <div className="flex items-start gap-2 p-4 bg-[rgb(var(--primary-faint))] rounded-lg mb-6">
                  <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[rgb(var(--text-primary))] font-medium">{challenge.result}</p>
                </div>

                {/* Link */}
                {challenge.link && (
                  <Link
                    href={challenge.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--primary))] hover:underline"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              In Their Own Words
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[rgb(var(--border-subtle))] hover:shadow-md transition-shadow"
              >
                <Quote className="w-10 h-10 text-[rgb(var(--primary-pale))] mb-4" />

                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  {testimonial.orgLogo && (
                    <div className="relative w-12 h-12 flex-shrink-0">
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
                    <div className="font-medium text-[rgb(var(--text-primary))]">{testimonial.personName}</div>
                    <div className="text-sm text-[rgb(var(--text-subtle))]">{testimonial.personRole}</div>
                    <div className="text-xs text-[rgb(var(--primary))] mt-1">{testimonial.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients Logo Grid */}
      <section className="py-12 md:py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Complete Client Roster
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Government, multilateral, NGO, and private sector organizations we've served
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                className="bg-gray-200 rounded-lg p-3 flex items-center justify-center aspect-square hover:bg-gray-300 transition-colors"
                title={client.name}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 12vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-[rgb(var(--text-muted))] mb-8">
            Let's discuss how we can help transform your challenges into opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/projects">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
