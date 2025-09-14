import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://github.com/Sara-space",
  base: "/sara-blog",                     
  integrations: [tailwind({ applyBaseStyles: false })],
});


