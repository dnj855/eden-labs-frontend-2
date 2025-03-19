import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Eden Labs - Conseil en IA Générative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Eden Labs accompagne les PME/ETI dans leur transformation numérique avec l\'IA générative' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://rsms.me/inter/inter.css'
        }
      ]
    }
  },

  routeRules: {
    // Statique par défaut avec revalidation périodique
    '/**': { isr: true },
    // Pages dynamiques avec revalidation plus fréquente
    '/blog/**': { isr: 3600 },
    '/resources/**': { isr: 3600 }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/services',
        '/about',
        '/resources',
        '/blog'
      ]
    }
  },

  experimental: {
    payloadExtraction: true
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL,
      strapiApiToken: process.env.STRAPI_API_TOKEN
    }
  }
})