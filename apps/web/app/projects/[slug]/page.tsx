import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { BentoGrid, BentoGridItem } from "@workspace/ui/components/bento-grid"
import { PROJECTS, getProjectBySlug, getEngagements } from "@/data/projects"
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Users, Calendar, Building2, TrendingUp } from "lucide-react"

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = PROJECTS
    .filter(p => p.id !== project.id && p.sector === project.sector)
    .slice(0, 3)

  const engagements = getEngagements(project.id)

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-[rgb(var(--surface))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.featured && (
                  <Badge className="bg-[rgb(var(--primary))] text-white">Featured Project</Badge>
                )}
                <Badge
                  className="border-[rgb(var(--accent-color))] text-[rgb(var(--accent-color)))]"
                  style={{
                    borderColor: project.accentColor,
                    color: project.accentColor
                  }}
                >
                  {project.sector}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
                {project.name}
              </h1>

              <p className="text-base md:text-lg text-[rgb(var(--text-muted))] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-[rgb(var(--border-subtle))]">
                {project.clientLogo && (
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={project.clientLogo}
                      alt={project.client}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-xs text-[rgb(var(--text-subtle))] uppercase tracking-wider mb-1">Client</div>
                  <div className="font-medium text-[rgb(var(--text-primary))]">{project.client}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-[rgb(var(--primary-pale))] text-[rgb(var(--primary))]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Live URL */}
              {project.liveUrl && (
                <Button asChild className="rounded-full mb-6">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit Live Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl lg:col-span-1">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {project.stats && project.stats.length > 0 && (
        <section className="py-8 md:py-12 bg-[rgb(var(--navy))]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {project.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(var(--primary))] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BentoGrid>
            {/* Challenge */}
            {project.challenge && (
              <BentoGridItem
                colSpan={1}
                title="The Challenge"
                icon={<Users className="w-8 h-8 text-orange-500" />}
                className="bg-orange-50/50"
              >
                <p className="text-[rgb(var(--text-muted))] leading-relaxed">{project.challenge}</p>
              </BentoGridItem>
            )}

            {/* Solution */}
            {project.solution && (
              <BentoGridItem
                colSpan={1}
                title="Our Solution"
                icon={<CheckCircle2 className="w-8 h-8 text-green-600" />}
                className="bg-green-50/50"
              >
                <p className="text-[rgb(var(--text-muted))] leading-relaxed">{project.solution}</p>
              </BentoGridItem>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <BentoGridItem
                colSpan={project.challenge && project.solution ? 2 : 1}
                rowSpan={project.challenge && project.solution ? 2 : 1}
                title="Results & Impact"
                icon={<TrendingUp className="w-8 h-8 text-[rgb(var(--primary))]" />}
                className="bg-[rgb(var(--primary-faint))]"
                header={
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[rgb(var(--text-primary))]">{result}</p>
                      </div>
                    ))}
                  </div>
                }
              >
                <div className="flex flex-col gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[rgb(var(--text-primary))]">{result}</p>
                    </div>
                  ))}
                </div>
              </BentoGridItem>
            )}
          </BentoGrid>
        </div>
      </section>

      {/* Work & Engagements — successive contracts with live links */}
      {engagements.length > 0 && (
        <section className="py-12 md:py-16 bg-[rgb(var(--surface))]">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[rgb(var(--primary))] mb-2">
                Work &amp; Engagements
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(var(--text-primary))]">
                Delivered, upgraded &amp; maintained over multiple contracts
              </h2>
              <p className="text-[rgb(var(--text-muted))] mt-2">
                A record of the successive engagements we delivered for this client — with live links.
              </p>
            </div>

            <div className="space-y-4">
              {engagements.map((eng, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 md:p-6 border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-[rgb(var(--text-primary))]">{eng.title}</h3>
                      {eng.description && (
                        <p className="mt-1.5 text-sm leading-relaxed text-[rgb(var(--text-muted))]">{eng.description}</p>
                      )}
                      {eng.funder && (
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-[rgb(var(--text-subtle))]">
                          <Building2 className="w-3.5 h-3.5" />
                          {eng.funder}
                        </div>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-[rgb(var(--primary-pale))] px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))] whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" />
                      {eng.period}
                    </span>
                  </div>

                  {eng.links && eng.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {eng.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--text-muted))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {project.images && project.images.length > 1 && (
        <section className="py-12 md:py-16 lg:py-24 bg-[rgb(var(--surface))]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(var(--text-primary))] mb-6 md:mb-8 text-center">
              Project Gallery
            </h2>
            <BentoGrid>
              {project.images.map((image, index) => (
                <BentoGridItem
                  key={index}
                  colSpan={index === 0 ? 2 : 1}
                  rowSpan={index === 0 ? 2 : 1}
                  header={
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={`${project.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  }
                >
                  <div className="text-xs text-[rgb(var(--text-subtle))]">
                    {project.name} - View {index + 1}
                  </div>
                </BentoGridItem>
              ))}
            </BentoGrid>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-6 md:mb-8">
              Related Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-semibold text-sm md:text-base text-[rgb(var(--text-primary))] mb-2 group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                      {related.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[rgb(var(--text-subtle))] mb-3 truncate">{related.client}</p>
                    <div className="flex items-center text-[rgb(var(--primary))] text-sm font-medium">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[rgb(var(--navy))]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
