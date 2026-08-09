export interface NavChild {
  name: string
  href: string
  external?: boolean
}

export interface NavItem {
  name: string
  href: string
  external?: boolean
  children?: NavChild[]
}

export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sectors", href: "/sectors" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    {
      name: "R&D Innovation",
      href: "/rnd/team",
      children: [
        { name: "Team", href: "/rnd/team" },
        { name: "Projects", href: "/rnd/projects" },
      ],
    },
    { name: "IoT", href: "https://iot.websoftbd.net/", external: true },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ] as NavItem[],
  footer: {
    solutions: [
      { name: "Agro-Met Systems", href: "/sectors#agro-met" },
      { name: "AI & Big Data", href: "/sectors#ai" },
      { name: "Hydrology & Water", href: "/sectors#water" },
      { name: "Web Development", href: "/solutions#web" },
      { name: "App Development", href: "/solutions#mobile" },
      { name: "ERP & Server", href: "/solutions#erp" },
    ],
    featuredProjects: [
      { name: "BAMIS", href: "/projects/bamis" },
      { name: "BMD Systems", href: "/projects/bmd" },
      { name: "BWDB Platform", href: "/projects/bwdb" },
      { name: "I-Soil", href: "/projects/isoil" },
      { name: "Flood Forecasting", href: "/projects/flood" },
      { name: "Aviation Data", href: "/projects/aviation" },
    ],
    usefulLinks: [
      { name: "World Bank", href: "https://www.worldbank.org", external: true },
      { name: "JICA", href: "https://www.jica.go.jp", external: true },
      { name: "BAMIS", href: "https://www.bamis.gov.bd", external: true },
      { name: "BMD", href: "http://bmd.gov.bd/", external: true },
      { name: "FFWC", href: "http://ffwc.gov.bd/", external: true },
      { name: "BWDB", href: "https://bwdb.gov.bd/", external: true },
      { name: "SAFOAM", href: "https://safoam.org.in", external: true },
      { name: "INSAM", href: "https://insam.org.in", external: true },
    ],
  },
}
