// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  //add sanctum
  modules: ['nuxt-auth-sanctum'],
  // nuxt-auth-sanctum options (also configurable via environment variables)
  sanctum: {
    baseUrl: 'http://127.0.0.1:8000', // Laravel API
  },
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

