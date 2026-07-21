# Citadel Analytics — marketing site

A static marketing site for Citadel Analytics, an ML fraud-detection company
serving banks, insurers, and payment providers. Plain HTML/CSS/JS — no
build step, no framework, no dependencies beyond two Google Fonts.

## Files
- `index.html` — all page content/sections
- `styles.css` — design system (colors, type, layout) as CSS variables
- `script.js` — mobile nav toggle, scroll-reveal animation, the live
  "ledger" fraud-scoring visual in the hero
- `render.yaml` — Render Blueprint for one-click static-site deploy

## Deploy on Render

**Option A — Blueprint (recommended)**
1. Push this folder to a GitHub/GitLab repo.
2. In the Render dashboard: New → Blueprint → select the repo.
   Render reads `render.yaml` and creates the static site automatically.

**Option B — Manual static site**
1. Push this folder to a repo (or use Render's "Deploy from public repo").
2. New → Static Site → connect the repo.
3. Build command: leave blank. Publish directory: `.` (repo root).
4. Deploy.

No environment variables or server runtime are required — this is a pure
static site.

## Design notes
- **Palette:** white/off-white surfaces, near-black ink for text and
  buttons, and a single reserved accent (a red-orange, `#E8402C`) used
  *only* to mark flagged/fraud events — so the one spot of color always
  means the same thing the product means.
- **Type:** Space Grotesk (display/headlines), Inter (body), IBM Plex Mono
  (data, labels, the ledger) — a technical/data pairing rather than a
  generic sans stack.
- **Signature element:** the hero's "live scoring" ledger is a small
  simulation of transactions streaming in, with one in ~6 auto-flagged in
  red — a concrete, on-brand visual instead of a generic stat-card hero.
- No pricing appears anywhere on the site, per the brief.

## My recommendations (beyond what's built here)

1. **Real content review before launch.** The copy is written to be
   accurate-sounding placeholder marketing copy (e.g. "<100ms latency",
   "continuous retraining") — replace any figures with real, defensible
   numbers before this goes live, since financial-services buyers and
   compliance reviewers will scrutinize claims like these closely.
2. **Don't claim certifications you don't hold.** I deliberately avoided
   naming specific compliance frameworks (SOC 2, ISO 27001, PCI-DSS) since
   the site shouldn't claim them unless Citadel actually holds them —
   add real badges/links once available, ideally with a link to a trust
   or compliance page.
3. **Add a privacy policy and terms page**, plus a cookie/consent banner
   if you'll run analytics — financial-institution buyers' legal teams
   will look for these before taking a sales call seriously.
4. **Swap the demo-request `mailto:` link for a real form** (e.g. HubSpot,
   Typeform, or a small backend) so leads land in a CRM instead of an
   inbox, and so you can track conversion.
5. **Add social proof once you have it** — client logos (with permission),
   a case study, or an analyst mention — B2B fintech buyers convert much
   better with third-party validation than copy alone.
6. **Consider a resources/blog section** for SEO and to demonstrate
   fraud-domain expertise (e.g. "how account-takeover detection works") —
   this is often what brings inbound traffic in this space.
7. **Analytics + uptime monitoring** — wire up a privacy-respecting
   analytics tool and Render's health checks so you know the demo-request
   flow is actually working.
8. **Accessibility pass** — the page ships with visible focus states and
   respects `prefers-reduced-motion`, but run a full audit (axe/Lighthouse)
   once real content and images are in place.
