// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, // Disable in production for better performance
  
  // Enable sourcemaps for development
  sourcemap: {
    server: true,
    client: true
  },
  
  css: [
    '@/assets/styles/main.css'
  ],

  // Enable production optimizations
  nitro: {
    minify: true,
    compressPublicAssets: true
  },

  // Optimize build
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            ui: ['@nuxt/ui-templates']
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['@nuxt/devtools']
    },
    // Enable sourcemaps for debugging
    server: {
      fs: {
        strict: true
      }
    }
  },

  
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
      // Inline critical CSS to prevent render-blocking
      style: [
        {
          innerHTML: `
            *{box-sizing:border-box;margin:0;padding:0}
            body{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;line-height:1.6;color:var(--main-color-1)}
            .container{max-width:1200px;margin:0 auto;padding:0 20px}
            .header-container{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background:#fff;position:sticky;top:0;z-index:100}
            .hero-section{padding:80px 20px;text-align:center}
            .hero-title{font-size:clamp(32px,5vw,64px);font-weight:800;line-height:1.2;margin-bottom:20px}
            .hero-description{font-size:18px;max-width:600px;margin:0 auto 40px;color:#666}
            .btn{display:inline-flex;align-items:center;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;transition:all 0.3s ease}
            .btn-primary{background:linear-gradient(135deg,#7f2c86 0%,#4a1c4e 100%);color:#fff}
            .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(127,44,134,0.3)}
          `
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Preload critical fonts with display: swap
        { 
          rel: 'preload', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
          as: 'style',
          onload: 'this.onload=null;this.rel="stylesheet"'
        },
        { 
          rel: 'preload', 
          href: 'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        { 
          rel: 'preload', 
          href: 'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        // Fallback for when preload fails
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
          media: 'print',
          onload: 'this.media="all"'
        }
      ],
      script: [
        // Only load mockup script in development
        ...(import.meta.env.DEV ? [{
          src: 'https://cdn.mod.io/v2/latest.min.js',
          async: true,
          defer: true
        }] : [])
      ]
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
