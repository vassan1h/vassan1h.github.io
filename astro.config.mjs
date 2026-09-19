import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vassan1h.github.io",
  trailingSlash: "never",
  integrations: [sitemap()],
});
