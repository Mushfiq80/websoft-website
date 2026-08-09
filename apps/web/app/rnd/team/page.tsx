import Link from "next/link"
import Image from "next/image"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight, Users } from "lucide-react"
import { RESEARCH_TEAM } from "@/data/research"

export const metadata = {
  title: "R&D Team — Web Soft BD",
  description: "The research panel driving Web Soft BD's R&D innovation in agro-meteorology, hydrology, AI and IoT.",
}

export default function ResearchTeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">R&amp;D Innovation</Badge>
            <h1 className="mb-4 text-4xl font-bold text-[rgb(var(--text-primary))] md:text-5xl">
              Our Research <span className="text-[rgb(var(--primary))]">Team</span>
            </h1>
            <p className="text-lg leading-relaxed text-[rgb(var(--text-muted))]">
              The specialists on our research panel guide Web Soft BD&apos;s innovation across agro-meteorology,
              hydrology, climate, AI and IoT — turning applied research into real-world platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid / empty state */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {RESEARCH_TEAM.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RESEARCH_TEAM.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-[rgb(var(--border-subtle))] bg-white p-6 text-center transition-all hover:border-[rgb(var(--primary))] hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-[rgb(var(--primary-pale))]">
                    {member.photo ? (
                      <Image src={member.photo} alt={member.name} width={96} height={96} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Users className="h-8 w-8 text-[rgb(var(--primary))]" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-[rgb(var(--text-primary))]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[rgb(var(--primary))]">{member.role}</p>
                  {member.focus && <p className="mt-2 text-sm text-[rgb(var(--text-muted))]">{member.focus}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))] p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgb(var(--primary-pale))]">
                <Users className="h-7 w-7 text-[rgb(var(--primary))]" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[rgb(var(--text-primary))]">Panel to be announced</h2>
              <p className="mx-auto max-w-md text-[rgb(var(--text-muted))]">
                The members of our research panel will be published here shortly. In the meantime, explore our
                research projects or get in touch to collaborate.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
                  <Link href="/rnd/projects">
                    Research Projects
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
