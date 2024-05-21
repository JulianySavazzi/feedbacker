<script setup lang="ts">
import useStore from 'assets/js/hooks/store'

const store = useStore()

const emit = defineEmits(['close-box'])

const label = computed<string>(() => {
	if(store.feedbackType === 'ISSUE'){
		return 'Reporte um problema'
	}
	
	if(store.feedbackType === 'IDEA'){
		return 'Diga sua ideia'
	}
	
	if(store.feedbackType === 'OTHER'){
		return 'Deixe seu feedback'
	}
	
	return 'Do que você precisa ?'
	
})

const canGoBack = computed<boolean>(() => {
  return store.currentComponent === 'SelectFeedbackType'
})

const canShowMoreInfos = computed<boolean>(() => {
  return store.currentComponent !== 'Success' && store.currentComponent !== 'Error'
})

</script>

<template>
<div @click="emit('close-box')"
  class="box animate__animated animate__bounce">
  <h1>Box</h1>
</div>

</template>

<style lang="postcss" scoped>
.box{
 @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5
 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>