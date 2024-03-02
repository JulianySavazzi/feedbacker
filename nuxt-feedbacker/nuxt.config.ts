// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  //add sanctum
//  modules: ['nuxt-auth-sanctum'],
  runtimeConfig: {
    public:{
      baseUrl: 'http://127.0.0.1:8000', // Laravel API
      origin: 'http://127.0.0.1:3000', // front end
    }
  },
//  sanctum: {
//    baseUrl: 'http://127.0.0.1:8000', // Laravel API
//    origin: 'http://localhost:3000', // Nuxt app (required for CSRF cookie), by default uses `useRequestURL().origin`
//    userStateKey: 'sanctum.user.identity',
//    redirectIfAuthenticated: false,
//    endpoints: {
//      csrf: '/sanctum/csrf-cookie', // CSRF cookie endpoint
//      login: '/login', // Endpoint that accepts user credentials
//      logout: '/logout', // Endpoint to destroy the current session
//      user: '/api/user', // Endpoint that return current user information
//    },
//    csrf: {
//      cookie: 'XSRF-TOKEN',
//      header: 'X-XSRF-TOKEN',
//    },
//    client: {
//      retry: false,
//    },
//    redirect: {
//      keepRequestedRoute: false,
//      onLogin: '/',
//      onLogout: '/',
//      onAuthOnly: '/login',
//      onGuestOnly: '/',
//    },
//  },
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

