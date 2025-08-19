// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Define el dominio del sitio para URLs canónicas y sitemap.
  // Puedes sobreescribirlo con la variable de entorno SITE en despliegue.
  site: process.env.SITE || 'http://localhost:4321',

  integrations: [
    vue(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' }
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});