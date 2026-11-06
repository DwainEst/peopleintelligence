import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Add <link rel="preload"> for the main (upright) Montserrat file so the browser
// fetches it alongside the CSS instead of waiting to discover it inside the CSS.
function preloadMainFont(): Plugin {
  return {
    name: "preload-main-font",
    apply: "build",
    transformIndexHtml(_html, ctx) {
      const font = Object.keys(ctx.bundle ?? {}).find((f) =>
        /montserrat-latin-wght-normal-.*\.woff2$/.test(f),
      );
      if (!font) return [];
      return [
        {
          tag: "link",
          attrs: { rel: "preload", href: `/${font}`, as: "font", type: "font/woff2", crossorigin: "" },
          injectTo: "head",
        },
      ];
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadMainFont()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Emit every image as a file (no data: URIs) so it is cacheable and allowed by the CSP
    assetsInlineLimit: 0,
  },
});
