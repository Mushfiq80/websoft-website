export interface Solution {
  id: string
  name: string
  cluster: string
  description: string
  icon: string
  color: string
  proofPoint?: string
  projectLink?: string
}

export const SOLUTIONS: Solution[] = [
  // Cluster 1: Web, Portal & Mobile
  {
    id: "web-solution",
    name: "Web Solution",
    cluster: "web-portal-mobile",
    description: "Custom websites and government/enterprise web platforms built for scale and accessibility.",
    icon: "Globe",
    color: "#7370D8",
    proofPoint: "BAMIS, BMD, RRI, and multiple government portals",
  },
  {
    id: "portal",
    name: "Portal Development",
    cluster: "web-portal-mobile",
    description: "Large-scale interactive portals serving millions of users with real-time data.",
    icon: "Building2",
    color: "#7370D8",
    proofPoint: "BAMIS portal serving farmers across 64 districts",
    projectLink: "/projects/bamis",
  },
  {
    id: "apps",
    name: "Mobile App Development",
    cluster: "web-portal-mobile",
    description: "Native iOS and Android applications with offline support and real-time sync.",
    icon: "Smartphone",
    color: "#7370D8",
    proofPoint: "BAMIS Portal app, BMD Weather apps, I-Soil mobile",
    projectLink: "/projects/bamis",
  },
  {
    id: "web-app",
    name: "Web App Development",
    cluster: "web-portal-mobile",
    description: "Interactive web applications and dashboards for data-heavy government and enterprise use.",
    icon: "LayoutDashboard",
    color: "#7370D8",
    proofPoint: "BWDB hydrological dashboards, I-Soil soil-monitoring dashboard",
    projectLink: "/projects/bwdb",
  },
  {
    id: "software",
    name: "Software Development",
    cluster: "web-portal-mobile",
    description: "Custom software solutions tailored to specific business and government needs.",
    icon: "FileText",
    color: "#7370D8",
    proofPoint: "Meteorology Inventory, Multiple Fax, Synoptic Data systems",
  },

  // Cluster 2: Data, AI & Automation
  {
    id: "ai",
    name: "A.I. Solution",
    cluster: "data-ai-automation",
    description: "Applied machine learning for weather prediction, soil analysis, and agricultural advisory.",
    icon: "Brain",
    color: "#534AB7",
    proofPoint: "BAMIS AI advisory generation, I-Soil soil models",
    projectLink: "/projects/isoil",
  },
  {
    id: "automation",
    name: "Automation Solution",
    cluster: "data-ai-automation",
    description: "Automated bulletin and report generation with data parsing and dissemination.",
    icon: "Zap",
    color: "#534AB7",
    proofPoint: "BAMIS automated weather advisories and bulletins",
  },
  {
    id: "system-dev",
    name: "System Development",
    cluster: "data-ai-automation",
    description: "Bespoke systems for specific operational needs and data processing.",
    icon: "Cpu",
    color: "#534AB7",
    proofPoint: "Meteorology Inventory, Multiple Fax System",
  },
  {
    id: "api",
    name: "API Development",
    cluster: "data-ai-automation",
    description: "Real-time API data transmission from field stations to central systems.",
    icon: "Network",
    color: "#534AB7",
    proofPoint: "BMD station data integration, BAMIS weather data pipeline",
  },

  // Cluster 3: Infrastructure & Hosting
  {
    id: "server",
    name: "Server Solution",
    cluster: "infrastructure-hosting",
    description: "Cloud, VPS, and dedicated server hosting with reliable infrastructure.",
    icon: "Server",
    color: "#4a5568",
    proofPoint: "Hosting for BMD, BAMIS and enterprise clients",
  },
  {
    id: "data-center",
    name: "Data Center Solution",
    cluster: "infrastructure-hosting",
    description: "Enterprise-grade data center infrastructure with monitoring and support.",
    icon: "HardDrive",
    color: "#4a5568",
    proofPoint: "BMD load-balanced hosting sustaining peak cyclone-season traffic",
  },
  {
    id: "supply-maintenance",
    name: "Supply, Installation & Maintenance",
    cluster: "infrastructure-hosting",
    description: "Supply and installation of hardware/software with SSL, hosting and ongoing maintenance.",
    icon: "Wrench",
    color: "#4a5568",
    proofPoint: "BMD Chattogram database software supply, install, SSL & maintenance",
  },
  {
    id: "mail",
    name: "Mail Solution",
    cluster: "infrastructure-hosting",
    description: "Secure enterprise email infrastructure with spam protection and reliability.",
    icon: "Mail",
    color: "#4a5568",
    proofPoint: "Sunlife Insurance and Poly Cables mail-server infrastructure",
  },

  // Cluster 4: Enterprise & Support
  {
    id: "erp",
    name: "ERP Development",
    cluster: "enterprise-support",
    description: "Enterprise resource planning systems for finance, operations, and management.",
    icon: "Database",
    color: "#7370D8",
    proofPoint: "ESTEPS ERP and enterprise resource planning systems",
    projectLink: "/projects/esteps-erp",
  },
  {
    id: "finance",
    name: "Finance Management",
    cluster: "enterprise-support",
    description: "Financial and accounting software with reporting and balance-sheet output.",
    icon: "Wallet",
    color: "#7370D8",
    proofPoint: "CoxDA Financial Management System for a development authority",
    projectLink: "/projects/coxda",
  },
  {
    id: "hrms",
    name: "HRMS & Payroll",
    cluster: "enterprise-support",
    description: "Human resource management and payroll systems for corporates and NGOs.",
    icon: "Users",
    color: "#7370D8",
    proofPoint: "PAPYRUS HRMS (Sunlife) and HDF HRMS & payroll",
    projectLink: "/projects/sunlife-hrms",
  },
  {
    id: "corporate",
    name: "Corporate Support",
    cluster: "enterprise-support",
    description: "Ongoing hosting, maintenance, upgrades, and technical support for long-term success.",
    icon: "Users",
    color: "#7370D8",
    proofPoint: "BMD continuous maintenance and SSL provisioning",
  },
  {
    id: "domain-expert",
    name: "Domain Expert Solution",
    cluster: "enterprise-support",
    description: "Deep specialist knowledge in agro-met, hydrology, and climate science that generic IT vendors lack.",
    icon: "Award",
    color: "#7370D8",
    proofPoint: "18+ years specializing in climate and environmental systems",
  },
]

