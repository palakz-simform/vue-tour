// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
  devtools: { enabled: true },
   plugins: [
    { src: './plugins/vueTour.js', mode: 'client' },
  ],
})
