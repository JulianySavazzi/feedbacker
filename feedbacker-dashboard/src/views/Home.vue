<script setup>
  //executa toda vez que uma instancia do componente é criada
  //definir props e emits aqui dentro

  //imports funcoes e consts
  import {onMounted} from "vue";
  import {useRouter} from "vue-router";
  import useModal from '../hooks/useModal.js'

  //components
  import HomeHeader from "@/components/HomeHeader.vue";
  import Footer from "@/components/Footer.vue";
  import Contact from "@/components/Contact.vue"
  import Banner from "@/components/Banner.vue"


  const router = useRouter();
  const modal = useModal();

    function handleLogin(){
      console.log('handleLogin')
      //abrir componente de login
      modal.open({
        component: 'ModalLogin'
      })
    }

   function handleAccountCreate() {
     console.log('handleAccountCreate')
     //abrir componente de criar conta
     modal.open({
       component: 'ModalCreateAccount'
     })
   }

  onMounted(() => {
    //validar o token do usuario para saber se ele pode acessar a rota
    const token = window.localStorage.getItem('token')
    if(token){
      //se o token nao for vazio, usuario autenticado
      //podemos acessar a rota feedback
      router.push({name: 'Feedbacks'})
    }
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

<script>
//executa apenas na primeira vez que o componente é importado
//objetos aqui dentro sao executados apenas uma vez
export default {
  //composition api
  //precisamos exportar os componentes em components: {}
  //em vez de usar setup(){return{}} usar <script setup>
}
</script>