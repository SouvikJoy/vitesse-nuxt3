import { defineNuxtConfig } from 'nuxt3'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'

export default defineNuxtConfig({
  title: 'Portfolio',
  htmlAttrs: {
    lang: 'en-Us',
  },
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'copyright', name: 'copyright', content: 'Debugger.tech' },
      { hid: 'language', name: 'language', content: process.env.APP_LOCALE },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
      { hid: 'Classification', name: 'Classification', content: 'Textile Company Website' },
      { hid: 'designer', name: 'designer', content: 'Debugger.tech' },
      { hid: 'reply-to', name: 'reply-to', content: 'info@debugger.tech' },
      { hid: 'category', name: 'category', content: 'Template' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      { hid: 'itemprop-name', itemprop: 'name', content: process.env.APP_NAME },
      { hid: 'itemprop-description', itemprop: 'description', content: process.env.APP_DESCRIPTION },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: process.env.APP_NAME },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: process.env.APP_DESCRIPTION },
      { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: process.env.APP_NAME },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: process.env.APP_URL },
      { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Personal Portfolio' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'A Nuxt PWA starter template with Encrypted Cookies, Express.js, Axios, Vue Router, Passport.js.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Portfolio' },
      { name: 'description', content: 'Portfolio' },
      { name: 'theme-color', content: '#004d40' },
    ],
    script: [
      { src: '/resources/assets/js/customjs1.js', body: true },
      { src: '/resources/assets/js/jquery-3.3.1.min.js', body: true },
      { src: '/resources/assets/js/customjs2.js', body: true },
      { src: '/resources/assets/js/owl.carousel.js', body: true },
      { src: '/resources/assets/js/customjs3.js', body: true },
      { src: '/resources/assets/js/jquery.magnific-popup.min.js', body: true },
      { src: '/resources/assets/js/customjs4.js', body: true },
      { src: '/resources/assets/js/jquery.waypoints.min.js', body: true },
      { src: '/resources/assets/js/jquery.countup.js', body: true },
      { src: '/resources/assets/js/customjs5.js', body: true },
      { src: '/resources/assets/js/bootstrap.min.js', body: true },
    ],
    link: [
      { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'icon', sizes: '192x192', href: '/favicon-192x192.ico' },
      { rel: 'icon', sizes: '256x256', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: '/resources/assets/css/main.css' },
    ],
    style: [

    ],
  },
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
  vite: {
    plugins: [
      Pages({
        extensions: ['vue', 'md'],
      }),
      ViteComponents({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        customLoaderMatcher: id => id.endsWith('.md'),

        // auto import icons
        customComponentResolvers: [
          // https://github.com/antfu/vite-plugin-icons
          ViteIconsResolver({
            componentPrefix: '',
            // enabledCollections: ['carbon']
          }),
        ],
      }),
      ViteIcons(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Portfolio',
          short_name: 'Portfolio',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      exclude: [
        'vue-demi',
      ],
    },
  },
})
