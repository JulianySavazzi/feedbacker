<script setup>
import {reactive} from 'vue'
import useModal from '@/hooks/useModal.js'
import {useField} from 'vee-validate'
import {validateEmptyAndLength, validadeEmptyAndEmail} from "@/utils/validators.js"
import services from '@/services'
import {useRouter} from 'vue-router'
import {useToast} from "vue-toastification"
import Icon from '@/components/Icons/Index.vue'

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
//vee-validade name
const {
	value: nameValue,
	errorMessage: nameErrorMessage
} = useField('name', validateEmptyAndLength)

const modal = useModal()
const router = useRouter()
const toast = useToast()

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
	},
	name: {
		value: nameValue,
		errorMessage: nameErrorMessage
	}
})

async function handleSubmit() {
	try {
		toast.clear()
		state.isLoading = true
		//pegando retorno da promisse de login
		const {data, errors} = await services.auth.register({
			name: state.name.value,
			email: state.email.value,
			password: state.password.value
		})

		console.log(state.name.value, state.email.value, state.password.value)
		console.log('errors: ', errors)

		if (!errors) {
			console.log('craindo conta...')
			toast("Vamos criar sua conta em breve...")
			state.isLoading = false
			modal.close()
			return
		}
		//error handling if(errors.status ==== ?)
		console.log('status: ', errors.status)

		if (errors.status === 404) {
			//console.log('404')
			toast.error('Não estamos criando novas contas no momento....')
		}

		if (errors.status === 500) {
			//console.log('500')
			toast.error('Servidor indisponível no momento, aguarde...')
		}

		state.isLoading = false

	} catch (error) {
		state.isLoading = false
		state.hasErrors = !!error
		//falha na requisição
		console.log('Oooops: ', error)
		toast.error('Erro ao criar conta, tente novamente mais tarde!')
	}
}
</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-black text-4xl font-black">
			Criar conta
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
			<!--name-->
			<label for="" class="block">
				<span class="text-lg font-medium text-gray-800">
					Nome
				</span>
				<input
					v-model="state.name.value"
					type="text"
					:class="{
						'border-brand-danger': !!state.name.errorMessage
					}"
					class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 borber-2 border-transparent rounded text-black"
					placeholder="Seu Nome">
				<span
					v-if="!!state.name.errorMessage"
					class="block font-medium text-brand-danger">
					{{ state.name.errorMessage }}
				</span>
			</label>
					<!--email-->
			<label for="" class="block mt-9">
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
				<Icon name="Loading" v-if="state.isLoading"
					class="animate-spin"></Icon>
				<span v-if="!state.isLoading">Criar conta</span>
			</button>
		</form>
	</div>
</template>

<script>
export default {}
</script>
