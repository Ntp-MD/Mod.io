// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
    '@/assets/styles/main.css'
  ],

  app: {
    head: {
      title: 'MOD.io - Global CDN for Modern Apps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          src: '/js/grid-mod.js',
          type: 'module',
          defer: true
        }
      ]
    }
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      }
    ]
  },

  compatibilityDate: '2024-03-28'
})
