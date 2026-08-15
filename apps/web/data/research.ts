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
  url?: string
}

// TODO: add the real research panel members here (name, role, focus area, photo).
export const RESEARCH_TEAM: ResearchMember[] = []

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: "BAMIS — Agro-Meteorological Research & Advisory",
    area: "Agro-Meteorology",
    status: "Ongoing",
    summary:
      "Our research into turning weather and climate data into actionable, district-level crop advisories — including GIS satellite crop-health products (NDVI, VHI, VCI, TCI, soil-moisture), crop weather calendars and automated agromet advisory bulletins for farmers across Bangladesh.",
    url: "https://www.bamis.gov.bd/",
  },
  {
    title: "i-Soil — IoT Soil Intelligence",
    area: "IoT & Data Science",
    status: "Ongoing",
    summary:
      "Applied R&D on reading real-time data directly from field IoT soil-sensor devices and turning it into soil-nutrition and fertiliser guidance for farmers in Bengali, backed by a monitoring dashboard.",
    url: "https://isoilbd.com/",
  },
  {
    title: "WQI — Water Quality Index",
    area: "Water & Environment",
    status: "Ongoing",
    summary:
      "Research platform modelling and monitoring a Water Quality Index from environmental parameters, supporting data-driven decisions on water resources and environmental health.",
    url: "https://wqi.websoftbd.net",
  },
]
