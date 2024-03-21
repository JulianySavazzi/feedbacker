<script setup>
//executa toda vez que uma instancia do componente é criada
//definir props e emits aqui dentro

//imports funcoes e consts
import {useToast} from 'vue-toastification'

//constants
const toast = useToast()

   
onMounted(() => {
  toast.success("bem vindo")

})
</script>

<template>

  <main class="bg-white">
    <Banner/>
    <Contact/>
  </main>

</template>