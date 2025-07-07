// nuxt.config.ts

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  runtimeConfig: {
    strapiApiToken: process.env.STRAPI_API_TOKEN,
    strapiUrl: process.env.STRAPI_URL,
    public: {
      strapiApiToken: process.env.STRAPI_API_TOKEN,
      strapiUrl: process.env.STRAPI_URL,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://eden-labs.fr",
    name: "Eden Labs",
    description:
      "Eden Labs accompagne les PME/ETI dans leur transformation numérique avec l'IA générative",
    defaultLocale: "fr", // not needed if you have @nuxtjs/i18n installed
  },

  app: {
    head: {
      title: "Eden Labs - Conseil en IA Générative",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Eden Labs accompagne les PME/ETI dans leur transformation numérique avec l'IA générative",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
        { rel: "preconnect", href: "https://static.axept.io" },
        { rel: "preconnect", href: "https://app.cal.com" },
        {
          rel: "preload",
          as: "image",
          href: "/_ipx/f_webp&q_80&s_1088x816/images/home-hero.webp",
        },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZB6N27R');`,
        },
      ],
    },
  },

  routeRules: {
    // Page d'accueil avec preload des ressources critiques
    "/": {
      isr: true,
      prerender: true,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
    // Pages statiques avec cache optimisé
    "/services": {
      isr: true,
      prerender: true,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
    "/about": {
      isr: true,
      prerender: true,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
    // Pages dynamiques avec revalidation plus fréquente
    "/blog/**": { isr: 3600, robots: false },
    "/resources/**": { isr: 3600, robots: false },
    "/images/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  plugins: ["~/plugins/gsap.client.ts", "~/plugins/structured-data.client.ts"],

  fonts: {
    google: {},
  },

  modules: ["@nuxt/image", "@nuxtjs/seo", "nuxt-security", "@nuxt/fonts"],

  // Configuration robots.txt
  robots: {
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://eden-labs.fr/sitemap.xml",
  },

  // Configuration des images pour les performances
  image: {
    format: ["webp", "avif"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 48,
          height: 48,
          quality: 80,
        },
      },
      hero: {
        modifiers: {
          format: "webp",
          quality: 85,
          width: 800,
          height: 600,
        },
      },
      card: {
        modifiers: {
          format: "webp",
          quality: 80,
          width: 400,
          height: 300,
        },
      },
    },
  },

  // Optimisations de performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
});
