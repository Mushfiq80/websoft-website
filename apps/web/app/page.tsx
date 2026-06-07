"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Cloud, Droplet, BarChart3, Brain, Globe, Server, Smartphone, ArrowRight, X, Menu, ChevronDown, Leaf, Satellite, TrendingUp, Map, CloudRain, Wind, Plane, Navigation, Play, Quote, Check, Zap, Waves, MapPin, Phone, Mail } from "lucide-react"

// ============================================
// DATA & CONTENT
// ============================================

const ANNOUNCEMENTS = [
  {
    id: 1,
    text: "WebsoftBD & JICA sign new agreement for Bangladesh flood forecasting system 2026",
    link: "Read More"
  }
]

const CLIENTS = [
  { name: "World Bank", logo: "/images/clients/world_bank-logo.png", abbr: "WB" },
  { name: "JICA", logo: "/images/clients/jica.png", abbr: "JI" },
  { name: "BMD", logo: "/images/clients/bd.gov.png", abbr: "BM" },
  { name: "BWDB", logo: "/images/clients/bd-water.png", abbr: "BW" },
  { name: "DAE", logo: "/images/clients/dae.png", abbr: "DA" },
  { name: "SAARC", logo: "/images/clients/saarc.png", abbr: "SA" },
  { name: "A2i", logo: "/images/clients/a2i_logo_2021.png", abbr: "A2" },
  { name: "Dhaka University", logo: "/images/clients/DU-logo.jpg", abbr: "DU" },
  { name: "FFWC", logo: "/images/clients/bd-water.png", abbr: "FF" },
  { name: "HDF", logo: "/images/clients/hdf-LOGO-WEB.gif", abbr: "HD" },
  { name: "NocBan", logo: "/images/clients/nocban-logo.png", abbr: "NB" },
  { name: "ESDO", logo: "/images/clients/esdo.png", abbr: "ES" },
  { name: "DMGI", logo: "/images/clients/DMGI-LOGO.png", abbr: "DM" },
  { name: "Farming Future", logo: "/images/clients/farming-future.png", abbr: "FF" },
  { name: "Sundharban Agro", logo: "/images/clients/sundharban-agro.png", abbr: "SA" },
  { name: "Aesthetic International", logo: "/images/clients/aesthetic-international-logo.png", abbr: "AI" },
  { name: "Lead Infosys", logo: "/images/clients/lead-infosys-logo.png", abbr: "LI" },
  { name: "Poly Cables", logo: "/images/clients/poly-cables-logo_name.jpg", abbr: "PC" },
  { name: "Softel", logo: "/images/clients/softel.jpeg", abbr: "SF" },
  { name: "Karim Karim", logo: "/images/clients/karim-karim.png", abbr: "KK" },
  { name: "Euro India", logo: "/images/clients/euro-india.jpeg", abbr: "EI" },
  { name: "Sunlife Onetech", logo: "/images/clients/sunlife-onetech_logo.gif", abbr: "SO" },
  { name: "Esteps", logo: "/images/clients/esteps-logo.jpg", abbr: "ET" },
  { name: "Environment", logo: "/images/clients/environment.jpeg", abbr: "EN" },
  { name: "Protirokkha", logo: "/images/clients/protirokkha.png", abbr: "PR" },
  { name: "Archery", logo: "/images/clients/archery.png", abbr: "AC" },
  { name: "UW", logo: "/images/clients/uw.jpg", abbr: "UW" },
  { name: "VT", logo: "/images/clients/vt.jpeg", abbr: "VT" },
  { name: "Shark", logo: "/images/clients/shark.jpeg", abbr: "SH" },
]

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", logo: "/images/certifications/iso.jpg", short: "ISO" },
  { name: "BASIS Member", logo: "/images/certifications/basis_japan.png", short: "BASIS" },
  { name: "CMMI", logo: "/images/certifications/cmmi.png", short: "CMMI" },
  { name: "QMS", logo: "/images/certifications/qms.png", short: "QMS" },
  { name: "QRO", logo: "/images/certifications/qro.png", short: "QRO" },
  { name: "BCS Member", logo: "/images/certifications/bcs_member.png", short: "BCS" },
  { name: "IAF", logo: "/images/certifications/iaf.png", short: "IAF" },
  { name: "Government Seal", logo: "/images/certifications/Government_Seal_of_Bangladesh.png", short: "Govt" },
]