export const SOLUTION_CLUSTERS = [
  {
    id: "web-portal-mobile",
    name: "Web, Portal & Mobile",
    description: "Digital platforms and applications",
    icon: "Globe",
    color: "#7370D8",
    solutions: SOLUTIONS.filter(s => s.cluster === "web-portal-mobile"),
  },
  {
    id: "data-ai-automation",
    name: "Data, AI & Automation",
    description: "Intelligent systems and automation",
    icon: "Brain",
    color: "#534AB7",
    solutions: SOLUTIONS.filter(s => s.cluster === "data-ai-automation"),
  },
  {
    id: "infrastructure-hosting",
    name: "Infrastructure & Hosting",
    description: "Servers and data centers",
    icon: "Server",
    color: "#4a5568",
    solutions: SOLUTIONS.filter(s => s.cluster === "infrastructure-hosting"),
  },
  {
    id: "enterprise-support",
    name: "Enterprise & Support",
    description: "Business systems and services",
    icon: "Users",
    color: "#7370D8",
    solutions: SOLUTIONS.filter(s => s.cluster === "enterprise-support"),
  },
]

export function getSolutionById(id: string): Solution | undefined {
  return SOLUTIONS.find(s => s.id === id)
}

export function getSolutionsByCluster(cluster: string): Solution[] {
  return SOLUTIONS.filter(s => s.cluster === cluster)
}
