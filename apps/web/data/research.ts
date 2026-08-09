// Research & Development content.
// Populate RESEARCH_TEAM with the members of the research panel and
// RESEARCH_PROJECTS with research work as it is published.

export interface ResearchMember {
  name: string
  role: string
  focus?: string
  photo?: string
}

export interface ResearchProject {
  title: string
  area: string
  status: "Ongoing" | "Completed" | "Planned"
  summary?: string
}

// TODO: add the real research panel members here (name, role, focus area, photo).
export const RESEARCH_TEAM: ResearchMember[] = []

// Research projects are not yet published. Add entries here when ready.
export const RESEARCH_PROJECTS: ResearchProject[] = []
