<script setup>
import {reactive} from 'vue'
import useModal from '/assets/js/hooks/useModal.js'
import {useField} from 'vee-validate'
import {validateEmptyAndLength, validadeEmptyAndEmail} from "/assets/js/utils/validators.js"
import {useToast} from "vue-toastification"
import { FetchError } from 'ofetch'

//vee-validade email
const {
	value: emailValue,
	errorMessage: emailErrorMessage
} = useField('email', validadeEmptyAndEmail)
//vee-validade password
const {
	value: passValue,
	errorMessage: passErrorMessage
} = useField('password', validateEmptyAndLength)

const modal = useModal()
const toast = useToast()
//const	auth = useAuthStore()

const state = reactive({
	hasErrors: false,
	isLoading: false,
	email: {
		value: emailValue,
		errorMessage: emailErrorMessage
	},
	password: {
		value: passValue,
		errorMessage: passErrorMessage
	}
})

async function handleSubmit() {
		toast.clear()
		state.isLoading = true

	//form login
		const userCredentials = {
			email: state.email.value,
			password: state.password.value
		}

		const {error} = await  auth.login(userCredentials.value)

		console.log(error)

		state.isLoading = false
		modal.close()
}
</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-black text-4xl font-black">
			Entrar
		</h1>
		<
		<button
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
					class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 borber-2 border-transparent rounded text-black"
					placeholder="seuemail@email.com">
				<span
					v-if="!!state.email.errorMessage"
					class="block font-medium text-brand-danger">
					{{ state.email.errorMessage }}
				</span>
			</label>
			<!--senha-->
			<label for="" class="block mt-9">
				<span class="text-lg font-medium text-gray-800">
					Senha
				</span>
				<input
					v-model="state.password.value"
					type="password"
					:class="{
					'border-brand-danger': !!state.password.errorMessage
				}"
					class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 borber-2 border-transparent rounded text-black"
				>
				<span
					v-if="!!state.password.errorMessage"
					class="block font-medium text-brand-danger">
					{{ state.password.errorMessage }}
				</span>
			</label>
			<!--botao de entrar-->
			<button
				:disabled="state.isLoading"
				type="submit"
				:class="{
				'opacity-50': state.isLoading
			}"
				class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline:none transition-all duration-150"
			>
				<Icons name="Loading" v-if="state.isLoading"
					class="animate-spin"></Icons>
				<span v-if="!state.isLoading">Entrar</span>

			</button>
		</form>
	</div>
</template>

<script>
export default {}
</script>
