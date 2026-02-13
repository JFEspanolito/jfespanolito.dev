// @ts-check
import { defineConfig } from 'astro/config';

// Integraciones
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import node from '@astrojs/node';

// Tailwind v4 (Vite Plugin)
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ⚠️ CAMBIAR: Importante para que funcione el sitemap
  site: 'https://tudominio.com', 
  output: 'server',
  adapter: node({ mode: 'standalone' }),

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