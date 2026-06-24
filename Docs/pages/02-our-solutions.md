# Content Guide — Our Solutions (`/solutions`)

Current state: `app/solutions/page.tsx` is a stub. There's already a `SECTORS` array (12 entries, full features + visuals) and a `SERVICES` array (6 entries) in `app/page.tsx` — between them they cover most of what "Solutions" needs, but neither matches the company's own full service list from the profile PDF. This guide reconciles the two and tells you what to add.

## Sectors vs. Solutions — keep them distinct

You only asked for a Solutions page this round, but `/sectors` is also a stub and pulls from the same well, so it's worth being clear on the split so you don't build the same page twice:

- **Sectors** = *who/what domain* we serve (Agro-Met, Meteorology, Agriculture, Water, AI, Web & ERP...). The existing `SECTORS` array already models this well — 12 entries, each with 3 features and a "visual" (a real screenshot reference). This is largely ready to wire into `/sectors` as-is.
- **Solutions** = *what we sell/do* — the actual named service lines, which is what this guide is for.

## The company's own service list (verbatim from the profile PDF)

The PDF names exactly 14 services, twice (once as a flat list, once as a two-column "Our Services" layout):

> Web Solution · Mail Solution · Server Solution · Apps Development (Android & iOS) · Portal Development · A.I. Solution · Automation Solution · System Development · Data Center Solution · Software Development · ERP Development · API Development · Corporate Support · Domain Expert Solution

It also separately names 5 underlying domains the company brings expertise in: **Agro-Meteorological System Development, Meteorological System Development, Agriculture System Development, Water System Development, Climate System Development** — these map directly onto the `SECTORS` array's domain coverage, not onto Solutions.

## Gap between the company's 14 services and the current `SERVICES` array (6 cards)

| Current `SERVICES` card | Covers which PDF service(s) | PDF services with no current card |
|---|---|---|
| Agro-Met Systems | (really a sector, not a service — see note below) | **Mail Solution** |
| AI & Big Data | A.I. Solution, Automation Solution (partial) | **Portal Development** |
| Hydrology & Water | (also a sector, not a service) | **System Development** |
| Web Development | Web Solution, Portal Development (partial) | **Data Center Solution** |
| App Development | Apps Development | **Software Development** (generic) |
| ERP & Server | ERP Development, Server Solution (partial) | **API Development** |
| | | **Corporate Support** |
| | | **Domain Expert Solution** |

Two of the six current cards ("Agro-Met Systems," "Hydrology & Water") are really sectors wearing a service label — fine for a homepage teaser, but on a dedicated Solutions page they'll read as duplicates of the Sectors page. Recommend restructuring around the 14 named services, grouped into clusters so it doesn't sprawl into 14 flat cards:

### Recommended grouping (4 clusters, ~3-4 services each)

**1. Web, Portal & Mobile**
- Web Solution — custom websites and government/enterprise web platforms
- Portal Development — large-scale interactive portals (BAMIS, BMD, RRI are the proof points)
- Apps Development (Android & iOS) — native mobile apps (BAMIS Portal, I-Soil, BMD Weather apps)
- Software Development — general custom software builds

**2. Data, AI & Automation**
- A.I. Solution — applied ML (BAMIS advisory generation, I-Soil soil models)
- Automation Solution — automated bulletin/report generation, the BAMIS AI/Automation pipeline already documented in `case-studies.md`
- System Development — bespoke systems (Meteorology Inventory Software, Multiple Fax System, Synoptic Data Decoding)
- API Development — real-time API data transmission from field stations (used across BMD/BAMIS)

**3. Infrastructure & Hosting**
- Server Solution — see `05-server-specialty.md` for the dedicated deep-dive
- Data Center Solution — same
- Mail Solution — enterprise/secure mail (proof point: Sunlife Insurance's secure mail server infrastructure)

**4. Enterprise & Support**
- ERP Development — proof point: CoxDA Financial Management System
- Corporate Support — ongoing hosting/maintenance/upgrades (proof point: BMD's continuous UI/database maintenance, SSL provisioning)
- Domain Expert Solution — the cross-cutting differentiator: deep specialist knowledge in agro-met, hydrology, and climate science that generic IT vendors don't have

For each, pull a one-line "proof point" from an actual delivered project rather than generic marketing copy — the case studies and project list already give you a real example for nearly every service above.

## Fix the stock-photo issue

The current `SERVICES` array uses Unsplash stock photo URLs (`images.unsplash.com/...`) as card backgrounds. `CLAUDE.md`'s own rules explicitly say not to do this ("Do NOT use generic stock photo backgrounds"). Real alternatives already sitting in the asset folder, by cluster:
- Web/Portal/Mobile → `/images/projects/BAMIS_web.png` or `/images/case-studies/bamis-mobile-app.png`
- Data/AI/Automation → `/images/case-studies/bwdb-workflow-diagram.jpg` (good "under the hood" visual) or `/images/projects/synoptic-data-decoding.jpg`
- Infrastructure/Hosting → `/images/server/server-strength-grid.jpg`
- Enterprise/Support → `/images/case-studies/coxda-fms-dashboard.png`

Or drop the background-photo treatment entirely and use the icon-in-colored-circle pattern `CLAUDE.md` already specifies for the services grid (Section 9 of the design spec) — that's the safer, on-brief option since it needs no photography at all.

## Suggested page structure

1. Hero: "Solutions for every data challenge" (already the stub's subtitle — keep it, it's good).
2. Four cluster sections (Web/Portal/Mobile, Data/AI/Automation, Infrastructure/Hosting, Enterprise/Support), each with 3-4 service cards as scoped above.
3. A "Proven across government and private sector" band linking back to relevant `/projects` cards as evidence.
4. CTA: Request Consultation.
