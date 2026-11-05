// Pre-renders the live React bundle into static HTML so search engines and
// AI crawlers see real content without running JavaScript.
//
// Runs automatically as part of `npm run build` (after `vite build`).
// Output: ./dist/  -> upload the CONTENTS of this folder to GoDaddy public_html
//
// React still loads in the browser and takes over the page as before
// (createRoot replaces the pre-rendered markup), so nothing changes for visitors.

import { createServer } from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
// Needs Playwright: `npm i -D playwright && npx playwright install chromium`
const { chromium } = createRequire(import.meta.url)("playwright");

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "dist");
const SITE = "https://www.peopleintelligence.co.za";

// One entry per route. `file` is where the HTML is written in dist/.
// Edit titles/descriptions here — they override the defaults in client/index.html.
const PAGES = [
  {
    route: "/",
    file: "index.html",
    // homepage keeps the head from client/index.html (updated in a later step)
  },
  {
    route: "/christian-coaching",
    file: "christian-coaching.html",
    title: "Christian Leadership Coaching South Africa | People Intelligence",
    description:
      "Faith-based leadership coaching, ministry team development and Christian leadership workshops with Danelle Esterhuizen. Book a coaching chemistry call today.",
  },
  {
    route: "/__404__",
    file: "404.html",
    title: "Page not found | People Intelligence",
    description: "The page you are looking for could not be found.",
    noindex: true,
  },
];

// 1. Use the fresh Vite build as the template
const template = await readFile(path.join(OUT, "index.html"), "utf8");

// 2. Tiny static server with SPA fallback (mimics the old .htaccess)
const types = {
  ".html": "text/html", ".js": "application/javascript", ".css": "text/css",
  ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".json": "application/json", ".webmanifest": "application/manifest+json",
};
const server = createServer(async (req, res) => {
  const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(OUT, p);
  try {
    if (!(await stat(file)).isFile()) throw 0;
  } catch {
    file = path.join(OUT, "index.html");
  }
  res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
  res.end(await readFile(file));
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

// 3. Render each route in headless Chromium and capture the finished DOM
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// Block external requests (fonts) so rendering is deterministic
await page.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const pg of PAGES) {
  await page.goto(base + pg.route, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.querySelector("#root")?.innerText.length > 50);
  // Scroll through so on-scroll content mounts, then return to top
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);

  const rootHtml = await page.evaluate(() => {
    const root = document.getElementById("root").cloneNode(true);
    // Strip animation start states (opacity:0 / transforms) so content is
    // visible if JavaScript never runs
    root.querySelectorAll("[style]").forEach((el) => {
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
      el.style.removeProperty("will-change");
      if (!el.getAttribute("style").trim()) el.removeAttribute("style");
    });
    // Toast portal / empty live regions are not useful content
    root.querySelectorAll("ol[tabindex='-1']:empty").forEach((el) => el.remove());
    return root.innerHTML;
  });

  let html = template.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${rootHtml}</div>`
  );

  if (pg.route !== "/" && pg.route !== "/__404__") {
    const url = SITE + pg.route;
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
      .replace(/(<meta name="twitter:url" content=")[^"]*/, `$1${url}`);
  }
  if (pg.title) {
    const t = escape(pg.title);
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`);
  }
  if (pg.description) {
    const d = escape(pg.description);
    html = html
      .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`);
  }
  if (pg.noindex) {
    html = html
      .replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">')
      .replace(/\s*<link rel="canonical"[^>]*>/, "");
  }

  await writeFile(path.join(OUT, pg.file), html);
  const text = rootHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  console.log(`✔ ${pg.route.padEnd(20)} -> ${pg.file.padEnd(24)} ${text.split(" ").length} words`);
}

await browser.close();
server.close();
console.log(`\nDone. Upload the contents of ./dist to GoDaddy.`);