const SECTORS = [
  {
    id: "agro-met",
    name: "Agro-Met",
    icon: Leaf,
    color: "rgb(var(--primary))",
    features: [
      { title: "Crop yield monitoring", desc: "Real-time agro-meteorological data for food security planning", icon: Leaf },
      { title: "Satellite data integration", desc: "Remote sensing for climate and land use analysis", icon: Satellite },
      { title: "Forecast dissemination", desc: "Weather advisory to 1.2M+ farmers via BAMIS", icon: TrendingUp },
    ],
    visual: { label: "BAMIS Dashboard — live", icon: Map }
  },
  {
    id: "hydrology",
    name: "Hydrology",
    icon: Droplet,
    color: "rgb(var(--primary))",
    features: [
      { title: "Flood forecasting", desc: "Real-time flood prediction and early warning systems", icon: Droplet },
      { title: "Salinity modeling", desc: "Coastal water salinity intrusion simulation", icon: Waves },
      { title: "River flow analysis", desc: "3D flood risk mapping and simulation", icon: Waves },
    ],
    visual: { label: "Flood Forecasting System", icon: Waves }
  },
  {
    id: "bigdata",
    name: "Big Data",
    icon: BarChart3,
    color: "rgb(var(--primary))",
    features: [
      { title: "Climate analytics", desc: "Big data processing for climate adaptation", icon: BarChart3 },
      { title: "AI-powered insights", desc: "Machine learning for pattern recognition", icon: Brain },
      { title: "Data visualization", desc: "Interactive dashboards for decision makers", icon: TrendingUp },
    ],
    visual: { label: "Climate Analytics Platform", icon: BarChart3 }
  },
  {
    id: "ai",
    name: "AI",
    icon: Brain,
    color: "rgb(var(--primary))",
    features: [
      { title: "ML models", desc: "Custom machine learning for environmental data", icon: Brain },
      { title: "Predictive analytics", desc: "Weather and crop yield prediction", icon: TrendingUp },
      { title: "Neural networks", desc: "Deep learning for pattern detection", icon: Zap },
    ],
    visual: { label: "AI Prediction Engine", icon: Brain }
  },
  {
    id: "web",
    name: "Web & ERP",
    icon: Globe,
    color: "rgb(var(--primary))",
    features: [
      { title: "Web portals", desc: "Government and enterprise web applications", icon: Globe },
      { title: "Mobile apps", desc: "iOS and Android applications", icon: Smartphone },
      { title: "ERP solutions", desc: "Enterprise resource planning systems", icon: Server },
    ],
    visual: { label: "Enterprise Portal", icon: Globe }
  },
]

const PROJECTS = [
  {
    id: 1,
    tag: "Agro-Met · AI · Govt",
    name: "BAMIS — Bangladesh Agro-Meteorological Information System",
    stat: "Serving 1.2M+ farmers · 64 districts",
    icon: CloudRain,
    color: "rgb(var(--success))",
    bgColor: "rgb(var(--success-light))",
  },
  {
    id: 2,
    tag: "Meteorology · BMD",
    name: "Bangladesh Meteorological Department system",
    stat: "National weather data infrastructure",
    icon: Wind,
    color: "rgb(24, 95, 165)",
    bgColor: "rgb(223, 232, 245)",
  },
  {
    id: 3,
    tag: "Aviation · Data Sharing",
    name: "Aviation observed data sharing system",
    stat: "Real-time aviation weather integration",
    icon: Plane,
    color: "rgb(133, 79, 11)",
    bgColor: "rgb(245, 238, 221)",
  },
  {
    id: 4,
    tag: "Water · Hydrology · GIS",
    name: "Salinity intrusion model for coastal Bangladesh",
    stat: "3D flood risk simulation · BWDB",
    icon: Waves,
    color: "rgb(83, 74, 183)",
    bgColor: "rgb(229, 221, 245)",
  },
]

