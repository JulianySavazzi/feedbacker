<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

</script>

<template>
  <main>
    <h1>Credentials</h1>
    <pre
      class="mt-9 ml-9 mr-9 text-gray-800 bg-blue-300 rounded px-6 py-3">
			{{ auth.user }}
    </pre>
  </main>

</template>