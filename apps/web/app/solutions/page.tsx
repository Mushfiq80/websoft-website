import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { SOLUTION_CLUSTERS, SOLUTIONS } from "@/data/solutions"
import { ArrowRight, CheckCircle2, Globe, Brain, Server, Users, Database, Mail, Smartphone, Cpu, Network, FileText, Building2, Zap, Shield, HardDrive, LayoutDashboard, Wallet, Wrench, CloudRain, Wind, Cloud, TrendingUp, Leaf, Satellite, Droplets, Map } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Globe, Brain, Server, Users, Database, Mail, Smartphone, Cpu, Network, FileText, Building2, Zap, Shield, HardDrive, LayoutDashboard, Wallet, Wrench, Award: CheckCircle2,
}

// Sector expertise we specialise in — always shown first.
const SPECIALIST_SECTORS = [
  { name: "Agro-Meteorology", desc: "Agro-met platforms, advisories and GIS for farming and food security.", icon: CloudRain },
  { name: "Meteorology", desc: "Weather portals, forecasting and data systems for national services.", icon: Wind },
  { name: "Weather", desc: "Current-weather, forecasting and warning dissemination.", icon: Cloud },
  { name: "Climate", desc: "Climate analytics and adaptation-support data products.", icon: TrendingUp },
  { name: "Agricultural", desc: "Crop & pest management, soil monitoring and agri e-commerce.", icon: Leaf },
  { name: "Crop", desc: "Crop weather calendars, monitoring and management systems.", icon: Satellite },
  { name: "Water & Hydrology", desc: "Flood, drought and salinity early-warning with GIS (HIFM).", icon: Droplets },
  { name: "Environment", desc: "Environmental monitoring and earth-observation platforms.", icon: Globe },
  { name: "Forestry", desc: "Forestry software supporting sustainable resource management.", icon: Leaf },
  { name: "GIS & Remote Sensing", desc: "Mapping and satellite products (NDVI, VHI, VCI).", icon: Map },
  { name: "AI & Big Data", desc: "Applied ML and large-scale environmental data pipelines.", icon: Brain },
  { name: "Research & Development", desc: "Applied R&D, IoT prototyping and research data platforms.", icon: Cpu },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Our Solutions</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Solutions for Every{" "}
              <span className="text-[rgb(var(--primary))]">Data Challenge</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              From web platforms to AI-powered analytics, we deliver end-to-end solutions tailored to your needs.
              Explore our 20 core service offerings across four strategic clusters.
            </p>
          </div>
        </div>
      </section>

      {/* Specialist Sectors — our unique expertise, shown first */}
      <section className="py-12 md:py-16 border-b border-[rgb(var(--border-subtle))]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))] md:text-sm">
              Where We Lead
            </p>
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] md:text-4xl">
              Specialist Sector Solutions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--text-muted))]">
              Beyond traditional software, we are a sector-focused solutions company — a key player in
              climate, agro-meteorology, agriculture, weather, crop, forestry and the wider environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALIST_SECTORS.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.name}
                  className="rounded-2xl border border-[rgb(var(--border-subtle))] bg-white p-6 transition-all duration-300 hover:border-[rgb(var(--primary))] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--primary-pale))]">
                    <Icon className="h-6 w-6 text-[rgb(var(--primary))]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[rgb(var(--text-primary))]">{sector.name}</h3>
                  <p className="text-sm leading-relaxed text-[rgb(var(--text-muted))]">{sector.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution Clusters */}
      {SOLUTION_CLUSTERS.map((cluster, clusterIndex) => (
        <section
          key={cluster.id}
          className={`py-12 md:py-16 ${clusterIndex % 2 === 1 ? "bg-[rgb(var(--surface))]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Cluster Header */}
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${cluster.color}15` }}
              >
                {(() => {
                  const Icon = iconMap[cluster.icon] || CheckCircle2
                  return <Icon className="w-8 h-8" style={{ color: cluster.color }} />
                })()}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(var(--text-primary))]">
                  {cluster.name}
                </h2>
                <p className="text-[rgb(var(--text-muted))] mt-1">{cluster.description}</p>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {cluster.solutions.map((solution) => {
                const Icon = iconMap[solution.icon] || CheckCircle2
                return (
                  <div
                    key={solution.id}
                    className="bg-white rounded-2xl p-6 border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-3">
                      {solution.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Proof Point */}
                    {solution.proofPoint && (
                      <div className="flex items-start gap-2 mt-4 pt-4 border-t border-[rgb(var(--border-subtle))]">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(var(--primary))] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-[rgb(var(--text-subtle))]">{solution.proofPoint}</p>
                      </div>
                    )}

                    {/* Project Link */}
                    {solution.projectLink && (
                      <Link
                        href={solution.projectLink}
                        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[rgb(var(--primary))] hover:underline"
                      >
                        View Project
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* All Solutions Overview */}
      <section className="py-12 md:py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              All 20 services we offer, organized by capability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOLUTIONS.map((solution) => {
              const Icon = iconMap[solution.icon] || CheckCircle2
              return (
                <div
                  key={solution.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white font-medium">{solution.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Why Web Soft BD?
            </h2>
            <p className="text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              What sets us apart from generic IT vendors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Domain Expertise",
                description: "Deep specialist knowledge in agro-met, hydrology, and climate science that generic vendors lack.",
                icon: "Users",
              },
              {
                title: "Proven Track Record",
                description: "1000+ projects delivered for World Bank, JICA, and government agencies since 2008.",
                icon: "Award",
              },
              {
                title: "End-to-End Solutions",
                description: "From data collection and IoT to cloud infrastructure, AI analytics, and user applications.",
                icon: "Zap",
              },
            ].map((item, index) => {
              const Icon = iconMap[item.icon] || CheckCircle2
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-[rgb(var(--border-subtle))]">
                  <div className="w-14 h-14 rounded-xl bg-[rgb(var(--primary-pale))] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[rgb(var(--primary))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-3">{item.title}</h3>
                  <p className="text-[rgb(var(--text-muted))] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[rgb(var(--surface))]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Ready to Solve Your Challenge?
          </h2>
          <p className="text-lg text-[rgb(var(--text-muted))] mb-8">
            Tell us about your project and let's find the right solution together.
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
