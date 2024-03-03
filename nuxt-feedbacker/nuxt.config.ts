// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  runtimeConfig: {
    public:{
      baseUrl: 'http://127.0.0.1:8000', // Laravel API
      origin: 'http://127.0.0.1:3000', // front end
    }
  },
  modules: [
    '@pinia/nuxt',
    ],
  devtools: { enabled: true },
  app:{
    head:{
      link: [
        //add cdn animate css
        { rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ]
    }
  },
  //add tailwindcss
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

