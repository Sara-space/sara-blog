import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sara-space.github.io",
  base: "/sara-blog",                     
  integrations: [tailwind({ applyBaseStyles: false })],
});


