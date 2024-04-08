<script setup>
import {reactive} from 'vue'

definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const state = reactive({
  hasErrors: false,
  isLoading: false,
})

console.log(auth.user.name)

//get all feedbacks
async function getAll(){
  
}
</script>

<template>
  <main class="bg-white">
    <LoggedBanner
      title="Feedbacks"
      subtitle="Detalhes de todos os feedbacks recebidos"
      />
    <!--body components-->
  </main>

</template>