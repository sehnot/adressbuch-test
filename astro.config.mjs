// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: "file",
    assets: 'assets',
    inlineStylesheets: 'never'
  },
  integrations: [pagefind()],
  site: 'https://sehnot.github.io',
  output: 'static',
  base: '/adressbuch-test/'
});
