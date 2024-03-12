<script setup>
import {reactive} from 'vue'

definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const state = reactive({
  hasErrors: false,
  isLoading: false,
  isAuthUser: auth.isLoggedIn
})

console.log(state.isAuthUser)

//if(state.isAuthUser !== null){
//  console.log('User: ', state.isAuthUser.value )
//} else {
//  toast.error("Você precisa fazer login para acessar a página!")
//  navigateTo('/')
//}

</script>

<template>
  <main>
    <h1>Feedbacks</h1> 
  </main>

</template>