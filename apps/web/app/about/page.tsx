import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import Link from "next/link"
import { SITE_CONFIG, CERTIFICATIONS } from "@/data/site"
import { MapPin, Phone, Mail, Globe, Award, Users, Target, Zap, CheckCircle2, Calendar, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2008", title: "Founded", description: "Web Soft BD established with a vision to deliver quality IT solutions" },
    { year: "2012", title: "First Major Project", description: "BAMIS platform development with World Bank funding" },
    { year: "2015", title: "ISO 9001:2015", description: "Achieved international quality management certification" },
    { year: "2018", title: "1000+ Projects", description: "Crossed milestone of 1000+ successful project deliveries" },
    { year: "2020", title: "AI & Big Data", description: "Expanded into AI-powered solutions and data analytics" },
    { year: "2024", title: "2000+ Projects", description: "Celebrating delivery of 2000+ projects across sectors" },
  ]

  const values = [
    { icon: Target, title: "Mission-Driven", description: "Focused on solving real-world challenges in climate, agriculture, and water management" },
    { icon: Users, title: "Domain Expertise", description: "Deep specialist knowledge in agro-met, hydrology, and climate science" },
    { icon: Award, title: "Quality First", description: "ISO-certified processes ensuring reliable, scalable solutions" },
    { icon: Zap, title: "Innovation", description: "AI-powered platforms and cutting-edge data analytics" },
  ]

  const capabilities = [
    "Agro-Meteorological Systems",
    "Meteorological Data Platforms",
    "Hydrology & Water Management",
    "AI & Big Data Analytics",
    "Web & Mobile Development",
    "Enterprise ERP Solutions",
    "Server & Data Center Infrastructure",
    "Government Portal Development",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Engineering Earth Intelligence for a{" "}
              <span className="text-[rgb(var(--primary))]">Resilient Future</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              Since {SITE_CONFIG.company.founded}, Web Soft BD has been at the forefront of transforming complex environmental,
              meteorological, and hydrological data into intelligent enterprise platforms for government and private sector clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SITE_CONFIG.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                <div className="text-xs text-white/60 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Our Story
              </h2>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-6">
                Web Soft BD began its journey with a clear mission: to bridge the gap between complex environmental data
                and actionable intelligence. Over the years, we've evolved from a promising IT startup into Bangladesh's
                leading specialist in agro-meteorological, hydrological, and climate technology solutions.
              </p>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-6">
                Our expertise spans across government mission-critical systems, research platforms, and enterprise solutions.
                We've had the privilege of working with prestigious organizations including the World Bank, JICA, Bangladesh
                Meteorological Department, and numerous government agencies.
              </p>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed">
                What sets us apart is our deep domain expertise. We don't just build software—we understand the science,
                the challenges, and the real-world impact of the solutions we deliver.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--primary-dark))] p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Our Values
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--primary-pale))] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[rgb(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">{value.title}</h3>
                  <p className="text-sm text-[rgb(var(--text-muted))]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Our Capabilities
              </h2>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-8">
                We deliver end-to-end solutions across the entire technology stack—from data collection and IoT sensors
                to cloud infrastructure, AI analytics, and user-facing applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0" />
                    <span className="text-sm text-[rgb(var(--text-muted))]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[rgb(var(--surface))] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[rgb(var(--primary))] mt-1" />
                  <div>
                    <div className="font-medium text-[rgb(var(--text-primary))]">Type of Company</div>
                    <div className="text-sm text-[rgb(var(--text-muted))]">Proprietorship Firm</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[rgb(var(--primary))] mt-1" />
                  <div>
                    <div className="font-medium text-[rgb(var(--text-primary))]">Headquarters</div>
                    <div className="text-sm text-[rgb(var(--text-muted))]">Dhaka, Bangladesh</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[rgb(var(--primary))] mt-1" />
                  <div>
                    <div className="font-medium text-[rgb(var(--text-primary))]">Global Presence</div>
                    <div className="text-sm text-[rgb(var(--text-muted))]">USA, UK, Singapore, Malaysia, Thailand, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[rgb(var(--primary))] mt-1" />
                  <div>
                    <div className="font-medium text-[rgb(var(--text-primary))]">Team Size</div>
                    <div className="text-sm text-[rgb(var(--text-muted))]">Expert team across domains</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Our Journey
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm font-bold text-[rgb(var(--primary))] mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">{milestone.title}</h3>
                <p className="text-sm text-[rgb(var(--text-muted))]">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Internationally recognized certifications and professional affiliations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="text-xs md:text-sm text-center text-[rgb(var(--text-muted))] font-medium">{cert.short || cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[rgb(var(--navy))]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's discuss how our expertise can help transform your data into intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Building({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 18h.01" />
    </svg>
  )
}
