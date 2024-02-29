<script setup>
//executa toda vez que uma instancia do componente é criada
//definir props e emits aqui dentro

//imports funcoes e consts
import {useToast} from 'vue-toastification'
import useModal from '@/assets/js/hooks/useModal'

//constants
const toast = useToast()
const modal = useModal()
const runtimeConfig = useRuntimeConfig()

    function handleLogin(){
      modal.open({
        component: 'ModalLogin'
      })
    }

   function handleAccountCreate() {
     modal.open({
       component: 'ModalCreateAccount'
     })
   }

//  onMounted(() => {
//    //validar o token do usuario para saber se ele pode acessar a rota
//    const token = window.localStorage.getItem('token')
//    if(token){
//      //se o token nao for vazio, usuario autenticado
//      //podemos acessar a rota feedback
//      router.push({name: 'Feedbacks'})
//    }
//  })

onMounted(() => {
  runtimeConfig.public
//  const token = $fetch(`http://127.0.0.1:8000/sanctum/csrf-cookie`, {method: "GET"})
//  .then(response => {
//    window.localStorage.getItem('XSRF-TOKEN')
//  });
  toast.success("bem vindo")
})
</script>

<template>
  <HomeHeader
    @create-account="handleAccountCreate"
    @login="handleLogin"
    />
  <main class="bg-white">
    <Banner/>
    <Contact/>
  </main>
  <Footer/>
</template>