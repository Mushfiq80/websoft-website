# Content Guide — Clients: Review & Challenge (`/clients`)

Current state: `app/clients/page.tsx` is a stub. The homepage already has a `CLIENTS` array (29 logos) and a `TESTIMONIALS` array (3 quotes) — both reusable, with caveats noted below. "Review and Challenge" is read here as two distinct sections: client **reviews** (testimonials) and client **challenges** (the problem each client faced, and what was built to solve it) — i.e. turn the page into proof-of-trust (logos + quotes) plus proof-of-work (challenge → solution, reusing the case-study material).

## Full client roster — merged from `CLIENTS` array, `CLAUDE.md`, and the verbatim PDF "Major Clients" list

The PDF's client list is longer than what's in `CLAUDE.md`. Merged and de-duplicated, organized by tier:

### Anchor / Government & Multilateral
- **World Bank** — `world_bank-logo.png`
- **JICA** (Japan International Cooperation Agency) — `jica.png`
- **Japan Meteorological Business Support Center (JMBSC)** — no logo file currently
- **Bangladesh Meteorological Department (BMD)** — `bd.gov.png`
- **Bangladesh Water Development Board (BWDB)** — `bd-water.png`
- **Department of Agricultural Extension (DAE)** — `dae.png`
- **SAARC Meteorological Research Centre (SMRC)** — no logo file currently (new client, surfaced via `ceo-message.php`, not in the original profile PDF/PPTX research)
- **Storm Warning Centre (SWC), BMD** — project office, not a separate logo
- **A2i** (Access to Information) — `a2i_logo_2021.png`
- **SAARC** — `saarc.png`
- **Bangladesh Olympic Association (BOA / NocBan)** — `nocban-logo.png`
- **Flood Forecasting & Warning Centre (FFWC)** — `bd-water.png` (currently reusing the BWDB logo — confirm whether FFWC has its own mark)

### Research & Academic
- **Rural Development Academy (RDA)** — I-Soil partner, no logo file
- **River Research Institute (RRI)** — no logo file
- **Cox's Bazar Development Authority (CoxDA)** — no logo file
- **Meteorological Department, Dhaka University** — `DU-logo.jpg` (generic DU logo; PDF specifically names the Meteorological *and* Oceanography departments)
- **Oceanography Department, Dhaka University** — see above
- **University of Washington (IRAS rice-advisory collaboration)** — surfaced via `ceo-message.php`, not in the profile PDF; `uw.jpg` in the `CLIENTS` array may be this, or may be the PDF's "URO Agro Products, New Delhi" — **the two don't share an abbreviation cleanly, confirm with the client which one `uw.jpg` actually represents before captioning it.**

### NGO & Development
- **Human Development Foundation (HDF)** — `hdf-LOGO-WEB.gif`
- **ESDO** — `esdo.png`
- **Farming Future, USA** — `farming-future.png`
- **The Earth Science Technology and Policy Services (ESTEPS)** — no logo file currently

### Private Sector
- **DMGI Pte. Limited, Singapore** — `DMGI-LOGO.png`
- **Sundarban Agro Lab, West Bengal, India** — `sundharban-agro.png`
- **URO Agro Products, New Delhi, India** — no confirmed logo (see UW note above)
- **Bangladesh Archery Federation** — `archery.png`
- **Sunlife Insurance Company Ltd.** — `sunlife-onetech_logo.gif` (filename says "onetech" — confirm this is actually Sunlife Insurance's mark and not a different "Sunlife Onetech" entity)
- **Softel** — `softel.jpeg`
- **Brotherhood International Limited** — no logo file currently
- **IT Agri.** — no logo file currently
- **Productive Accessories** — no logo file currently
- **Innovative Decor** — no logo file currently
- **Poly Cables Industries Ltd.** — `poly-cables-logo_name.jpg`
- **Villa Thawthisa Agro Green Resource, Maharashtra, India** — likely `vt.jpeg` (abbreviation matches — fairly confident, but unconfirmed)
- **Lead Interior & Building Company** — possibly `lead-infosys-logo.png`, but that's named "Lead **Infosys**" in the array, which may be a different "Lead" entity — confirm before merging these
- **Aesthetic International** — `aesthetic-international-logo.png`
- **Karim Karim**, **Euro India** — present in `CLIENTS` array and `CLAUDE.md`, not found in the PDF text — keep, just note the source is `CLAUDE.md` only

### Logos present in the `CLIENTS` array with no name match anywhere in source material
`environment.jpeg`, `protirokkha.png`, `shark.jpeg` — these have logo files but no corresponding name in the PDF, the PPTX, or `CLAUDE.md`'s client lists. **Don't publish a logo without a confirmed client name and permission — verify these three with the client directly before including them on the live site.**

## Review section — testimonials need a real-quote pass before publishing

The existing `TESTIMONIALS` array has 3 entries (World Bank, JICA, DAE), each attributed to a generic role title rather than a named person, e.g. "Senior Agriculture Specialist, World Bank Bangladesh Office." None of the quote text matches anything in the source PDF, PPTX, or the live site — it reads as illustrative placeholder copy that was written to fit the brand voice, not a transcribed quote.

This matters because these are being presented as direct quotes from named organizations (World Bank, JICA) — if published as-is and challenged, there's no source to point to. Two honest paths:
1. **Get real quotes** — even a short, real line from an actual BAMIS/BMD/DAE contact is worth more than a polished fake one.
2. **Reframe, don't fabricate** — relabel the section as "How partners describe working with us" or similar, and be transparent that these are representative/illustrative rather than direct quotes, or remove organization-specific attribution until a real quote is secured.

## Challenge section — reuse the case studies, reframed per-client

`case-studies.md` already has full challenge → solution → results writeups for BAMIS (DAE/World Bank), BMD, BWDB, and I-Soil (RDA). For this page, reuse those same four narratives but frame them as "client challenge" cards rather than "project" cards — same content, different lens:

- **DAE / World Bank** — "Farmers lacked timely, localized weather and crop advisory information" → BAMIS.
- **BMD** — "Needed a fully integrated digital ecosystem able to stay online during high-traffic disaster events" → the BMD ecosystem, with the Cyclone Sitrang 15M+ hits/month stat as the headline proof point.
- **BWDB** — "Water-related data was fragmented across agencies" → the unified hydrological platform.
- **RDA** — "Farmers had no accessible, data-driven way to get soil-specific guidance" → I-Soil.

For secondary clients without a full case study, a shorter one-line challenge framing is enough (all grounded in the PDF):
- **CoxDA** — needed a proper financial management/accounting system → built their FMS.
- **Sunlife Insurance** — needed e-commerce plus secure handling of financial data → built their e-commerce platform and secure mail server infrastructure.
- **RRI** — needed to move research publishing online → built their Technical Journal platform.
- **Mushroom Development Institute / DAE (INRPMCP)** — needed a way for smallholder mushroom growers to market produce and access cultivation knowledge → built the marketing app, portal, and Mushroom Journal.

## Suggested page structure

1. Hero — "Trusted by governments, multilaterals, and industry leaders" (or similar), with the anchor-tier logos (World Bank, JICA, BMD, BWDB, DAE) prominent.
2. Full logo grid/marquee, tiered as above — but only logos confirmed against a real name (exclude `environment.jpeg`/`protirokkha.png`/`shark.jpeg` until confirmed).
3. "Challenges we've solved" — 4 deep cards (BAMIS/BMD/BWDB/I-Soil) + a lighter row for the secondary clients.
4. Testimonials/Review grid — pending the real-quote pass above.
5. CTA: Request Consultation.
