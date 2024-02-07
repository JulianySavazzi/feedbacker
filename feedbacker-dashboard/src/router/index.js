import { createRouter, createWebHistory } from 'vue-router'

//importar components
const Home = () => import('../views/Home.vue')
const Feedbacks = () => import('../views/Feedbacks.vue')
const Credentials = () => import('../views/Credentials.vue')

//criar rotas para cada component
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      component: Feedbacks,
      meta: {
        //metdaados da rota
        //para acessar essa rota o user precisa estar autenticado
        hashAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'Credentials',
      component: Credentials,
      meta: {
        hashAuth: true
      }
    },
    {
      patch: '/:patchMatch(.*)*',
      redirect: {name: 'home'}
    }
  ]
})

export default router
