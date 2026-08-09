export interface Client {
  id: string
  name: string
  logo: string
  abbr: string
  tier: "anchor" | "government" | "research" | "ngo" | "private"
  url?: string
}

// Ordered to match the company brochure ("Some of Our Clients"), left-to-right, row by row.
export const CLIENTS: Client[] = [
  // Row 1
  { id: "govt-bd", name: "Government of Bangladesh", logo: "/images/clients/bd.gov.png", abbr: "GoB", tier: "government" },
  { id: "world-bank", name: "The World Bank", logo: "/images/clients/world_bank-logo.png", abbr: "WB", tier: "anchor", url: "https://www.worldbank.org" },
  { id: "jica", name: "JICA", logo: "/images/clients/jica.png", abbr: "JICA", tier: "anchor", url: "https://www.jica.go.jp" },
  { id: "bmd", name: "Bangladesh Meteorological Department", logo: "/images/clients/bmd-logo.jpg", abbr: "BMD", tier: "government", url: "http://bmd.gov.bd/" },
  { id: "dae", name: "Department of Agricultural Extension", logo: "/images/clients/dae.png", abbr: "DAE", tier: "government" },
  { id: "bwdb", name: "Bangladesh Water Development Board", logo: "/images/clients/bd-water.png", abbr: "BWDB", tier: "government", url: "https://bwdb.gov.bd/" },
  { id: "mushroom-project", name: "Mushroom Development Project (DAE)", logo: "/images/clients/mashroom-project-logo.png", abbr: "MDP", tier: "government" },

  // Row 2
  { id: "saarc", name: "SAARC", logo: "/images/clients/saarc.png", abbr: "SAARC", tier: "government" },
  { id: "protirokkha", name: "Ministry of Defence (Protirokkha)", logo: "/images/clients/protirokkha.png", abbr: "MoD", tier: "government" },
  { id: "rda", name: "Rural Development Academy (RDA), Bogura", logo: "/images/clients/RDA-logo.png", abbr: "RDA", tier: "government" },
  { id: "nocban", name: "Bangladesh Olympic Association", logo: "/images/clients/nocban-logo.png", abbr: "BOA", tier: "government", url: "https://nocban.org/" },
  { id: "coxda", name: "Cox's Bazar Development Authority", logo: "/images/clients/CoxsDA.jpg", abbr: "CoxDA", tier: "government", url: "https://coxda.gov.bd" },

  // Row 3
  { id: "esteps", name: "ESTEPS", logo: "/images/clients/esteps-logo.jpg", abbr: "ESTEPS", tier: "private" },
  { id: "du", name: "Dhaka University", logo: "/images/clients/DU-logo.jpg", abbr: "DU", tier: "research" },
  { id: "dmgi", name: "dMGi Pte. Ltd., Singapore", logo: "/images/clients/DMGI-LOGO.png", abbr: "dMGi", tier: "private" },
  { id: "farming-future", name: "Farming Future Bangladesh", logo: "/images/clients/farming-future.png", abbr: "FFB", tier: "ngo" },
  { id: "isoil", name: "i-Soil Project", logo: "/images/clients/isoilbd.png", abbr: "i-Soil", tier: "research", url: "http://www.isoilbd.com" },

  // Row 4
  { id: "uw", name: "University of Washington", logo: "/images/clients/uw.jpg", abbr: "UW", tier: "research" },
  { id: "rri", name: "River Research Institute", logo: "/images/clients/rri-bd.png", abbr: "RRI", tier: "research", url: "http://rri.gov.bd/" },
  { id: "sunlife", name: "Sunlife", logo: "/images/clients/sunlife-onetech_logo.gif", abbr: "Sunlife", tier: "private" },
  { id: "euro-india", name: "Euro India Agro Products", logo: "/images/clients/euro-india.jpeg", abbr: "EIA", tier: "private" },
  { id: "a2i", name: "a2i", logo: "/images/clients/a2i_logo_2021.png", abbr: "a2i", tier: "government" },

  // Row 5
  { id: "sundharban", name: "Sundarban Agro", logo: "/images/clients/sundharban-agro.png", abbr: "SA", tier: "private" },
  { id: "hdf", name: "Human Development Foundation", logo: "/images/clients/hdf-LOGO-WEB.gif", abbr: "HDF", tier: "ngo" },
  { id: "technical-journal", name: "Technical Journal", logo: "/images/clients/technical-journal-logo.jpeg", abbr: "TJ", tier: "research" },
  { id: "bcct", name: "Bangladesh Climate Change Trust", logo: "/images/clients/Bangladesh_Climate_Change_Trust_logo.png", abbr: "BCCT", tier: "government" },
  { id: "vt", name: "Villa Thankuinia (The Boutique Hotel)", logo: "/images/clients/vt.jpeg", abbr: "VT", tier: "private" },
  { id: "archery", name: "Bangladesh Archery Federation", logo: "/images/clients/archery.png", abbr: "BAF", tier: "private" },

  // Row 6
  { id: "softel", name: "Softel", logo: "/images/clients/softel.jpeg", abbr: "Softel", tier: "private" },
  { id: "poly-cables", name: "Poly Cables Ind. Ltd.", logo: "/images/clients/poly-cables-logo_name.jpg", abbr: "PC", tier: "private" },
  { id: "diu", name: "Daffodil International University", logo: "/images/clients/DaffodilInternationalUni.png", abbr: "DIU", tier: "research" },
  { id: "mcerc", name: "MCERC", logo: "/images/clients/MCERC-logo.jpg", abbr: "MCERC", tier: "research" },
  { id: "reading", name: "University of Reading", logo: "/images/clients/university_of_Reading_DHDR.png", abbr: "UoR", tier: "research", url: "https://www.reading.ac.uk" },
  { id: "mushroom-market", name: "Online Mushroom Market (DAE)", logo: "/images/clients/mushroom-online-market-dae.png", abbr: "OMM", tier: "government" },

  // Row 7
  { id: "lead-infosys", name: "Lead Infosys", logo: "/images/clients/lead-infosys-logo.png", abbr: "LI", tier: "private" },
  { id: "aesthetic", name: "Aesthetic International", logo: "/images/clients/aesthetic-international-logo.png", abbr: "AI", tier: "private" },
  { id: "lead-interior", name: "Lead Interior & Building Company", logo: "/images/clients/lead-interior-building-company.png", abbr: "LIB", tier: "private" },
  { id: "green-page", name: "Green Page", logo: "/images/clients/green-page.jpeg", abbr: "GP", tier: "private" },
  { id: "esdo", name: "ESDO", logo: "/images/clients/esdo.png", abbr: "ESDO", tier: "ngo" },
  { id: "karim-karim", name: "Karim & Karim", logo: "/images/clients/karim-karim.png", abbr: "K&K", tier: "private" },
  { id: "prasan", name: "Prasan Automobiles", logo: "/images/clients/prasan-automobiles.jpg", abbr: "PA", tier: "private" },
]

