# Page Content Guides — Overview & Build Status

Companion set to `Docs/case-studies.md`. This batch covers the five pages requested next: **All Projects, Our Solutions, Clients (review & challenge), Contact, Server Specialty**. Each has its own file in this folder. Everything is sourced from `Updated-Profile - WEB SOFT BD.pdf`/`.pptx`, the live `websoftbd.net` (rendered, not just fetched — see note below), and a direct read of the current Next.js codebase. Nothing here is invented; unverifiable or placeholder-looking content is explicitly flagged so it can be confirmed with the client before publishing.

## How to use this folder

| File | Page it feeds |
|---|---|
| `01-all-projects.md` | `/projects` |
| `02-our-solutions.md` | `/solutions` (and notes on `/sectors`) |
| `03-clients.md` | `/clients` |
| `04-contact.md` | `/contact` |
| `05-server-specialty.md` | new Server Specialty page/section |

Each file gives: the facts to use, which existing image to point at (all already sitting in `apps/web/public/images/...`), what's missing, and a recommended content/data structure your coding agent can translate directly into a `.tsx` page or a `/src/data/*.json` file.

## Build status — what's actually done vs. stub (checked by reading the route files directly)

**Homepage (`apps/web/app/page.tsx`) is substantially built.** It already contains real, populated data arrays — not placeholders:
- `CLIENTS` (29 logos), `CERTIFICATIONS` (7), `SECTORS` (12 sub-sectors with features + visuals), `CASE_STUDIES` (4: BAMIS, BMD, BWDB, I-Soil — these came from `case-studies.md` and are already wired in), `PROJECTS` (8 cards), `SERVICES` (6 cards), `TESTIMONIALS` (3), `STATS` (4), `PROPOSITIONS` (3).
- `components/shared/Footer.tsx` and `Header.tsx` are built; the Footer already has a working Google Maps embed pinned to the Sales Office and most contact details.

**The five pages this guide covers are still placeholder stubs** — confirmed by reading each file directly (all four are nearly identical):

```tsx
export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold ...">Our Projects</h1>
        <p className="text-lg ...">Featured projects and case studies.</p>
      </div>
    </div>
  )
}
```

`clients/page.tsx`, `contact/page.tsx`, `solutions/page.tsx`, and `sectors/page.tsx` are all this same one-`<h1>`-one-`<p>` shell. None of them import or reuse the rich arrays already sitting in `page.tsx`. That reuse is the fastest path to finishing these pages — see each guide for exactly which array to import/extend.

## Important finding: the live reference URL is nearly empty

You explicitly named `https://www.websoftbd.net/server.php` as the source for Server Specialty. A plain fetch of that URL (and of `clients.php`, `contact.php`, `innovation.php`, `recent-clients.php`) returns almost nothing — and rendering the page with JavaScript confirms this isn't a fetch artifact: **those pages are genuinely near-empty on the live site**, showing only a header/breadcrumb with no real body content. So `05-server-specialty.md` is built from the company profile PDF/PPTX instead (Server Solution / Data Center Solution service entries, the "Server Location: USA, UK, Singapore..." line, and a clean "OUR SERVER STRENGTH" infographic found embedded in the pitch deck — now saved as an image asset).

`ceo-message.php`, by contrast, rendered with real content and surfaced several client/project names not in the original profile-document research (SMRC, an IRAS/University of Washington rice-advisory collaboration, the BWDB system domain `hifm.bwdb.gov.bd`) — folded into `03-clients.md`.

## New image assets added this round

All copied into the project's existing `apps/web/public/images/` tree (no new top-level folders except `server/` and `about/`):

| File | Source | Use |
|---|---|---|
| `images/projects/multiple-fax-dashboard.jpg` | PPTX slide 32 | Multiple Fax Software System project card |
| `images/projects/synoptic-data-decoding.jpg` | PPTX slide 33 | Synoptic Data Decoding & Dissemination System |
| `images/projects/meteorology-inventory-software.jpg` | PPTX slide 36 | Meteorology Inventory Software (fixes a current image mismatch — see `01-all-projects.md`) |
| `images/projects/aviation-data-sharing-login.jpg` | PPTX slide 27 | Aviation Observed Data Sharing System — login screen, Saidpur Airport |
| `images/projects/aviation-data-sharing-form.jpg` | PPTX slide 29 | Aviation Observed Data Sharing System — live data-entry form (stronger shot than the login screen; use this as primary) |
| `images/server/server-strength-grid.jpg` | PPTX slide 10 | Server Specialty page — "Cloud / VPS / Dedicated / Cloud Storage" 4-up graphic |
| `images/server/server-datacenter-hero.jpg` | PPTX slide 10 | Server Specialty hero background (flagged — see caveat in `05-server-specialty.md`) |
| `images/about/company-organogram.jpg` | PPTX slide 6 | Bonus — not one of the 5 requested pages, but a clean org chart worth keeping for a future About/Company page |

