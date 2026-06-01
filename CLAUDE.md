# CLAUDE.md — WebsoftBD Website Redesign Project

## Project Overview

This file contains all context, decisions, design specifications, and instructions for
Claude to assist with the full redesign of **websoftbd.net** — Bangladesh's leading ICT
company specializing in agro-meteorology, hydrology, water systems, and government data
platforms.

---

## Company Profile

| Field | Details |
|---|---|
| Company Name | Web Soft BD |
| Full Name | Web Soft Bangladesh |
| Founded | 2008 |
| Type | Privately held IT Consulting |
| HQ | Dhaka, Bangladesh (USA-registered) |
| Registered Office | 10th Floor, Shah Ali Tower, 33 Kawran Bazar, Dhaka-1215 |
| Sales Office | Level-2B, House-30, Road-02, Block-B, Pallabi, Section-12, Mirpur, Dhaka-1216 |
| Phone | +8801716983511, +8801681784574, +8801330004541, +8801601784580 |
| Email | info@websoftbd.net, fakrulebt@yahoo.com |
| Website (current) | https://www.websoftbd.net |
| Website (alt) | https://www.websoft.com.bd |

### Certifications
- ISO 9001:2015 (Quality Management)
- BASIS — Bangladesh Association of Software & Information Services
- CMMI certification
- QRO & QMS quality standards
- APN (Asia-Pacific Network) membership
- BCS (Bangladesh Computer Society) membership
- BASIS-Japan affiliation
- IAF accreditation

### Key Stats (to display on website)
- 18+ years operating (since 2008)
- 1,000+ projects finished
- 956 satisfied clients
- 4,556+ days worked

---

## Core Niche & Specialization

WebsoftBD is **not** a generic IT company. Their unique differentiator is deep specialization in:

1. **Agro-Meteorology** — Bangladesh Agro-Meteorological Information System (BAMIS)
2. **Meteorology** — Bangladesh Meteorological Department (BMD) systems
3. **Hydrology & Water** — Flood forecasting, salinity modeling, BWDB systems
4. **Big Data & Earth Observation** — AI-powered climate and land use analytics
5. **Aviation Data Systems** — Observed data sharing platforms
6. **Web & App Development** — Custom government portals, dashboards
7. **ERP & Server Solutions** — Enterprise infrastructure
8. **AI Development** — Machine learning for BAMIS, weather forecasting

**Tagline (approved):** "Engineering Earth Intelligence for a Resilient Future"

**Supporting tagline:** "Translating complex environmental, meteorological, and hydrological
data into intelligent enterprise platforms."

---

## Key Clients

### Anchor Clients (always display prominently)
- **World Bank**
- **JICA** (Japan International Cooperation Agency)
- **Bangladesh Meteorological Department (BMD)**
- **Bangladesh Water Development Board (BWDB)**
- **Department of Agricultural Extension (DAE)**

### Government & International
- Government of Bangladesh (various ministries)
- SAARC (South Asian Association for Regional Cooperation)
- A2i (Access to Information — Bangladesh Govt)
- Flood Forecasting & Warning Centre (FFWC)
- Bangladesh Olympic Association (NocBan)
- DMGI

### Development & NGO
- Human Development Foundation (HDF)
- ESDO
- Sundharban Agro
- Farming Future

### Academic & Private
- Dhaka University
- Sunlife Onetech
- Aesthetic International
- Lead Infosys
- Poly Cables
- Karim Karim
- Euro India
- Softel

---

## Key Projects (for portfolio showcase)

| Project | Sector | Client | Impact |
|---|---|---|---|
| BAMIS | Agro-Met · AI | Bangladesh Govt / World Bank | 1.2M+ farmers, 64 districts |
| Bangladesh Meteorological Dept System | Meteorology | BMD | National weather infrastructure |
| Aviation Observed Data Sharing System | Aviation | Govt | Real-time aviation weather |
| AI Development for BAMIS | AI · Big Data | Bangladesh Govt | National climate adaptation model |
| Salinity Intrusion Model | Water · Hydrology | BWDB | Coastal Bangladesh protection |
| 3D Flood Risk Mapping Simulation | Hydrology · GIS | BWDB / FFWC | Disaster preparedness |
| Meteorology Inventory Software | Meteorology | BMD | Asset management |
| Multiple Fax Software System | Communication | Govt | Legacy system modernization |
| Human Development Foundation System | NGO · Web | HDF | Social impact management |

---

## Design Direction

