import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  integrations: [mdx(), sitemap()],
});