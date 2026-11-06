# People Intelligence website

Source for https://www.peopleintelligence.co.za/ — a static React (Vite + Tailwind) site hosted on GoDaddy behind Cloudflare.

## Develop

```bash
npm install
npx playwright install --with-deps chromium   # once, for the pre-render step
npm run dev                                    # local dev server at http://localhost:5173
```

## Build & deploy

Deploys are automatic: merging a pull request into `main` runs
`.github/workflows/deploy.yml`, which builds and pre-renders the site, uploads it to
GoDaddy over FTPS (assets first, then HTML), purges the Cloudflare cache, and then
removes old asset files. It can also be run by hand from the **Actions** tab.

The build fails if a pre-rendered page doesn't match what React renders (a
hydration mismatch), so a broken page never gets deployed.

Manual fallback: `npm run build`, upload the contents of `dist/` (including the
hidden `.htaccess` and `.well-known/`) to `public_html` — new files first, HTML
last — then purge the Cloudflare cache.

## Layout

- `client/src/pages/` — one file per page (`corporate-home.tsx` = `/`, `christian-coaching.tsx` = `/christian-coaching`)
- `client/src/components/` — hero, services and footer sections
- `client/src/assets/` — images imported by components
- `client/public/` — files copied as-is: `.htaccess`, `robots.txt`, favicons, social share image
- `client/src/lib/contact.ts` — phone, email, WhatsApp and Calendly links (change them here only)
- `scripts/prerender.mjs` — page list with per-page titles, descriptions and share images for the pre-render step
- `scripts/schema.mjs` — structured data (JSON-LD) about People Intelligence and Danelle
