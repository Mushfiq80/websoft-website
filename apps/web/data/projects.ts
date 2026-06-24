export interface Project {
  id: string
  slug: string
  name: string
  shortName: string
  sector: string
  tags: string[]
  client: string
  clientLogo?: string
  impact: string
  stats?: { value: string; label: string }[]
  description: string
  challenge?: string
  solution?: string
  results?: string[]
  image: string
  images?: string[]
  featured: boolean
  accentColor: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: "bamis",
    slug: "bamis",
    name: "Bangladesh Agro-Meteorological Information System",
    shortName: "BAMIS",
    sector: "Agro-Met",
    tags: ["Agro-Met", "AI", "Government", "World Bank"],
    client: "Department of Agricultural Extension (DAE) / World Bank",
    clientLogo: "/images/clients/world_bank-logo.png",
    impact: "Nationwide agro-met platform serving farmers across 64 districts",
    stats: [
      { value: "64", label: "Districts covered nationwide" },
      { value: "36", label: "Weather stations integrated" },
      { value: "5-day", label: "Forecast horizon per district" },
    ],
    description: "A dynamic, interactive national agro-met web portal plus iOS/Android apps that collect BMD-observed weather data, generate forecasts down to district level, and automatically produce advisory bulletins for farmers and extension officers.",
    challenge: "Farmers across Bangladesh lacked timely, localized weather and crop advisory information, leaving decisions on irrigation, pest control, and harvesting to guesswork.",
    solution: "Built a comprehensive platform with automated BMD data ingestion, WRF model output generation, PDF parsing, satellite imagery integration, and AI-powered advisory generation.",
    results: [
      "Adopted nationwide and praised by World Bank for improving agricultural decision-making",
      "Now fully funded and operated by Government of Bangladesh",
      "Direct advisories reaching farmers and extension staff in all 64 districts",
    ],
    image: "/images/projects/BAMIS_web.png",
    images: ["/images/projects/BAMIS_web.png", "/images/case-studies/bamis-mobile-app.png"],
    featured: true,
    accentColor: "#7370D8",
    liveUrl: "https://www.bamis.gov.bd",
  },
  {
    id: "bmd",
    slug: "bmd",
    name: "Bangladesh Meteorological Department System",
    shortName: "BMD System",
    sector: "Meteorology",
    tags: ["Meteorology", "Government", "Mission-critical"],
    client: "Bangladesh Meteorological Department / Ministry of Defence",
    clientLogo: "/images/clients/bd.gov.png",
    impact: "National weather infrastructure sustaining 15M+ hits/month during cyclones",
    stats: [
      { value: "15M+", label: "Hits/month at peak (Cyclone Sitrang)" },
      { value: "5", label: "Load-balanced servers" },
      { value: "2", label: "Mobile apps + mobile web" },
    ],
    description: "An end-to-end meteorological ecosystem: national portal, mobile apps, earthquake monitoring, aviation data transmission, fax dissemination, synoptic data decoding, and equipment inventory systems.",
    challenge: "BMD needed a fully integrated digital ecosystem capable of staying online and accurate during high-traffic events like cyclones.",
    solution: "Built load-balanced multi-server architecture with real-time API-driven data transmission, aviation software, automated decoding, and continuous hosting/maintenance.",
    results: [
      "Sustained 15M+ hits/month during Cyclone Sitrang without service failure",
      "Reliable national infrastructure for forecasts and warnings",
      "Long-running engagement with continuous advancement",
    ],
    image: "/images/projects/bmd-web.png",
    images: ["/images/projects/bmd-web.png", "/images/case-studies/bmd-portal-homepage.png", "/images/case-studies/bmd-mobile-apps.jpg"],
    featured: true,
    accentColor: "#185FA5",
    liveUrl: "https://www.bmd.gov.bd",
  },
  {
    id: "bwdb",
    slug: "bwdb",
    name: "HYDROLOGICAL INFORMATION FORECASTING MODEL",
    shortName: "HIF Model",
    sector: "Hydrology",
    tags: ["Hydrology", "Climate Resilience", "Government"],
    client: "Bangladesh Water Development Board / Ministry of Water Resources",
    clientLogo: "/images/clients/bd-water.png",
    impact: "Unified hydrological platform with 4 integrated real-time modules",
    stats: [
      { value: "4", label: "Integrated hydrological models" },
      { value: "Real-time", label: "Salinity & groundwater monitoring" },
      { value: "Seasonal", label: "River salinity tracking" },
    ],
    description: "A central hydrological data platform unifying four real-time modules: sediment & riverbank erosion prediction, drought forecasting, salinity intrusion analysis, and groundwater/surface water outlook.",
    challenge: "Water-related data was fragmented across agencies, making it hard to produce timely, unified early-warning information.",
    solution: "Created integrated platform with real-time data visualization, consolidating previously siloed agency data into one unified system.",
    results: [
      "Replaced fragmented manual data handling with single real-time platform",
      "Supports both operational decisions and disaster preparedness",
      "Reduces manual search and data-entry time, cutting human-error risk",
    ],
    image: "/images/projects/Hydrology.png",
    images: ["/images/projects/Hydrology.png", "/images/case-studies/bwdb-groundwater-dashboard.png", "/images/case-studies/bwdb-workflow-diagram.jpg"],
    featured: true,
    accentColor: "#185FA5",
    liveUrl: "http://hifm.bwdb.gov.bd/bwdb/",
  },
  {
    id: "isoil",
    slug: "isoil",
    name: "I-Soil — IoT & AI Soil Advisory",
    shortName: "I-Soil",
    sector: "IoT/AI",
    tags: ["IoT", "AI/ML", "Agriculture", "R&D"],
    client: "Rural Development Academy (RDA)",
    impact: "IoT sensors → AI model → farmer's phone in Bengali",
    stats: [
      { value: "IoT", label: "Sensor data integration" },
      { value: "AI", label: "Soil nutrition analysis" },
      { value: "Bengali", label: "Language advisory output" },
    ],
    description: "A combined IoT + data-science platform with web portal and mobile apps that deliver AI-based soil nutrition analysis, forecasting, and fertilizer-management guidance directly to farmers in Bengali.",
    challenge: "Farmers had no accessible, data-driven way to get soil-specific nutrient and fertilizer guidance grounded in real sensor data.",
    solution: "Built full pipeline from IoT soil sensors → secure database → ML inference → farmer-facing mobile app with Bengali-language UI.",
    results: [
      "Gives farmers AI-generated soil-specific guidance rather than generic advice",
      "Demonstrates R&D capability beyond government portals",
      "Positions company at intersection of climate adaptation and applied data science",
    ],
    image: "/images/projects/isoil-web.png",
    images: ["/images/projects/isoil-web.png", "/images/case-studies/isoil-mobile-app.png"],
    featured: true,
    accentColor: "#534AB7",
    liveUrl: "http://www.isoilbd.com",
  },
  {
    id: "aviation",
    slug: "aviation",
    name: "Aviation Observed Data Sharing System",
    shortName: "Aviation Data",
    sector: "Aviation",
    tags: ["Aviation", "Data Sharing", "BMD"],
    client: "Bangladesh Meteorological Department",
    clientLogo: "/images/clients/bd.gov.png",
    impact: "Real-time aviation weather integration for airports",
    stats: [
      { value: "Real-time", label: "Aviation weather data" },
      { value: "Multi-airport", label: "Coverage across Bangladesh" },
      { value: "Integrated", label: "With BMD systems" },
    ],
    description: "Aviation meteorological data transmission system supporting aviation forecast and warning needs for airports including Saidpur Airport.",
    challenge: "Aviation operations needed reliable, real-time weather data sharing between meteorological stations and airports for safe flight operations.",
    solution: "Built dedicated aviation data transmission system that integrates with BMD infrastructure to provide real-time weather observations to airports.",
    results: [
      "Improved aviation safety with timely weather information",
      "Seamless integration with national meteorological infrastructure",
      "Reliable data transmission for flight planning and operations",
    ],
    image: "/images/projects/aviation-data-sharing-form.jpg",
    images: ["/images/projects/aviation-data-sharing-form.jpg", "/images/projects/avia-bmd.gif"],
    featured: true,
    accentColor: "#854F0B",
  },
  {
    id: "multiple-fax",
    slug: "multiple-fax",
    name: "Multiple Fax Software System",
    shortName: "Fax System",
    sector: "Meteorology",
    tags: ["Meteorology", "Legacy Dissemination", "BMD"],
    client: "Bangladesh Meteorological Department",
    impact: "8,700+ fax jobs processed with live service monitoring",
    stats: [
      { value: "8,700+", label: "Fax jobs processed" },
      { value: "Live", label: "Service monitoring" },
      { value: "Legacy", label: "Dissemination support" },
    ],
    description: "A dissemination channel for BMD built alongside the main portal ecosystem, handling legacy fax dissemination with live operational metrics and service monitoring.",
    challenge: "Many weather information consumers, especially remote stations, still relied on fax for weather updates but the manual process was inefficient.",
    solution: "Built automated fax dissemination system with live monitoring dashboard, processing thousands of fax jobs with operational tracking.",
    results: [
      "Modernized legacy fax dissemination with automated processing",
      "Live monitoring dashboard for operational visibility",
      "Reliable service for remote stations dependent on fax communication",
    ],
    image: "/images/projects/multiple-fax-dashboard.jpg",
    featured: false,
    accentColor: "#4a5568",
  },
  {
    id: "synoptic",
    slug: "synoptic-data",
    name: "Synoptic Data Decoding & Dissemination System",
    shortName: "Synoptic Data",
    sector: "Meteorology",
    tags: ["Meteorology", "Data Pipeline", "BMD"],
    client: "Bangladesh Meteorological Department",
    impact: "Multi-division synoptic data with CSV export and hourly filtering",
    stats: [
      { value: "Multi-division", label: "Coverage across Bangladesh" },
      { value: "Real-time", label: "Data decoding and display" },
      { value: "Export", label: "CSV export capability" },
    ],
    description: "Public portal for automatic dissemination of current weather conditions with synoptic data tables for Dhaka/Mymensingh/Chattogram divisions, station filters, and CSV export.",
    challenge: "Meteorological data needed to be automatically decoded and disseminated to the public in a readable, accessible format across multiple divisions.",
    solution: "Built automated synoptic data decoding system with public-facing portal, division-wise data tables, hourly filters, and CSV export functionality.",
    results: [
      "Automated decoding and dissemination of synoptic weather data",
      "Public access to real-time weather conditions by division",
      "Researchers and planners can export data for analysis via CSV",
    ],
    image: "/images/projects/synoptic-data-decoding.jpg",
    featured: false,
    accentColor: "#4a5568",
  },
  {
    id: "met-inventory",
    slug: "met-inventory",
    name: "Meteorology Inventory Software",
    shortName: "Met Inventory",
    sector: "Meteorology",
    tags: ["Meteorology", "Asset Management", "BMD"],
    client: "Bangladesh Meteorological Department",
    impact: "BMD-branded asset management system for meteorological equipment",
    stats: [
      { value: "Centralized", label: "Equipment tracking" },
      { value: "Real-time", label: "Inventory management" },
      { value: "Organization-wide", label: "Asset visibility" },
    ],
    description: "BMD-specific asset management register for tracking meteorological equipment inventory across the organization.",
    challenge: "Meteorological equipment was scattered across locations with no centralized tracking system, making asset management difficult.",
    solution: "Built branded inventory management system with equipment tracking, location mapping, and organization-wide asset visibility.",
    results: [
      "Centralized tracking of all meteorological equipment",
      "Improved asset visibility and management efficiency",
      "BMD-branded system tailored to organizational needs",
    ],
    image: "/images/projects/meteorology-inventory-software.jpg",
    featured: false,
    accentColor: "#185FA5",
  },
  {
    id: "rri",
    slug: "rri",
    name: "River Research Institute Technical Journal",
    shortName: "RRI Journal",
    sector: "Research",
    tags: ["Research Publishing", "Web Platform"],
    client: "River Research Institute (RRI)",
    impact: "Modern digital platform for peer-reviewed river-science research",
    stats: [
      { value: "Peer-reviewed", label: "Research publishing" },
      { value: "Searchable", label: "Article database" },
      { value: "Digital", label: "Submission handling" },
    ],
    description: "A technical journal web platform with article search, submission handling, and news/announcements feed for the institute's research community.",
    challenge: "RRI needed a modern digital platform to publish and share peer-reviewed river-science research with the scientific community.",
    solution: "Built technical journal platform with searchable article database, submission management, and news feed for research dissemination.",
    results: [
      "Modern digital platform for research publication and discovery",
      "Streamlined article submission and management workflow",
      "Enhanced visibility of RRI's river-science research community",
    ],
    image: "/images/projects/rri-web.png",
    images: ["/images/projects/rri-web.png", "/images/case-studies/rri-journal-portal.png"],
    featured: false,
    accentColor: "#185FA5",
  },
  {
    id: "mushroom",
    slug: "mushroom",
    name: "Mushroom e-Commerce & Portal (INRPMCP)",
    shortName: "Mushroom Platform",
    sector: "Agriculture",
    tags: ["e-Commerce", "Agriculture", "Social Impact"],
    client: "DAE / Mushroom Development Institute, Savar",
    impact: "Digital sales channel and knowledge hub for smallholder mushroom growers",
    stats: [
      { value: "3-in-1", label: "Platform solution" },
      { value: "Android", label: "Mobile marketplace app" },
      { value: "Knowledge", label: "Resource portal" },
    ],
    description: "A three-part platform: online mushroom marketing Android app, public information portal, and Mushroom Journal knowledge resource.",
    challenge: "Smallholder mushroom growers lacked access to digital markets and knowledge resources to improve their cultivation and sales.",
    solution: "Built integrated platform with Android marketplace app, public information portal, and Mushroom Journal knowledge base for growers.",
    results: [
      "Digital sales channel connecting growers directly to markets",
      "Knowledge resources improving cultivation practices",
      "Mobile app enabling on-the-go marketplace access for smallholders",
    ],
    image: "/images/projects/mushroom-web.png",
    images: ["/images/projects/mushroom-web.png", "/images/projects/mushroom-market-web.png", "/images/case-studies/mushroom-portal.png"],
    featured: false,
    accentColor: "#1D9E75",
  },
  {
    id: "coxda",
    slug: "coxda",
    name: "CoxDA Financial Management System",
    shortName: "CoxDA FMS",
    sector: "ERP",
    tags: ["ERP", "Finance", "Government"],
    client: "Cox's Bazar Development Authority",
    impact: "ERP-style accounting/balance-sheet system for development authority",
    stats: [
      { value: "ERP", label: "Grade financial management" },
      { value: "Automated", label: "Accounting workflows" },
      { value: "Balance-sheet", label: "Reporting capability" },
    ],
    description: "Financial management system with accounting and balance-sheet capabilities for Cox's Bazar Development Authority.",
    challenge: "Cox's Bazar Development Authority needed a modern financial management system to replace manual accounting processes.",
    solution: "Built ERP-style financial management system with automated accounting, balance-sheet generation, and comprehensive reporting capabilities.",
    results: [
      "Modernized financial operations from manual to digital workflows",
      "Comprehensive accounting and balance-sheet reporting",
      "Improved transparency and efficiency in financial management",
    ],
    image: "/images/case-studies/coxda-fms-dashboard.png",
    featured: false,
    accentColor: "#7370D8",
  },
]

export const PROJECT_SECTORS = [
  "Agro-Met",
  "Meteorology",
  "Hydrology",
  "AI",
  "Aviation",
  "IoT",
  "Research",
  "Agriculture",
  "ERP",
  "Web",
  "App",
  "Infrastructure",
].sort()

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getProjectsBySector(sector: string): Project[] {
  return PROJECTS.filter(p => p.sector === sector || p.tags.includes(sector))
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured)
}
