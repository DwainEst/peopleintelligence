// Pre-renders the live React bundle into static HTML so search engines and
// AI crawlers see real content without running JavaScript.
//
// Runs automatically as part of `npm run build` (after `vite build`).
// Output: ./dist/  -> upload the CONTENTS of this folder to GoDaddy public_html
//
// In the browser React hydrates (reuses) this pre-rendered markup. After writing
// the pages, the build loads each one and FAILS if React reports a hydration
// mismatch, because a mismatch makes React redraw the whole page and slows the
// first paint on mobile.

import { createServer } from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { buildSchema } from "./schema.mjs";
// Needs Playwright: `npm i -D playwright && npx playwright install chromium`
const { chromium } = createRequire(import.meta.url)("playwright");

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "dist");
const SITE = "https://www.peopleintelligence.co.za";

// One entry per route. `file` is where the HTML is written in dist/.
// Edit titles/descriptions here — they override the defaults in client/index.html.
// `sources` are the files whose last git change sets the page's <lastmod> in
// sitemap.xml. Pages marked `noindex` are left out of the sitemap.
const PAGES = [
  {
    route: "/",
    file: "index.html",
    // homepage keeps the head from client/index.html (updated in a later step)
    sources: ["client/src/pages/corporate-home.tsx", "client/index.html"],
  },
  {
    route: "/christian-coaching",
    file: "christian-coaching.html",
    title: "Christian Leadership Coaching SA | People Intelligence",
    description:
      "Faith-based leadership coaching, ministry team development and Christian leadership workshops with Danelle Esterhuizen. Book a coaching chemistry call today.",
    image: "/og-christian-coaching.jpg",
    imageAlt: "People Intelligence – Christian Leadership Coaching with Danelle Esterhuizen",
    sources: ["client/src/pages/christian-coaching.tsx"],
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
  ".ico": "image/x-icon", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".json": "application/json", ".webmanifest": "application/manifest+json",
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
  if (pg.image) {
    const img = SITE + pg.image;
    html = html
      .replace(/(<meta property="og:image" content=")[^"]*/, `$1${img}`)
      .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${img}`);
    if (pg.imageAlt) html = html.replace(/(<meta property="og:image:alt" content=")[^"]*/, `$1${escape(pg.imageAlt)}`);
  }
  if (pg.noindex) {
    html = html
      .replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">')
      .replace(/\s*<link rel="canonical"[^>]*>/, "");
  }

  // JSON-LD structured data (see scripts/schema.mjs)
  const meta = (re) => (html.match(re)?.[1] || "").replace(/&amp;/g, "&").replace(/&quot;/g, '"');
  const schema = buildSchema(pg, {
    title: meta(/<title>([^<]*)<\/title>/),
    description: meta(/<meta name="description" content="([^"]*)"/),
  });
  if (schema) {
    const json = JSON.stringify(schema, null, 2).replace(/</g, "\\u003c");
    html = html.replace("</head>", `  <script type="application/ld+json">\n${json}\n    </script>\n  </head>`);
  }

  await writeFile(path.join(OUT, pg.file), html);
  const text = rootHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  console.log(`✔ ${pg.route.padEnd(20)} -> ${pg.file.padEnd(24)} ${text.split(" ").length} words`);
}

// 3b. Hydration check: load each written page and fail on React errors
//     (#418/#423/#425 = server/client mismatch) or any uncaught page error.
const problems = [];
for (const pg of PAGES) {
  const check = await browser.newPage();
  await check.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
  check.on("pageerror", (e) => problems.push(`${pg.route}: ${e.message.split("\n")[0]}`));
  check.on("console", (m) => {
    if (m.type() === "error" && /hydrat|Minified React error #(418|423|425)/i.test(m.text()))
      problems.push(`${pg.route}: ${m.text().split("\n")[0]}`);
  });
  // Serve the written file at the page's real route
  await check.route(base + pg.route, (r) =>
    r.fulfill({ path: path.join(OUT, pg.file), contentType: "text/html" })
  );
  await check.goto(base + pg.route, { waitUntil: "networkidle" });
  await check.waitForTimeout(500);
  await check.close();
}

await browser.close();
server.close();

if (problems.length) {
  console.error("\n✘ Hydration check failed — pre-rendered HTML does not match what React renders:");
  for (const p of problems) console.error("  " + p);
  console.error("Tip: write `{`${text} `}<a>` instead of `{text} <a>` so text is one node.\n");
  process.exit(1);
}
console.log("✔ hydration check passed"); 

// 4. sitemap.xml — every indexable page, with the date its content last changed
const shared = ["client/src/components", "client/src/assets"];
function lastModified(files) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], {
      cwd: ROOT, encoding: "utf8",
    }).trim();
    if (out) return out;
  } catch {}
  return new Date().toISOString().slice(0, 10); // not a git checkout: use today
}
const urls = PAGES.filter((pg) => !pg.noindex).map((pg) => {
  const loc = SITE + (pg.route === "/" ? "/" : pg.route);
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModified([...(pg.sources || []), ...shared])}</lastmod>\n  </url>`;
});
await writeFile(
  path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`
);
console.log(`✔ sitemap.xml              ${urls.length} URLs`);
console.log(`\nDone. Upload the contents of ./dist to GoDaddy.`);
