"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { motion, useMotionValue, useTransform, useSpring } from "motion/react"
import { CertificationMarquee } from "@/components/shared/CertificationMarquee"
import { ClientMarquee } from "@/components/shared/ClientMarquee"
import { Marquee } from "@workspace/ui/components/marquee"
import { WordRotate } from "@workspace/ui/components/word-rotate"
import { HyperText } from "@workspace/ui/components/hyper-text"
import { Cloud, Droplet, BarChart3, Brain, Globe, Server, Smartphone, ArrowRight, Leaf, Satellite, TrendingUp, CloudRain, Wind, Navigation, Quote, Check, Zap, Waves, Building, Cpu, Network, Wrench, HardDrive, Database, Phone, Shield, Mail, Users, FileText, Map, AlertTriangle } from "lucide-react"

// ============================================
// DATA & CONTENT
// ============================================

const CLIENTS = [
  { name: "World Bank", logo: "/images/clients/world_bank-logo.png", abbr: "WB" },
  { name: "JICA", logo: "/images/clients/jica.png", abbr: "JI" },
  { name: "BMD", logo: "/images/clients/bmd-logo.jpg", abbr: "BM" },
  { name: "BWDB", logo: "/images/clients/bd-water.png", abbr: "BW" },
  { name: "DAE", logo: "/images/clients/dae.png", abbr: "DA" },
  { name: "SAARC", logo: "/images/clients/saarc.png", abbr: "SA" },
  { name: "A2i", logo: "/images/clients/a2i_logo_2021.png", abbr: "A2" },
  { name: "Dhaka University", logo: "/images/clients/DU-logo.jpg", abbr: "DU" },
  { name: "University of Reading", logo: "/images/clients/university_of_Reading_DHDR.png", abbr: "UR" },
  { name: "FFWC", logo: "/images/clients/bd-water.png", abbr: "FF" },
  { name: "HDF", logo: "/images/clients/hdf-LOGO-WEB.gif", abbr: "HD" },
  { name: "NocBan", logo: "/images/clients/nocban-logo.png", abbr: "NB" },
  { name: "ESDO", logo: "/images/clients/esdo.png", abbr: "ES" },
  { name: "DMGI", logo: "/images/clients/DMGI-LOGO.png", abbr: "DM" },
  { name: "Farming Future", logo: "/images/clients/farming-future.png", abbr: "FF" },
  { name: "Sundharban Agro", logo: "/images/clients/sundharban-agro.png", abbr: "SA" },
  { name: "Aesthetic International", logo: "/images/clients/aesthetic-international-logo.png", abbr: "AI" },
  { name: "Lead Infosys", logo: "/images/clients/lead-infosys-logo.png", abbr: "LI" },
  { name: "Poly Cables", logo: "/images/clients/poly-cables-logo_name.jpg", abbr: "PC" },
  { name: "Softel", logo: "/images/clients/softel.jpeg", abbr: "SF" },
  { name: "Karim Karim", logo: "/images/clients/karim-karim.png", abbr: "KK" },
  { name: "Euro India", logo: "/images/clients/euro-india.jpeg", abbr: "EI" },
  { name: "Sunlife Onetech", logo: "/images/clients/sunlife-onetech_logo.gif", abbr: "SO" },
  { name: "Esteps", logo: "/images/clients/esteps-logo.jpg", abbr: "ET" },
  { name: "Environment", logo: "/images/clients/environment.jpeg", abbr: "EN" },
  { name: "Protirokkha", logo: "/images/clients/protirokkha.png", abbr: "PR" },
  { name: "Archery", logo: "/images/clients/archery.png", abbr: "AC" },
  { name: "UW", logo: "/images/clients/uw.jpg", abbr: "UW" },
  { name: "VT", logo: "/images/clients/vt.jpeg", abbr: "VT" },
  { name: "Shark", logo: "/images/clients/shark.jpeg", abbr: "SH" },
]

