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
    description: "National weather meteorology system, forecasting, and aviation meteorological services.",
    features: [
      { title: "National weather meteorology system", desc: "Portal, mobile apps and dissemination for the national weather service", icon: "Cloud" },
      { title: "Weather data & warnings", desc: "MDASS/ADS data acquisition, current-weather and warning dissemination", icon: "TrendingUp" },
      { title: "Aviation weather", desc: "Observed data sharing and aviation message software", icon: "Plane" },
    ],
    visual: { label: "BMD System", icon: "Wind", image: "/images/projects/bmd-web.png" },
    relatedProjects: ["bmd", "bmd-mobile", "aviation", "multiple-fax", "synoptic", "met-inventory", "bmd-journal"],
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
    description: "Custom websites, web apps, government portals, and native mobile applications.",
    features: [
      { title: "Web development", desc: "Custom websites and dynamic corporate sites", icon: "Globe" },
      { title: "Web apps & portals", desc: "Large-scale government and enterprise web applications", icon: "Building2" },
      { title: "Mobile apps", desc: "Native iOS and Android applications", icon: "Smartphone" },
    ],
    visual: { label: "Government Portal", icon: "Globe", image: "/images/projects/rri-web.png" },
    relatedProjects: ["rri", "mushroom", "coxda", "hdf", "esteps-erp", "polycables"],
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
    description: "Enterprise hosting, data center solutions, and supply, installation & maintenance.",
    features: [
      { title: "Server solutions", desc: "Cloud, VPS, and dedicated server hosting", icon: "Server" },
      { title: "Data center", desc: "Enterprise-grade data center infrastructure", icon: "HardDrive" },
      { title: "Supply, installation & maintenance", desc: "Hardware/software supply, installation, SSL and ongoing maintenance", icon: "Wrench" },
    ],
    visual: { label: "Server Infrastructure", icon: "Server", image: "/images/server/server-strength-grid.jpg" },
    relatedProjects: ["bmd", "met-inventory"],
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
  { id: "meteorology", name: "Meteorology", icon: "Wind", description: "National weather meteorology systems" },
  { id: "agriculture", name: "Agriculture", icon: "Leaf", description: "Digital farming solutions" },
  { id: "water", name: "Water & Hydrology", icon: "Droplets", description: "Flood forecasting & water management" },
  { id: "web-portal", name: "Web Portal", icon: "Globe", description: "Government & enterprise portals" },
  { id: "web-app", name: "Web App", icon: "LayoutDashboard", description: "Custom web applications & dashboards" },
  { id: "mobile-app", name: "Mobile App", icon: "Smartphone", description: "Native iOS & Android applications" },
  { id: "erp", name: "ERP", icon: "Database", description: "Enterprise resource planning" },
  { id: "finance", name: "Finance Management", icon: "Wallet", description: "Financial & accounting software" },
  { id: "ai-data", name: "AI & Big Data", icon: "Brain", description: "Applied ML & data analytics" },
  { id: "server", name: "Server Solutions", icon: "Server", description: "Enterprise hosting solutions" },
  { id: "data-center", name: "Data Center", icon: "HardDrive", description: "Infrastructure management" },
  { id: "supply-maintenance", name: "Supply, Installation & Maintenance", icon: "Wrench", description: "Hardware/software supply & upkeep" },
  { id: "network", name: "Network & ICT", icon: "Network", description: "Connectivity solutions" },
  { id: "mail", name: "Corporate Mail", icon: "Mail", description: "Secure enterprise email" },
  { id: "domain-expert", name: "Domain Expert", icon: "Users", description: "Specialized technical consulting" },
]
