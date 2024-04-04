<script setup>
import {reactive} from 'vue'
import useModal from '/assets/js/hooks/useModal.js'

const modal = useModal()

</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-black text-4xl font-black">
			Sua conta foi criada com sucesso!
		</h1>
		<
		<button
			@click="modal.close()"
			class="text-4xl text-gray-600 focus:outline-none">
			&times;
		</button>
	</div>

	<div class="mt-16">
		
	</div>
</template>

<script>
export default {
}
</script>
