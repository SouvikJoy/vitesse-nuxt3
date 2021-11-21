import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  title: 'Portfolio',
  buildModules: [
    '@vueuse/core/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
})