const SERVICES = [
  {
    id: "agro-met",
    name: "Agro-Met Systems",
    shortName: "Agro-Met",
    description: "Real-time crop advisory and weather intelligence platforms for farmers and food security planning.",
    details: "BAMIS · Satellite Data · Climate Models",
    icon: CloudRain,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    gradient: "from-emerald-600/80 to-green-800/80"
  },
  {
    id: "ai-bigdata",
    name: "AI & Big Data",
    shortName: "AI & Data",
    description: "Machine learning models and large-scale data pipelines for environmental intelligence.",
    details: "ML Models · Analytics · Data Fusion",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-purple-600/80 to-indigo-800/80"
  },
  {
    id: "hydrology",
    name: "Hydrology & Water",
    shortName: "Hydrology",
    description: "Flood forecasting, salinity modeling, and water resource management systems.",
    details: "Flood Forecasting · Salinity · River Flow",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    gradient: "from-blue-600/80 to-cyan-800/80"
  },
  {
    id: "web-dev",
    name: "Web Development",
    shortName: "Web Dev",
    description: "Custom government portals, data dashboards, and public-facing web platforms.",
    details: "Portals · Dashboards · Web Apps",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-violet-600/80 to-purple-800/80"
  },
  {
    id: "app-dev",
    name: "App Development",
    shortName: "App Dev",
    description: "Mobile applications for iOS and Android with API integrations and IoT connectivity.",
    details: "Mobile Apps · APIs · IoT Solutions",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    gradient: "from-rose-600/80 to-pink-800/80"
  },
  {
    id: "erp-server",
    name: "ERP & Server",
    shortName: "ERP",
    description: "Enterprise resource planning systems and server infrastructure management.",
    details: "Infrastructure · Cloud · Server Solutions",
    icon: Server,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    gradient: "from-slate-600/80 to-gray-800/80"
  },
]

const TESTIMONIALS = [
  {
    id: 1,
    org: "World Bank",
    role: "Development Partner",
    logo: "/images/clients/world_bank-logo.png",
    quote: "WebsoftBD delivered a robust agro-met platform that directly supports food security for millions of farmers across Bangladesh.",
  },
  {
    id: 2,
    org: "JICA Bangladesh",
    role: "Project Partner",
    logo: "/images/clients/jica.png",
    quote: "The flood forecasting system developed by WebsoftBD has significantly improved our disaster preparedness capabilities.",
  },
  {
    id: 3,
    org: "DAE",
    role: "Government Partner",
    logo: "/images/clients/dae.png",
    quote: "The BAMIS platform has revolutionized how we disseminate agro-meteorological information to farmers across Bangladesh.",
  },
]

const STATS = [
  { num: "18+", label: "Years operating" },
  { num: "1000+", label: "Projects delivered" },
  { num: "956", label: "Satisfied clients" },
  { num: "ISO", label: "9001:2015 certified" },
]

const PROPOSITIONS = [
  "Bangladesh's only ISO-certified agro-met ICT company",
  "AI-powered data fusion for weather and agriculture",
  "Trusted by World Bank, JICA & Bangladesh Government",
]

// ============================================
// UTILITY HOOKS
// ============================================

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = React.useRef<T>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold])

  return { ref, isInView }
}

function useCounter(end: number, duration = 1500, start = 0) {
  const [count, setCount] = React.useState(start)
  const { ref, isInView } = useInView<HTMLDivElement>(0.5)
  const [hasCounted, setHasCounted] = React.useState(false)

  React.useEffect(() => {
    if (isInView && !hasCounted) {
      setHasCounted(true)
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(start + (end - start) * easeOut))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, hasCounted, end, duration, start])

  return { ref, count }
}

// ============================================
// SECTION COMPONENTS
// ============================================

