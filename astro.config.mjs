// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jonah-gr.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/icons',
      include: {
        lucide: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
