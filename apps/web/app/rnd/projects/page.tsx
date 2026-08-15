import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ExternalLink, Clock } from "lucide-react"
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
            <div className="space-y-6">
              {RESEARCH_PROJECTS.map((project) => {
                const CardTag = project.url ? "a" : "div"
                return (
                  <CardTag
                    key={project.title}
                    {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group block w-full rounded-2xl border border-[rgb(var(--border-subtle))] bg-white p-6 transition-all hover:border-[rgb(var(--primary))] hover:shadow-lg md:p-8"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                            {project.area}
                          </span>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status] || statusStyles.Planned}`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] transition-colors group-hover:text-[rgb(var(--primary))] md:text-2xl">
                          {project.title}
                        </h3>
                        {project.summary && (
                          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[rgb(var(--text-muted))] md:text-base">
                            {project.summary}
                          </p>
                        )}
                        {project.url && (
                          <span className="mt-4 inline-block text-sm font-medium text-[rgb(var(--text-subtle))]">
                            {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </span>
                        )}
                      </div>
                      {project.url && (
                        <span className="inline-flex flex-shrink-0 items-center gap-2 self-start rounded-full bg-[rgb(var(--primary-pale))] px-4 py-2 text-sm font-medium text-[rgb(var(--primary))] transition-colors group-hover:bg-[rgb(var(--primary))] group-hover:text-white">
                          Visit site
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </CardTag>
                )
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))] p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgb(var(--primary-pale))]">
                <Clock className="h-7 w-7 text-[rgb(var(--primary))]" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[rgb(var(--text-primary))]">Coming soon</h2>
              <p className="mx-auto max-w-md text-[rgb(var(--text-muted))]">
                Our research projects will be listed here as they become available.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
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
