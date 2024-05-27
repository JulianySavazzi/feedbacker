<script setup lang="ts">
import {resetStore} from "~/stores/useWidgetStore";

function goBack(): void {
  resetStore()
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full my-5">
    <div class="w-16 mb-5">
      <NuxtImg src="/images/error.png" class="w-full" alt="erro ao enviar"/>
    </div>
    <p class="text-xl font-black text-center w-full text-black">
      Eita! Aconteceu algum erro.
    </p>
    <button class="flex justify-center items-center w-full mt-2 rounded-full font-regular text-sm flex-col bg-brand-gray
      py-2 px-5 cursor-pointer focus:outline-none text-black"
            @click="goBack"
    >
      Tente novamente!
    </button>
  </div>
</template>

<style scoped lang="postcss">

</style>