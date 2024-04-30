<script setup>
import {reactive} from 'vue'
import useModal from '/assets/js/hooks/useModal.js'

const modal = useModal()

</script>

<template>
	<div id="modal-success-account" class="flex justify-between">
		<div class="w-full text-6xl mt-10 ">
			<h1 class="text-brand-main font-black animate__animated  animate__backInDown animate__shakeX">Mandou bem!</h1>
			<p class="text-black text-2xl pt-6 animate__animated animate__backInUp animate__pulse">
		Sua conta foi criada com sucesso, <br/> agora voce pode fazer login...
			</p>
		</div>

		<button
			@click="modal.close()"
			class="text-4xl text-gray-600 focus:outline-none mt-0">
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
