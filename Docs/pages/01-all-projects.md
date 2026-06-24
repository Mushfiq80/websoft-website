# Content Guide — All Projects (`/projects`)

Current state: `app/projects/page.tsx` is a stub (`<h1>Our Projects</h1>` + one line). The homepage `PROJECTS` array (8 cards) already exists in `app/page.tsx` and is the right starting point — extend it, fix its mismatches, and use the fuller version below for the dedicated `/projects` page (the homepage can keep showing a featured subset).

## Fixes needed in the existing `PROJECTS` array first

Carried over from `case-studies.md` plus two new ones found this round. Each row: current bug → correct fix.

| id | Problem | Fix |
|---|---|---|
| `salinity` ("Salinity Intrusion Model") | Image points to `isoil-web.png` (that's the I-Soil portal, not BWDB) | Point to `/images/case-studies/bwdb-groundwater-dashboard.png` or `/images/projects/Hydrology.png`. Note: no dedicated salinity-specific screenshot exists in the source deck — every "Salinity-model-ScreenShot-2" caption in the PPTX (slides 29/35/45/50) actually embeds the same Ground-Water-Data dashboard, not a distinct salinity UI. Don't promise an asset that doesn't exist. |
| `flood-risk` ("3D Flood Risk Mapping Simulation") | Image points to `rri-web.png` (that's RRI's journal site) | Point to `/images/case-studies/bwdb-workflow-diagram.jpg` (the architecture/workflow diagram) — there's no literal 3D map screenshot in the source material either; the workflow diagram is the closest real asset. |
| `ai-bamis` ("AI Development for BAMIS") | Image points to `mushroom-market-web.png` (unrelated project) | Point to `/images/projects/BAMIS_web.png` (reuse — this *is* BAMIS's AI/automation layer) rather than an unrelated screenshot. |
| `met-inventory` ("Meteorology Inventory Software") | Image points to `hdfd-web.png` (Human Development Foundation, unrelated) | Point to the new `/images/projects/meteorology-inventory-software.jpg` (the actual BMD-branded register screen for this exact system). |
| `hdf` ("Human Development Foundation System") | Image points to `mushroom-web.png` (that's the Mushroom/INRPMCP project, not HDF) | No HDF screenshot exists anywhere in the source material. Either (a) replace this card with a real Mushroom e-Commerce/Portal entry using `mushroom-web.png` honestly, and drop HDF down to a text-only mention elsewhere, or (b) keep an HDF card but make it icon-only (no screenshot) until a real asset is available. |
| `aviation` | Currently uses `phone-bmd.png` (generic mobile shot, not aviation-specific) | Switch to `/images/projects/aviation-data-sharing-form.jpg` (the live data-entry form — shows the system in actual use) as primary, with `/images/projects/aviation-data-sharing-login.jpg` as a secondary/detail shot. |

## Two projects with real assets that aren't in the array at all yet

**Multiple Fax Software System Development** — a dissemination channel for BMD built alongside the main portal/app ecosystem, per the PDF: "Multiple Fax Software System Development" / "Multiple Fax Software - Dash Board." The extracted dashboard screenshot shows live operational metrics: Outgoing Queue 8, New Fax 84, Total Submitted 8,782, Completed 2,755, Success Rate 31.37%, User Busy 2,997, No Answer 1,982, No Dial Tone 901, Canceled 75, Error 62, Total Fax Job 901, plus a "Fax Service Online" status indicator.
- Tag: `Meteorology · Legacy Dissemination · BMD`
- Stat line: "8,700+ fax jobs processed · live service monitoring"
- Image: `/images/projects/multiple-fax-dashboard.jpg`

**Synoptic Data Decoding & Dissemination System** — also BMD, per the PDF caption "Synoptic Data Decoding & Dissemination System." The screenshot shows the public "Automatic Dissemination System of current Weather Condition" portal with a synoptic data table for Dhaka/Mymensingh/Chattogram divisions (Temperature, Humidity, Clouds, Visibility, Rain, Wind columns), station/date/hour filters, and CSV export.
- Tag: `Meteorology · Data Pipeline · BMD`
- Stat line: "Multi-division synoptic data, CSV export, hourly filtering"
- Image: `/images/projects/synoptic-data-decoding.jpg`

Both could stand alone as project cards, or be folded into the BMD case study as "supporting systems" sub-items if you'd rather keep the grid to 8–10 headline cards. Given the dedicated `/projects` page is meant to be the *complete* list, I'd add them as their own cards.

## Recommended complete project set for `/projects`

This is every project with a verifiable name, client, and at least some descriptive fact from the source material. Cards without a real screenshot are marked — build those as icon/text cards rather than forcing in an unrelated image.

| Project | Client / Partner | Sector tag | Has real screenshot? | Image |
|---|---|---|---|---|
| BAMIS — Agro-Meteorological Information System | DAE / World Bank | Agro-Met · AI · Govt | Yes | `/images/projects/BAMIS_web.png` + `/images/case-studies/bamis-mobile-app.png` |
| Bangladesh Meteorological Department (BMD) Portal | BMD / Ministry of Defence | Meteorology · Govt | Yes | `/images/projects/bmd-web.png` + `/images/case-studies/bmd-portal-homepage.png` |
| BMD Mobile Apps ("BMD Weather App", "BMD Current Weather") | BMD | Meteorology · Mobile | Yes | `/images/case-studies/bmd-mobile-apps.jpg` |
| Aviation Observed Data Sharing System (Saidpur Airport et al.) | BMD | Aviation · Met-Data | Yes | `/images/projects/aviation-data-sharing-form.jpg`, `/images/projects/aviation-data-sharing-login.jpg`, `/images/projects/avia-bmd.gif` |
| Multiple Fax Software System | BMD | Meteorology · Dissemination | Yes | `/images/projects/multiple-fax-dashboard.jpg` |
| Synoptic Data Decoding & Dissemination System | BMD | Meteorology · Data Pipeline | Yes | `/images/projects/synoptic-data-decoding.jpg` |
| Meteorology Inventory Software | BMD | Meteorology · Asset Mgmt | Yes | `/images/projects/meteorology-inventory-software.jpg` |
| Cloud-Based Messaging System, 1st Class Observatory, Rajshahi | BMD | Meteorology · Infrastructure | No — text-only fact from PDF | — |
| BWDB Hydrological Platform (sediment/erosion, drought, salinity, groundwater) | BWDB / Ministry of Water Resources | Hydrology · Govt | Yes | `/images/projects/Hydrology.png`, `/images/case-studies/bwdb-groundwater-dashboard.png`, `/images/case-studies/bwdb-workflow-diagram.jpg` |
| I-Soil — IoT & AI Soil Advisory | Rural Development Academy (RDA) | IoT · AI/ML · Agriculture | Yes | `/images/projects/isoil-web.png` + `/images/case-studies/isoil-mobile-app.png` |
| River Research Institute (RRI) Technical Journal | RRI | Research Publishing | Yes | `/images/projects/rri-web.png` + `/images/case-studies/rri-journal-portal.png` |
| Mushroom e-Commerce & Portal (INRPMCP) | DAE / Mushroom Development Institute, Savar | e-Commerce · Agriculture · Social Impact | Yes | `/images/projects/mushroom-web.png`, `/images/projects/mushroom-market-web.png`, `/images/case-studies/mushroom-portal.png` |
| CoxDA Financial Management System (FMS) | Cox's Bazar Development Authority | ERP · Finance · Govt | Yes | `/images/case-studies/coxda-fms-dashboard.png` |
| Sunlife Insurance Company — e-commerce + secure mail server | Sunlife Insurance Company Ltd. | e-Commerce · Mail Solution · Private | No screenshot in source deck | — |
| Bangladesh Olympic Association (BOA/NocBan) Portal | BOA | Web Portal · Sports · Govt | No screenshot in source deck | — |
| Poly Cables Industries Ltd. — website & app | Poly Cables Industries Ltd. | Web · App · Private | No screenshot in source deck | — |
| Human Development Foundation (HDF) System | HDF | NGO · Social | No screenshot in source deck | — |

Notes on a couple of these:
- **BWDB** is really one platform with four integrated modules (sediment/erosion prediction, drought forecasting, salinity intrusion, groundwater/surface-water outlook) rather than four separate projects — keep it as one card/detail page with four feature bullets, matching how `case-studies.md` already framed it, rather than splitting into four cards with thin content each.
- For the four projects with no screenshot (Sunlife, BOA, Poly Cables, HDF), don't fabricate a mockup. Either give them a clean text/icon card (logo + 1-2 line description, no image), or omit them from the visual grid and list them in a smaller "Also trusted by" text strip — both are honest options; inventing a placeholder screenshot is not.

## Suggested page structure

1. Hero — short intro restating the company's range (govt mission-critical systems → research platforms → enterprise/private sector), maybe with the "2000+ projects delivered" stat (see the discrepancy note in `00-overview.md` — confirm 1,000+ vs 2,000+ before publishing).
2. Filter/tag bar — by sector (Agro-Met, Meteorology, Hydrology, AI, Web/App, ERP) reusing the same tag vocabulary as the homepage `SECTORS` array, so filtering stays consistent across the site.
3. Full project grid using the table above.
4. Link-outs to the 4 deep-dive case studies (BAMIS/BMD/BWDB/I-Soil) already drafted in `case-studies.md`, e.g. "Read the full story →" on those four cards specifically.
