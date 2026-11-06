import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
// Self-hosted Montserrat (served from /assets, no Google Fonts request)
import "./fonts.css";
import "./index.css";

const root = document.getElementById("root")!;

// Pages are pre-rendered to static HTML at build time. Hydrate that HTML instead of
// throwing it away and re-rendering, so the hero image paints without waiting for JS.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}