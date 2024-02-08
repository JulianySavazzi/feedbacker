<template>
  <HomeHeader
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <main class="bg-white">
    <!--<h1 class="font-black text-brand-main">Home</h1>-->
    <Banner/>
    <Contact/>
  </main>
  <Footer/>
</template>

<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import HomeHeader from "@/components/HomeHeader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue"
import Banner from "@/components/Banner.vue"
</script>

<script>
export default {
  //composition api
  setup(){
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if(token){
        //se o token nao for vazio, usuario autenticado
        //podemos acessar a rota feedback
        router.push({name: 'Feedback'})
      }
    })

    function handleLogin(){
    }

    function handleAccountCreate() {

	  }

    return {
      handleLogin,
      handleAccountCreate
    }

  }
}
</script>