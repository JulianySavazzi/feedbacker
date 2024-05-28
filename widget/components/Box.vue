<script setup lang="ts">
import useStore from 'assets/js/hooks/store'
import colors from 'tailwindcss/colors'
import palette from 'assets/js/palette'
import useNavigation from "assets/js/hooks/navigation";

const store = useStore()
const navigation = useNavigation()

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
  return store.currentComponent === 'WizardSelectFeedbackType'
})

const canShowMoreInfos = computed<boolean>(() => {
  return store.currentComponent !== 'WizardSuccess' && store.currentComponent !== 'WizardError'
})

</script>

<template>
<div class="box animate__animated animate__bounce">
  <header :class="{'justify-between': canShowMoreInfos, 'justify-end': !canShowMoreInfos}" class="relative w-full flex">
    <button v-if="canShowMoreInfos" @click="navigation.back()"  :disabled="canGoBack" :class="{ invisible: canGoBack }"
            class="text-xl text-gray-800 focus:outline-none"
    >
      <IconsArrowLeft :color="colors.gray['600']" />
    </button>
    <p v-if="canShowMoreInfos" class="text-xl font-black text-center text-brand-main">
      {{ label }}
    </p>
    <button @click="emit('close-box')" class="text-xl text-gray-800 focus:outline-none"
    >
      <IconsClose :color="colors.gray['600']" size="14"/>
    </button>
  </header>
  <Wizard/>
  <footer class="text-gray-800 text-sm flex pt-5" v-if="canShowMoreInfos">
    <IconsChat :color="palette.brand.darkgray" class="mr-1"/>
    widget by
    <span class="ml-1 font-bold">feedbacker</span>
  </footer>
</div>
</template>

<style lang="postcss" scoped>
.box{
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl
  select-none;
  width: 400px;
}
</style>