function AnnouncementBar() {
  const [dismissed, setDismissed] = React.useState(false)
  const announcement = ANNOUNCEMENTS[0]

  if (dismissed || !announcement) return null

  return (
    <div className="bg-[rgb(var(--success-light))] border-b border-[rgb(var(--success))] py-2 px-4 md:px-8 text-center">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-[rgb(var(--success))]">{announcement.text}</span>
        <a href="#" className="text-[rgb(var(--success))] font-medium underline underline-offset-2">
          {announcement.link}
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="ml-4 text-[rgb(var(--success))] hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/web-soft-logo.png"
              alt="Web Soft BD"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg text-[rgb(var(--text-primary))]">
              Web Soft BD
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Sectors", "Solutions", "Projects", "Clients", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium flex items-center gap-1 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                {item}
                {(item === "Sectors" || item === "Solutions") && <ChevronDown size={14} />}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white rounded-full">
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            {["Sectors", "Solutions", "Projects", "Clients", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-[rgb(var(--primary))] text-white rounded-full w-full">
              Request Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const heroRef = React.useRef<HTMLElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas && heroRef.current) {
        canvas.width = heroRef.current.offsetWidth
        canvas.height = heroRef.current.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animated radar rings
    let animationFrame: number
    const rings = [
      { x: 0.3, y: 0.5, radius: 0, maxRadius: 150, speed: 0.3, opacity: 1 },
      { x: 0.7, y: 0.4, radius: 0, maxRadius: 120, speed: 0.4, opacity: 0.8 },
      { x: 0.5, y: 0.6, radius: 0, maxRadius: 100, speed: 0.5, opacity: 0.6 },
    ]

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      rings.forEach((ring) => {
        ring.radius += ring.speed
        if (ring.radius > ring.maxRadius) {
          ring.radius = 0
        }

        const x = canvas.width * ring.x
        const y = canvas.height * ring.y
        const opacity = ring.opacity * (1 - ring.radius / ring.maxRadius)

        ctx.beginPath()
        ctx.arc(x, y, ring.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(115, 112, 216, ${opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      // Animated dots (rainfall)
      for (let i = 0; i < 20; i++) {
        const x = (timestamp / 50 + i * 50) % canvas.width
        const y = (timestamp / 30 + i * 30) % canvas.height
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(29, 158, 117, 0.5)"
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 242, 253) 50%, rgb(240, 251, 247) 100%)",
      }}
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgb(var(--primary-pale))] text-[rgb(var(--primary))] px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up">
          <span>ISO 9001:2015 · BASIS · 18 Years</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Engineering Earth Intelligence
          <br />
          for a <span className="text-[rgb(var(--primary))]">Resilient Future</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Translating complex environmental, meteorological, and hydrological data into intelligent
          enterprise platforms.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white rounded-full px-8">
            Explore Solutions
          </Button>
          <Button variant="outline" className="border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-pale))] rounded-full px-8">
            View Projects
          </Button>
        </div>

        {/* Trust Tags */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {["Agro-Meteorology", "AI & Big Data", "Hydrology & Water", "ERP & ICT"].map((tag) => (
            <div key={tag} className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--success))]" />
              {tag}
            </div>
          ))}
        </div>

        {/* Visual Mockup */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-br from-[rgb(232, 244, 255)] to-[rgb(240, 251, 246))] p-8 h-64 md:h-80 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--success))]" />
              <div className="w-3 h-3 rounded-full bg-[rgb(55, 138, 221))]" />
              <div className="w-3 h-3 rounded-full bg-[rgb(245, 166, 35))]" />
            </div>
            <div className="text-center">
              <Map size={48} className="text-[rgb(var(--primary))] mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium text-[rgb(var(--primary))] bg-white/80 px-4 py-2 rounded-lg">
                Bangladesh agro-met live data visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClientMarquee() {
  const { ref, isInView } = useInView(0.2)

  // Split clients into two rows for better visual balance
  const row1Clients = CLIENTS.slice(0, 15)
  const row2Clients = CLIENTS.slice(15)

  return (
    <section ref={ref} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
        <p className="text-xs md:text-sm font-semibold text-[rgb(var(--text-subtle))] uppercase tracking-wider">
          Trusted by leading organizations
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative">
        {[1, 2].map((row) => {
          const clients = row === 1 ? row1Clients : row2Clients
          const direction = row === 1 ? "normal" : "reverse"
          const duration = row === 1 ? "40s" : "50s"

          return (
            <div
              key={row}
              className={`flex mb-4 animate-marquee ${row === 1 ? "" : "justify-end"}`}
              style={{
                animationDirection: direction,
                animationDuration: duration,
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${row}-${i}`}
                  className="flex-shrink-0 mx-4 px-6 py-4 bg-white border border-[rgb(var(--border-subtle))] rounded-lg hover:border-[rgb(var(--primary))] hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group flex items-center justify-center min-w-[140px] h-[70px]"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="max-h-[40px] w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function SectorsSection() {
  const [activeSector, setActiveSector] = React.useState<typeof SECTORS[0] | undefined>(SECTORS[0])
  const { ref, isInView } = useInView(0.2)
  const [activeFeature, setActiveFeature] = React.useState(0)

  const sector = activeSector

  if (!sector) return null

  return (
    <section id="sectors" ref={ref} className="py-20 bg-[rgb(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Our Strategic Sectors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            Intelligence for <span className="text-[rgb(var(--primary))]">every domain</span>
          </h2>
          <p className="text-[rgb(var(--text-muted))]">Click a sector to explore solutions</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {SECTORS.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSector(s)
                  setActiveFeature(0)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSector?.id === s.id
                    ? "bg-[rgb(var(--primary))] text-white shadow-md"
                    : "bg-white text-[rgb(var(--text-muted))] border border-[rgb(var(--border-default))]"
                }`}
              >
                <Icon size={16} />
                {s.name}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features List */}
          <div className="space-y-3">
            {sector.features?.map((feature, i) => {
              const FeatureIcon = feature.icon
              return (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-5 rounded-lg border transition-all ${
                    activeFeature === i
                      ? "border-l-4 border-l-[rgb(var(--primary))] bg-white shadow-md"
                      : "border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center">
                      <FeatureIcon size={20} className="text-[rgb(var(--primary))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(var(--text-primary))] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[rgb(var(--text-muted))]">{feature.desc}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Visual */}
          <div className="bg-[rgb(var(--primary-pale))] rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              {sector.visual?.icon && <sector.visual.icon size={64} className="text-[rgb(var(--primary))] mx-auto mb-4 opacity-30" />}
              <p className="text-sm font-medium text-[rgb(var(--primary))] bg-white px-4 py-2 rounded-lg inline-block">
                {sector.visual?.label || "Dashboard"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Featured Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            The <span className="text-[rgb(var(--primary))]">Projects</span> We Are Known For
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div
                className="h-32 flex items-center justify-center"
                style={{ backgroundColor: project.bgColor }}
              >
                <project.icon size={36} style={{ color: project.color }} />
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-xs font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
                  {project.tag}
                </p>
                <h3 className="font-semibold text-[rgb(var(--text-primary))] mb-2 line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-sm text-[rgb(var(--text-muted))]">{project.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-16 bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-2">
            By the numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            18 years of building Bangladesh's data infrastructure
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {STATS.map((stat, i) => {
            const numValue = parseInt(stat.num.replace(/\D/g, "")) || 0
            const { ref, count } = useCounter(numValue, 1500)
            return (
              <div key={i} className="text-center" ref={ref}>
                <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--success))]">
                  {stat.num.replace(/[0-9]/g, "")}
                  {count}
                  {stat.num.includes("+") && "+"}
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-2">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Propositions */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROPOSITIONS.map((prop, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <Check className="text-[rgb(var(--success))] flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-white/80">{prop}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudySection() {
  const { ref, isInView } = useInView(0.2)

  const metrics = [
    { num: 1200000, suffix: "+", label: "Farmers receiving advisories" },
    { num: 64, label: "Districts covered nationwide" },
  ]

  return (
    <section ref={ref} className="py-16 bg-[rgb(var(--success-light))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-xs md:text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-2">
          Case study · BAMIS Dashboard
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
          Bangladesh Agro-Meteorological Information System
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Metrics */}
          <div className="space-y-4">
            {metrics.map((metric, i) => {
              const { ref, count } = useCounter(metric.num, 1500)
              return (
                <div key={i} className="bg-white rounded-lg p-5 border border-[rgb(var(--success))]">
                  <div ref={ref} className="text-2xl md:text-3xl font-bold text-[rgb(var(--primary))]">
                    {count.toLocaleString()} {metric.suffix}
                  </div>
                  <div className="text-sm text-[rgb(var(--text-muted))] mt-1">{metric.label}</div>
                </div>
              )
            })}
            <div className="bg-white rounded-lg p-5 border border-[rgb(var(--success))]">
              <div className="text-2xl md:text-3xl font-bold text-[rgb(var(--primary))]">AI</div>
              <div className="text-sm text-[rgb(var(--text-muted))] mt-1">
                National climate adaptation model
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-[rgb(var(--primary-pale))] rounded-xl p-8 flex items-center justify-center min-h-[250px]">
            <div className="text-center">
              <Navigation size={48} className="text-[rgb(var(--primary))] mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium text-[rgb(var(--primary))] bg-white px-4 py-2 rounded-lg inline-block">
                BAMIS Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-[rgb(var(--primary))] font-semibold hover:gap-3 transition-all">
            Read Full Case Study <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const { ref, isInView } = useInView(0.1)
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section ref={ref} className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            Solutions for every <span className="text-[rgb(var(--primary))]">data challenge</span>
          </h2>
        </div>
      </div>

      {/* Services Accordion */}
      <div className="relative h-[500px] md:h-[600px] flex gap-2 px-4 md:px-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon
          const isActive = activeIndex === index
          const isCollapsed = !isActive

          return (
            <div
              key={service.id}
              className="service-panel group relative h-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out"
              style={{
                width: isActive ? 'calc(100% / 6 * 3.5)' : 'calc(100% / 6 * 0.5)',
                flexShrink: 0,
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} transition-opacity duration-500`}
                style={{ opacity: isActive ? 0.3 : 0.5 }}
              />

              {/* Dark overlay for collapsed panels */}
              {isCollapsed && (
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Icon - Always visible, positioned differently based on state */}
                <div className={`transition-all duration-500 ${isActive ? 'mb-6' : 'mb-auto'}`}>
                  <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/20 backdrop-blur-sm
                    flex items-center justify-center transition-all duration-500
                    ${isActive ? 'bg-white/30' : 'bg-white/10'}
                  `}>
                    <Icon
                      size={isActive ? 32 : 24}
                      className="text-white transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Title - Rotated when collapsed */}
                <div className={`
                  transition-all duration-500 origin-left
                  ${isCollapsed ? '-rotate-90 translate-y-8 opacity-80' : 'opacity-100'}
                `}>
                  <h3 className="text-white font-bold text-lg md:text-xl whitespace-nowrap">
                    {service.shortName}
                  </h3>
                </div>

                {/* Expanded Content */}
                <div className={`
                  space-y-4 transition-all duration-500 overflow-hidden
                  ${isActive ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                `}>
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      {service.details}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-white font-semibold mt-2 group/btn">
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Border highlight on active */}
              <div className={`
                absolute inset-0 rounded-2xl border-2 border-[rgb(var(--primary))]
                transition-opacity duration-300 pointer-events-none
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="py-20 bg-[rgb(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            In their own words
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            How leaders use <span className="text-[rgb(var(--primary))]">Web Soft BD</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 border border-[rgb(var(--border-subtle))] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Organization */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-white border border-[rgb(var(--border-subtle))] flex items-center justify-center p-2">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.org}
                    width={60}
                    height={40}
                    className="max-h-[40px] w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[rgb(var(--text-primary))]">{testimonial.org}</h4>
                  <p className="text-sm text-[rgb(var(--text-muted))]">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="text-[rgb(var(--primary))] opacity-20 mb-2" size={24} />
                <p className="text-[rgb(var(--text-muted))] italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="py-16 bg-[rgb(var(--surface))]" id="certifications">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-widest mb-2">
            Global Recognition
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))]">
            Certified Excellence & Strategic Partnerships
          </h2>
          <p className="text-sm text-[rgb(var(--text-muted))] mt-3 max-w-2xl mx-auto">
            Our commitment to quality standards and international partnerships enables us to deliver
            world-class solutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="group relative flex flex-col items-center"
            >
              {/* Logo container */}
              <div className="relative bg-white rounded-xl p-6 border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))]/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={100}
                  height={60}
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Label */}
              <span className="text-xs text-[rgb(var(--text-muted))] mt-3 font-medium">
                {cert.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-20 bg-[rgb(var(--navy))]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to transform your data into intelligence?
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Talk to our specialists about your meteorological, agricultural, or water management
          challenge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white rounded-full px-8">
            Request Consultation
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#081428]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/web-soft-logo.png"
                alt="Web Soft BD"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-semibold text-white text-lg">Web Soft BD</span>
            </div>
            <p className="text-sm text-white/60 mb-6 max-w-sm">
              Engineering Earth Intelligence for a Resilient Future. Translating complex environmental,
              meteorological, and hydrological data into intelligent enterprise platforms.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-4">
              Solutions
            </h5>
            <ul className="space-y-2">
              {["Agro-Met Systems", "AI & Big Data", "Hydrology & Water", "Web Development", "App Development", "ERP & Server"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h5 className="text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-4">
              Featured Projects
            </h5>
            <ul className="space-y-2">
              {["BAMIS", "BMD Systems", "Flood Forecasting", "Aviation Data", "Salinity Model", "AI Development"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-[rgb(var(--primary))] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-4">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>10th Floor, Shah Ali Tower, 33 Kawran Bazar, Dhaka-1215</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+8801716983511</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@websoftbd.net</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Useful Links */}
        <div className="py-6 border-t border-white/10 mb-6">
          <h6 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
            Useful Links
          </h6>
          <div className="flex flex-wrap gap-4 text-xs">
            {["World Bank", "JICA", "BAMIS", "BMD", "FFWC", "BWDB", "SAFOAM", "INSAM"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 hover:text-[rgb(var(--primary))] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Web Soft BD. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function Page() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ClientMarquee />
      <SectorsSection />
      <ProjectsSection />
      <StatsSection />
      <CaseStudySection />
      <ServicesSection />
      <TestimonialsSection />
      <CertificationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
