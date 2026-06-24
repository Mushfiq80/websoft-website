export interface Sector {
  id: string
  name: string
  shortName: string
  icon: string
  color: string
  description: string
  features: { title: string; desc: string; icon: string }[]
  visual: { label: string; icon: string; image: string }
  relatedProjects: string[]
}

export const SECTORS: Sector[] = [
  {
    id: "agro-met",
    name: "Agro-Meteorology",
    shortName: "Agro-Met",
    icon: "CloudRain",
    color: "#7370D8",
    description: "Real-time crop advisory and weather intelligence for farmers, DAE, and food security planners.",
    features: [
      { title: "Crop yield monitoring", desc: "Satellite-linked crop health tracking across 64 districts", icon: "Sprout" },
      { title: "Satellite data integration", desc: "Remote sensing for climate and land use analysis", icon: "Satellite" },
      { title: "Forecast dissemination", desc: "Weather advisories to farmers via BAMIS platform", icon: "Radio" },
    ],
    visual: { label: "BAMIS Dashboard", icon: "BarChart3", image: "/images/projects/BAMIS_web.png" },
    relatedProjects: ["bamis"],
  },
  {
    id: "meteorology",
    name: "Meteorology",
    shortName: "Met",
    icon: "Wind",
    color: "#185FA5",
    description: "National weather data infrastructure, forecasting systems, and aviation meteorological services.",
    features: [
      { title: "Weather forecasting", desc: "Advanced prediction models and 5-day forecasts", icon: "Cloud" },
      { title: "Climate monitoring", desc: "Real-time climate monitoring and alert systems", icon: "TrendingUp" },
      { title: "Aviation weather", desc: "Observed data sharing for aviation safety", icon: "Plane" },
    ],
    visual: { label: "BMD System", icon: "Wind", image: "/images/projects/bmd-web.png" },
    relatedProjects: ["bmd", "aviation", "multiple-fax", "synoptic", "met-inventory"],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    shortName: "Agri",
    icon: "Leaf",
    color: "#1D9E75",
    description: "Digital farming solutions, crop management, and agricultural technology platforms.",
    features: [
      { title: "Farm management", desc: "Digital solutions with IoT sensor integration", icon: "Sprout" },
      { title: "Crop monitoring", desc: "Satellite-based crop health and yield prediction", icon: "Satellite" },
      { title: "Soil analytics", desc: "AI-powered soil nutrition and fertilizer guidance", icon: "Cpu" },
    ],
    visual: { label: "I-Soil Platform", icon: "Leaf", image: "/images/projects/isoil-web.png" },
    relatedProjects: ["isoil", "mushroom", "bamis"],
  },
  {
    id: "water",
    name: "Water & Hydrology",
    shortName: "Water",
    icon: "Droplets",
    color: "#185FA5",
    description: "Flood forecasting, salinity modeling, and water resource management systems.",
    features: [
      { title: "Flood forecasting", desc: "Real-time prediction and early warning systems", icon: "Droplets" },
      { title: "Salinity modeling", desc: "Coastal water salinity intrusion simulation", icon: "Waves" },
      { title: "Groundwater monitoring", desc: "Real-time water table level tracking", icon: "Activity" },
    ],
    visual: { label: "BWDB Platform", icon: "Droplets", image: "/images/projects/Hydrology.png" },
    relatedProjects: ["bwdb"],
  },
  {
    id: "web",
    name: "Web & App Development",
    shortName: "Web/App",
    icon: "Globe",
    color: "#7370D8",
    description: "Custom websites, government portals, and native mobile applications.",
    features: [
      { title: "Web development", desc: "Custom websites and web platforms", icon: "Globe" },
      { title: "Portal development", desc: "Large-scale government and enterprise portals", icon: "Building2" },
      { title: "Mobile apps", desc: "Native iOS and Android applications", icon: "Smartphone" },
    ],
    visual: { label: "Government Portal", icon: "Globe", image: "/images/projects/rri-web.png" },
    relatedProjects: ["rri", "mushroom", "coxda"],
  },
  {
    id: "ai",
    name: "AI & Big Data",
    shortName: "AI/ML",
    icon: "Brain",
    color: "#534AB7",
    description: "Machine learning models, automation, and large-scale data pipelines.",
    features: [
      { title: "AI solutions", desc: "Applied ML for weather and agricultural prediction", icon: "Cpu" },
      { title: "Automation", desc: "Automated bulletin and report generation", icon: "Zap" },
      { title: "Big data analytics", desc: "Large-scale climate and environmental data processing", icon: "BarChart3" },
    ],
    visual: { label: "AI Analytics", icon: "Brain", image: "/images/case-studies/bwdb-workflow-diagram.jpg" },
    relatedProjects: ["bamis", "isoil"],
  },
  {
    id: "server",
    name: "Server & Infrastructure",
    shortName: "Server",
    icon: "Server",
    color: "#4a5568",
    description: "Enterprise hosting, data center solutions, and server infrastructure.",
    features: [
      { title: "Server solutions", desc: "Cloud, VPS, and dedicated server hosting", icon: "Server" },
      { title: "Data center", desc: "Enterprise-grade data center infrastructure", icon: "HardDrive" },
      { title: "Infrastructure management", desc: "SSL, hosting, and ongoing maintenance", icon: "Shield" },
    ],
    visual: { label: "Server Infrastructure", icon: "Server", image: "/images/server/server-strength-grid.jpg" },
    relatedProjects: ["bmd"],
  },
  {
    id: "domain",
    name: "Domain Expertise",
    shortName: "Domain",
    icon: "Users",
    color: "#7370D8",
    description: "Deep specialist knowledge in agro-met, hydrology, and climate science.",
    features: [
      { title: "Agro-met expertise", desc: "18+ years in agricultural meteorology systems", icon: "Award" },
      { title: "Climate science", desc: "Specialized knowledge in climate and weather systems", icon: "Cloud" },
      { title: "Government domain", desc: "Understanding of government processes and requirements", icon: "Building2" },
    ],
    visual: { label: "Expert Team", icon: "Users", image: "/images/projects/BAMIS_web.png" },
    relatedProjects: [],
  },
]

export const EXPERTISE_AREAS = [
  { id: "agro-met", name: "Agro-Meteorology", icon: "CloudRain", description: "Climate-smart farming platforms" },
  { id: "meteorology", name: "Meteorology", icon: "Wind", description: "National weather systems" },
  { id: "agriculture", name: "Agriculture", icon: "Leaf", description: "Digital farming solutions" },
  { id: "water", name: "Water & Hydrology", icon: "Droplets", description: "Flood forecasting & water management" },
  { id: "web-portal", name: "Web Portal", icon: "Globe", description: "Government & enterprise portals" },
  { id: "app-dev", name: "App Development", icon: "Smartphone", description: "iOS & Android applications" },
  { id: "domain-expert", name: "Domain Expert", icon: "Users", description: "Specialized technical consulting" },
  { id: "server", name: "Server Solutions", icon: "Server", description: "Enterprise hosting solutions" },
  { id: "data-center", name: "Data Center", icon: "HardDrive", description: "Infrastructure management" },
  { id: "network", name: "Network & ICT", icon: "Network", description: "Connectivity solutions" },
  { id: "erp", name: "ERP", icon: "Database", description: "Enterprise resource planning" },
  { id: "mail", name: "Corporate Mail", icon: "Mail", description: "Secure enterprise email" },
]
