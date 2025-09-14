import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://github.com/Sara-space",
  base: "/",                     
  integrations: [tailwind({ applyBaseStyles: false })],
});


