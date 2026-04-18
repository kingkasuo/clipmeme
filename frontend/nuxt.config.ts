import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  telemetry: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  experimental: {
    appManifest: false,
  },

  features: {
    inlineStyles: false,
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
      { code: 'ko', name: '한국어', file: 'ko.json' },
      { code: 'zh', name: '简体中文', file: 'zh.json' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
    ],
    langDir: 'i18n/locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    bundle: {
      optimizeTranslationDirective: true,
    },
    lazy: true,
    langDir: 'i18n/locales/',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  app: {
    head: {
      title: 'ClipMeme AI - Turn Text Into Viral Memes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Generate viral memes from text using AI. Support for 110+ languages and unlimited templates.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  vite: {
    build: {
      sourcemap: false,
    },
    server: {
      hmr: {
        port: 24678,
      },
    },
    optimizeDeps: {
      include: ['lucide-vue-next'],
    },
  },

  build: {
    transpile: ['@nuxtjs/i18n', 'lucide-vue-next'],
  },

  compatibilityDate: '2024-04-18',
})
