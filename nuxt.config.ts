// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app:{
    head:{
      title: 'SuniyX - Yaxshi Texnologiyalar',
      meta: [
        {
          name: 'description',
          content: 'SuniyX kompaniyasi, eng sifatli texnologiyalarni o\'z ichiga jamlagan va mijozlariga yaxshi xizmat ko\'rsatuvchi korxonadir. Bizning texnologiyalar orqali hayotni qulaylashtiring.',
        },
        {
          name: 'keywords',
          content: 'SuniyX, texnologiya, xizmatlar, kompaniya, innovatsiya, suniy, IT, Ai, data',
        },
        {
          name: 'author',
          content: 'SuniyX',
        },
        
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://suniyx.uz/',
        },
        { rel: 'icon', type: 'image/png', href: '/images/suniyX.png' }
      ],
    }
  },
  modules: ['@nuxt/ui', '@nuxt/image','@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: ['en', 'ru'], // used in URL path prefix
    defaultLocale: 'en'
  }
})
