// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/styles/index.scss'
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ["nuxt-svgo"]
})
