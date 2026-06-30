import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import config from './blog.config';
import { blogKit } from "astro-blog-kit/integration";
import { defineBlogConfig } from "astro-blog-kit";

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_floorinsulationpanels/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [
    blogKit(defineBlogConfig(config)),
    sitemap()
  ],
});