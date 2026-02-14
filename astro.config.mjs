// @ts-check
import { defineConfig } from 'astro/config';

// Integraciones
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

// Tailwind v4 (Vite Plugin)
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jfespanolito.dev', 
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),

  integrations: [
    react(),
    sitemap(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
