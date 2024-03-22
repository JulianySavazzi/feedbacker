<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

</script>

<template>
  <main class="bg-white">
    <LoggedBanner
      title="Credenciais"
      subtitle="Guia de instalação e geração de suas credenciais"
      />
    <pre
      class="mt-9 ml-9 mr-9 text-gray-800 bg-blue-300 rounded px-6 py-3">
			{{ auth.user }}
    </pre>
  </main>
</template>