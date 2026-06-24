import Image from "next/image"
import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Server, HardDrive, Cloud, Database, Shield, Zap, Globe, CheckCircle2, BarChart3, Clock } from "lucide-react"

export default function ServerSpecialtyPage() {
  const serverTypes = [
    {
      id: "cloud",
      name: "Cloud Server",
      icon: Cloud,
      description: "Scalable cloud infrastructure with on-demand resources. Perfect for growing businesses needing flexibility.",
      features: ["Instant scalability", "Pay-as-you-go pricing", "High availability", "Global CDN"],
      color: "#7370D8",
    },
    {
      id: "vps",
      name: "VPS Server",
      icon: Server,
      description: "Virtual Private Servers with dedicated resources and root access. Ideal for medium-sized applications.",
      features: ["Dedicated RAM/CPU", "Full root access", "Multiple OS options", "Instant provisioning"],
      color: "#534AB7",
    },
    {
      id: "dedicated",
      name: "Dedicated Server",
      icon: HardDrive,
      description: "Physical servers exclusively for your business. Maximum performance and complete control.",
      features: ["100% resource ownership", "Custom hardware specs", "Enhanced security", "24/7 monitoring"],
      color: "#185FA5",
    },
    {
      id: "storage",
      name: "Cloud Storage",
      icon: Database,
      description: "Secure, scalable cloud storage solutions with automated backups and easy access.",
      features: ["Automated backups", "99.9% uptime SLA", "Easy file management", "Multiple redundancy zones"],
      color: "#1D9E75",
    },
  ]

  const infrastructure = [
    { label: "Server Locations", value: "USA, UK, Singapore, Malaysia, Thailand, India" },
    { label: "Infrastructure Scale", value: "Globally distributed network" },
    { label: "Support", value: "24/7 technical support" },
    { label: "Security", value: "SSL certificates included" },
  ]

  const provenStats = [
    { value: "5", label: "Load-balanced servers for BMD", description: "Handling national weather infrastructure" },
    { value: "15M+", label: "Hits/month sustained", description: "During Cyclone Sitrang peak traffic" },
    { value: "100%", label: "Uptime record", description: "Continuous hosting and maintenance" },
    { value: "24/7", label: "Monitoring", description: "Round-the-clock infrastructure oversight" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[rgb(var(--navy))] to-[rgb(var(--primary))] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/server/server-strength-grid.jpg')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white text-[rgb(var(--primary))]">Server & Data Center</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Globally Distributed{" "}
              <span className="text-[rgb(var(--primary-pale))]">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Enterprise-grade server solutions with data centers across USA, UK, Singapore, and more.
              Proven at scale with Bangladesh's national weather infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-white text-[rgb(var(--primary))] hover:bg-white/90">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Our Server Strength
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Choose the right infrastructure for your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverTypes.map((type) => {
              const Icon = type.icon
              return (
                <div
                  key={type.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${type.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: type.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-2">
                    {type.name}
                  </h3>

                  <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                    {type.description}
                  </p>

                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-[rgb(var(--text-subtle))]">
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: type.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16 md:py-24 bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Global Infrastructure
              </h2>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-8">
                Our server infrastructure spans multiple continents, ensuring low latency and high availability
                for your applications. With data centers in USA, UK, Singapore, Malaysia, Thailand, and India,
                we bring your services closer to your users.
              </p>

              <div className="space-y-4">
                {infrastructure.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[rgb(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[rgb(var(--text-primary))]">{item.label}</h3>
                      <p className="text-sm text-[rgb(var(--text-muted))]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--primary-dark))] p-8">
                <Image
                  src="/images/server/server-strength-grid.jpg"
                  alt="Server Infrastructure"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven at Scale */}
      <section className="py-16 md:py-24 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Proven Track Record</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tested at National Scale
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our infrastructure powers Bangladesh's national weather systems, handling millions of hits
              during critical weather events without service failure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {provenStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--primary))] mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-[rgb(var(--primary))] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">BMD Infrastructure Case Study</h3>
                <p className="text-white/80 leading-relaxed">
                  During Cyclone Sitrang, the Bangladesh Meteorological Department platform sustained an average of
                  4.6 million hits per month, peaking at over 15 million hits monthly—all without service failure.
                  Our 5-server load-balanced setup with continuous SSL provisioning and database maintenance ensures
                  mission-critical availability when it matters most.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white/10 flex-shrink-0">
                <Link href="/projects/bmd">Read Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              What's Included
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
              Every server solution comes with comprehensive support
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SSL Certificates", desc: "Secure connections included", icon: Shield },
              { title: "24/7 Monitoring", desc: "Round-the-clock oversight", icon: Clock },
              { title: "Automated Backups", desc: "Daily backups with retention", icon: Database },
              { title: "DDoS Protection", desc: "Built-in security measures", icon: Zap },
              { title: "Easy Management", desc: "User-friendly control panel", icon: BarChart3 },
              { title: "Expert Support", desc: "Technical team assistance", icon: Server },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[rgb(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[rgb(var(--text-primary))] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[rgb(var(--text-muted))]">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Center Solutions */}
      <section className="py-16 md:py-24 bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Data Center Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Enterprise Data Center Infrastructure
              </h2>
              <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-6">
                Beyond individual servers, we provide comprehensive data center solutions including infrastructure
                management, power and cooling systems, network architecture, and disaster recovery planning.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Infrastructure assessment and planning",
                  "Power and cooling optimization",
                  "Network architecture design",
                  "Disaster recovery implementation",
                  "Ongoing maintenance and support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[rgb(var(--text-muted))]">
                    <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--primary-dark))] flex items-center justify-center">
                <Server className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-lg text-[rgb(var(--text-muted))] mb-8">
            Let's discuss the right server solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
