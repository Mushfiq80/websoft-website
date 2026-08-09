import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight, Clock } from "lucide-react"
import { RESEARCH_PROJECTS } from "@/data/research"

export const metadata = {
  title: "R&D Projects — Web Soft BD",
  description: "Research projects and applied R&D from Web Soft BD across agro-meteorology, hydrology, AI and IoT.",
}

const statusStyles: Record<string, string> = {
  Ongoing: "bg-[rgb(var(--primary-pale))] text-[rgb(var(--primary))]",
  Completed: "bg-[rgb(var(--success-light))] text-[rgb(var(--success))]",
  Planned: "bg-[rgb(var(--surface))] text-[rgb(var(--text-muted))]",
}

export default function ResearchProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">R&amp;D Innovation</Badge>
            <h1 className="mb-4 text-4xl font-bold text-[rgb(var(--text-primary))] md:text-5xl">
              Research <span className="text-[rgb(var(--primary))]">Projects</span>
            </h1>
            <p className="text-lg leading-relaxed text-[rgb(var(--text-muted))]">
              Applied research and prototyping that feeds our platforms — spanning agro-meteorology, hydrology,
              climate, AI and IoT.
            </p>
          </div>
        </div>
      </section>

      {/* Projects / not-yet-published state */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {RESEARCH_PROJECTS.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RESEARCH_PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-[rgb(var(--border-subtle))] bg-white p-6 transition-all hover:border-[rgb(var(--primary))] hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                      {project.area}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status] || statusStyles.Planned}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[rgb(var(--text-primary))]">{project.title}</h3>
                  {project.summary && <p className="text-sm leading-relaxed text-[rgb(var(--text-muted))]">{project.summary}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))] p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgb(var(--primary-pale))]">
                <Clock className="h-7 w-7 text-[rgb(var(--primary))]" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[rgb(var(--text-primary))]">Coming soon</h2>
              <p className="mx-auto max-w-md text-[rgb(var(--text-muted))]">
                Our research projects are not yet published. This page will list our R&amp;D work as it becomes
                available. Meet the team behind it or reach out to collaborate.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
                  <Link href="/rnd/team">
                    Meet the Research Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/contact">Collaborate with us</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
