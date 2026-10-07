import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iptve-spana.cloud',
  trailingSlash: 'always',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile'
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/admin'),
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date()
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
