"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { SECTORS } from "@/data/sectors"
import { ArrowRight, CheckCircle2, CloudRain, Wind, Leaf, Droplets, Globe, Brain, Server, Users, Smartphone, Satellite, Cloud, TrendingUp, Plane, Cpu, Waves, Activity, Zap, HardDrive, Wrench, Award, Building2, Radio, BarChart3, Map, Database, Network } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  CloudRain, Wind, Leaf, Droplets, Globe, Brain, Server, Users, Smartphone, Satellite, Sprout: Leaf,
  Building2, Radio, BarChart3, Activity, Map, Cloud, TrendingUp, Plane, Cpu, Waves, Zap, HardDrive, Wrench, Award,
  Database, Network,
}

export default function SectorsPage() {
  const [activeSector, setActiveSector] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredSectors = React.useMemo(() => {
    return SECTORS.filter(sector => {
      return searchQuery === "" ||
        sector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sector.description.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Our Sectors</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Intelligence for{" "}
              <span className="text-[rgb(var(--primary))]">Every Domain</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              Explore our specialized expertise across agro-meteorology, hydrology, AI, and enterprise solutions.
              Each sector represents deep domain knowledge built over 18+ years of delivering mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-[rgb(var(--border-subtle))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <input
            type="text"
            placeholder="Search sectors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent"
          />
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredSectors.map((sector) => {
              const Icon = iconMap[sector.icon] || Users
              const isActive = activeSector === sector.id

              return (
                <div
                  key={sector.id}
                  id={sector.id}
                  className={`group bg-white rounded-2xl border transition-all duration-300 ${
                    isActive ? "border-[rgb(var(--primary))] shadow-xl" : "border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))]"
                  }`}
                >
                  {/* Header */}
                  <div className="p-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors"
                      style={{ backgroundColor: `${sector.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: sector.color }} />
                    </div>

                    <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-2">
                      {sector.name}
                    </h3>

                    <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                      {sector.description}
                    </p>

                    {/* Toggle Button */}
                    <button
                      onClick={() => setActiveSector(isActive ? null : sector.id)}
                      className="flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: sector.color }}
                    >
                      {isActive ? "Show Less" : "Learn More"}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90" : ""}`} />
                    </button>
                  </div>

                  {/* Expandable Features */}
                  {isActive && (
                    <div className="px-6 pb-6 border-t border-[rgb(var(--border-subtle))] pt-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="space-y-4">
                        {sector.features.map((feature, index) => {
                          const FeatureIcon = iconMap[feature.icon] || CheckCircle2
                          return (
                            <div key={index} className="flex gap-3">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${sector.color}15` }}>
                                <FeatureIcon className="w-4 h-4" style={{ color: sector.color }} />
                              </div>
                              <div>
                                <h4 className="font-medium text-[rgb(var(--text-primary))] mb-1">{feature.title}</h4>
                                <p className="text-sm text-[rgb(var(--text-muted))]">{feature.desc}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Related Projects Link */}
                      {sector.relatedProjects.length > 0 && (
                        <Link
                          href="/projects"
                          className="inline-flex items-center gap-2 mt-6 text-sm font-medium" style={{ color: sector.color }}
                        >
                          View Related Projects
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas Summary */}
      <section className="py-12 md:py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Expertise Areas
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our 12 strategic areas of specialization
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SECTORS.map((sector, index) => {
              const Icon = iconMap[sector.icon] || Users
              return (
                <div
                  key={sector.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white mb-2" />
                    <span className="text-xs md:text-sm text-white font-medium">{sector.shortName}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Need Expertise in Your Sector?
          </h2>
          <p className="text-lg text-[rgb(var(--text-muted))] mb-8">
            Let's discuss how our domain expertise can help solve your challenges.
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
