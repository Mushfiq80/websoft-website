"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { PROJECTS, PROJECT_SECTORS } from "@/data/projects"
import { Search, Filter, ArrowRight, ExternalLink, CloudRain, Wind, Leaf, Droplets, Globe, Brain, Server, Users, Smartphone, Database } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "Agro-Met": CloudRain,
  "Meteorology": Wind,
  "Agriculture": Leaf,
  "Hydrology": Droplets,
  "Web/App": Globe,
  "AI": Brain,
  "Server": Server,
  "Research": Users,
  "Aviation": Smartphone,
  "IoT": Smartphone,
  "ERP": Database,
}

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")

  const filteredProjects = React.useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSector = selectedSector === "all" ||
        project.sector === selectedSector ||
        project.tags.some(tag => selectedSector === tag)
      const matchesSearch = searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesSector && matchesSearch
    })
  }, [selectedSector, searchQuery])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Our Projects</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Solutions We're{" "}
              <span className="text-[rgb(var(--primary))]">Known For</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              Explore our portfolio of 1000+ projects across agro-meteorology, hydrology, AI, and enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-[rgb(var(--border-subtle))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--text-subtle)]" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[rgb(var(--border-subtle))] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
              />
            </div>

            {/* Sector Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSector("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSector === "all"
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-[rgb(var(--primary-faint))] text-[rgb(var(--text-muted))]"
                }`}
              >
                All Projects
              </button>
              {PROJECT_SECTORS.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSector === sector
                      ? "bg-[rgb(var(--primary))] text-white"
                      : "bg-[rgb(var(--primary-faint))] text-[rgb(var(--text-muted))]"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="hidden lg:flex items-center gap-2 bg-[rgb(var(--primary-faint))] rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-white shadow-sm" : "text-[rgb(var(--text-muted))]"
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-white shadow-sm" : "text-[rgb(var(--text-muted))]"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-[rgb(var(--text-subtle))]">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[rgb(var(--text-muted))] mb-4">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedSector("all")
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[rgb(var(--navy))]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const Icon = iconMap[project.sector] || Globe

  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          {project.featured && (
            <Badge className="absolute top-3 left-3 bg-[rgb(var(--primary))] text-white">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Sector Icon */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center">
              <Icon className="w-4 h-4 text-[rgb(var(--primary))]" />
            </div>
            <span className="text-xs text-[rgb(var(--text-subtle))]">{project.sector}</span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-[rgb(var(--text-primary))] mb-2 line-clamp-2 group-hover:text-[rgb(var(--primary))] transition-colors">
            {project.name}
          </h3>

          {/* Client */}
          <p className="text-sm text-[rgb(var(--text-subtle))] mb-3">{project.client}</p>

          {/* Impact */}
          <p className="text-sm text-[rgb(var(--text-muted))] line-clamp-2 mb-4 flex-1">
            {project.impact}
          </p>

          {/* Link */}
          <div className="flex items-center text-[rgb(var(--primary))] text-sm font-medium">
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function ProjectListItem({ project }: { project: typeof PROJECTS[number] }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="bg-white rounded-xl p-4 md:p-6 border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Image */}
          <div className="relative w-full md:w-48 aspect-video md:aspect-square rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.featured && (
                <Badge className="bg-[rgb(var(--primary))] text-white">Featured</Badge>
              )}
              {project.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-[rgb(var(--text-primary))] mb-2 group-hover:text-[rgb(var(--primary))] transition-colors">
              {project.name}
            </h3>

            <p className="text-sm text-[rgb(var(--text-subtle))] mb-3">{project.client}</p>

            <p className="text-sm text-[rgb(var(--text-muted))] line-clamp-2 mb-4">
              {project.impact}
            </p>

            <div className="flex items-center text-[rgb(var(--primary))] text-sm font-medium">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
