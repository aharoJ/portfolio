import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  build: { inlineStylesheets: "always" },
  trailingSlash: "always",
  markdown: { syntaxHighlight: false },
  vite: { cacheDir: ".astro/vite" },
});
