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
    client: "Department of Agricultural Extension (DAE) — AMISDP",
    clientLogo: "/images/clients/dae.png",
    impact: "National agro-met portal and mobile apps serving all 64 districts",
    stats: [
      { value: "64", label: "Districts covered nationwide" },
      { value: "iOS + Android", label: "Bilingual mobile apps" },
      { value: "GIS", label: "Satellite crop-health products" },
    ],
    description:
      "A national agro-meteorological web portal (Bangla & English) with iOS and Android apps, data portal software, automated agromet advisory bulletins, crop weather calendars, and GIS-based satellite products (NDVI, VHI, VCI, TCI, soil-moisture). Built and maintained for the Department of Agricultural Extension under the World Bank-funded Agro-Meteorological Information Systems Development Project (AMISDP).",
    challenge:
      "Farmers and extension officers across Bangladesh needed timely, district-level weather and crop-advisory information in an accessible, localised form.",
    solution:
      "Delivered a bilingual portal and mobile apps with automated advisory generation, crop weather calendars, API integration and GIS satellite-product processing, plus multi-year annual maintenance.",
    results: [
      "Delivered under the World Bank-funded AMISDP for the Department of Agricultural Extension",
      "District-level advisories published nationwide across 64 districts",
      "Ongoing maintenance and upgrades since first release in 2019",
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
    client: "Bangladesh Meteorological Department (BMD)",
    clientLogo: "/images/clients/bd.gov.png",
    impact: "National weather portal, mobile apps and data systems handling peak cyclone-season traffic",
    stats: [
      { value: "120M+", label: "Hits/month at peak (cyclone season)" },
      { value: "2", label: "Mobile apps + mobile web" },
      { value: "Bangla & English", label: "Bilingual national portal" },
    ],
    description:
      "A long-running meteorological ecosystem for BMD: the national portal (bmd.gov.bd) in Bangla & English, BMD Weather and BMD Current Weather mobile apps, a JICA-supported mobile-optimised site, BDWS daily weather summary automation, aviation message software, MDASS/ADS data systems, seismological and landslide modules, and continuous hosting and maintenance.",
    challenge:
      "BMD needed an integrated digital ecosystem that stays online and accurate during high-traffic events such as cyclones, while serving aviation and seismic monitoring needs.",
    solution:
      "Built load-balanced multi-server hosting with API-driven data transmission, automation software, mobile apps and continuous maintenance across successive contracts.",
    results: [
      "Sustained heavy traffic during cyclone-season warning periods without service failure",
      "Bilingual national portal, two mobile apps and mobile web",
      "Multi-year engagement spanning portal, apps, automation and data systems",
    ],
    image: "/images/projects/bmd-web.png",
    images: [
      "/images/projects/bmd-web.png",
      "/images/case-studies/bmd-portal-homepage.png",
      "/images/case-studies/bmd-mobile-apps.jpg",
    ],
    featured: true,
    accentColor: "#185FA5",
    liveUrl: "https://www.bmd.gov.bd",
  },
  {
    id: "bmd-mobile",
    slug: "bmd-mobile",
    name: "BMD Mobile-Optimised Site (JICA Project)",
    shortName: "BMD Mobile",
    sector: "Meteorology",
    tags: ["Meteorology", "JICA", "IoT", "GIS"],
    client: "Bangladesh Meteorological Department (BMD) — JICA Project",
    clientLogo: "/images/clients/jica.png",
    impact: "Mobile-first weather site built under JICA capacity-strengthening project",
    stats: [
      { value: "Mobile-first", label: "Optimised weather site" },
      { value: "GIS", label: "Data visualisation" },
      { value: "Cloud", label: "Server + IoT integration" },
    ],
    description:
      "A mobile-phone-optimised weather website with IoT, cloud and physical server infrastructure, GIS application, data visualisation and data-science components, plus a training programme — delivered under the JICA Technical Assistance project 'Strengthening the Capacity of Weather and Climate Services' implemented by BMD.",
    challenge:
      "BMD needed a fast, mobile-first channel for weather and climate services, supported by modern GIS and data-visualisation capability.",
    solution:
      "Delivered a mobile-optimised site with IoT and cloud/physical server integration, GIS and data-visualisation modules, security licensing and staff training under JICA technical assistance.",
    results: [
      "Delivered under a JICA Technical Assistance project with BMD",
      "Mobile-first access to weather and climate services",
      "Included GIS, data visualisation and a training programme",
    ],
    image: "/images/projects/mobile.bmd.gov.bd.jpeg",
    images: ["/images/projects/mobile.bmd.gov.bd.jpeg", "/images/projects/phone-bmd.png"],
    featured: false,
    accentColor: "#185FA5",
    liveUrl: "https://mobile.bmd.gov.bd/",
  },
  {
    id: "bmd-mobile-webapp",
    slug: "bmd-mobile-webapp",
    name: "BMD Mobile Weather Web App",
    shortName: "BMD Mobile App",
    sector: "Meteorology",
    tags: ["Meteorology", "Mobile", "Government", "NWP"],
    client: "Bangladesh Meteorological Department (BMD)",
    clientLogo: "/images/clients/bd.gov.png",
    impact: "Mobile web app delivering live weather, forecasts and NWP products",
    stats: [
      { value: "Mobile web", label: "Install-free weather app" },
      { value: "NWP", label: "Numerical weather products" },
      { value: "Live", label: "Current weather & forecasts" },
    ],
    description:
      "A mobile web application (mobile.bmd.gov.bd) for the Bangladesh Meteorological Department that gives the public fast, phone-optimised access to current weather, multi-day forecasts and numerical weather prediction (NWP) products such as wind fields — straight from the browser, with no install required.",
    challenge:
      "The public needed a fast, install-free way to reach BMD's current weather, forecasts and NWP products from any phone.",
    solution:
      "Delivered a mobile-first web app surfacing live weather, forecasts and NWP products (including wind) through a lightweight, touch-friendly interface.",
    results: [
      "Phone-optimised access to live weather and forecasts",
      "NWP products including wind fields on mobile",
      "No app install required — runs in the browser",
    ],
    image: "/images/projects/bmd-mobile-web-app-homepage.png",
    images: [
      "/images/projects/bmd-mobile-web-app-homepage.png",
      "/images/projects/bmd-mobile-web-appForcast.png",
      "/images/projects/bmd-mobile-web-app-NWP-wind.png",
    ],
    featured: true,
    accentColor: "#185FA5",
    liveUrl: "https://mobile.bmd.gov.bd/",
  },
  {
    id: "bwdb",
    slug: "bwdb",
    name: "Hydrological Information & Forecasting Model (HIFM)",
    shortName: "HIF Model",
    sector: "Hydrology",
    tags: ["Hydrology", "Climate Resilience", "Government", "World Bank"],
    client: "Bangladesh Water Development Board (BWDB) — Ministry of Water Resources",
    clientLogo: "/images/clients/bd-water.png",
    impact: "Unified hydrological services platform with real-time modules and GIS",
    stats: [
      { value: "Multi-module", label: "Sediment, drought, salinity, groundwater" },
      { value: "Real-time", label: "Data display, products & warnings" },
      { value: "GIS", label: "Integrated spatial solution" },
    ],
    description:
      "A hydrological services platform developed for BWDB (as EIMS–Alluvium–Web Soft BD JV) covering sediment prediction and riverbank erosion, hydrological drought prediction, salinity intrusion forecast, groundwater outlook and surface-water supply outlook, with an upgraded website displaying real-time data, products and warnings and an integrated GIS solution. Funded by IDA / World Bank under the Ministry of Water Resources.",
    challenge:
      "Hydrological data — sediment, salinity, drought indicators, groundwater — was fragmented, making timely, unified early-warning information difficult to produce.",
    solution:
      "Built an integrated platform with real-time visualisation and GIS, consolidating multiple hydrological services into one system for operational and early-warning use.",
    results: [
      "Consolidated multiple hydrological services into a single real-time platform",
      "Supports operational decisions and disaster preparedness",
      "Delivered as a joint venture under IDA / World Bank funding",
    ],
    image: "/images/projects/Hydrology.png",
    images: [
      "/images/projects/Hydrology.png",
      "/images/case-studies/bwdb-groundwater-dashboard.png",
      "/images/case-studies/bwdb-workflow-diagram.jpg",
    ],
    featured: true,
    accentColor: "#185FA5",
    liveUrl: "http://hifm.bwdb.gov.bd/bwdb/",
  },
  {
    id: "isoil",
    slug: "isoil",
    name: "I-Soil — IoT Soil Monitoring Mobile App",
    shortName: "I-Soil",
    sector: "IoT",
    tags: ["IoT", "Mobile App", "Data Science", "Agriculture", "R&D"],
    client: "Rural Development Academy (RDA), Bogura",
    impact: "Mobile app streaming real-time data from field IoT soil devices",
    stats: [
      { value: "Real-time", label: "IoT device data streaming" },
      { value: "Mobile App", label: "Farmer-facing (Android)" },
      { value: "Bengali", label: "Soil & fertiliser advisory" },
    ],
    description:
      "I-Soil (isoilbd.com) is a mobile app that reads real-time data directly from field IoT soil-sensor devices and turns it into soil-nutrition and fertiliser guidance for farmers in Bengali, backed by a web dashboard for monitoring. Sensors capture soil parameters in the field and stream them to the app, giving farmers live, location-specific insights.",
    challenge:
      "Farmers had no accessible, data-driven way to read live soil conditions and get soil-specific nutrient and fertiliser guidance from real IoT sensor data.",
    solution:
      "Built an IoT pipeline from field soil-sensor devices to a mobile app with real-time data streaming and a Bengali-language advisory interface, plus a web dashboard for monitoring.",
    results: [
      "Mobile app delivering real-time IoT soil-sensor data to farmers",
      "Bengali-language soil and fertiliser advisory",
      "Demonstrates IoT + data-science R&D capability beyond government portals",
    ],
    image: "/images/projects/isoil-web.png",
    images: [
      "/images/projects/isoil-mobile-app.png",
      "/images/projects/isoil-web.png",
    ],
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
    client: "Bangladesh Meteorological Department (BMD)",
    clientLogo: "/images/clients/bd.gov.png",
    impact: "Cloud-based aviation message systems for multiple observatories",
    stats: [
      { value: "Multi-station", label: "Saidpur, Rajshahi, Chattogram" },
      { value: "Cloud-based", label: "Aviation message software" },
      { value: "Integrated", label: "With BMD systems" },
    ],
    description:
      "Network-based aviation observation data-sharing and cloud-based aviation message software supplied and installed for BMD observatories, including Saidpur (SMO), Rajshahi and Chattogram, supporting aviation weather reporting.",
    challenge:
      "Aviation operations needed reliable sharing of observed weather data between meteorological stations and aviation users.",
    solution:
      "Delivered network-based and cloud-based aviation message systems integrated with BMD infrastructure across multiple observatories.",
    results: [
      "Aviation message systems installed for multiple BMD observatories",
      "Cloud-based delivery integrated with national meteorological infrastructure",
      "Supports aviation weather reporting and dissemination",
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
    tags: ["Meteorology", "Dissemination", "BMD"],
    client: "Bangladesh Meteorological Department (BMD)",
    impact: "Automated fax dissemination software supplied and maintained for BMD",
    stats: [
      { value: "Automated", label: "Fax dissemination" },
      { value: "Maintained", label: "Ongoing support" },
      { value: "BMD", label: "Storm Warning Centre" },
    ],
    description:
      "Multiple Fax software supplied to BMD's Storm Warning Centre for dissemination of weather information, alongside existing ADS/MDASS data-conversion work, with ongoing maintenance.",
    challenge:
      "Weather information still needed to reach recipients that depend on fax, but the manual process was inefficient.",
    solution:
      "Supplied and maintained Multiple Fax dissemination software integrated with BMD's data systems.",
    results: [
      "Automated fax dissemination for BMD's Storm Warning Centre",
      "Delivered with related ADS/MDASS data-conversion modules",
      "Supported by ongoing maintenance",
    ],
    image: "/images/projects/multiple-fax-dashboard.jpg",
    featured: false,
    accentColor: "#4a5568",
  },
  {
    id: "synoptic",
    slug: "synoptic-data",
    name: "Synoptic Data & Current Weather Systems",
    shortName: "Synoptic Data",
    sector: "Meteorology",
    tags: ["Meteorology", "Data Pipeline", "BMD"],
    client: "Bangladesh Meteorological Department (BMD)",
    impact: "Automated dissemination of current weather conditions and NWP products",
    stats: [
      { value: "Automated", label: "Current weather dissemination" },
      { value: "MDASS / ADS", label: "Data acquisition & dissemination" },
      { value: "NWP", label: "Product development" },
    ],
    description:
      "APIs and modules for BMD's Meteorological Data Acquisition Sub-System (MDASS) and Automated Dissemination System (ADS), the Current Weather Condition apps, satellite product processing and NWP product development for the public weather portal.",
    challenge:
      "Meteorological data needed to be decoded and disseminated to the public automatically in a readable, accessible form.",
    solution:
      "Built automated MDASS/ADS pipelines, current-weather dissemination and NWP product modules for BMD's portal.",
    results: [
      "Automated dissemination of current weather conditions",
      "MDASS and ADS data pipelines with satellite-product processing",
      "NWP product development for the national portal",
    ],
    image: "/images/projects/synoptic-data-decoding.jpg",
    featured: false,
    accentColor: "#4a5568",
  },
  {
    id: "met-inventory",
    slug: "met-inventory",
    name: "Meteorology Inventory & Database Software",
    shortName: "Met Inventory",
    sector: "Meteorology",
    tags: ["Meteorology", "Asset Management", "BMD"],
    client: "Bangladesh Meteorological & Geophysical Centre (BMD), Chattogram",
    impact: "User-interface database and inventory software for BMD, Chattogram",
    stats: [
      { value: "Database", label: "User-interface software" },
      { value: "Hosting", label: "Upgrade & maintenance" },
      { value: "SSL", label: "Secured with certificate" },
    ],
    description:
      "User-interface database software supplied, installed, hosted, upgraded and maintained for the Bangladesh Meteorological & Geophysical Centre in Chattogram, secured with an SSL certificate.",
    challenge:
      "The Chattogram centre needed a maintained, secured database interface for meteorological records.",
    solution:
      "Supplied and installed the user-interface database software with hosting, upgrades, SSL security and ongoing maintenance.",
    results: [
      "Maintained user-interface database software for BMD Chattogram",
      "Secured with an SSL certificate",
      "Supported by recurring hosting and maintenance contracts",
    ],
    image: "/images/projects/meteorology-inventory-software.jpg",
    featured: false,
    accentColor: "#185FA5",
  },
  {
    id: "bmd-journal",
    slug: "bmd-journal",
    name: "BMD Meteorological Journal Website",
    shortName: "BMD Journal",
    sector: "Meteorology",
    tags: ["Meteorology", "Publishing", "BMD"],
    client: "Bangladesh Meteorological Department (BMD)",
    impact: "Online meteorological journal supplied and installed for BMD",
    stats: [
      { value: "Journal", label: "Online publishing platform" },
      { value: "Supply + install", label: "Delivered for BMD" },
      { value: "2025", label: "Completed" },
    ],
    description:
      "Supply and installation of the Meteorological Journal website for BMD, delivered alongside cloud-based aviation message software and user-satisfaction survey software.",
    challenge:
      "BMD needed a dedicated online platform to publish its meteorological journal.",
    solution:
      "Delivered and installed the Meteorological Journal website for BMD.",
    results: [
      "Online meteorological journal platform for BMD",
      "Delivered with related aviation and survey software",
      "Completed in 2025",
    ],
    image: "/images/projects/rri-web.png",
    featured: false,
    accentColor: "#185FA5",
    liveUrl: "https://journal.bmd.gov.bd/",
  },
  {
    id: "rri",
    slug: "rri",
    name: "River Research Institute Technical Journal",
    shortName: "RRI Journal",
    sector: "Research",
    tags: ["Research Publishing", "Water", "Web Platform"],
    client: "River Research Institute (RRI), Faridpur",
    impact: "Digital platform for RRI's peer-reviewed river-science research",
    stats: [
      { value: "Peer-reviewed", label: "Research publishing" },
      { value: "Searchable", label: "Article database" },
      { value: "Since 1991", label: "Journal digitised online" },
    ],
    description:
      "A technical-journal web platform for the River Research Institute (an autonomous water-resources research institute in Faridpur under the Ministry of Water Resources), with article search, submission handling and a news/announcements feed.",
    challenge:
      "RRI needed a modern digital platform to publish and share its long-running peer-reviewed river-science research.",
    solution:
      "Built a technical-journal platform with a searchable article database, submission management and a news feed.",
    results: [
      "Digital platform for RRI's technical journal",
      "Searchable article database and submission workflow",
      "Improved visibility of RRI's river-science research",
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
    tags: ["e-Commerce", "Agriculture", "Government"],
    client: "DAE / Mushroom Development Institute, Savar (INRPMCP)",
    impact: "Marketing app, portal and journal for the DAE mushroom project",
    stats: [
      { value: "Portal + App", label: "Web & Android marketplace" },
      { value: "e-Commerce", label: "Online mushroom market" },
      { value: "DAE", label: "Government project" },
    ],
    description:
      "A web-server-based platform for the Improvement of Nutrition and Reduction of Poverty through Mushroom Cultivation Project (INRPMCP) under the Department of Agricultural Extension: information portal, mushroom e-commerce/marketing application and Android app.",
    challenge:
      "The mushroom project needed a digital market and information channel for growers and buyers.",
    solution:
      "Delivered a portal, a mushroom e-commerce/marketing web application and an Android marketplace app under the INRPMCP.",
    results: [
      "Online mushroom marketing platform and portal",
      "Android marketplace app for growers and buyers",
      "Delivered for DAE's Mushroom Development Institute, Savar",
    ],
    image: "/images/projects/mushroom-web.png",
    images: [
      "/images/projects/mushroom-web.png",
      "/images/projects/mushroom-market-web.png",
      "/images/case-studies/mushroom-portal.png",
    ],
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
    client: "Cox's Bazar Development Authority (CoxDA)",
    impact: "Accounting and financial-management software for a development authority",
    stats: [
      { value: "Accounting", label: "Financial management" },
      { value: "Reporting", label: "Balance-sheet output" },
      { value: "Government", label: "Development authority" },
    ],
    description:
      "A financial-management system with accounting and balance-sheet reporting for Cox's Bazar Development Authority, a government urban-development authority under the Ministry of Housing and Public Works.",
    challenge:
      "The authority needed to move financial operations from manual processes to a structured digital system.",
    solution:
      "Delivered a financial-management system with accounting workflows and balance-sheet reporting.",
    results: [
      "Digital accounting and financial-management workflows",
      "Balance-sheet and financial reporting",
      "Built for a government development authority",
    ],
    image: "/images/case-studies/coxda-fms-dashboard.png",
    featured: false,
    accentColor: "#7370D8",
  },
  {
    id: "hdf",
    slug: "human-development-foundation",
    name: "HDF Website, HRMS & Payroll System",
    shortName: "HDF System",
    sector: "NGO",
    tags: ["NGO", "HRMS", "Payroll", "Web Portal"],
    client: "Human Development Foundation (HDF)",
    impact: "Dynamic website plus HRMS and payroll management for HDF, maintained since 2018",
    stats: [
      { value: "HRMS", label: "Human resource management" },
      { value: "Payroll", label: "Automated payroll" },
      { value: "2018–present", label: "Maintenance ongoing" },
    ],
    description:
      "A dynamic website together with an HRMS (Human Resource Management System) and payroll-management system developed for the Human Development Foundation, an NGO, with maintenance ongoing since 2018.",
    challenge:
      "HDF needed a digital presence plus structured HR and payroll management for its operations.",
    solution:
      "Delivered a dynamic website with an integrated HRMS and payroll system, backed by long-term maintenance.",
    results: [
      "Dynamic website plus HRMS and payroll management",
      "In continuous use with ongoing maintenance since 2018",
      "Streamlined HR and payroll operations for the foundation",
    ],
    image: "/images/projects/hdfd-web.png",
    images: ["/images/projects/hdfd-web.png"],
    featured: false,
    accentColor: "#1D9E75",
    liveUrl: "https://www.hdfbd.com",
  },
  {
    id: "dhdr",
    slug: "dhdr-reading",
    name: "DHDR — Farming Research Data Portal",
    shortName: "DHDR",
    sector: "Research",
    tags: ["Research", "Data Portal", "University", "Agriculture", "R&D"],
    client: "University of Reading",
    clientLogo: "/images/clients/university_of_Reading_DHDR.png",
    impact: "User-based research data portal for water-logged farming studies",
    stats: [
      { value: "Research", label: "Data portal" },
      { value: "User-based", label: "Access control" },
      { value: "Farming", label: "Water-logged studies" },
    ],
    description:
      "A user-based data portal (dhdrreading.com) for farming research, focused on water-logged farming data and analysis, supporting a University of Reading research programme.",
    challenge:
      "Researchers needed a controlled data portal to manage and analyse water-logged farming research data.",
    solution:
      "Built a user-based research data portal with access control and data-management features for the research programme.",
    results: [
      "Centralised research data management for water-logged farming studies",
      "User-based access for controlled research collaboration",
      "Live research data portal at dhdrreading.com",
    ],
    image: "/images/projects/dhdr_reading_university.png",
    images: ["/images/projects/dhdr_reading_university.png", "/images/projects/dhdrreading_full_page.png"],
    featured: true,
    accentColor: "#7370D8",
    liveUrl: "https://dhdrreading.com",
  },
  {
    id: "smrc-flood",
    slug: "smrc-flood-forecasting",
    name: "SAARC (SMRC) Flood Forecasting Platform",
    shortName: "SMRC Flood",
    sector: "Hydrology",
    tags: ["Hydrology", "Flood", "SAARC", "Servers"],
    client: "SAARC Meteorological Research Centre (SMRC)",
    clientLogo: "/images/clients/saarc.png",
    impact: "Flood-forecasting platform with real-time and forecast data streams",
    stats: [
      { value: "Real-time", label: "Data stream configuration" },
      { value: "Models", label: "Hydrological & hydrodynamic" },
      { value: "Automated", label: "Warnings & reports" },
    ],
    description:
      "System development and server solutions for a flood-forecasting platform for the SAARC Meteorological Research Centre — establishing the database, configuring real-time and forecast data streams and hydrological/hydrodynamic models with data assimilation, and automating processing and generation of warnings and reports.",
    challenge:
      "A regional flood-forecasting platform needed integrated data streams, models and automated output generation.",
    solution:
      "Delivered database, server and system integration with configured real-time/forecast data streams, coupled models and automated warning/report generation.",
    results: [
      "Integrated flood-forecasting platform for SMRC",
      "Real-time and forecast data streams with coupled models",
      "Automated generation of warnings and reports",
    ],
    image: "/images/projects/Hydrology.png",
    featured: false,
    accentColor: "#185FA5",
  },
  {
    id: "lead-bigdata",
    slug: "lead-infosys-big-data",
    name: "Big Data Analytics System — Lead Infosys",
    shortName: "Big Data Analytics",
    sector: "AI",
    tags: ["Big Data", "Analytics", "Data Science"],
    client: "Lead Infosys",
    clientLogo: "/images/clients/lead-infosys-logo.png",
    impact: "Analytics platform for large, diverse structured and unstructured datasets",
    stats: [
      { value: "Big Data", label: "Analytics platform" },
      { value: "Multi-source", label: "Structured & unstructured" },
      { value: "Scale", label: "Terabytes to zettabytes" },
    ],
    description:
      "A big-data analytics system applying advanced analytic techniques to very large, diverse datasets — structured, semi-structured and unstructured — from different sources and scales.",
    challenge:
      "The client needed to derive insight from large, heterogeneous datasets across multiple sources.",
    solution:
      "Delivered a big-data analytics platform handling structured, semi-structured and unstructured data at scale.",
    results: [
      "Analytics over large, diverse datasets",
      "Support for multi-source, multi-format data",
      "Foundation for advanced data-driven analysis",
    ],
    image: "/images/case-studies/bwdb-workflow-diagram.jpg",
    featured: false,
    accentColor: "#534AB7",
  },
  {
    id: "polycables",
    slug: "polycables-mail-web",
    name: "Poly Cables — Mail Server & Website",
    shortName: "Poly Cables",
    sector: "Web",
    tags: ["Web", "Mail Server", "Corporate"],
    client: "Poly Cables Ind. Ltd.",
    clientLogo: "/images/clients/poly-cables-logo_name.jpg",
    impact: "Mail server plus dynamic website with integration and maintenance",
    stats: [
      { value: "Mail Server", label: "Corporate email" },
      { value: "Website", label: "Dynamic, integrated" },
      { value: "Maintenance", label: "Upgrades & modification" },
    ],
    description:
      "A WordPress-based corporate website with an online product catalogue for Poly Cables Ind. Ltd., alongside a mail-server solution, integration, hosting, maintenance and upgrades. The site showcases thousands of cable and wire products for the manufacturer.",
    challenge:
      "The manufacturer needed a maintainable corporate website with a large, browsable product catalogue plus reliable corporate email.",
    solution:
      "Delivered a WordPress website with a structured product catalogue and a mail-server solution, with ongoing integration, hosting, maintenance and upgrades.",
    results: [
      "WordPress corporate website with thousands of products online",
      "Corporate mail-server infrastructure",
      "Ongoing maintenance, upgrades and modification",
    ],
    image: "/images/projects/Polycables.com_Homepage.png",
    images: [
      "/images/projects/Polycables.com_Homepage.png",
      "/images/projects/Polycables.com-thousands-of-products-uploaded..png",
    ],
    featured: false,
    accentColor: "#4a5568",
    liveUrl: "https://www.polycables.com.bd",
  },
  {
    id: "inventure",
    slug: "inventure-arch",
    name: "Inventure Builders — Architecture Firm Website",
    shortName: "Inventure",
    sector: "Web",
    tags: ["Web", "Corporate", "CMS"],
    client: "Inventure (Architecture, Interior & Engineering)",
    impact: "Custom architecture-firm website with project galleries and an admin panel",
    stats: [
      { value: "Since 2001", label: "Consultancy showcased" },
      { value: "300+", label: "Projects presented" },
      { value: "Admin panel", label: "Self-managed content" },
    ],
    description:
      "A custom website for Inventure, a Dhaka-based architectural, interior and engineering consultancy operating since 2001 with 300+ landmark projects. The site presents categorised building and interior project galleries, services, and a blog, backed by an admin panel so the team can publish and manage content themselves.",
    challenge:
      "Inventure needed a modern, self-manageable web presence to showcase hundreds of architectural and interior projects and generate client enquiries.",
    solution:
      "Built a custom website with categorised project galleries, service pages and a blog, plus an admin panel and WhatsApp enquiry integration.",
    results: [
      "Custom, self-manageable website with an admin panel",
      "Categorised building and interior project galleries",
      "Direct WhatsApp and form-based lead capture",
    ],
    image: "/images/projects/inventure-arch-website1.png",
    images: [
      "/images/projects/inventure-arch-website1.png",
      "/images/projects/inventure-arch-website2.png",
      "/images/projects/inventure-arch-website3.png",
    ],
    featured: false,
    accentColor: "#7370D8",
    liveUrl: "https://www.inventurearch.com/",
  },
  {
    id: "innovative-bd",
    slug: "innovative-bd",
    name: "Innovative BD — ICT & Global Trading Website",
    shortName: "Innovative BD",
    sector: "Web",
    tags: ["Web", "Corporate", "ICT"],
    client: "Innovative BD Pte. Ltd. (Singapore)",
    impact: "Corporate website for a Singapore ICT, AI & trading company serving 13+ countries",
    stats: [
      { value: "Since 2007", label: "Company established" },
      { value: "13+", label: "Countries served" },
      { value: "ICT · AI", label: "Products & trading" },
    ],
    description:
      "A corporate marketing website for Innovative BD Pte. Ltd., a Singapore-registered ICT products, AI solutions, software & hardware and general trading company operating since 2007 across 13+ countries. The site presents business areas, global presence, partners and products.",
    challenge:
      "Innovative BD needed a polished corporate site to present its ICT, AI and trading business to a global, multi-country audience.",
    solution:
      "Delivered a modern single-page corporate website covering business areas, global presence, partners, products and contact, optimised for international visitors.",
    results: [
      "Modern corporate presence for a global ICT & trading firm",
      "Clear presentation of business areas and partners",
      "Multi-country contact and enquiry handling",
    ],
    image: "/images/projects/innovative-bd-1.png",
    images: [
      "/images/projects/innovative-bd-1.png",
      "/images/projects/innovative-bd-2.png",
      "/images/projects/innovative-bd-3.png",
    ],
    featured: false,
    accentColor: "#534AB7",
    liveUrl: "https://innovativebd.com/",
  },
  {
    id: "softel",
    slug: "softel",
    name: "Softel — Telecom & IT Company Website",
    shortName: "Softel",
    sector: "Web",
    tags: ["Web", "Corporate", "Telecom"],
    client: "Softel",
    impact: "Corporate website with product catalogue and webmail for a telecom/IT firm",
    stats: [
      { value: "Since 2004", label: "Telecom & IT firm" },
      { value: "Catalogue", label: "Multi-product lines" },
      { value: "Webmail", label: "Corporate email" },
    ],
    description:
      "A corporate website for Softel, a Bangladesh telecom & IT company established in 2004, presenting its product lines (power, battery, generator, UPS, display, CCTV & security, solar) alongside a client list and corporate webmail.",
    challenge:
      "Softel needed a structured web presence to present a broad hardware product catalogue and support its telecom/IT business.",
    solution:
      "Delivered a corporate website with organised product categories, client list, contact and corporate webmail access.",
    results: [
      "Organised multi-category product catalogue",
      "Client list and corporate contact channels",
      "Integrated corporate webmail",
    ],
    image: "/images/projects/softel-bd-1.png",
    images: [
      "/images/projects/softel-bd-1.png",
      "/images/projects/softel-bd-2.png",
      "/images/projects/softel-bd-3.png",
    ],
    featured: false,
    accentColor: "#185FA5",
    liveUrl: "http://softelbd.com/",
  },
  {
    id: "pan-bright",
    slug: "pan-bright-travels",
    name: "Pan Bright Travels — Travel Agency Website",
    shortName: "Pan Bright",
    sector: "Web",
    tags: ["Web", "WordPress", "Travel"],
    client: "Pan Bright Travels (Pvt.) Ltd.",
    impact: "Travel-agency website for Hajj, Umrah, air ticketing and tour packages",
    stats: [
      { value: "Since 1999", label: "IATA-accredited agency" },
      { value: "Hajj · Umrah", label: "Pilgrimage packages" },
      { value: "Tours · Air", label: "Tickets & tours" },
    ],
    description:
      "A WordPress website for Pan Bright Travels (Pvt.) Ltd., an IATA-accredited Dhaka travel agency operating since 1999. The site presents Hajj and Umrah packages, air ticketing and tour packages, with an online query form and photo gallery.",
    challenge:
      "The agency needed an informative online presence for its Hajj, Umrah, ticketing and tour services with an easy enquiry channel.",
    solution:
      "Delivered a WordPress website presenting services and packages, company profile and management, with an online query form and gallery.",
    results: [
      "Clear presentation of Hajj, Umrah, ticketing and tours",
      "Online query form for enquiries",
      "Company profile, management and photo gallery",
    ],
    image: "/images/projects/pan-bright-travels-1.png",
    images: [
      "/images/projects/pan-bright-travels-1.png",
      "/images/projects/pan-bright-travels-2.png",
    ],
    featured: false,
    accentColor: "#1D9E75",
    liveUrl: "https://panbrighttravelsbd.com/",
  },
  {
    id: "hematologist-mostafil",
    slug: "hematologist-mostafil",
    name: "Prof. Dr. Md Mostafil Karim — Hematology Specialist Website",
    shortName: "Dr Mostafil Karim",
    sector: "Web",
    tags: ["Web", "WordPress", "Healthcare"],
    client: "Prof. Dr. (Brig Gen) Md Mostafil Karim",
    impact: "Professional website for a hematology & bone-marrow-transplant specialist",
    stats: [
      { value: "Hematology", label: "& BMT specialist" },
      { value: "Publications", label: "Research listing" },
      { value: "Appointments", label: "Locations & booking" },
    ],
    description:
      "A professional WordPress website for Prof. Dr. (Brig Gen) Md Mostafil Karim, a clinical hematologist and bone-marrow-transplant specialist in Dhaka. It presents his credentials, conditions & treatments, publications, photo/video galleries, locations and appointment requests.",
    challenge:
      "The specialist needed a credible online presence for patients to learn about his expertise, publications and how to book appointments.",
    solution:
      "Delivered a WordPress website covering credentials, conditions & treatments, publications, media galleries and appointment/location information.",
    results: [
      "Professional presence for a leading hematology & BMT specialist",
      "Structured credentials, treatments and publications",
      "Appointment requests and location information",
    ],
    image: "/images/projects/hematologist-mostafil-1.png",
    images: [
      "/images/projects/hematologist-mostafil-1.png",
      "/images/projects/hematologist-mostafil-2.png",
      "/images/projects/hematologist-mostafil-3.png",
    ],
    featured: false,
    accentColor: "#4a5568",
    liveUrl: "https://hematologist-mostafil.com/",
  },
]

// Derived from the projects that actually exist so every filter returns results
// and no real sector is missing from the list.
export const PROJECT_SECTORS = Array.from(
  new Set(PROJECTS.map(p => p.sector))
).sort()

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getProjectsBySector(sector: string): Project[] {
  return PROJECTS.filter(p => p.sector === sector || p.tags.includes(sector))
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured)
}
