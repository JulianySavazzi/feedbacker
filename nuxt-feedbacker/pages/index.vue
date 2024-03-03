<script setup>
//executa toda vez que uma instancia do componente é criada
//definir props e emits aqui dentro

//imports funcoes e consts
import {useToast} from 'vue-toastification'
import useModal from '@/assets/js/hooks/useModal'

//constants
const toast = useToast()
const modal = useModal()

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

onMounted(() => {
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