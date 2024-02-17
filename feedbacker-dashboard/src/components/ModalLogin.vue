<script setup>
	import useModal from '@/hooks/useModal.js'

	const modal = useModal()
	const state = reactive({
		hasErrors: false,
		isLoading: false,
		email: {
			value: '',
			errorMessage: ''
		},
		password: {
			value: '',
			errorMessage: ''
		}
	})

	function handleSubmit(){

	}

</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-black text-4xl font-black">
			Entrar
		</h1>
		<<button
		@click="modal.close()"
		class="text-4xl text-gray-600 focus:outline-none">
			&times;
		</button>
	</div>

	<div class="mt-16">
		<form @submit.prevent="handleSubmit">
			<!--email-->
			<label for="" class="block">
				<span class="text-lg font-medium text-gray-800">
					E-mail
				</span>
				<input
				v-model="state.email.value"
				type="email"
				:class="{
					'border-brand-danger': !!state.email.errorMessage
				}"
				class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 borber-2 border-transparent rounded"
				placeholder="seuemail@email.com">
				<span
				v-if="!!state.email.errorMessage"
				class="block font-medium text-brand-danger">
					{{ state.email.errorMessage }}
				</span>
			</label>
			<!--senha-->
			<label for="" class="block">
				<span class="text-lg font-medium text-gray-800">
					Senha
				</span>
				<input
				v-model="state.password.value"
				type="password"
				:class="{
					'border-brand-danger': !!state.password.errorMessage
				}"
				class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 borber-2 border-transparent rounded"
				>
				<span
				v-if="!!state.email.errorMessage"
				class="block font-medium text-brand-danger">
					{{ state.password.errorMessage }}
				</span>
			</label>
			<!--botao de entrar-->
			<button
			:disabled
			type="submit"
			:class="{
				'opacity-50': state.isLoading
			}"
			class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline:none transition-all duration-150"
			>
				Entrar
			</button>
		</form>
	</div>
</template>

<script>
	import { reactive } from 'vue'
	export default {
		
	}
</script>
