<script setup>
//executa toda vez que uma instancia do componente é criada
//definir props e emits aqui dentro

//imports funcoes e consts
import {useToast} from 'vue-toastification'
import useModal from '@/assets/js/hooks/useModal'

//constants
const toast = useToast()
const modal = useModal()
//const runtimeConfig = useRuntimeConfig()
//const client = useSanctumClient()
//const user = useSanctumUser()

//usuario
//interface MyCustomUser {
//  id: number;
//  login: string;
//  custom_metadata: {
//    group: string;
//    role: string;
//  };
//}
//const user = useSanctumUser<MyCustomUser>();

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

//autenticar SPA
//async function getToken(){
//  const { data, pending, error, refresh } = await useAsyncData('users', () =>
//    client('/api/users'))
//  console.log("onMounted: ", data, pending, error, refresh)
//}

onMounted(() => {
//  runtimeConfig.public
//  getToken()
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