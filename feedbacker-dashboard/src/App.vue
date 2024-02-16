<template>
  <RouterView />
  <ModalFactory />
</template>

<script>
  import ModalFactory from "@/components/ModalFactory.vue";
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    components: { ModalFactory }
  }
</script>