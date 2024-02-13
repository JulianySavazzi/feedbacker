<script setup>
import HomeHeader from "@/components/HomeHeader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue"
import Banner from "@/components/Banner.vue"
</script>

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

<script>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useModal from '../hooks/useModal.js'

export default {
  //composition api
  setup(){
    const router = useRouter();
    const modal = useModal();

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if(token){
        //se o token nao for vazio, usuario autenticado
        //podemos acessar a rota feedback
        router.push({name: 'Feedbacks'})
      }
    })

    function handleLogin(){
      modal.open({
        component: 'ModalLogin'
      })
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