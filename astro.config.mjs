import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://Sara-space.github.io',
  base: "/sara-blog",
  trailingSlash: 'never',
    integrations: [
    tailwind(),
    sitemap()
  ],
});