const SECTORS = [
  {
    id: "agro-met",
    name: "Agro-Meteorology",
    icon: CloudRain,
    color: "rgb(var(--primary))",
    features: [
      { title: "BAMIS Platform", desc: "National agro-meteorological portal, mobile apps and GIS products for farmers across all 64 districts", icon: CloudRain },
      { title: "Crop Weather Calendar", desc: "Automated agromet advisory bulletins and crop weather calendars", icon: Leaf },
      { title: "Satellite/GIS Products", desc: "NDVI, VHI, VCI and soil-moisture products for decision support", icon: Satellite },
    ],
    images: [
      "/images/expertise/bamis-agro-met-n-GIS.png",
      "/images/expertise/bamis-portal-agro-met-n-agri.png",
      "/images/expertise/Agro-Meteorology-solution-n-cropsystem.jpg",
      "/images/expertise/bamis-mobile-app-portal-admin.png",
    ],
  },
  {
    id: "meteorology",
    name: "Meteorology",
    icon: Wind,
    color: "rgb(var(--primary))",
    features: [
      { title: "National Weather Portal", desc: "Bangla & English BMD portal, weather apps and mobile web", icon: Wind },
      { title: "MDASS / ADS Data Systems", desc: "Data acquisition, ADS desktop-to-web conversion and dissemination", icon: TrendingUp },
      { title: "Seismology & Landslide", desc: "Seismological apps and landslide warning modules for BMD", icon: AlertTriangle },
    ],
    images: [
      "/images/expertise/Meteorology-Solution.jpg",
      "/images/expertise/meterology-bmd-forcasting-and-weather.png",
      "/images/expertise/Meteorology-bmd-data-aquisition-portal.png",
      "/images/expertise/meteorology-bmd-mobile-web-app.png",
      "/images/expertise/bmd-mobile-app-weather-app.png",
      "/images/expertise/bmd-landlside-warning.png",
    ],
  },
  {
    id: "agricultural",
    name: "Agricultural",
    icon: Leaf,
    color: "rgb(var(--primary))",
    features: [
      { title: "Crop & Pest Management", desc: "Pest and disease management and crop management systems", icon: Leaf },
      { title: "Soil Monitoring", desc: "I-Soil IoT soil monitoring and Bengali fertiliser advisory", icon: Satellite },
      { title: "Agri e-Commerce", desc: "Mushroom marketing platform and Android marketplace for DAE", icon: Building },
    ],
    images: [
      "/images/expertise/Agricuture-Solution.jpg",
      "/images/expertise/bamis-portal-agro-met-n-agri.png",
      "/images/expertise/mobile-app-mushroom-e-commerce.png",
      "/images/expertise/Agro-Meteorology-solution-n-cropsystem.jpg",
    ],
  },
  {
    id: "crop",
    name: "Crop",
    icon: Leaf,
    color: "rgb(var(--primary))",
    features: [
      { title: "Crop Weather Calendar", desc: "District-level crop calendars tied to weather patterns", icon: CloudRain },
      { title: "Crop Health Monitoring", desc: "Satellite-linked crop health tracking and yield indicators", icon: Satellite },
      { title: "Crop Management System", desc: "Crop and pest/disease management workflows", icon: Leaf },
    ],
    images: [
      "/images/expertise/Agro-Meteorology-solution-n-cropsystem.jpg",
      "/images/expertise/Agricuture-Solution.jpg",
      "/images/expertise/bamis-portal-agro-met-n-agri.png",
    ],
  },
  {
    id: "climate",
    name: "Climate",
    icon: Cloud,
    color: "rgb(var(--primary))",
    features: [
      { title: "Climate Analytics", desc: "Processing historical and real-time climate data for planning", icon: BarChart3 },
      { title: "Adaptation Support", desc: "Data products supporting climate resilience and adaptation", icon: TrendingUp },
      { title: "Forecast Dissemination", desc: "Turning climate data into actionable advisories", icon: CloudRain },
    ],
    images: [
      "/images/expertise/meterology-bmd-forcasting-and-weather.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
  },
  {
    id: "weather",
    name: "Weather",
    icon: CloudRain,
    color: "rgb(var(--primary))",
    features: [
      { title: "Forecasting Systems", desc: "Weather prediction and current-weather dissemination", icon: Wind },
      { title: "Weather Apps", desc: "BMD weather and current-weather mobile apps", icon: Smartphone },
      { title: "Warnings", desc: "Automated warning generation during high-impact events", icon: AlertTriangle },
    ],
    images: [
      "/images/expertise/meterology-bmd-forcasting-and-weather.png",
      "/images/expertise/bmd-mobile-app-weather-app.png",
      "/images/expertise/meteorology-bmd-mobile-web-app.png",
    ],
  },
  {
    id: "water",
    name: "Water",
    icon: Droplet,
    color: "rgb(var(--primary))",
    features: [
      { title: "HIFM Platform", desc: "BWDB Hydrological Information & Forecasting Model with GIS", icon: Droplet },
      { title: "Flood, Drought & Salinity", desc: "Integrated early-warning across multiple hydrological services", icon: Waves },
      { title: "River System GIS", desc: "Major river-system mapping and real-time products", icon: Map },
    ],
    images: [
      "/images/expertise/hifm-major-river-system-gis.png",
      "/images/expertise/hifm-hydrology-drought-maps-gis.png",
    ],
  },
  {
    id: "environment",
    name: "Environment",
    icon: Leaf,
    color: "rgb(var(--primary))",
    features: [
      { title: "Environmental Monitoring", desc: "Data platforms for environmental and land-use analysis", icon: BarChart3 },
      { title: "Forestry Software", desc: "Software supporting sustainable resource management", icon: Leaf },
      { title: "Earth Observation", desc: "Remote-sensing products for environmental insight", icon: Satellite },
    ],
    images: [
      "/images/expertise/Environment1.jpg",
      "/images/expertise/Environment2.jpg",
      "/images/expertise/Environment3.jpg",
    ],
  },
  {
    id: "gis",
    name: "GIS & Remote Sensing",
    icon: Map,
    color: "rgb(var(--primary))",
    features: [
      { title: "Geospatial Platforms", desc: "Interactive mapping and spatial data solutions", icon: Map },
      { title: "Satellite Products", desc: "NDVI, VHI, VCI and drought/river mapping", icon: Satellite },
      { title: "Decision Dashboards", desc: "GIS-driven dashboards for government agencies", icon: BarChart3 },
    ],
    images: [
      "/images/expertise/hifm-hydrology-drought-maps-gis.png",
      "/images/expertise/hifm-major-river-system-gis.png",
      "/images/expertise/bamis-agro-met-n-GIS.png",
    ],
  },
  {
    id: "ai-bigdata",
    name: "AI & Big Data",
    icon: Brain,
    color: "rgb(var(--primary))",
    features: [
      { title: "Big Data Analytics", desc: "Analytics over large, diverse datasets (Lead Infosys)", icon: BarChart3 },
      { title: "Applied ML", desc: "Models for weather, soil and agricultural prediction", icon: Brain },
      { title: "Data Fusion", desc: "Merging satellite, station and IoT sensor data", icon: Network },
    ],
    images: [
      "/images/expertise/lead-infosys-bigdata-analysis-system.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    ],
  },
  {
    id: "rnd",
    name: "R&D Innovation",
    icon: Cpu,
    color: "rgb(var(--primary))",
    features: [
      { title: "Applied R&D", desc: "Prototyping IoT, data-science and AI for real-world problems", icon: Cpu },
      { title: "Research Data Portals", desc: "Secure user-based portals such as DHDR for field research", icon: Database },
      { title: "Scientific Publishing", desc: "Journal and publication platforms for research institutes", icon: FileText },
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
      "/images/expertise/lead-infosys-bigdata-analysis-system.png",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    ],
  },
  {
    id: "web-portal",
    name: "Web & Portals",
    icon: Globe,
    color: "rgb(var(--primary))",
    features: [
      { title: "Government & Corporate Sites", desc: "Custom websites and portals (Poly Cables, Inventure, HDF)", icon: Globe },
      { title: "Dashboards & Web Apps", desc: "Interactive data dashboards for decision makers", icon: BarChart3 },
      { title: "HRMS & Payroll", desc: "Web systems with HR and payroll (HDF)", icon: Users },
    ],
    images: [
      "/images/expertise/polycables.png",
      "/images/expertise/lead-interior-building-website.png",
      "/images/expertise/hdfbd-website-hrm-system.png",
    ],
  },
  {
    id: "corporate-mail",
    name: "Corporate Mail",
    icon: Mail,
    color: "rgb(var(--primary))",
    features: [
      { title: "Enterprise Webmail", desc: "Secure corporate mail servers (hdfbd.com, mail.bmd.gov.bd)", icon: Mail },
      { title: "Microsoft Mail Systems", desc: "Microsoft-based enterprise email deployment", icon: Mail },
      { title: "Spam & Security", desc: "Filtering, security and reliable delivery", icon: Shield },
    ],
    images: [
      "/images/expertise/enterprise-webmail.jpg",
      "/images/expertise/microsoft-mail-systems.webp",
      "/images/expertise/ms-webmail-service.avif",
      "/images/expertise/spam-security-mail.jpg",
    ],
  },
]

const CASE_STUDIES = [
  {
    id: "bamis",
    client: "Department of Agricultural Extension (DAE)",
    partner: "World Bank",
    title: "BAMIS — Bangladesh Agro-Meteorological Information System",
    subtitle: "National agro-met platform serving farmers across all 64 districts",
    challenge: "Farmers lacked timely, localized weather and crop advisory information for irrigation, pest control, and harvesting decisions.",
    solution: "Dynamic web portal plus iOS/Android apps collecting BMD weather data, generating district-level forecasts, and producing automated advisories.",
    results: [
      { num: "64", label: "Districts covered nationwide" },
      { num: "iOS + Android", label: "Bilingual mobile apps" },
      { num: "GIS", label: "Satellite crop-health products" },
    ],
    tech: ["Automated BMD data ingestion", "Automated agromet advisory bulletins", "GIS satellite products (NDVI, VHI, VCI)", "Native iOS/Android apps"],
    image: "/images/projects/BAMIS_web.png",
    mobileImage: "/images/case-studies/bamis-mobile-app.png",
    liveUrl: "https://www.bamis.gov.bd/",
    tags: ["Agro-Met", "AI", "Government", "World Bank"]
  },
  {
    id: "bmd",
    client: "Bangladesh Meteorological Department",
    partner: "Ministry of Defence",
    title: "BMD — National Weather Ecosystem",
    subtitle: "End-to-end digital infrastructure sustaining peak cyclone-season traffic",
    challenge: "BMD needed a fully integrated digital ecosystem capable of staying online and accurate during high-traffic events like cyclones.",
    solution: "National portal, two mobile apps, earthquake monitoring, aviation data systems, multi-channel fax dissemination — load-balanced multi-server hosting.",
    results: [
      { num: "120M+", label: "Hits/month at peak (cyclone season)" },
      { num: "Bilingual", label: "Bangla & English portal" },
      { num: "2", label: "Mobile apps + mobile web" },
    ],
    tech: ["Load-balanced architecture", "Real-time API data transmission", "Aviation met-data systems", "Continuous hosting & maintenance"],
    image: "/images/case-studies/bmd-portal-homepage.png",
    mobileImage: "/images/case-studies/bmd-mobile-apps.jpg",
    liveUrl: "https://www.bmd.gov.bd/",
    tags: ["Meteorology", "Government", "Mission-Critical"]
  },
  {
    id: "bwdb",
    client: "Bangladesh Water Development Board",
    partner: "Ministry of Water Resources",
    title: "BWDB — Hydrological Early-Warning Systems",
    subtitle: "Unified platform for flood, drought, and salinity early-warning across Bangladesh",
    challenge: "Water-related data was fragmented across agencies, making it difficult to produce timely early-warning information.",
    solution: "Central platform unifying sediment & erosion prediction, drought forecasting, salinity analysis, and groundwater monitoring in real-time.",
    results: [
      { num: "4", label: "Integrated hydrological models" },
      { num: "Real-time", label: "Salinity & groundwater monitoring" },
      { num: "Unified", label: "Data warehouse platform" },
    ],
    tech: ["Model admin modules", "Real-time data visualization", "Seasonal river-salinity tracking", "Integrated data warehouse"],
    image: "/images/case-studies/bwdb-groundwater-dashboard.png",
    mobileImage: "/images/case-studies/bwdb-workflow-diagram.jpg",
    liveUrl: "/go/bwdb",
    tags: ["Hydrology", "Climate Resilience", "Disaster Early-Warning"]
  },
  {
    id: "isoil",
    client: "Rural Development Academy (RDA)",
    partner: "Research Project",
    title: "I-Soil — IoT Soil Monitoring Platform",
    subtitle: "Soil monitoring dashboard and mobile advisory for farmers",
    challenge: "Farmers had no accessible, data-driven way to get soil-specific nutrient and fertilizer guidance.",
    solution: "IoT + data-science platform with a web dashboard and mobile app delivering soil-nutrition and fertiliser guidance in Bengali.",
    results: [
      { num: "IoT", label: "Sensor data collection" },
      { num: "Dashboard", label: "Soil monitoring portal" },
      { num: "Bengali", label: "Language farmer app" },
    ],
    tech: ["IoT sensor integration", "Soil monitoring dashboard", "Secure database server", "Native mobile app"],
    image: "/images/projects/isoil-web.png",
    mobileImage: "/images/case-studies/isoil-mobile-app.png",
    liveUrl: "http://www.isoilbd.com/",
    tags: ["IoT", "Data Science", "Agriculture", "R&D"]
  },
]

const PROJECTS = [
  {
    id: "bamis",
    name: "BAMIS — Agro-Meteorological Information System",
    shortName: "BAMIS",
    tag: "Agro-Met · AI · Govt",
    stat: "Nationwide advisories · 64 districts",
    image: "/images/projects/BAMIS_web.png",
    color: "rgb(var(--success))",
  },
  {
    id: "bmd",
    name: "Bangladesh Meteorological Department System",
    shortName: "BMD System",
    tag: "Meteorology · Govt",
    stat: "National weather meteorology system",
    image: "/images/projects/bmd-web.png",
    color: "rgb(24, 95, 165)",
  },
  {
    id: "hydrology",
    name: "Hydrological Information Forecasting Model",
    shortName: "HIFM",
    tag: "Hydrology · BWDB",
    stat: "Flood forecasting · Water management",
    image: "/images/projects/Hydrology.png",
    url: "http://hifm.bwdb.gov.bd/bwdb/",
    color: "rgb(24, 95, 165)",
  },
  {
    id: "bmd-mobile",
    name: "BMD Mobile Weather App",
    shortName: "BMD Mobile",
    tag: "Meteorology · Mobile",
    stat: "Real-time weather on the go",
    image: "/images/projects/phone-bmd.png",
    url: "https://mobile.bmd.gov.bd/",
    color: "rgb(83, 74, 183)",
  },
  {
    id: "isoil",
    name: "I-Soil — IoT Soil Monitoring",
    shortName: "I-Soil",
    tag: "IoT · Data Science · Agriculture",
    stat: "Soil monitoring dashboard · Bengali advisory",
    image: "/images/projects/isoil-web.png",
    color: "rgb(83, 74, 183)",
  },
  {
    id: "rri",
    name: "River Research Institute Technical Journal",
    shortName: "RRI Journal",
    tag: "Research · Publishing",
    stat: "River research & publication platform",
    image: "/images/projects/rri-web.png",
    color: "rgb(24, 95, 165)",
  },
  {
    id: "dhdr",
    name: "DHDR — Farming Research Data Portal",
    shortName: "DHDR Reading",
    tag: "Research · University · Data Portal",
    stat: "Water-locked farming research & analytics",
    image: "/images/projects/dhdr_reading_university.png",
    url: "https://dhdrreading.com/",
    color: "rgb(115, 112, 216)",
  },
  {
    id: "mushroom",
    name: "Mushroom e-Commerce & Portal",
    shortName: "INRPMCP",
    tag: "e-Commerce · Agriculture",
    stat: "Mushroom development · Digital marketplace",
    image: "/images/projects/mushroom-web.png",
    color: "rgb(133, 79, 11)",
  },
]

const SERVICES = [
  {
    id: "agro-met",
    name: "Agro-Meteorology System Development",
    shortName: "Agro-Met",
    description: "National agro-meteorological platforms — crop advisories, weather intelligence and GIS products for farmers and food-security planning.",
    details: "BAMIS · Crop Advisory · Satellite/GIS",
    icon: CloudRain,
    image: "/images/expertise/bamis-agro-met-n-GIS.png",
    gradient: "from-emerald-600/80 to-green-800/80"
  },
  {
    id: "meteorology",
    name: "Meteorology System Development",
    shortName: "Meteorology",
    description: "Weather portals, forecasting, MDASS/ADS data systems, seismology and aviation meteorological software for national weather services.",
    details: "Forecasting · MDASS/ADS · Aviation Met",
    icon: Wind,
    image: "/images/expertise/meterology-bmd-forcasting-and-weather.png",
    gradient: "from-sky-600/80 to-blue-800/80"
  },
  {
    id: "hydrology",
    name: "Hydrology System Design",
    shortName: "Hydrology",
    description: "Flood, drought and salinity early-warning platforms with GIS — including the BWDB HIFM hydrological information & forecasting model.",
    details: "Flood · Salinity · GIS Early-Warning",
    icon: Waves,
    image: "/images/expertise/hifm-major-river-system-gis.png",
    gradient: "from-blue-600/80 to-cyan-800/80"
  },
  {
    id: "gis-remote-sensing",
    name: "GIS & Remote Sensing",
    shortName: "GIS",
    description: "Geospatial platforms, mapping and satellite data products (NDVI, VHI, VCI) for environmental and land-use analysis.",
    details: "Mapping · NDVI/VHI · Earth Observation",
    icon: Map,
    image: "/images/expertise/hifm-hydrology-drought-maps-gis.png",
    gradient: "from-teal-600/80 to-emerald-800/80"
  },
  {
    id: "agriculture",
    name: "Agricultural Solutions",
    shortName: "Agriculture",
    description: "Digital agriculture platforms — crop & pest management, soil monitoring, e-commerce and extension services for the farming sector.",
    details: "Crop/Pest Mgmt · Soil · Agri e-Commerce",
    icon: Leaf,
    image: "/images/expertise/Agricuture-Solution.jpg",
    gradient: "from-lime-600/80 to-green-800/80"
  },
  {
    id: "climate-environment",
    name: "Climate & Environment Solutions",
    shortName: "Climate",
    description: "Climate analytics, environmental monitoring and forestry software supporting resilience and sustainable resource management.",
    details: "Climate Analytics · Environment · Forestry",
    icon: Cloud,
    image: "/images/expertise/hifm-hydrology-drought-maps-gis.png",
    gradient: "from-cyan-600/80 to-teal-800/80"
  },
  {
    id: "ai-bigdata",
    name: "AI & Big Data",
    shortName: "AI & Data",
    description: "Machine learning models and large-scale data pipelines for weather, agriculture and environmental intelligence.",
    details: "ML Models · Analytics · Data Fusion",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-purple-600/80 to-indigo-800/80"
  },
  {
    id: "research-dev",
    name: "Research & Development",
    shortName: "R&D",
    description: "Applied R&D and research data platforms — from IoT and data science to scientific journals and study portals.",
    details: "Innovation · IoT R&D · Research Portals",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gradient: "from-indigo-600/80 to-slate-800/80"
  },
  {
    id: "iot",
    name: "IoT Solutions",
    shortName: "IoT",
    description: "Internet of Things systems for smart sensing, real-time field data collection and automation.",
    details: "Sensors · Connectivity · Smart Devices",
    icon: Network,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gradient: "from-amber-600/80 to-orange-800/80"
  },
  {
    id: "web-app",
    name: "Web & Portal Development",
    shortName: "Web Apps",
    description: "Custom government and enterprise web platforms, portals, dashboards and e-commerce.",
    details: "Portals · Dashboards · E-commerce",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-violet-600/80 to-purple-800/80"
  },
  {
    id: "mobile-software",
    name: "Mobile App Development",
    shortName: "Mobile",
    description: "Native iOS and Android applications with offline support and real-time sync.",
    details: "iOS · Android · Cross-Platform",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    gradient: "from-rose-600/80 to-pink-800/80"
  },
  {
    id: "erp-server",
    name: "ERP, Server & Corporate Mail",
    shortName: "ERP",
    description: "Enterprise resource planning, financial systems, server infrastructure and corporate mail solutions.",
    details: "ERP · Hosting · Corporate Mail",
    icon: Server,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    gradient: "from-slate-600/80 to-gray-800/80"
  },
]

const TESTIMONIALS = [
  {
    id: 1,
    org: "World Bank",
    logo: "/images/clients/world_bank-logo.png",
    quote: "A dependable technology partner for national agro-met systems.",
  },
  {
    id: 2,
    org: "JICA",
    logo: "/images/clients/jica.png",
    quote: "Delivered our mobile weather platform on time and to standard.",
  },
  {
    id: 3,
    org: "Department of Agricultural Extension",
    logo: "/images/clients/dae.png",
    quote: "Advisories now reach farmers across every district.",
  },
  {
    id: 4,
    org: "Bangladesh Meteorological Department",
    logo: "/images/clients/bmd-logo.jpg",
    quote: "Our national weather portal stays online when it matters most.",
  },
  {
    id: 5,
    org: "Bangladesh Water Development Board",
    logo: "/images/clients/bd-water.png",
    quote: "One platform for flood, drought and salinity early warning.",
  },
  {
    id: 6,
    org: "River Research Institute",
    logo: "/images/clients/rri-bd.png",
    quote: "A modern home for our technical research and publications.",
  },
  {
    id: 7,
    org: "Human Development Foundation",
    logo: "/images/clients/hdf-LOGO-WEB.gif",
    quote: "Reliable HR, payroll and web systems, maintained for years.",
  },
  {
    id: 8,
    org: "University of Reading",
    logo: "/images/clients/university_of_Reading_DHDR.png",
    quote: "A secure, well-built data portal for our field research.",
  },
]

const STATS = [
  { num: "18+", label: "Years operating" },
  { num: "2000+", label: "Projects delivered" },
  { num: "956", label: "Satisfied clients" },
  { num: "ISO", label: "9001:2015 certified" },
]

const PROPOSITIONS = [
  "18+ years delivering software solutions across all sectors",
  "Full-stack development: web, mobile, IoT, AI & enterprise systems",
  "Trusted by World Bank, JICA & Bangladesh Government",
]

// ============================================
// UTILITY HOOKS
// ============================================

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = React.useRef<T>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold])

  return { ref, isInView }
}