export const ANCHOR_CLIENTS = CLIENTS.filter(c => c.tier === "anchor" || c.tier === "government").slice(0, 10)

// Short, service-specific notes describing the scope we delivered for each client.
export const TESTIMONIALS = [
  {
    id: "world-bank",
    org: "World Bank (AMISDP)",
    orgLogo: "/images/clients/world_bank-logo.png",
    quote: "Delivered the national agro-met portal and mobile apps under the World Bank–funded AMISDP for the Department of Agricultural Extension.",
    project: "BAMIS",
  },
  {
    id: "jica",
    org: "JICA (with BMD)",
    orgLogo: "/images/clients/jica.png",
    quote: "Built BMD's mobile-optimised weather site with GIS, cloud and data-visualisation components under a JICA capacity-strengthening project.",
    project: "BMD Mobile Site",
  },
  {
    id: "bwdb",
    org: "Bangladesh Water Development Board",
    orgLogo: "/images/clients/bd-water.png",
    quote: "Developed the hydrological services platform for sediment, drought, salinity and groundwater, with real-time data, products and warnings.",
    project: "Hydrological Platform (HIFM)",
  },
  {
    id: "bmd",
    org: "Bangladesh Meteorological Department",
    orgLogo: "/images/clients/bmd-logo.jpg",
    quote: "Delivered and maintained the national weather portal, mobile apps, aviation message software and data systems across successive contracts.",
    project: "BMD System",
  },
  {
    id: "dae",
    org: "Department of Agricultural Extension",
    orgLogo: "/images/clients/dae.png",
    quote: "Built the mushroom e-commerce portal and Android marketplace app for the INRPMCP under the Department of Agricultural Extension.",
    project: "Mushroom Platform",
  },
  {
    id: "hdf",
    org: "Human Development Foundation",
    orgLogo: "/images/clients/hdf-LOGO-WEB.gif",
    quote: "Provided a dynamic website with HRMS and payroll management, maintained continuously since 2018.",
    project: "HDF System",
  },
  {
    id: "sunlife",
    org: "Sunlife Insurance Company",
    orgLogo: "/images/clients/sunlife-onetech_logo.gif",
    quote: "Delivered the PAPYRUS HRMS and a dynamic corporate website, supported over a long-running engagement.",
    project: "PAPYRUS HRMS",
  },
  {
    id: "polycables",
    org: "Poly Cables Ind. Ltd.",
    orgLogo: "/images/clients/poly-cables-logo_name.jpg",
    quote: "Set up a corporate mail-server solution with a dynamic website, integration and ongoing maintenance.",
    project: "Mail & Web",
  },
]

