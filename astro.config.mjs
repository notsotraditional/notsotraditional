import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://notsotraditional.com',
  integrations: [svelte(), tailwind(), sitemap()],
  output: 'hybrid',
  adapter: vercel()
});