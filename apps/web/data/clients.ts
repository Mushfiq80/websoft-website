export interface Client {
  id: string
  name: string
  logo: string
  abbr: string
  tier: "anchor" | "government" | "research" | "ngo" | "private"
  url?: string
}

export const CLIENTS: Client[] = [
  // Anchor / Government & Multilateral
  { id: "world-bank", name: "World Bank", logo: "/images/clients/world_bank-logo.png", abbr: "WB", tier: "anchor", url: "https://www.worldbank.org" },
  { id: "jica", name: "JICA", logo: "/images/clients/jica.png", abbr: "JI", tier: "anchor", url: "https://www.jica.go.jp" },
  { id: "bmd", name: "Bangladesh Meteorological Department", logo: "/images/clients/bd.gov.png", abbr: "BMD", tier: "government", url: "http://bmd.gov.bd/" },
  { id: "bwdb", name: "Bangladesh Water Development Board", logo: "/images/clients/bd-water.png", abbr: "BWDB", tier: "government", url: "https://bwdb.gov.bd/" },
  { id: "dae", name: "Department of Agricultural Extension", logo: "/images/clients/dae.png", abbr: "DAE", tier: "government" },
  { id: "saarc", name: "SAARC", logo: "/images/clients/saarc.png", abbr: "SA", tier: "government" },
  { id: "a2i", name: "A2i", logo: "/images/clients/a2i_logo_2021.png", abbr: "A2", tier: "government" },
  { id: "ffwc", name: "Flood Forecasting & Warning Centre", logo: "/images/clients/bd-water.png", abbr: "FF", tier: "government", url: "http://ffwc.gov.bd/" },
  { id: "nocban", name: "Bangladesh Olympic Association", logo: "/images/clients/nocban-logo.png", abbr: "NB", tier: "government", url: "https://nocban.org/" },
  { id: "swc", name: "Storm Warning Centre (BMD)", logo: "/images/clients/bd.gov.png", abbr: "SWC", tier: "government" },

  // Research & Academic
  { id: "du", name: "Dhaka University", logo: "/images/clients/DU-logo.jpg", abbr: "DU", tier: "research" },
  { id: "rda", name: "Rural Development Academy", logo: "/images/clients/hdf-LOGO-WEB.gif", abbr: "RDA", tier: "research" },
  { id: "rri", name: "River Research Institute", logo: "/images/clients/DU-logo.jpg", abbr: "RRI", tier: "research" },
  { id: "coxda", name: "Cox's Bazar Development Authority", logo: "/images/clients/DU-logo.jpg", abbr: "CoxDA", tier: "government" },

  // NGO & Development
  { id: "hdf", name: "Human Development Foundation", logo: "/images/clients/hdf-LOGO-WEB.gif", abbr: "HDF", tier: "ngo" },
  { id: "esdo", name: "ESDO", logo: "/images/clients/esdo.png", abbr: "ES", tier: "ngo" },
  { id: "farming-future", name: "Farming Future USA", logo: "/images/clients/farming-future.png", abbr: "FF", tier: "ngo" },
  { id: "esteps", name: "ESTEPS", logo: "/images/clients/esteps-logo.jpg", abbr: "ET", tier: "ngo" },

  // Private Sector
  { id: "dmgi", name: "DMGI Pte. Limited Singapore", logo: "/images/clients/DMGI-LOGO.png", abbr: "DM", tier: "private" },
  { id: "sundharban", name: "Sundarban Agro Lab", logo: "/images/clients/sundharban-agro.png", abbr: "SA", tier: "private" },
  { id: "archery", name: "Bangladesh Archery Federation", logo: "/images/clients/archery.png", abbr: "AC", tier: "private" },
  { id: "sunlife", name: "Sunlife Insurance Company", logo: "/images/clients/sunlife-onetech_logo.gif", abbr: "SO", tier: "private" },
  { id: "softel", name: "Softel", logo: "/images/clients/softel.jpeg", abbr: "SF", tier: "private" },
  { id: "poly-cables", name: "Poly Cables Industries", logo: "/images/clients/poly-cables-logo_name.jpg", abbr: "PC", tier: "private" },
  { id: "aesthetic", name: "Aesthetic International", logo: "/images/clients/aesthetic-international-logo.png", abbr: "AI", tier: "private" },
  { id: "lead-infosys", name: "Lead Infosys", logo: "/images/clients/lead-infosys-logo.png", abbr: "LI", tier: "private" },
  { id: "karim-karim", name: "Karim Karim", logo: "/images/clients/karim-karim.png", abbr: "KK", tier: "private" },
  { id: "euro-india", name: "Euro India", logo: "/images/clients/euro-india.jpeg", abbr: "EI", tier: "private" },
  { id: "vt", name: "Villa Thawthisa Agro Green", logo: "/images/clients/vt.jpeg", abbr: "VT", tier: "private" },
  { id: "uw", name: "University of Washington", logo: "/images/clients/uw.jpg", abbr: "UW", tier: "research" },
]

