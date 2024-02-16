<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import ModalFactory from './components/ModalFactory.vue'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
  <ModalFactory />
</template>

<script>
  import ModalFactory from "@/components/ModalFactory.vue";

  export default {
    components: {ModalFactory}
  }
</script>