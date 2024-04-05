<script setup>
import {reactive} from 'vue'
import useModal from '/assets/js/hooks/useModal.js'

const modal = useModal()

</script>

<template>

	<div class="flex justify-between ">
		<h1 class="text-brand-main text-4xl font-black">
			Aguarde...
		</h1>
		<!--<button-->
		<!--	@click="modal.close()"-->
		<!--	class="text-4xl text-gray-600 focus:outline-none">-->
		<!--	&times;-->
		<!--</button>-->
	</div>

	<div class="px-8 py-3 mt-16 w-1/6 rounded-full bg-brand-main focus:outline:none transition-all duration-150">
		<Icons name="IconsLoading" 
			class="animate-spin"></Icons>
	</div>
</template>

<script>
export default {
}
</script>