function useCounter(end: number, duration = 1500, start = 0) {
  const [count, setCount] = React.useState(start)
  const { ref, isInView } = useInView<HTMLDivElement>(0.5)
  const [hasCounted, setHasCounted] = React.useState(false)

  React.useEffect(() => {
    if (isInView && !hasCounted) {
      setHasCounted(true)
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(start + (end - start) * easeOut))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, hasCounted, end, duration, start])

  return { ref, count }
}

// ============================================
// SECTION COMPONENTS
// ============================================

function Hero() {
  const heroRef = React.useRef<HTMLElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/0620.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay - 15% black */}
      <div className="absolute inset-0 bg-black/15 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up border border-white/30 h-10">
          <WordRotate
            className="text-sm font-semibold text-white"
            words={[
              "ISO 9001:2015 · BASIS · 18 Years",
              "CAMMI Level 3 · QRO · Quality Assured",
              "World Bank Partner · JICA · Govt Approved"
            ]}
            duration={3000}
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Engineering Digital Excellence
          <br />
          for a{' '}
          <span className="text-[rgb(var(--primary))] inline-block align-middle">
            <WordRotate
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--primary))]"
              words={[
                "Connected World",
                "Smart Bangladesh",
                "Digital Future"
              ]}
              duration={3000}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          From web and mobile applications to IoT and AI — we deliver end-to-end software solutions
          for government, enterprise, and innovation partners.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white rounded-full px-8">
            <Link href="/solutions">Explore Solutions</Link>
          </Button>
          <Button asChild variant="outline" className="border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-pale))] rounded-full px-8">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        {/* Focus areas — full-width auto-scrolling swiper */}
        <div className="animate-fade-up relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen" style={{ animationDelay: "0.4s" }}>
          <Marquee pauseOnHover className="[--duration:45s] [--gap:1.5rem]">
            {[
              "Agro-Meteorology System Development",
              "Meteorology System Development",
              "Hydrology System Design",
              "Agricultural Solutions",
              "Climate Solutions",
              "Forestry Software",
              "GIS & Remote Sensing",
              "AI & Big Data",
              "IoT Solutions",
              "R&D Innovation",
              "Web & Mobile Apps",
              "ERP & Server",
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-sm text-white/90 whitespace-nowrap">
                <div className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]" />
                {tag}
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  )
}

function ClientsMarqueeSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
        <p className="text-xs md:text-sm font-semibold text-[rgb(var(--text-subtle))] uppercase tracking-wider">
          Trusted by leading organizations
        </p>
      </div>

      <ClientMarquee clients={CLIENTS} />
    </section>
  )
}

function ExpertiseSlider({ images, label }: { images: string[]; label: string }) {
  const [idx, setIdx] = React.useState(0)

  // Reset to first slide whenever the selected expertise changes.
  React.useEffect(() => {
    setIdx(0)
  }, [label])

  // Auto-advance the slides.
  React.useEffect(() => {
    if (!images || images.length <= 1) return
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500)
    return () => clearInterval(t)
  }, [images])

  const safeImages = images && images.length > 0 ? images : ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"]

  return (
    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-[rgb(var(--primary-pale))]">
      {safeImages.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt={`${label} — slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
        <p className="inline-block rounded-lg bg-[rgb(var(--primary))]/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-sm md:text-base">
          {label}
        </p>
        {safeImages.length > 1 && (
          <div className="flex gap-1.5">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SectorsSection() {
  const [activeSector, setActiveSector] = React.useState<typeof SECTORS[0] | undefined>(SECTORS[0])
  const { ref, isInView } = useInView(0.2)
  const [activeFeature, setActiveFeature] = React.useState(0)

  const sector = activeSector

  if (!sector) return null

  return (
    <section id="sectors" ref={ref} className="py-20 bg-[rgb(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Our Core Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            <HyperText className="!text-3xl !md:text-4xl !font-bold !text-[rgb(var(--text-primary))]">
              Intelligence for every domain
            </HyperText>
          </h2>
          <p className="text-[rgb(var(--text-muted))]">Click an expertise area to explore solutions</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {SECTORS.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSector(s)
                  setActiveFeature(0)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSector?.id === s.id
                    ? "bg-[rgb(var(--primary))] text-white shadow-md"
                    : "bg-white text-[rgb(var(--text-muted))] border border-[rgb(var(--border-default))]"
                }`}
              >
                <Icon size={16} />
                {s.name}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Features List */}
          <div className="space-y-3 md:col-span-2">
            {sector.features?.map((feature, i) => {
              const FeatureIcon = feature.icon
              return (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-5 rounded-lg border transition-all ${
                    activeFeature === i
                      ? "border-l-4 border-l-[rgb(var(--primary))] bg-white shadow-md"
                      : "border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center">
                      <FeatureIcon size={20} className="text-[rgb(var(--primary))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(var(--text-primary))] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[rgb(var(--text-muted))]">{feature.desc}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Visual — auto-playing image slides for the selected expertise (wider) */}
          <div className="md:col-span-3">
            <ExpertiseSlider images={sector.images} label={sector.name} />
          </div>
        </div>
      </div>
    </section>
  )
}

// Premium Website Preview Card Component
function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const [imageHeight, setImageHeight] = React.useState(0)
  const viewportHeight = 260 // Fixed viewport height on desktop
  const scrollDistance = Math.max(0, imageHeight - viewportHeight)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const naturalHeight = img.naturalHeight
    const naturalWidth = img.naturalWidth
    const containerWidth = img.parentElement?.clientWidth || 400
    const scaledHeight = (naturalHeight / naturalWidth) * containerWidth
    setImageHeight(scaledHeight)
  }

  // Motion values for smooth hover animation
  const y = useMotionValue(0)
  const translateY = useTransform(y, [0, 1], [0, -scrollDistance])
  const springY = useSpring(translateY, { stiffness: 30, damping: 40, restDelta: 0.1 })

  return (
    <Link
      href={project.url || `/projects/${project.id}`}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <motion.div
        className="bg-white rounded-2xl overflow-hidden border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        onHoverStart={() => y.set(1)}
        onHoverEnd={() => y.set(0)}
      >
        {/* Fixed Height Image Viewport with Website Preview Scroll */}
        <div className="relative h-[180px] sm:h-[210px] md:h-[260px] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
          {/* Animated Image Container */}
          <motion.div
            style={{ y: springY }}
            className="w-full will-change-transform"
          >
            <div className="relative w-full">
              <Image
                src={project.image}
                alt={`${project.name} website preview`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 4}
                onLoad={handleImageLoad}
              />
            </div>
          </motion.div>

          {/* Hover Arrow Indicator */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} className="text-[rgb(var(--primary))]" />
          </motion.div>

          {/* "Preview" badge */}
          <div className="absolute top-4 left-4">
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 relative">
          {/* Sector Tag */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-[rgb(var(--primary-pale))] text-[rgb(var(--primary))] text-xs font-semibold rounded-full uppercase tracking-wide">
              {project.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base md:text-lg text-[rgb(var(--text-primary))] mb-2 line-clamp-2 group-hover:text-[rgb(var(--primary))] transition-colors">
            {project.name}
          </h3>

          {/* Stat */}
          <p className="text-sm text-[rgb(var(--text-muted))] line-clamp-1">
            {project.stat}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

function ProjectsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            <HyperText className="!text-3xl !md:text-4xl !font-bold !text-[rgb(var(--text-primary))]">
              The Projects We Are Known For
            </HyperText>
          </h2>
          <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
            Explore our portfolio of impactful projects across agro-meteorology, hydrology, AI, and enterprise solutions.
          </p>
        </div>

        {/* Grid - 8 cards in 4×2 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-pale))] hover:border-[rgb(var(--primary))] rounded-full px-8 transition-all duration-300 hover:shadow-lg"
          >
            <Link href="/projects" className="group">
              See More Projects
              <ArrowRight size={16} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-16 bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--success))] uppercase tracking-wider mb-2">
            By the numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            18 years of delivering software excellence
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {STATS.map((stat, i) => {
            const numValue = parseInt(stat.num.replace(/\D/g, "")) || 0
            const { ref, count } = useCounter(numValue, 1500)
            return (
              <div key={i} className="text-center" ref={ref}>
                <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--success))]">
                  {/[0-9]/.test(stat.num) ? (
                    <>
                      {count}
                      {stat.num.includes("+") && "+"}
                    </>
                  ) : (
                    stat.num
                  )}
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-2">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Propositions */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROPOSITIONS.map((prop, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <Check className="text-[rgb(var(--success))] flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-white/80">{prop}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudySection() {
  const { ref, isInView } = useInView(0.2)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const activeCase = CASE_STUDIES[activeIndex]

  const handleCaseChange = (index: number) => {
    if (index === activeIndex || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-[rgb(var(--surface))] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Featured Case Studies
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            <HyperText className="!text-2xl !md:text-4xl !font-bold !text-[rgb(var(--text-primary))]">
              Transforming Ideas into Impact
            </HyperText>
          </h2>
          <p className="text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
            Real projects. Real clients. Real results across Bangladesh's critical sectors.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          {/* Main Case Study Content */}
          <div
            className={`
              transition-opacity duration-300
              ${isTransitioning ? 'opacity-0' : 'opacity-100'}
            `}
          >
            {/* Case Study Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[rgb(var(--primary))] text-white text-xs font-semibold rounded-full">
                    {activeCase?.client}
                  </span>
                  {activeCase?.partner && (
                    <span className="px-3 py-1 bg-[rgb(var(--primary-pale))] text-[rgb(var(--primary))] text-xs font-semibold rounded-full">
                      {activeCase.partner}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text-primary))]">
                  {activeCase?.title}
                </h3>
                <p className="text-[rgb(var(--text-muted))] mt-1">{activeCase?.subtitle}</p>
              </div>
              {activeCase?.liveUrl && (
                <a
                  href={activeCase.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[rgb(var(--border-default))] rounded-lg hover:border-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-faint))] transition-all text-sm font-medium"
                >
                  <Globe size={16} />
                  View Live Site
                </a>
              )}
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-[rgb(var(--border-subtle))]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[rgb(var(--primary-pale))] flex items-center justify-center">
                    <AlertTriangle size={18} className="text-[rgb(var(--primary))]" />
                  </div>
                  <h4 className="font-semibold text-[rgb(var(--text-primary))]">The Challenge</h4>
                </div>
                <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed">{activeCase?.challenge}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[rgb(var(--border-subtle))]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[rgb(var(--success-light))] flex items-center justify-center">
                    <Check size={18} className="text-[rgb(var(--success))]" />
                  </div>
                  <h4 className="font-semibold text-[rgb(var(--text-primary))]">Our Solution</h4>
                </div>
                <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed">{activeCase?.solution}</p>
              </div>
            </div>

            {/* Results & Images */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Results */}
              <div>
                <h4 className="font-semibold text-[rgb(var(--text-primary))] mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-[rgb(var(--primary))]" />
                  Results & Impact
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeCase?.results.map((result, i) => (
                    <div key={i} className="bg-[rgb(var(--primary-pale))] rounded-lg p-4 text-center border border-[rgb(var(--primary-pale))]">
                      <div className="text-xl md:text-2xl font-bold text-[rgb(var(--primary))]">
                        {result.num}
                      </div>
                      <div className="text-xs text-[rgb(var(--text-muted)] mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <h4 className="font-semibold text-[rgb(var(--text-primary))] mb-3 flex items-center gap-2">
                  <Cpu size={18} className="text-[rgb(var(--primary))]" />
                  Technology & Approach
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCase?.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-[rgb(var(--border-subtle))] rounded-md text-xs text-[rgb(var(--text-muted))]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="space-y-4">
                <div className="relative h-[240px] rounded-xl overflow-hidden border border-[rgb(var(--border-subtle))]">
                  <Image
                    src={activeCase?.image || "/images/projects/BAMIS_web.png"}
                    alt={activeCase?.title || "Case Study"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-medium">Platform Dashboard</p>
                  </div>
                </div>
                {activeCase?.mobileImage && (
                  <div className="relative h-[140px] rounded-xl overflow-hidden border border-[rgb(var(--border-subtle))]">
                    <Image
                      src={activeCase.mobileImage}
                      alt={`${activeCase?.title || "Case Study"} Mobile`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-sm font-medium">Mobile App</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Numbered Navigation */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {CASE_STUDIES.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCaseChange(index)}
                className={`
                  w-12 h-12 rounded-xl font-semibold text-sm transition-all duration-300
                  ${activeIndex === index
                    ? 'bg-[rgb(var(--primary))] text-white shadow-lg scale-110'
                    : 'bg-white text-[rgb(var(--text-muted)] border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]'
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Case Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {CASE_STUDIES.map((_, index) => (
              <div
                key={index}
                className={`
                  h-1 rounded-full transition-all duration-300
                  ${activeIndex === index ? 'w-8 bg-[rgb(var(--primary))]' : 'w-2 bg-[rgb(var(--border-subtle))]'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const { ref, isInView } = useInView(0.1)
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Panel widths scale with the number of services so the accordion always fits.
  const panelCount = SERVICES.length
  const totalGap = (panelCount - 1) * 8 // gap-2 = 8px
  const denom = 3.5 + (panelCount - 1) * 0.5
  const activeWidth = `calc((100% - ${totalGap}px) * ${3.5 / denom})`
  const collapsedWidth = `calc((100% - ${totalGap}px) * ${0.5 / denom})`

  return (
    <section ref={ref} className="py-20 bg-white w-full overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            <HyperText className="!text-3xl !md:text-4xl !font-bold !text-[rgb(var(--text-primary))]">
              Solutions for every data challenge
            </HyperText>
          </h2>
        </div>
      </div>

      {/* Services Accordion */}
      <div className="relative h-[500px] md:h-[600px] flex gap-2 w-full overflow-hidden">
        {SERVICES.map((service, index) => {
          const Icon = service.icon
          const isActive = activeIndex === index
          const isCollapsed = !isActive

          return (
            <div
              key={service.id}
              className="service-panel group relative h-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out"
              style={{
                width: isActive ? activeWidth : collapsedWidth,
                flexShrink: 0,
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} transition-opacity duration-500`}
                style={{ opacity: isActive ? 0.3 : 0.5 }}
              />

              {/* Dark overlay for collapsed panels */}
              {isCollapsed && (
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Icon - Always visible, positioned differently based on state */}
                <div className={`transition-all duration-500 ${isActive ? 'mb-6' : 'mb-auto'}`}>
                  <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/20 backdrop-blur-sm
                    flex items-center justify-center transition-all duration-500
                    ${isActive ? 'bg-white/30' : 'bg-white/10'}
                  `}>
                    <Icon
                      size={isActive ? 32 : 24}
                      className="text-white transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Title - Rotated when collapsed */}
                <div className={`
                  transition-all duration-500 origin-left
                  ${isCollapsed ? '-rotate-90 translate-y-8 opacity-80' : 'opacity-100'}
                `}>
                  <h3 className="text-white font-bold text-lg md:text-xl whitespace-nowrap">
                    {service.shortName}
                  </h3>
                </div>

                {/* Expanded Content */}
                <div className={`
                  space-y-4 transition-all duration-500 overflow-hidden
                  ${isActive ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                `}>
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      {service.details}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-white font-semibold mt-2 group/btn">
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Border highlight on active */}
              <div className={`
                absolute inset-0 rounded-2xl border-2 border-[rgb(var(--primary))]
                transition-opacity duration-300 pointer-events-none
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="py-20 bg-[rgb(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-2">
            In their own words
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            <HyperText className="!text-3xl !md:text-4xl !font-bold !text-[rgb(var(--text-primary))]">
              How leaders use Web Soft BD
            </HyperText>
          </h2>
        </div>

      </div>

      {/* Auto-playing testimonial swiper */}
      <div className="relative w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[300px] md:w-[360px] flex-shrink-0 bg-white rounded-xl p-6 border border-[rgb(var(--border-subtle))] shadow-sm"
            >
              {/* Organization */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-white border border-[rgb(var(--border-subtle))] flex items-center justify-center p-2">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.org}
                    width={60}
                    height={40}
                    className="max-h-[40px] w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[rgb(var(--text-primary))] text-sm leading-snug">{testimonial.org}</h4>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="text-[rgb(var(--primary))] opacity-20 mb-2" size={24} />
                <p className="text-[rgb(var(--text-muted))] italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[rgb(var(--surface))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[rgb(var(--surface))] to-transparent" />
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[rgb(var(--surface))]">
      <CertificationMarquee />
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-20 bg-[rgb(var(--navy))]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to transform your vision into reality?
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Talk to our specialists about your software development needs — from web and mobile
          to IoT, AI, and enterprise systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white rounded-full px-8">
            Request Consultation
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function Page() {
  return (
    <>
      <Hero />
      <ClientsMarqueeSection />
      <SectorsSection />
      <ProjectsSection />
      <StatsSection />
      <CaseStudySection />
      <ServicesSection />
      <TestimonialsSection />
      <CertificationsSection />
      <CTASection />
    </>
  )
}
