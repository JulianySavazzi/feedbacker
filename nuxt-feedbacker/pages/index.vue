<script setup>
import {useToast} from 'vue-toastification'
const toast = useToast()

onMounted(() => {
  toast("oiii funcionou!")
})

</script>

<template>
  <body class="">
    <div>
      <h1 class="mt-10 ml-10 animate__animated animate__swing">welcome nuxt</h1>
    </div>
  </body>
</template>