I also checked the slides around the server section (11–17) for more usable material: they turned out to be **third-party hosting-provider marketing screenshots** (a cPanel/WHM-style "Email & Productivity / Security" feature panel, a "Professional Cloud" Google Cloud/WooCommerce promotional graphic, and an explicitly RSHosting-branded "Why choose?" graphic) — these were almost certainly kept in the deck as competitor/inspiration references, not as Web Soft BD's own product. **Do not reuse them on the live site** — flagged in detail in `05-server-specialty.md`.

I also checked every "Salinity-model-ScreenShot-2" caption in the deck (it recurs on slides 29, 35, 45, 50): in every case the actual embedded image is the same Ground-Water-Data dashboard already extracted as `bwdb-groundwater-dashboard.png`, not a distinct salinity-specific screen. **There is no unique Salinity Intrusion Model screenshot in the source material** — noted in `01-all-projects.md` so that project card isn't built around an asset that doesn't exist.

## Discrepancies worth flagging to the client before publishing

These came up while cross-checking `CLAUDE.md` / the live codebase against the verbatim profile PDF — small things, but worth a single confirmation pass rather than silently picking one number:

1. **Project count:** `CLAUDE.md` and the homepage `STATS` array both say "1,000+ projects." The profile PDF says "**Developed already 2000 + projects**" and "**Number Of Client 2000+**" (stated twice). Either the PDF is newer/more current, or 1,000+ was intentionally kept conservative — confirm which figure to publish.
2. **Client count:** `CLAUDE.md` says "956 satisfied clients." The PDF says "Number of Client 2000+." Same flag as above.
3. **Company type:** `CLAUDE.md` says "Privately held IT Consulting." The PDF's own "Basic Information" table says "**Type of Company: Proprietorship**." Minor, but it's their own stated legal structure.
4. **Missing certification:** the PDF lists **ISO/IEC 27001:2022** alongside ISO 9001:2015, CMMI Level 3, BCS, BASIS, APN, and "B-MEET for Professionals (Japan)" — ISO/IEC 27001:2022 isn't in the current `CERTIFICATIONS` array or `CLAUDE.md`'s cert list. Worth adding, especially for government/security-sensitive clients.
5. **Footer phone list is incomplete:** `Footer.tsx` lists 3 phone numbers; the PDF and `CLAUDE.md` both give **4**: `+8801716983511`, `+8801681784574`, `+8801330004541`, and `+8801601784580` — the last one is missing from the live Footer component. Quick fix, see `04-contact.md`.
6. **Registered Office is missing everywhere.** Both `CLAUDE.md` and the PDF document a Registered Office (10th Floor, Shah Ali Tower, 33 Kawran Bazar, Dhaka-1215) in addition to the Sales Office — but the current Footer (and presumably the stub Contact page) only shows the Sales Office. See `04-contact.md`.
7. **`SERVICES` array uses Unsplash stock photo URLs** (`images.unsplash.com/...`) as card backgrounds. `CLAUDE.md`'s own "What to Avoid" list (#12) explicitly says "Do NOT use generic stock photo backgrounds." Flagged in `02-our-solutions.md` with a real-asset alternative.
8. **`TESTIMONIALS` quotes look like placeholder copy**, not verbatim client quotes — they're attributed to generic role titles ("Senior Agriculture Specialist," "Project Director") rather than named individuals, and none of the wording matches anything in the source PDF or live site. Flagged in `03-clients.md` — recommend getting real, attributable quotes before publishing them as direct quotes from World Bank/JICA/DAE.
9. **Existing `PROJECTS` array has name/image mismatches** carried over from before (e.g. "Salinity Intrusion Model" points at the I-Soil screenshot; "3D Flood Risk Mapping" points at the RRI journal screenshot) — full fix list in `01-all-projects.md`.

None of these block writing the new pages — they're called out so whoever wires up the final copy can make an informed choice rather than have it picked silently.
