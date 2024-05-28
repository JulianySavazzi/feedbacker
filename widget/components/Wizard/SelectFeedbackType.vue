<script setup lang="ts">

const emit = defineEmits(['select-feedback-type', 'next'])

function handleSelect(type: string): void {
  emit('select-feedback-type', type)
  emit('next')
}

</script>

<template>
<div class="flex justify-between w-full my-5">
  <button @click="() => handleSelect('ISSUE')"
          class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col
    justify-center items-center p-5 w-28 cursor-pointer focus:outline-none
  ">
   <div class="w-12">
     <NuxtImg src="/images/issue.png" class="w-full" alt="problema"/>
   </div>
    <p class="font-medium mt-1 text-gray-800">Problema</p>
  </button>
  <button @click="() => handleSelect('IDEA')"
          class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col
    justify-center items-center p-5 w-28 cursor-pointer focus:outline-none
  ">
    <div class="w-12">
      <NuxtImg src="/images/idea.png" class="w-full" alt="ideia"/>
    </div>
    <p class="font-medium mt-1 text-gray-800">Ideia</p>
  </button>
  <button @click="() => handleSelect('OTHER')"
          class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col
    justify-center items-center p-5 w-28 cursor-pointer focus:outline-none
  ">
    <div class="w-12">
      <NuxtImg src="/images/other.png" class="w-full" alt="outros"/>
    </div>
    <p class="font-medium mt-1 text-gray-800">Outros</p>
  </button>
</div>
</template>

<style scoped lang="postcss">

</style>