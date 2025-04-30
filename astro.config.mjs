// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel.github.io',
  base: '/gsvaliente/',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      title: 'Gabriel Valiente',
    }),
  ],
})
