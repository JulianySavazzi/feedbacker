<script setup>
import {reactive} from 'vue'
import useModal from '/assets/js/hooks/useModal.js'

const modal = useModal()

</script>

<template>

	<div class="flex w-full justify-center m-4">
		<h1 class="text-brand-main mb-0 text-4xl font-black animate__animated animate__flash">
			Aguarde...
		</h1>
		<!--<button-->
		<!--	@click="modal.close()"-->
		<!--	class="text-4xl text-gray-600 focus:outline-none">-->
		<!--	&times;-->
		<!--</button>-->

	</div>
	<div class="flex w-full  justify-center px-8 py-8 mt-0 w-1/6 rounded-full bg-brand-main focus:outline:none transition-all duration-150">
		<Icons name="IconsLoading"
			class="animate-spin"></Icons>
	</div>


</template>

<script>
export default {
}
</script>
