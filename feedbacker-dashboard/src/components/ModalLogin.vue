<script setup>
	import { reactive } from 'vue'
	import useModal from '@/hooks/useModal.js'
	import {useField} from 'vee-validate'
	import {validateEmptyAndLength, validadeEmptyAndEmail} from "@/utils/validators.js"
	import services from '@/services'
	import {useRouter} from 'vue-router'
	import { useToast } from "vue-toastification"

	const {
		value: emailValue,
		errorMessage: emailErrorMessage
	} = useField('email', validadeEmptyAndEmail)

	const {
		value: passValue,
		errorMessage: passErrorMessage
	} = useField('password', validateEmptyAndLength)

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
		}
	})

	async function handleSubmit(){
		try {
			toast.clear()
			state.isLoading = true
			const {data, errors} = await services.auth.login({
				email: state.email.value,
				password: state.email.value
			})

			if(!errors){
				//salvar o token de autenticaçao
				window.localStorage.setItem('token', data.token)
				router.push({name: 'Feedbacks'})
				state.isLoading = false
				modal.close()
				return
			}

			//error handling if(errors.status ==== ?)
			if(errors.status === 404){
				console.log('404')
				toast.error('E-mail não encontrado!')
			}
			if(errors.status === 401){
				console.log('401')
				toast.error('E-mail ou senha não inválidos!')
			}
			if(errors.status === 400){
				console.log('400')
				toast.error('Erro ao fazer login!')
			}
			if(errors.status === 500){
				console.log('500')
				toast.error('Servidor indisponível no momento, aguarde...')
			}

			state.isLoading = false

		}
		catch(error){
			state.isLoading = false
			state.hasErrors = !!error
			//falha na requisição
			toast.error('Erro ao fazer login, tente novamente!')
		}
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
				Entrar
			</button>
		</form>
	</div>
</template>

<script>
	export default {
		
	}
</script>