// Grounded in delivered scope of work — no unverifiable metrics or attributed quotes.
export const CLIENT_CHALLENGES = [
  {
    client: "Department of Agricultural Extension (World Bank / AMISDP)",
    logo: "/images/clients/dae.png",
    challenge: "Farmers and extension officers across Bangladesh needed timely, district-level weather and crop-advisory information in an accessible, localised form.",
    solution: "BAMIS — national agro-met portal, mobile apps and automated advisories",
    result: "District-level advisories published nationwide across all 64 districts",
    link: "/projects/bamis",
  },
  {
    client: "Bangladesh Meteorological Department",
    logo: "/images/clients/bmd-logo.jpg",
    challenge: "BMD needed an integrated digital ecosystem that stays online and accurate during high-traffic events such as cyclones, while serving aviation and seismic needs.",
    solution: "Complete BMD ecosystem — portal, mobile apps, aviation and data systems",
    result: "Sustained heavy cyclone-season traffic across a multi-year engagement",
    link: "/projects/bmd",
  },
  {
    client: "Bangladesh Water Development Board (IDA / World Bank)",
    logo: "/images/clients/bd-water.png",
    challenge: "Hydrological data — sediment, salinity, drought indicators and groundwater — was fragmented, making unified early-warning information difficult to produce.",
    solution: "Integrated hydrological services platform with real-time data and GIS",
    result: "One platform for sediment, drought, salinity and groundwater services",
    link: "/projects/bwdb",
  },
  {
    client: "Rural Development Academy (RDA)",
    logo: "/images/clients/RDA-logo.png",
    challenge: "Farmers lacked an accessible, data-driven way to get soil-specific nutrient and fertiliser guidance grounded in real sensor data.",
    solution: "I-Soil — IoT soil-monitoring dashboard with a Bengali mobile advisory",
    result: "Soil-monitoring dashboard and mobile app delivering guidance in Bengali",
    link: "/projects/isoil",
  },
  {
    client: "Human Development Foundation (HDF)",
    logo: "/images/clients/hdf-LOGO-WEB.gif",
    challenge: "HDF needed a digital presence together with structured HR and payroll management for its operations.",
    solution: "Dynamic website plus HRMS and payroll management",
    result: "In continuous use with ongoing maintenance since 2018",
    link: "/projects/human-development-foundation",
  },
  {
    client: "SAARC Meteorological Research Centre (SMRC)",
    logo: "/images/clients/saarc.png",
    challenge: "A regional flood-forecasting platform needed integrated data streams, coupled models and automated warning generation.",
    solution: "Flood-forecasting platform with real-time/forecast data and models",
    result: "Automated generation of flood warnings and reports",
    link: "/projects/smrc-flood-forecasting",
  },
]