### Design Inspiration Sources
1. **Primary:** [tomorrow.io](https://www.tomorrow.io) — overall design concept, section
   structure, motion philosophy, sector tabs, case study spotlight, animated counters
2. **Secondary:** [skydigitalbd.com](https://www.skydigitalbd.com) — section ordering
   pattern, card anatomy, heading style (`■ SECTION ■`), nav structure

### Theme
**LIGHT THEME** — white background with purple-violet primary, dark navy accents. NOT dark
like tomorrow.io.

> **Primary color override (client confirmed):** `#7370D8` (purple-violet) replaces the
> earlier teal `#0E6E50` as the brand primary. All CTAs, active states, accents, and
> highlighted text use `#7370D8`. Teal is retired except where specifically noted.

### Color Palette

#### Primary (Brand) — Purple Violet
| Name | Hex | Usage |
|---|---|---|
| **Primary** | `#7370D8` | ⭐ Main brand color — CTAs, active tabs, links, highlights, borders |
| Primary Dark | `#5855C4` | Hover state for primary buttons |
| Primary Darker | `#3D3AAF` | Active/pressed state |
| Primary Light | `#9896E2` | Subtle accents, focus rings |
| Primary Pale | `#EEEDF9` | Section tint backgrounds, badge fills |
| Primary Faint | `#F5F4FC` | Alternating section backgrounds, card hover bg |

#### Neutrals & Dark
| Name | Hex | Usage |
|---|---|---|
| Deep Navy | `#0d1f35` | Dark sections — stats band, CTA band, footer |
| Dark Text | `#1a1a2e` | Primary headings |
| Muted Text | `#4a5568` | Body copy, subtitles |
| Subtle Text | `#718096` | Labels, captions, metadata, placeholders |
| Border Default | `#e2e8f0` | Card borders, dividers |
| Border Subtle | `#f0f0f8` | Inner borders, row separators |

#### Surfaces
| Name | Hex | Usage |
|---|---|---|
| Pure White | `#ffffff` | Cards, navbar on scroll, modal backgrounds |
| Off White | `#f8f9ff` | Alternating section backgrounds (slight purple tint) |
| Hero Gradient Start | `#ffffff` | Hero top |
| Hero Gradient End | `#f3f2fd` | Hero bottom (faint primary tint) |

#### Semantic
| Name | Hex | Usage |
|---|---|---|
| Success Green | `#1D9E75` | Positive metrics, success badges |
| Success Light | `#EFF9F5` | Success badge backgrounds |
| Warning Amber | `#F5A623` | Warning states |
| Error Red | `#E53E3E` | Error states |

#### CSS Custom Properties — define in `globals.css`

```css
:root {
  /* Primary brand */
  --color-primary:         #7370D8;
  --color-primary-dark:    #5855C4;
  --color-primary-darker:  #3D3AAF;
  --color-primary-light:   #9896E2;
  --color-primary-pale:    #EEEDF9;
  --color-primary-faint:   #F5F4FC;

  /* Dark / neutral */
  --color-navy:            #0d1f35;
  --color-text-primary:    #1a1a2e;
  --color-text-muted:      #4a5568;
  --color-text-subtle:     #718096;
  --color-border:          #e2e8f0;
  --color-border-subtle:   #f0f0f8;

  /* Surfaces */
  --color-white:           #ffffff;
  --color-surface:         #f8f9ff;
  --color-hero-end:        #f3f2fd;

  /* Semantic */
  --color-success:         #1D9E75;
  --color-success-light:   #EFF9F5;

  /* Spacing scale */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-5: 20px;  --space-6: 24px;
  --space-8: 32px;  --space-10: 40px; --space-12: 48px;
  --space-16: 64px; --space-20: 80px; --space-24: 96px;

  /* Border radius */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(115,112,216,0.08);
  --shadow-md:  0 4px 16px rgba(115,112,216,0.12);
  --shadow-lg:  0 8px 32px rgba(115,112,216,0.16);
  --shadow-card: 0 2px 8px rgba(0,0,0,0.06);

  /* Transitions */
  --transition-fast:   0.15s ease;
  --transition-base:   0.25s ease;
  --transition-slow:   0.4s ease;
}
```

### Typography

```
Headings:   Plus Jakarta Sans, 700 weight (or Inter 700)
Body:       Inter, 400 weight, 16px, line-height 1.7
Labels:     Inter, 500 weight, 12-13px, letter-spacing 0.04em
Monospace:  JetBrains Mono (for code/data displays)
```

**Heading scale:**
- H1 hero: 48-56px desktop, 32px mobile
- H2 section: 36-40px desktop, 26px mobile
- H3 card: 18-20px
- Body: 15-16px

---

## Page Structure (12 Sections in Order)

### Section 1 — Announcement Bar
- Single dismissable top bar
- Background: `#EFF9F5` (mint), text: `#085041`
- Content: Latest news (JICA agreement, new project, award)
- X button to dismiss
- Motion: slide-down on load (0.3s ease)

### Section 2 — Sticky Navbar
- Transparent over hero, white on scroll (after 80px)
- Left: W logo mark + "Web Soft BD" wordmark
- Center: `Sectors ∨` · `Solutions ∨` · `Projects` · `Clients` · `Contact`
- Right: `[Request Consultation]` — teal solid pill button
- Megamenu for Sectors: Agro-Meteorology, Hydrology & Water, Big Data, AI, Web & ERP
- Motion: white bg fades in on scroll with box-shadow, 0.3s transition

### Section 3 — Hero (Full Viewport)
- White to mint gradient background (`#ffffff` → `#f0fbf5`)
- Animated canvas/SVG background: Bangladesh weather radar rings, animated
  precipitation dots, river flow lines on topographic map
- Badge pill: `ISO 9001:2015 · BASIS · 18 Years`
- H1: "Engineering Earth Intelligence / for a **Resilient Future**"
  ("Resilient Future" in brand teal `#0E6E50`)
- Subtitle: "Translating complex environmental, meteorological, and hydrological
  data into intelligent enterprise platforms."
- 2 CTAs: `[Explore Solutions]` (teal solid) + `[View Projects]` (teal outline)
- 4 domain trust tags: Agro-Meteorology · AI & Big Data · Hydrology & Water · ERP & ICT
- Motion: headline fades up 20px on load (0.6s), subtitle 0.8s, CTAs 1.0s

### Section 4 — Client Logo Marquee
- Label: `TRUSTED BY LEADING ORGANIZATIONS` (uppercase, muted)
- 2 rows of logos scrolling in opposite directions
- Row 1: scrolls left, 35s loop — World Bank, JICA, BMD, BWDB, DAE, SAARC, A2i...
- Row 2: scrolls right, 45s loop — Dhaka Uni, FFWC, HDF, NocBan, ESDO, DMGI...
- White logo boxes with 0.5px border, colored logos (not grayscale)
- Hover: scroll pauses, logo scales up 5%
- Motion: `@keyframes marquee` + `animation-play-state: paused` on hover

### Section 5 — Sectors Tab Section
- Background: `#f8fbff`
- Eyebrow label: `OUR STRATEGIC SECTORS`
- H2: "Intelligence for every **domain**"
- Icon tab bar: Agro-Met · Hydrology · Big Data · AI · Web & ERP
- Active tab: teal filled + white text + teal bottom border
- Left: accordion list of 3 features per sector (expand/collapse)
- Right: animated dashboard mockup / map for that sector
- Motion: tab switch fades out 0.15s, fades in 0.25s; accordion max-height slide

**Sector content:**

| Sector | Features | Visual |
|---|---|---|
| Agro-Met | Crop yield monitoring, Satellite data integration, Forecast dissemination | BAMIS dashboard |
| Hydrology | 3D flood risk mapping, Salinity modeling, River basin telemetry | Flood map |
| Big Data | Climate data analytics, Multi-source fusion, Historical trend modeling | Data charts |
| AI | Weather prediction models, Anomaly detection, Adaptive forecasting | AI model viz |
| Web & ERP | Govt portals, Mobile apps, Server infrastructure | Portfolio grid |

### Section 6 — BAMIS Case Study Spotlight
- Background: `#EFF9F5` (mint surface)
- Label: `CASE STUDY · BAMIS DASHBOARD`
- H2: "Bangladesh Agro-Meteorological Information System"
- Left: 3 animated metric cards:
  - `1.2M+` Farmers receiving advisories
  - `64` Districts covered nationwide
  - `AI` National climate adaptation model
- Right: BAMIS dashboard screenshot with floating animation
- CTA: `Read Full Case Study →`
- Client badge: World Bank logo
- Motion: numbers count up on scroll-in; dashboard floats (translateY ±8px, 4s loop)

### Section 7 — Stats + Value Proposition Band
- Background: `#0d1f35` (deep navy)
- 4 animated counters (teal numbers `#1D9E75`):
  - `18+` Years operating
  - `1000+` Projects delivered
  - `956` Satisfied clients
  - `ISO` 9001:2015 certified
- Below: 3-column bold propositions:
  1. "Bangladesh's only ISO-certified agro-met ICT company"
  2. "AI-powered data fusion for weather and agriculture"
  3. "Trusted by World Bank, JICA & Bangladesh Government"
- Motion: counters animate up on scroll-in (1.5s easeOut, 0.1s stagger)

### Section 8 — Projects Grid
- Background: `#ffffff`
- Eyebrow: `FEATURED PROJECTS`
- H2: 'The **Solutions** We Are Known For' ("Solutions" in teal)
- 2×2 or 2×3 grid of project cards
- Each card: colored top bar (teal/blue/purple by sector), sector tag, project name,
  client name + 1-line impact stat
- Hover: card lifts 4px, border turns teal, "View Project →" appears
- Motion: cards fade up in stagger (4 cards × 80ms delay)

### Section 9 — Services Grid
- Background: `#f8fbff`
- Eyebrow: `OUR SERVICES`
- H2: "Solutions for every **data challenge**"
- 3×2 card grid
- Each card: teal icon in mint circle, service name, 1-line sector context
- Services:
  1. Agro-Met Systems (BAMIS · BMD · SAARC)
  2. AI & Big Data (Analytics · ML Models)
  3. Hydrology & Water (BWDB · Flood · Salinity)
  4. Web Development (Portals · Dashboards)
  5. App Development (Mobile · API · IoT)
  6. ERP & Server (Infrastructure · Cloud)
- Hover: card border teal, icon bg → teal, icon → white

### Section 10 — Client Testimonials
- Background: `#f8fbff`
- Eyebrow: `IN THEIR OWN WORDS`
- H2: 'How leaders use **Web Soft BD**'
- 2-column quote cards (or horizontal scroll carousel)
- Each card: client logo badge, person name + title, quote text
- Clients: World Bank, JICA, BMD, DAE officials
- Motion: cards slide in from right with 0.4s stagger

### Section 11 — CTA Band
- Background: `#0d1f35` (deep navy)
- H2: "Ready to transform your data into intelligence?"
- Subtitle: "Talk to our specialists about your meteorological, agricultural,
  or water management challenge."
- 2 buttons: `[Request Consultation]` (teal solid) + `[Download Brochure]` (ghost/outline)
- Motion: headline fades up, buttons scale from 0.95 on scroll-in

### Section 12 — Footer
- Background: `#081428` (darker navy)
- 4 columns:
  1. **Brand:** Logo + tagline + BASIS/ISO/CMMI/QRO certification badge icons
  2. **Solutions:** Agro-Met, Hydrology, Big Data, AI, Web Dev, App Dev, ERP
  3. **Projects:** BAMIS, BMD System, Aviation, Salinity Model, Flood Risk, more...
  4. **Contact:** Both office addresses, phone numbers, email, map link
- Useful Links bar below columns: World Bank, JICA, BAMIS, BMD, FFWC, BWDB,
  SAFOAM, INSAM
- Copyright bar: "© 2026 Web Soft BD. All Rights Reserved."
- Certification logo hover: grayscale → full color, 0.2s transition

---

## Motion & Animation Specifications

### Global Motion Principles
- All scroll-triggered animations use `IntersectionObserver` (threshold: 0.15)
- Entry animation: `opacity: 0; transform: translateY(20px)` → `opacity: 1;
  transform: translateY(0)` with `transition: 0.5s ease`
- Stagger within sections: 80ms delay increment per child element
- Respect `prefers-reduced-motion: reduce` — disable all animations if set
- No looping animations inside hero after initial load (except canvas background)

### Specific Animations

| Animation | Element | Specs |
|---|---|---|
| Hero canvas | Weather map background | `requestAnimationFrame`, 60fps, radar rings + rain dots |
| Navbar scroll | White bg fade-in | After 80px scroll, 0.3s CSS transition |
| Announcement bar | Slide down | 0.3s `translateY(-100%)` → `translateY(0)` on load |
| Client marquee | Logo rows | `@keyframes marquee`, 35s / 45s loops, opposite directions |
| Counter numbers | Stats band | `requestAnimationFrame` count-up, 1.5s easeOut, on scroll-in |
| Floating dashboard | Case study | `@keyframes float`, `translateY(-8px ↔ 0px)`, 4s ease-in-out loop |
| Card hover lift | Project + service cards | `translateY(-4px)` + border-color teal, 0.2s ease |
| Tab fade | Sector tabs | Content `opacity: 0 → 1`, 0.15s out + 0.25s in |
| Accordion slide | Sector features | `max-height: 0 → auto`, 0.3s ease |
| Testimonial slide | Testimonial cards | `translateX(30px) → 0` + `opacity`, 0.4s stagger |
| Logo hover color | Footer certs | `filter: grayscale(1) → grayscale(0)`, 0.2s |

---

## Tech Stack Recommendation

```
Framework:      Next.js 15 (App Router) — confirmed
Styling:        shadcn/ui + Vanilla CSS (custom properties in globals.css)
                ⚠️ NO Tailwind — use vanilla CSS with CSS custom properties only
UI Components:  shadcn/ui for all reusable primitives (Button, Card, Badge,
                Tabs, Accordion, Sheet, Dialog, NavigationMenu, etc.)
Animations:     Vanilla CSS transitions + IntersectionObserver API (no GSAP/Framer)
Canvas:         Native Canvas 2D API for hero animated background
Icons:          Lucide React (already ships with shadcn/ui)
Fonts:          next/font/google — Plus Jakarta Sans (headings) + Inter (body)
Images:         next/image with WebP + priority on hero images
Data:           Static JSON files — NO database, NO CMS, NO API calls
Deployment:     Vercel (recommended for Next.js)
```

### Styling Rules — Vanilla CSS + shadcn

This is a **100% frontend project** with no backend. All styling is done with:
1. **shadcn/ui components** — for UI primitives (buttons, cards, tabs, etc.)
2. **Vanilla CSS** — for layout, section styling, animations, custom design tokens
3. **CSS custom properties** (`var(--color-primary)` etc.) — defined in `globals.css`

**Never use:**
- Tailwind CSS utility classes
- CSS-in-JS (styled-components, emotion)
- inline `style={{}}` props except for truly dynamic values (e.g. animation delays)
- Bootstrap or any other CSS framework

**Always use:**
- BEM-style class naming: `.section-hero`, `.hero__headline`, `.hero__cta--primary`
- CSS modules (`.module.css`) for component-scoped styles
- Global `globals.css` for CSS custom properties, resets, and shared utilities
- shadcn components as the base, extended with CSS module overrides

### shadcn/ui Component Usage Guide

Install shadcn and use these components as the foundation:

```bash
npx shadcn@latest init
npx shadcn@latest add button card badge tabs accordion sheet dialog navigation-menu separator
```

| shadcn Component | Used For |
|---|---|
| `<Button>` | All CTAs — "Request Consultation", "Explore Solutions", etc. |
| `<Card>` | Project cards, service cards, testimonial cards |
| `<Badge>` | Sector tags (AGRO-MET, HYDROLOGY, AI), cert badges |
| `<Tabs>` | Sectors tab section (Agro-Met / Hydrology / Big Data…) |
| `<Accordion>` | Sector feature lists (expand/collapse per feature) |
| `<NavigationMenu>` | Mega-menu navbar with Sectors and Solutions dropdowns |
| `<Sheet>` | Mobile drawer navigation |
| `<Dialog>` | Project detail modal / case study lightbox |
| `<Separator>` | Section dividers |
| `<Avatar>` | Testimonial author avatars |

**Extending shadcn with vanilla CSS:**
```css
/* In ComponentName.module.css — override shadcn tokens */
.heroButton {
  background-color: var(--color-primary);   /* #7370D8 */
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  transition: background-color var(--transition-fast);
}
.heroButton:hover {
  background-color: var(--color-primary-dark);
}
```

Also update `globals.css` to override shadcn's default CSS variables:
```css
/* Map our brand tokens onto shadcn's CSS variable names */
:root {
  --primary:            215 70% 63%;   /* shadcn uses HSL — #7370D8 ≈ hsl(242,56%,63%) */
  --primary-foreground: 0 0% 100%;
  --ring:               242 56% 63%;
  --radius:             0.625rem;      /* 10px — our --radius-md */
}
```

---

## Data Architecture — JSON Files

This is a **pure frontend project**. All content lives in static JSON files under
`/src/data/`. No API calls, no database, no server-side data fetching beyond
`getStaticProps` / `generateStaticParams` in Next.js.

### Folder Structure

```
websoftbd/
├── public/
│   ├── images/
│   │   ├── clients/          # client logo PNGs/SVGs
│   │   ├── projects/         # project screenshots
│   │   ├── certifications/   # cert badge images
│   │   └── team/             # team member photos
│   └── files/
│       ├── brochure.pdf
│       ├── e-catalogue.pdf
│       └── profile.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # homepage
│   │   ├── projects/
│   │   │   ├── page.tsx       # projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # individual project
│   │   ├── clients/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AnnouncementBar.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ClientMarquee.tsx
│   │   │   ├── SectorsTab.tsx
│   │   │   ├── CaseStudySpotlight.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ProjectsGrid.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CtaBand.tsx
│   │   │   └── UsefulLinks.tsx
│   │   └── ui/               # shadcn components live here
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ...
│   │
│   ├── data/                  # ALL CONTENT AS JSON
│   │   ├── site.json          # global site config
│   │   ├── announcement.json  # announcement bar content
│   │   ├── nav.json           # navigation structure
│   │   ├── hero.json          # hero section content
│   │   ├── clients.json       # client list + logo paths
│   │   ├── sectors.json       # sector tabs content
│   │   ├── projects.json      # all project data
│   │   ├── services.json      # services list
│   │   ├── stats.json         # counter numbers
│   │   ├── testimonials.json  # client quotes
│   │   ├── team.json          # team members
│   │   ├── certifications.json
│   │   └── useful-links.json
│   │
│   ├── lib/
│   │   └── utils.ts           # shadcn cn() utility + helpers
│   │
│   └── styles/
│       ├── globals.css        # CSS custom properties + resets
│       ├── animations.css     # All @keyframes definitions
│       └── components/        # CSS modules per component
│           ├── Navbar.module.css
│           ├── Hero.module.css
│           ├── ClientMarquee.module.css
│           ├── SectorsTab.module.css
│           ├── ProjectCard.module.css
│           └── ...
```

### JSON File Schemas

#### `/src/data/site.json`
```json
{
  "company": {
    "name": "Web Soft BD",
    "tagline": "Engineering Earth Intelligence for a Resilient Future",
    "subTagline": "Translating complex environmental, meteorological, and hydrological data into intelligent enterprise platforms.",
    "email": "info@websoftbd.net",
    "phone": "+8801716983511",
    "founded": 2008,
    "offices": [
      {
        "type": "Registered",
        "address": "10th Floor, Shah Ali Tower, 33 Kawran Bazar, Dhaka-1215, Bangladesh"
      },
      {
        "type": "Sales",
        "address": "Level-2B, House-30, Road-02, Block-B, Pallabi, Section-12, Mirpur, Dhaka-1216"
      }
    ],
    "social": {
      "facebook": "http://facebook.com/websoftbangladesh",
      "linkedin": "https://www.linkedin.com/company/websoftbd/"
    }
  },
  "seo": {
    "title": "Web Soft BD — ICT Solutions for Agro-Meteorology, Hydrology & Climate",
    "description": "Bangladesh's leading ICT company for agro-meteorological, hydrological and water management systems. Trusted by World Bank, JICA & Bangladesh Govt since 2008.",
    "ogImage": "/images/og-image.png"
  }
}
```

#### `/src/data/announcement.json`
```json
{
  "enabled": true,
  "message": "WebsoftBD & JICA sign new agreement for Bangladesh flood forecasting system 2026",
  "linkText": "Read More",
  "linkHref": "/projects/flood-forecasting-2026"
}
```

#### `/src/data/clients.json`
```json
{
  "anchor": [
    { "id": "world-bank", "name": "World Bank", "logo": "/images/clients/world-bank.png", "url": "https://www.worldbank.org" },
    { "id": "jica", "name": "JICA", "logo": "/images/clients/jica.png", "url": "https://www.jica.go.jp" },
    { "id": "bmd", "name": "Bangladesh Meteorological Department", "logo": "/images/clients/bmd.png", "url": "http://bmd.gov.bd/" },
    { "id": "bwdb", "name": "Bangladesh Water Development Board", "logo": "/images/clients/bwdb.png", "url": "https://bwdb.gov.bd/" },
    { "id": "dae", "name": "Department of Agricultural Extension", "logo": "/images/clients/dae.png", "url": "#" }
  ],
  "government": [
    { "id": "saarc", "name": "SAARC", "logo": "/images/clients/saarc.png", "url": "#" },
    { "id": "a2i", "name": "A2i", "logo": "/images/clients/a2i.png", "url": "#" },
    { "id": "ffwc", "name": "Flood Forecasting & Warning Centre", "logo": "/images/clients/ffwc.png", "url": "http://ffwc.gov.bd/" },
    { "id": "nocban", "name": "Bangladesh Olympic Association", "logo": "/images/clients/nocban.png", "url": "https://nocban.org/" }
  ],
  "ngo": [
    { "id": "hdf", "name": "Human Development Foundation", "logo": "/images/clients/hdf.png", "url": "#" },
    { "id": "esdo", "name": "ESDO", "logo": "/images/clients/esdo.png", "url": "#" }
  ],
  "private": [
    { "id": "dhaka-university", "name": "Dhaka University", "logo": "/images/clients/du.png", "url": "#" },
    { "id": "softel", "name": "Softel", "logo": "/images/clients/softel.png", "url": "#" }
  ]
}
```

#### `/src/data/projects.json`
```json
[
  {
    "id": "bamis",
    "slug": "bamis",
    "name": "Bangladesh Agro-Meteorological Information System",
    "shortName": "BAMIS",
    "sector": "Agro-Met",
    "tags": ["Agro-Met", "AI", "Govt"],
    "client": "Bangladesh Govt / World Bank",
    "clientLogo": "/images/clients/world-bank.png",
    "impact": "Serving 1.2M+ farmers across 64 districts",
    "stats": [
      { "value": "1.2M+", "label": "Farmers receiving advisories" },
      { "value": "64", "label": "Districts covered" },
      { "value": "AI", "label": "National climate adaptation model" }
    ],
    "description": "A cloud-based agro-meteorological platform providing real-time weather data, crop advisories, and climate forecasts to farmers across Bangladesh.",
    "image": "/images/projects/bamis.png",
    "dashboardImage": "/images/projects/bamis-dashboard.png",
    "featured": true,
    "accentColor": "#7370D8"
  },
  {
    "id": "bmd-system",
    "slug": "bmd-system",
    "name": "Bangladesh Meteorological Department System",
    "shortName": "BMD System",
    "sector": "Meteorology",
    "tags": ["Meteorology", "Govt"],
    "client": "BMD",
    "clientLogo": "/images/clients/bmd.png",
    "impact": "National weather data infrastructure",
    "stats": [],
    "description": "Comprehensive meteorological data management and forecasting system for Bangladesh's national weather authority.",
    "image": "/images/projects/bmd.png",
    "featured": true,
    "accentColor": "#185FA5"
  },
  {
    "id": "aviation-data",
    "slug": "aviation-data-sharing",
    "name": "Aviation Observed Data Sharing System",
    "shortName": "Aviation Data",
    "sector": "Aviation",
    "tags": ["Aviation", "Data Sharing"],
    "client": "Bangladesh Govt",
    "impact": "Real-time aviation weather integration",
    "image": "/images/projects/aviation.jpg",
    "featured": true,
    "accentColor": "#854F0B"
  },
  {
    "id": "ai-bamis",
    "slug": "ai-for-bamis",
    "name": "Artificial Intelligence Development for BAMIS",
    "shortName": "AI for BAMIS",
    "sector": "AI",
    "tags": ["AI", "Big Data", "Agro-Met"],
    "client": "Bangladesh Govt",
    "impact": "National climate adaptation model",
    "image": "/images/projects/ai-bamis.jpg",
    "featured": true,
    "accentColor": "#534AB7"
  },
  {
    "id": "salinity-model",
    "slug": "salinity-model",
    "name": "Salinity Intrusion Model",
    "shortName": "Salinity Model",
    "sector": "Hydrology",
    "tags": ["Water", "Hydrology", "GIS"],
    "client": "BWDB",
    "impact": "Coastal Bangladesh protection",
    "image": "/images/projects/salinity.jpeg",
    "featured": false,
    "accentColor": "#185FA5"
  },
  {
    "id": "flood-risk",
    "slug": "3d-flood-risk-mapping",
    "name": "3D Flood Risk Mapping Simulation",
    "shortName": "Flood Risk Map",
    "sector": "Hydrology",
    "tags": ["Hydrology", "GIS", "3D"],
    "client": "BWDB / FFWC",
    "impact": "Disaster preparedness platform",
    "image": "/images/projects/flood.jpg",
    "featured": false,
    "accentColor": "#185FA5"
  }
]
```

#### `/src/data/sectors.json`
```json
[
  {
    "id": "agro-met",
    "label": "Agro-Met",
    "icon": "CloudRain",
    "title": "Agro-Meteorology & Food Security",
    "description": "Real-time crop advisory and weather intelligence for farmers, DAE, and food security planners.",
    "features": [
      { "title": "Crop yield monitoring", "description": "Satellite-linked crop health tracking across 64 districts", "icon": "Sprout" },
      { "title": "Satellite data integration", "description": "Remote sensing for climate and land use analysis", "icon": "Satellite" },
      { "title": "Forecast dissemination", "description": "Weather advisories to 1.2M+ farmers via BAMIS", "icon": "Radio" }
    ],
    "visual": { "type": "dashboard", "image": "/images/projects/bamis-dashboard.png", "label": "BAMIS Dashboard — live" },
    "relatedProjects": ["bamis", "ai-bamis"]
  },
  {
    "id": "hydrology",
    "label": "Hydrology",
    "icon": "Droplets",
    "title": "Hydrology & Water Management",
    "description": "Flood forecasting, salinity modeling, and river basin telemetry for Bangladesh's water authorities.",
    "features": [
      { "title": "3D flood risk mapping", "description": "High-resolution simulation of flood inundation zones", "icon": "Map" },
      { "title": "Salinity intrusion modeling", "description": "Coastal saline water movement prediction", "icon": "Waves" },
      { "title": "River basin telemetry", "description": "Real-time sensor data from river monitoring stations", "icon": "Activity" }
    ],
    "visual": { "type": "map", "image": "/images/projects/flood.jpg", "label": "Flood Risk Map — BWDB" },
    "relatedProjects": ["salinity-model", "flood-risk"]
  },
  {
    "id": "big-data",
    "label": "Big Data",
    "icon": "Database",
    "title": "Big Data & Earth Observation",
    "description": "Large-scale environmental data pipelines, multi-source fusion, and historical trend analytics.",
    "features": [
      { "title": "Climate data analytics", "description": "Processing petabytes of historical and real-time climate data", "icon": "BarChart3" },
      { "title": "Multi-source data fusion", "description": "Merging satellite, ground station, and IoT sensor data", "icon": "GitMerge" },
      { "title": "Historical trend modeling", "description": "Long-range climate pattern analysis for policy planning", "icon": "TrendingUp" }
    ],
    "visual": { "type": "chart", "image": "/images/projects/bigdata.png", "label": "Climate Analytics Dashboard" },
    "relatedProjects": ["ai-bamis"]
  },
  {
    "id": "ai",
    "label": "AI",
    "icon": "Brain",
    "title": "Artificial Intelligence",
    "description": "Machine learning models for weather prediction, anomaly detection, and adaptive agricultural forecasting.",
    "features": [
      { "title": "Weather prediction models", "description": "Deep learning for hyper-local weather forecasting", "icon": "Cpu" },
      { "title": "Anomaly detection", "description": "Early warning systems for extreme weather events", "icon": "AlertTriangle" },
      { "title": "Adaptive forecasting", "description": "Self-improving models trained on Bangladesh-specific data", "icon": "RefreshCw" }
    ],
    "visual": { "type": "ai", "image": "/images/projects/ai-bamis.jpg", "label": "AI Weather Model Output" },
    "relatedProjects": ["ai-bamis", "bamis"]
  },
  {
    "id": "web-erp",
    "label": "Web & ERP",
    "icon": "Globe",
    "title": "Web, App & ERP Systems",
    "description": "Custom government portals, mobile applications, and enterprise resource planning solutions.",
    "features": [
      { "title": "Government data portals", "description": "Secure, accessible web platforms for public sector", "icon": "Building2" },
      { "title": "Mobile applications", "description": "iOS and Android apps for field data collection", "icon": "Smartphone" },
      { "title": "ERP & server solutions", "description": "Enterprise infrastructure and process automation", "icon": "Server" }
    ],
    "visual": { "type": "portfolio", "image": "/images/projects/portal.png", "label": "Government Portal" },
    "relatedProjects": ["bmd-system", "aviation-data"]
  }
]
```

#### `/src/data/services.json`
```json
[
  { "id": "agro-met-systems", "icon": "CloudRain", "name": "Agro-Met Systems", "description": "Bangladesh-specific agro-meteorological platforms integrating satellite, station, and advisory data.", "sectors": ["BAMIS", "BMD", "SAARC"], "accentColor": "#7370D8" },
  { "id": "ai-big-data", "icon": "Brain", "name": "AI & Big Data", "description": "Machine learning models and large-scale data pipelines for environmental intelligence.", "sectors": ["Analytics", "ML Models"], "accentColor": "#534AB7" },
  { "id": "hydrology-water", "icon": "Droplets", "name": "Hydrology & Water", "description": "Flood forecasting, salinity modeling, and water resource management systems.", "sectors": ["BWDB", "Flood", "Salinity"], "accentColor": "#185FA5" },
  { "id": "web-development", "icon": "Globe", "name": "Web Development", "description": "Custom government portals, data dashboards, and public-facing web platforms.", "sectors": ["Portals", "Dashboards"], "accentColor": "#7370D8" },
  { "id": "app-development", "icon": "Smartphone", "name": "App Development", "description": "Mobile apps for iOS and Android, API integrations, and IoT data collection.", "sectors": ["Mobile", "API", "IoT"], "accentColor": "#7370D8" },
  { "id": "erp-server", "icon": "Server", "name": "ERP & Server", "description": "Enterprise resource planning systems and server infrastructure management.", "sectors": ["Infrastructure", "Cloud"], "accentColor": "#4a5568" }
]
```

#### `/src/data/stats.json`
```json
[
  { "id": "years", "value": 18, "suffix": "+", "label": "Years operating", "description": "Since 2008" },
  { "id": "projects", "value": 1000, "suffix": "+", "label": "Projects delivered", "description": "Across govt & private sector" },
  { "id": "clients", "value": 956, "suffix": "", "label": "Satisfied clients", "description": "Nationally and internationally" },
  { "id": "certified", "value": null, "text": "ISO", "suffix": "", "label": "9001:2015 certified", "description": "Quality management standard" }
]
```

#### `/src/data/testimonials.json`
```json
[
  {
    "id": "world-bank-1",
    "org": "World Bank",
    "orgLogo": "/images/clients/world-bank.png",
    "personName": "Senior Agriculture Specialist",
    "personRole": "World Bank Bangladesh Office",
    "quote": "WebsoftBD delivered a robust agro-met platform that directly supports food security for millions of farmers across Bangladesh.",
    "project": "BAMIS"
  },
  {
    "id": "jica-1",
    "org": "JICA Bangladesh",
    "orgLogo": "/images/clients/jica.png",
    "personName": "Project Director",
    "personRole": "JICA Bangladesh Office",
    "quote": "The flood forecasting system developed by WebsoftBD has significantly improved our disaster preparedness capabilities.",
    "project": "Flood Forecasting System"
  }
]
```

#### `/src/data/certifications.json`
```json
[
  { "id": "iso", "name": "ISO 9001:2015", "logo": "/images/certifications/iso.jpg", "pdf": "/files/iso.pdf" },
  { "id": "basis", "name": "BASIS", "logo": "/images/certifications/basis.png", "pdf": "/files/basis.pdf" },
  { "id": "cmmi", "name": "CMMI", "logo": "/images/certifications/cmmi.png", "pdf": "/files/ukcert.pdf" },
  { "id": "qro", "name": "QRO", "logo": "/images/certifications/qro.png", "pdf": "/files/qro.pdf" },
  { "id": "apn", "name": "APN", "logo": "/images/certifications/apn.png", "pdf": "/files/apn.pdf" },
  { "id": "bcs", "name": "BCS Member", "logo": "/images/certifications/bcs_member.png", "pdf": "/files/bcs_member.pdf" }
]
```

### How Components Read JSON Data

Since this is Next.js App Router, import JSON directly — no `fetch` needed:

```typescript
// src/app/page.tsx
import projects from '@/data/projects.json'
import clients from '@/data/clients.json'
import sectors from '@/data/sectors.json'
import stats from '@/data/stats.json'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarquee clients={[...clients.anchor, ...clients.government]} />
      <SectorsTab sectors={sectors} />
      <ProjectsGrid projects={projects.filter(p => p.featured)} />
      <StatsSection stats={stats} />
      {/* ... */}
    </>
  )
}
```

```typescript
// src/app/projects/[slug]/page.tsx
import projects from '@/data/projects.json'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  // render project detail page
}
```

---

## Navigation Structure

```
Sectors ∨
  ├── Agro-Meteorology & Food Security
  ├── Hydrology & Water Management
  ├── Big Data & Earth Observation
  ├── Artificial Intelligence
  └── Web, App & ERP

Solutions ∨
  ├── BAMIS Platform
  ├── Flood Forecasting Systems
  ├── Salinity Modeling
  ├── Aviation Data Systems
  └── Government Portals

Projects
Clients
About (in footer or secondary)
Contact
```

---

## Content Rules

### Headlines — Pattern
Follow the tomorrow.io / Sky Digital pattern:
- Part of headline in dark navy `#0d1f35`, keyword in brand teal `#0E6E50`
- Example: 'The **Solutions** We Are Known For'
- Example: "Engineering Earth Intelligence for a **Resilient Future**"

### Section Eyebrow Labels
- Uppercase, letter-spacing 0.06em, brand teal `#0E6E50`, 11-12px
- Example: `OUR STRATEGIC SECTORS` / `FEATURED PROJECTS` / `IN THEIR OWN WORDS`

### Buttons

Use shadcn `<Button>` as the base, override styles in a CSS module:

```css
/* styles/components/Button.module.css */

/* Primary — solid purple */
.btnPrimary {
  background-color: var(--color-primary);   /* #7370D8 */
  color: #ffffff;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  font-size: 15px;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}
.btnPrimary:hover { background-color: var(--color-primary-dark); }   /* #5855C4 */
.btnPrimary:active { transform: scale(0.98); background-color: var(--color-primary-darker); }

/* Secondary — outlined purple */
.btnSecondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  font-size: 15px;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}
.btnSecondary:hover { background-color: var(--color-primary-faint); }  /* #F5F4FC */

/* Ghost — text-only */
.btnGhost {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
  font-weight: 500;
  padding: var(--space-3) var(--space-4);
  transition: color var(--transition-fast);
}
.btnGhost:hover { color: var(--color-primary-dark); }
```

### Cards

Use shadcn `<Card>` as the base:

```css
/* styles/components/Card.module.css */
.card {
  background-color: var(--color-white);
  border: 0.5px solid var(--color-border);       /* #e2e8f0 */
  border-radius: var(--radius-lg);               /* 14px */
  padding: var(--space-6);
  transition: border-color var(--transition-fast),
              transform var(--transition-fast),
              box-shadow var(--transition-fast);
}
.card:hover {
  border-color: var(--color-primary);            /* #7370D8 */
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Sector tag / badge on cards */
.cardTag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  background-color: var(--color-primary-pale);   /* #EEEDF9 */
  padding: 2px 10px;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-2);
}
```

### Active States & Focus Rings
```css
/* All interactive elements */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Sector tabs — active */
.tabActive {
  background-color: var(--color-primary);
  color: #ffffff;
  border-color: var(--color-primary);
}

/* Nav links — hover underline */
.navLink::after {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}
.navLink:hover::after { transform: scaleX(1); }
```

---

## What to AVOID

### Styling
1. Do NOT use Tailwind CSS — this project uses shadcn/ui + Vanilla CSS only
2. Do NOT use Bootstrap, styled-components, emotion, or any other CSS framework
3. Do NOT use inline `style={{}}` props for anything that could be a CSS class
4. Do NOT hardcode color hex values in JSX — always use `var(--color-primary)` etc.
5. Do NOT use the old teal `#0E6E50` as primary — it is replaced by `#7370D8`
6. Do NOT use dark backgrounds in content sections (only Stats band, CTA band, Footer)

### Data & Architecture
7. Do NOT create any API routes for this project — it is 100% static frontend
8. Do NOT use `useEffect` + `fetch` to load content — import JSON directly
9. Do NOT add a CMS or database — all data lives in `/src/data/*.json`
10. Do NOT use `any` TypeScript types — define proper interfaces for all JSON shapes

### Content & Design
11. Do NOT use Bootstrap or jQuery
12. Do NOT use generic stock photo backgrounds
13. Do NOT copy text verbatim from skydigitalbd.com or tomorrow.io
14. Do NOT add emojis in UI elements
15. Do NOT use more than 2 font families (Plus Jakarta Sans + Inter only)
16. Do NOT use carousels for the main hero (animated canvas background instead)
17. Do NOT move Download Brochure / Investor Search to main nav — footer only
18. Do NOT forget `prefers-reduced-motion` media query on all animations
19. Do NOT use `<img>` tags — always use Next.js `<Image>` component

---

## Files & Assets Needed

### From Client
- [ ] High-resolution company logo (SVG preferred)
- [ ] Professional photos of team / office
- [ ] BAMIS dashboard screenshot (high-res)
- [ ] BMD system screenshot
- [ ] Client logos: World Bank, JICA, BMD, BWDB, DAE, SAARC, A2i (official formats)
- [ ] Testimonial quotes from World Bank / JICA contacts (with permission)
- [ ] Certification certificate images (BASIS, ISO, CMMI, QRO)
- [ ] Any video footage of field work / system demos (optional)

### To Generate / Create
- [ ] Animated SVG hero background (Bangladesh weather map)
- [ ] Custom icon set for sector tabs (Tabler Icons base)
- [ ] Favicon (W mark in teal)
- [ ] OG image for social sharing (1200×630)
- [ ] Section illustration for each sector (simplified flat)

---

## SEO Metadata

```html
Title:       Web Soft BD — ICT Solutions for Agro-Meteorology, Hydrology & Climate
Description: Bangladesh's leading ICT company for agro-meteorological, hydrological
             and water management systems. Trusted by World Bank, JICA & Bangladesh
             Govt since 2008. ISO 9001:2015 certified.
Keywords:    agro-meteorology Bangladesh, BAMIS, hydrology software, weather ICT,
             flood forecasting system, Bangladesh water management, ICT solutions
             Dhaka, government software Bangladesh
OG Image:    /og-image.png (1200×630)
```

---

## Useful External Links (for footer)

```
The World Bank:          https://www.worldbank.org
JICA:                    https://www.jica.go.jp/english/
Bangladesh Met Dept:     http://bmd.gov.bd/
BAMIS:                   https://bamis.gov.bd/
Flood Forecasting:       http://ffwc.gov.bd/
Bangladesh Water Dev:    https://bwdb.gov.bd/
SAFOAM:                  https://safoam.org.in
INSAM:                   https://insam.org.in
Bangladesh Olympic Assoc: https://nocban.org/
```

---

## Competitor Reference

| Competitor | URL | What to learn |
|---|---|---|
| Sky Digital BD | https://skydigitalbd.com | Section ordering, card anatomy, nav structure |
| Tomorrow.io | https://www.tomorrow.io | Design concept, motion system, sector tabs, case study format |
| Meteomatics | https://www.meteomatics.com | Dark hero with data viz, industry pages, case studies |
| Vaisala | https://www.vaisala.com | Sector-based solutions architecture |
| Farmonaut | https://farmonaut.com | Agri-tech niche, satellite imagery usage |
| StormGeo | https://www.stormgeo.com | Government client presentation |

---

## Current Website Analysis Summary

**What to keep:**
- Core content: company description, project names, client list
- Certification section (improve styling)
- Useful links section (move to footer)
- Contact info (both office addresses)
- QR codes for brochure/catalogue downloads (footer)

**What to remove from main nav:**
- "Download Brochure" → move to footer + CTA band
- "Investor Search" → move to footer
- "E-Catalogue" → move to footer
- "Download Profile" → move to footer
- "Message of Founder & CEO" → move to About page

**What to redesign completely:**
- Hero section (replace spinning text carousel with full-viewport hero)
- Services cards (replace generic Bootstrap cards with sector-tagged cards)
- Portfolio (replace thumbnail grid with impact-driven case study cards)
- Color scheme (replace blue/grey with navy/teal)
- Typography (replace default Bootstrap fonts with Plus Jakarta Sans + Inter)
- Footer (expand from thin footer to 4-column dark footer)

---

## Current Status

### Decisions Locked ✅
- [x] Current website analyzed (websoftbd.net)
- [x] Competitor analyzed: Sky Digital BD — section pattern captured
- [x] Competitor analyzed: Tomorrow.io — design concept + motion system captured
- [x] Design direction: light theme, tomorrow.io concept
- [x] **Primary color confirmed: `#7370D8` (purple-violet)**
- [x] Full color palette finalized (see Color Palette section)
- [x] Tech stack confirmed: **Next.js 15 + shadcn/ui + Vanilla CSS**
- [x] Data strategy confirmed: **Static JSON files, pure frontend, no backend**
- [x] 12-section page structure finalized
- [x] Motion & animation specifications documented
- [x] Typography decided: Plus Jakarta Sans + Inter
- [x] All JSON schemas designed (8 data files)
- [x] Project folder structure designed
- [x] CLAUDE.md created and updated

### In Progress / Next Steps
- [ ] Scaffold Next.js 15 project with shadcn/ui
- [ ] Set up `globals.css` with all CSS custom properties
- [ ] Create all JSON data files under `/src/data/`
- [ ] Build `AnnouncementBar` component
- [ ] Build `Navbar` component (transparent → white on scroll)
- [ ] Build `HeroSection` with animated canvas background
- [ ] Build `ClientMarquee` (dual-direction infinite scroll)
- [ ] Build `SectorsTab` (interactive tabs + accordion)
- [ ] Build `CaseStudySpotlight` (BAMIS with animated counters)
- [ ] Build `StatsSection` (dark navy, count-up animation)
- [ ] Build `ProjectsGrid` (filterable cards)
- [ ] Build `ServicesGrid` (6-card grid)
- [ ] Build `TestimonialsSection`
- [ ] Build `CtaBand`
- [ ] Build `Footer` (4-column + useful links)
- [ ] Build individual project pages (`/projects/[slug]`)
- [ ] Logo assets received from client
- [ ] Mobile responsive breakpoints tested
- [ ] `prefers-reduced-motion` applied everywhere
- [ ] Performance audit (Lighthouse > 90)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Client review & feedback
- [ ] Launch

---

## How to Use This File

When starting a new conversation about this project, paste this CLAUDE.md and say:

> "Continue working on the WebsoftBD redesign. Read CLAUDE.md for full context."

Claude will then have all the context needed to continue without re-explaining anything.

### Quick Reference by Task

| Task | Read These Sections |
|---|---|
| "Set up the project" | Tech Stack, Data Architecture → Folder Structure |
| "Build the hero section" | Section 3, Motion specs, Color Palette, Tech Stack |
| "Build the sectors tab" | Section 5, sectors.json schema, shadcn `<Tabs>` |
| "What's the primary color?" | Color Palette → Primary (Brand) — `#7370D8` |
| "How do I style a button?" | Content Rules → Buttons (CSS module example) |
| "Where does data come from?" | Data Architecture → JSON File Schemas |
| "Which shadcn components to use?" | Tech Stack → shadcn/ui Component Usage Guide |
| "What CSS variables exist?" | Color Palette → CSS Custom Properties |
| "What's the font?" | Typography — Plus Jakarta Sans + Inter |
| "What are the client logos?" | Key Clients + clients.json schema |
| "What's the folder structure?" | Data Architecture → Folder Structure |
| "What animations to add?" | Motion & Animation Specifications table |

### First Command to Run (project setup)

```bash
npx create-next-app@latest websoftbd --typescript --eslint --app --src-dir --import-alias "@/*"
cd websoftbd
npx shadcn@latest init
npx shadcn@latest add button card badge tabs accordion sheet dialog navigation-menu separator avatar
```

---

*Last updated: May 2026 | Project: WebsoftBD Homepage Redesign v2.1*
*Changes in v2.1: Primary color updated to `#7370D8`, tech stack confirmed as Next.js 15 +
shadcn/ui + Vanilla CSS, data architecture added with full JSON schemas, folder structure
defined, Tailwind removed from stack.*
