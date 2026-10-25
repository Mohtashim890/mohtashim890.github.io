// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohtashim890.github.io',
  // Writing is hidden from navigation and the sitemap until the first article is published.
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/writing/') })]
});