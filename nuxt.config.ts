import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  runtimeConfig: {
      strapiApiToken: process.env.STRAPI_API_TOKEN,
      strapiUrl: process.env.STRAPI_URL,
    public: {
      strapiApiToken: process.env.STRAPI_API_TOKEN,
      strapiUrl: process.env.STRAPI_URL,
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://eden-labs.fr',
    name: 'Eden Labs',
    description: 'Eden Labs accompagne les PME/ETI dans leur transformation numérique avec l\'IA générative',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },

  app: {
    head: {
      title: 'Eden Labs - Conseil en IA Générative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
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
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZB6N27R');`
        }
      ]
    }
  },

  routeRules: {
    // Statique par défaut avec revalidation périodique
    '/**': { isr: true },
    // Pages dynamiques avec revalidation plus fréquente
    '/blog/**': { isr: 3600, robots: false },
    '/resources/**': { isr: 3600, robots: false }
  },

  experimental: {
    payloadExtraction: true
  },

  plugins: [
    '~/plugins/gsap.client.ts'
  ],

  modules: ['@nuxt/image', '@nuxtjs/seo', 'nuxt-security']
})