export const ANCHOR_CLIENTS = CLIENTS.filter(c => c.tier === "anchor" || c.tier === "government").slice(0, 10)

export const TESTIMONIALS = [
  {
    id: "world-bank",
    org: "World Bank",
    orgLogo: "/images/clients/world_bank-logo.png",
    personName: "Senior Agriculture Specialist",
    personRole: "World Bank Bangladesh Office",
    quote: "WebsoftBD delivered a robust agro-met platform that directly supports food security for millions of farmers across Bangladesh. The BAMIS system exemplifies how technology can transform agricultural decision-making at scale.",
    project: "BAMIS",
  },
  {
    id: "jica",
    org: "JICA Bangladesh",
    orgLogo: "/images/clients/jica.png",
    personName: "Project Director",
    personRole: "JICA Bangladesh Office",
    quote: "The flood forecasting system developed by WebsoftBD has significantly improved our disaster preparedness capabilities. The real-time data integration and accurate modeling are impressive.",
    project: "Flood Forecasting System",
  },
  {
    id: "bwdb",
    org: "Bangladesh Water Development Board",
    orgLogo: "/images/clients/bd-water.png",
    personName: "Director",
    personRole: "BWDB",
    quote: "The unified hydrological platform has transformed how we manage water-related data. The integration of multiple modules into one system has greatly improved our operational efficiency.",
    project: "Hydrological Platform",
  },
]

export const CLIENT_CHALLENGES = [
  {
    client: "DAE / World Bank",
    logo: "/images/clients/world_bank-logo.png",
    challenge: "Farmers across Bangladesh lacked timely, localized weather and crop advisory information, leaving critical decisions on irrigation, pest control, and harvesting to guesswork.",
    solution: "BAMIS - Agro-Meteorological Information System",
    result: "Now serving farmers across all 64 districts with automated advisories",
    link: "/projects/bamis",
  },
  {
    client: "Bangladesh Meteorological Department",
    logo: "/images/clients/bd.gov.png",
    challenge: "Needed a fully integrated digital ecosystem capable of staying online and accurate during high-traffic disaster events like cyclones, while serving aviation and seismic monitoring needs.",
    solution: "Complete BMD Ecosystem - Portal, Apps, Data Systems",
    result: "Sustained 15M+ hits/month during Cyclone Sitrang without service failure",
    link: "/projects/bmd",
  },
  {
    client: "Bangladesh Water Development Board",
    logo: "/images/clients/bd-water.png",
    challenge: "Water-related data — river sediment, salinity, drought indicators, groundwater levels — was fragmented across agencies, making unified early-warning information difficult to produce.",
    solution: "Integrated Hydrological Platform with 4 Real-time Modules",
    result: "Single platform for flood, drought, salinity, and groundwater monitoring",
    link: "/projects/bwdb",
  },
  {
    client: "Rural Development Academy (RDA)",
    logo: "/images/clients/hdf-LOGO-WEB.gif",
    challenge: "Farmers had no accessible, data-driven way to get soil-specific nutrient and fertilizer guidance grounded in real sensor data and predictive modeling.",
    solution: "I-Soil - IoT + AI Soil Advisory Platform",
    result: "AI-generated soil guidance delivered in Bengali directly to farmers' phones",
    link: "/projects/isoil",
  },
]
