# Web Soft BD — Homepage Case Studies

Source: `Updated-Profile - WEB SOFT BD.pdf` / `.pptx` (company profile, 87 slides), cross-checked against `apps/web/app/page.tsx`. All facts, figures, and URLs below come directly from the profile document — nothing invented. Use this as the content source when building out the homepage case-study section(s).

Four case studies are required; **six** are drafted below so there's room to choose the strongest set, or rotate them across the homepage `ProjectsSection` and a dedicated `/case-studies` page. BAMIS, BMD, BWDB, and I-Soil are the four strongest (World Bank/JICA-funded, hard metrics, clear before/after) — recommended as the primary four. RRI and Mushroom/INRPMCP are solid secondary picks.

Each entry lists: client, the challenge, what Web Soft BD built, tech approach, results, and which image files to use (existing + newly extracted).

---

## 1. BAMIS — Bangladesh Agro-Meteorological Information System

**Client / Partner:** Department of Agricultural Extension (DAE), Ministry of Agriculture — funded by the **World Bank** under Component-C of the Bangladesh Weather and Climate Services Regional Project.
**Live at:** [bamis.gov.bd](https://www.bamis.gov.bd/) — now fully operated and funded by the Government of Bangladesh.
**Tags:** Agro-Meteorology · AI · Government · World Bank

**The challenge**
Farmers across Bangladesh lacked timely, localized weather and crop advisory information, leaving decisions on irrigation, pest control, and harvesting to guesswork. DAE needed a national system to turn raw meteorological data into actionable, district-level guidance.

**What we built**
A dynamic, interactive national agro-met web portal plus iOS/Android apps ("BAMIS Portal") that collect BMD-observed weather data, generate forecasts down to district level, and automatically produce advisory bulletins for farmers and extension officers.

**Tech & approach**
- Automated ingestion of BMD observed data into the BAMIS server, generating data for 64 districts from 36 weather stations
- 5-day WRF (Weather Research and Forecasting) model output generated per district
- Automatic parsing of BMD-authorized PDF observation reports into structured CSV data
- Satellite imagery ingestion and storage; FFWC (Flood Forecasting & Warning Centre) data integrated into the portal
- AI/automation layer that checks favorable weather windows for specific crops and for pest & disease risk, then auto-generates weather tables and district bulletin documents
- Native iOS and Android apps with Weather, Crop Information, and Advisory modules (Bengali-language UI)

**Results & impact**
- Adopted nationwide and praised by the World Bank and international partners for improving agricultural decision-making and resilience
- Transitioned from a donor-funded pilot to a platform now fully funded and operated by the Government of Bangladesh — a strong signal of long-term value
- Direct line of advisories (irrigation timing, fertilizer/pesticide application windows, harvest timing) reaching farmers and extension staff in all 64 districts
- Supports both short-term operational decisions and long-term seasonal planning

**Suggested homepage stat callouts**
- "64 districts covered" · "36 weather-station network" · "5-day forecast horizon" · "Now Government-funded & operated"
(Note: the existing `CaseStudySection` in `page.tsx` uses "1.2M+ farmers" and "64 districts" — the farmer figure is not in the source profile; verify that number with the client before publishing, or soften it to "Nationwide farmer reach" if it can't be confirmed.)

**Images**
- Primary: `/images/projects/BAMIS_web.png` (existing — portal screenshot)
- Supporting: `/images/case-studies/bamis-mobile-app.png` (new — BAMIS Portal app on phone mockups: Weather / Crop Info / Advisory screens)

---

## 2. Bangladesh Meteorological Department (BMD) — National Weather Ecosystem

**Client / Partner:** Bangladesh Meteorological Department, under the **Ministry of Defence**.
**Live at:** [bmd.gov.bd](https://www.bmd.gov.bd/) · mobile site [mobile.bmd.gov.bd](https://mobile.bmd.gov.bd/)
**Tags:** Meteorology · Government · Mobile · Mission-critical infrastructure

**The challenge**
BMD needed a fully integrated digital ecosystem — public-facing portal, mobile apps, internal data tools, and disaster-response infrastructure — capable of staying online and accurate during high-traffic events like cyclones, while also serving aviation and seismic monitoring needs.

**What we built**
An end-to-end ecosystem: the national BMD web portal, two mobile apps ("BMD Weather App" and "BMD Current Weather" on Google Play), a mobile website, an earthquake-monitoring application, an aviation meteorological data transmission system, a multi-channel fax dissemination system, a synoptic data decoding/dissemination system, and a meteorology equipment inventory system. Web Soft BD also handles ongoing hosting, SSL, database, and infrastructure maintenance.

**Tech & approach**
- Load-balanced, multi-server architecture (5 web servers under a load balancer during peak events)
- Real-time API-driven data transmission from field stations to centralized systems
- Aviation software for met-data transmission & communication (supporting aviation forecast/warning needs)
- Automated synoptic data decoding and a "Multiple Fax" dashboard for legacy dissemination channels still used by some stakeholders
- Cloud-based messaging system supplied and installed for the 1st class observatory in Rajshahi
- Continuous hosting, upgrading, and maintenance of the UI and database software

**Results & impact**
- During **Cyclone Sitrang**, the BMD platform sustained an average of **4.6 million hits/month**, peaking at over **15 million hits/month**, without service failure
- Reliable national infrastructure for forecasts, warnings, and meteogram data (10-day forecasts) across all of Bangladesh
- Long-running engagement: Web Soft BD continues to lead maintenance and advancement of the entire BMD ecosystem

**Suggested homepage stat callouts**
- "15M+ hits/month at peak (Cyclone Sitrang)" · "5 load-balanced servers" · "2 mobile apps + mobile web" · "10-day meteogram forecasts"

**Images**
- Primary: `/images/projects/bmd-web.png` (existing)
- Supporting: `/images/case-studies/bmd-portal-homepage.png` (new — full portal homepage), `/images/case-studies/bmd-mobile-apps.jpg` (new — mobile apps download page), `/images/projects/phone-bmd.png` (existing — mobile/aviation), `/images/projects/avia-bmd.gif` (existing — aviation system animation)

---

## 3. Bangladesh Water Development Board (BWDB) — Hydrological Early-Warning Systems

**Client / Partner:** Bangladesh Water Development Board, under the **Ministry of Water Resources**.
**Tags:** Hydrology · Climate Resilience · Government · Disaster Early-Warning

**The challenge**
Water-related data — river sediment, salinity, drought indicators, groundwater levels — was fragmented across agencies, making it hard to produce timely, unified early-warning information for flood, drought, and coastal salinity events.

**What we built**
A central hydrological data platform unifying four real-time modules: sediment & riverbank erosion prediction, drought forecasting, salinity intrusion analysis, and groundwater/surface water outlook — plus an upgraded public web platform that surfaces forecasts and early warnings to all users.

**Tech & approach**
- Architecture: BWDB's internal data center feeds desktop/cloud computing nodes, which push processed model output to an Apache web server, which the public site and people access — with a Model Admin User controlling sediment/morphology, salinity intrusion, drought index, and groundwater assessment modules independently (see workflow diagram asset)
- Real-time data visualization, e.g. river water salinity evolution across winter and monsoon seasons, and groundwater table levels by location
- Consolidated previously siloed agency data into one integrated, harmonized data warehouse

**Results & impact**
- Replaced fragmented, manual, agency-by-agency data handling with a single real-time visualization and dissemination platform
- Supports both operational decisions (e.g. salinity-aware irrigation timing) and disaster preparedness (flood/drought early warning)
- Reduces manual search and data-entry time, cutting the human-error risk inherent in manual recordkeeping

**Suggested homepage stat callouts**
- "4 integrated hydrological models in one platform" · "Real-time salinity & groundwater monitoring" · "Seasonal river-salinity tracking"

**Images**
- Primary: `/images/projects/Hydrology.png` (existing)
- Supporting: `/images/case-studies/bwdb-workflow-diagram.jpg` (new — system/data-flow architecture diagram, great for an "under the hood" panel), `/images/case-studies/bwdb-groundwater-dashboard.png` (new — live groundwater-table dashboard screenshot)

---

## 4. I-Soil — IoT & AI for Climate-Resilient Soil Health

**Client / Partner:** Rural Development Academy (RDA) — research project on preventing climate-change-induced soil degradation and fertility loss.
**Live at:** [isoilbd.com](http://www.isoilbd.com/)
**Tags:** IoT · AI/ML · Agriculture · R&D

**The challenge**
Climate change is accelerating soil degradation and fertility loss in Bangladesh, but farmers had no accessible, data-driven way to get soil-specific nutrient and fertilizer guidance grounded in real sensor data and predictive modelling.

**What we built**
A combined IoT + data-science platform: a web portal and a mobile app (Android/iOS) that deliver AI-based soil nutrition analysis, forecasting, and fertilizer-management guidance directly to farmers in Bengali.

**Tech & approach**
- Backend data collection layer from IoT soil sensors
- Web-based system software plus native mobile apps for end users
- Machine learning model development, with models received from domain consultants and integrated into the platform
- Secure database server access for sensitive agricultural/research data
- Full pipeline: sensor data → secure storage → ML inference → farmer-facing recommendation in-app

**Results & impact**
- Gives farmers direct, AI-generated soil nutrition and fertilizer guidance rather than generic advice
- Demonstrates Web Soft BD's R&D capability beyond government portals — IoT hardware integration plus applied ML in production
- Positions the company at the intersection of climate adaptation and applied data science, a differentiator versus typical web agencies

**Suggested homepage stat callouts**
- "IoT sensors → AI model → farmer's phone" · "Bengali-language AI soil advisory" · "Research-grade ML in a consumer app"

**Images**
- Primary: `/images/projects/isoil-web.png` (existing — web portal)
- Supporting: `/images/case-studies/isoil-mobile-app.png` (new — mobile app welcome/onboarding screen, AI soil advisory branding)

---

## 5. River Research Institute (RRI) — Digital Technical Journal Platform *(bonus)*

**Client / Partner:** River Research Institute (RRI).
**Tags:** Research Publishing · Web Platform · Institutional

**The challenge**
RRI needed to move from offline/ad-hoc publishing to a proper digital journal platform for circulating peer-reviewed river-science research.

**What we built**
A technical journal web platform ("Advancing Knowledge Through Excellence") with article search, submission handling, and a news/announcements feed for the institute's research community.

**Results & impact**
Gives a national research institute a modern, searchable, citable home for its technical output — supporting RRI's role in flood and riverbank-erosion research that feeds into projects like the BWDB work above.

**Images**
- Primary: `/images/projects/rri-web.png` (existing)
- Supporting: `/images/case-studies/rri-journal-portal.png` (new — journal homepage with search and articles feed)

---

## 6. Mushroom e-Commerce & Portal (INRPMCP) — Agri-Livelihoods Platform *(bonus)*

**Client / Partner:** Department of Agricultural Extension (DAE) / Mushroom Development Institute, Savar, Dhaka — for the "Improvement of Nutrition and Reduction of Poverty through Mushroom Cultivation Project" (INRPMCP).
**Tags:** e-Commerce · Agriculture · Social Impact

**The challenge**
A government nutrition/poverty-reduction program built around mushroom cultivation needed a way for growers to market produce directly and for the institute to disseminate cultivation knowledge.

**What we built**
A three-part platform: an online mushroom marketing Android app, a public information portal, and a "Mushroom Journal" knowledge resource — covering everything from cultivation advisories to direct sales.

**Results & impact**
Directly supports a poverty-reduction and nutrition program by giving smallholder mushroom growers a digital sales channel plus an information hub, illustrating Web Soft BD's range from climate infrastructure into livelihoods/e-commerce.

**Images**
- Primary: `/images/projects/mushroom-web.png` and `/images/projects/mushroom-market-web.png` (existing)
- Supporting: `/images/case-studies/mushroom-portal.png` (new — institute portal homepage)

---

## Also available, not drafted as full case studies

- **CoxDA Financial Management System (FMS)** — an ERP-style accounting/balance-sheet system built for Cox's Bazar Development Authority. Less visually compelling for a homepage hero, but useful proof of enterprise/ERP capability. Image: `/images/case-studies/coxda-fms-dashboard.png` (new).
- **Sunlife Insurance Company** — e-commerce platform + secure mail server infrastructure (www.sunlifeinsbd.com). No screenshots in the source deck.
- **Bangladesh Olympic Association (BOA/NocBan)** — official portal (www.nocban.org). No screenshots in the source deck.
- **Poly Cables Industries Ltd.** — corporate website/app (www.polycables.com.bd). No screenshots in the source deck.

---

## Image asset map

| File | Status | Best used for |
|---|---|---|
| `/images/projects/BAMIS_web.png` | existing | BAMIS hero |
| `/images/case-studies/bamis-mobile-app.png` | **new** | BAMIS mobile app showcase |
| `/images/projects/bmd-web.png` | existing | BMD hero |
| `/images/case-studies/bmd-portal-homepage.png` | **new** | BMD portal detail shot |
| `/images/case-studies/bmd-mobile-apps.jpg` | **new** | BMD mobile apps |
| `/images/projects/phone-bmd.png` | existing | BMD mobile/aviation |
| `/images/projects/avia-bmd.gif` | existing | BMD aviation system |
| `/images/projects/Hydrology.png` | existing | BWDB hero |
| `/images/case-studies/bwdb-workflow-diagram.jpg` | **new** | BWDB architecture/workflow |
| `/images/case-studies/bwdb-groundwater-dashboard.png` | **new** | BWDB live dashboard |
| `/images/projects/isoil-web.png` | existing | I-Soil web portal |
| `/images/case-studies/isoil-mobile-app.png` | **new** | I-Soil mobile app |
| `/images/projects/rri-web.png` | existing | RRI hero |
| `/images/case-studies/rri-journal-portal.png` | **new** | RRI journal detail |
| `/images/projects/mushroom-web.png`, `mushroom-market-web.png` | existing | Mushroom hero |
| `/images/case-studies/mushroom-portal.png` | **new** | Mushroom portal detail |
| `/images/case-studies/coxda-fms-dashboard.png` | **new** | CoxDA (if used) |

New files were extracted directly from the embedded slide images in the company profile PPTX and saved to `apps/web/public/images/case-studies/`.

---

## Implementation notes for `apps/web/app/page.tsx`

- The `PROJECTS` array (used by `ProjectsSection`) currently has several **name/image mismatches** — e.g. "Salinity Intrusion Model" points to `isoil-web.png` (which is actually the I-Soil project), "3D Flood Risk Mapping Simulation" points to `rri-web.png` (actually RRI's journal site), and "AI Development for BAMIS" points to `mushroom-market-web.png` (actually the mushroom marketing app). Worth correcting these to match real projects once the case studies above are wired in, so card labels match what's actually screenshotted.
- `CaseStudySection` currently hardcodes a single deep-dive on BAMIS with a placeholder icon instead of a real image, and a "Read Full Case Study" link that points to `#`. This doc gives enough material to either (a) expand it into a 4-up rotating/tabbed case-study section using the four primary studies above, or (b) keep it as a single spotlight and build a `/case-studies` page for the rest, linked from "Read Full Case Study".
- The 1.2M farmer figure currently used in `CaseStudySection` isn't sourced from the profile document — confirm it with the client before keeping it on the live site.
