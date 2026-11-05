# People Intelligence website

Source for https://www.peopleintelligence.co.za/ — a static React (Vite + Tailwind) site hosted on GoDaddy behind Cloudflare.

## Develop

```bash
npm install
npx playwright install --with-deps chromium   # once, for the pre-render step
npm run dev                                    # local dev server at http://localhost:5173
```

## Build & deploy

```bash
npm run build
```

This builds the site and pre-renders every page to static HTML (so search engines see the full content) into `dist/`.
Upload the **contents** of `dist/` (including the hidden `.htaccess`) to GoDaddy `public_html`, then purge the Cloudflare cache.

## Layout

- `client/src/pages/` — one file per page (`corporate-home.tsx` = `/`, `christian-coaching.tsx` = `/christian-coaching`)
- `client/src/components/` — hero, services and footer sections
- `client/src/assets/` — images imported by components
- `client/public/` — files copied as-is: `.htaccess`, `robots.txt`, favicons, social share image
- `scripts/prerender.mjs` — page list with per-page titles/descriptions for the pre-render step
