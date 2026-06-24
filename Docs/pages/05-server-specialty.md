# Content Guide — Server Specialty

You named `https://www.websoftbd.net/server.php` as the source for this page. **That page is effectively empty on the live site** — both a plain fetch and a full JS-rendered fetch returned only a header/breadcrumb with no body content, so this isn't a fetch problem, the live page genuinely has nothing to mine. This guide is built instead from the profile PDF/PPTX, which does have real Server/Data Center content, plus a clean infographic found embedded in the pitch deck.

## Core facts (verbatim from the profile PDF)

- **Server Location:** "USA, UK, Singapore and World's best prominent location" — good as a hero subtitle: globally distributed infrastructure, not just a local Dhaka host.
- Two services named directly in the company's own service list: **Server Solution** and **Data Center Solution** (siblings: Web Solution, Mail Solution — both hosting-adjacent, worth a passing mention on this page).
- International project experience cited "across the USA, UK, Singapore, Malaysia, Thailand, and India" — broader than just server location, but reinforces the same "global reach" point.

## The "Our Server Strength" infographic (new asset)

Found on PPTX slide 10, styled in the brand's own purple tone (not a third-party graphic) — saved as `/images/server/server-strength-grid.jpg`. It names exactly four server product categories:

> **Cloud Server** · **VPS Server** · **Dedicated Server** · **Cloud Storage**

This is the natural backbone for a 4-card grid on this page — same visual pattern as the Sector tabs elsewhere in the design system (4-up cards with icon + label). The PDF doesn't expand on each of the four with further detail, so each card's body copy will need to be written generically (standard definitions of Cloud/VPS/Dedicated/Cloud Storage) unless the client supplies more specifics — flag this rather than inventing technical specs (RAM, storage tiers, SLAs) that aren't sourced anywhere.

## Proof-of-scale: reuse the BMD hosting track record

This is the strongest credibility material available for a hosting/infrastructure page, and it's already fully sourced in `case-studies.md`:
- **5 load-balanced web servers** running BMD's infrastructure
- Sustained **average 4.6 million hits/month**, peaking at **15 million+ hits/month** during Cyclone Sitrang, without service failure
- Ongoing **SSL certificate provisioning**, **hosting, upgrading, and maintenance** of UI and database software for BMD
- **Cloud-based messaging system** supplied and installed for the 1st class observatory in Rajshahi

Recommend a "Proven at scale" band using these exact figures rather than generic uptime marketing claims — they're specific, sourced, and unusually strong for a company this size.

## Hero image — use with a caveat

`/images/server/server-datacenter-hero.jpg` (from the same slide) is the company's own "WEB SOFT BD Software Solutions" banner over a data-center photo, with an "Explore More" CTA already baked into the original slide design. It's fine to reuse as a placeholder hero background since it's already the company's own marketing asset — but the underlying photo itself reads as generic data-center stock photography rather than a photo of their own facility. If real photos of Web Soft BD's own infrastructure exist, those would be stronger; treat this one as a fallback, not a permanent choice.

## Do not reuse: third-party material found nearby in the deck

Slides 11–17 (immediately following the Server Strength slide) turned out to be screenshots of **other companies' hosting products**, not Web Soft BD's own:
- A cPanel/WHM-style "Email & Productivity / Security" feature panel (Business Email, Google Workspace, SSL Certificates, SiteLock, Codeguard — these are third-party product names/logos)
- A "Professional Cloud" promotional graphic built around **Google Cloud** and WooCommerce branding
- A "Why choose?" graphic that's **explicitly RSHosting-branded** ("...have unanimously chosen RSHosting as the best web hosting company")

These were almost certainly kept in the internal deck as competitor/inspiration reference material, not as Web Soft BD's own product screens. Publishing them on the live public site would misattribute another company's branded marketing material as Web Soft BD's own — don't carry these over.

## Suggested page structure

1. Hero — "Globally distributed server infrastructure" with the USA/UK/Singapore location fact as subtitle. Background: `server-datacenter-hero.jpg` (see caveat above) or a plain brand-color gradient if a stronger photo isn't available.
2. 4-card grid — Cloud Server / VPS Server / Dedicated Server / Cloud Storage, using `server-strength-grid.jpg` as a reference layout (or rebuild as live cards using the existing card component, which is the better long-term option since it'll be responsive and on-brand rather than a flattened image).
3. "Proven at scale" stat band — BMD's 5-server load-balanced setup and Cyclone Sitrang hit numbers.
4. Data Center Solution detail panel — short paragraph on infrastructure management, SSL, ongoing maintenance (Corporate Support service, cross-link to `02-our-solutions.md`).
5. CTA — Request Consultation.
