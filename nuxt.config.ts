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
        { name: 'description', content: 'Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale.' },
        { property: 'og:title', content: 'MOD.io - Global CDN for Modern Apps' },
        { property: 'og:description', content: 'Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MOD.io - Global CDN for Modern Apps' },
        { name: 'twitter:description', content: 'Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale.' },
        { name: 'twitter:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: []
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
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

  compatibilityDate: '2025-04-24'
})
