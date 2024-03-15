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
</script>

<template>
  <main>
    <h1>Feedbacks</h1>
    <pre
      class="mt-9 ml-9 mr-9 text-gray-800 bg-blue-300 rounded px-6 py-3">
			{{ auth.user }}
    </pre>
  </main>

</template>