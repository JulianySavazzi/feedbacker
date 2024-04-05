<script setup>
import {useToast} from "vue-toastification"
//import pallet from "../assets/js/palette.js"

definePageMeta({
	middleware: 'auth'
})

const auth = useAuthStore()
const toast = useToast()
const state = reactive({
	hasErrors: false,
	isLoading: false
})

async function handleGenerateApiKey(){
	try {
		state.isLoading = true
		const {error} = await useApiFetch('/api/user/generate', {
			method: "POST",
			onResponseError({response}){
				console.log(response.status)
			}
		})
		await auth.refreshUser()
	} catch (e) {
		state.hasErrors = true
		state.isLoading = false
		toast.error("Erro ao gerar nova api key! ", e.message)
		console.log(e.message)
	}
	state.isLoading = false
}

async function handleCopy(){
	toast.clear()
	try{
		state.isLoading = true
		await navigator.clipboard.writeText(auth.user.api_token)
		toast.success('Copiado!')
		state.isLoading = false
	}catch(error){
		state.isLoading = false
		toast.error("Erro ao copiar api key! ", error.message)
	}
}

</script>

<template>
	<main class="bg-white">
		<LoggedBanner
			title="Credenciais"
			subtitle="Guia de instalação e geração de suas credenciais"
		/>
		<div class="flex justify-center w-full h-full">
			<div class="flex flex-col w-4/5 max-w-6xl py-10">
				<h1 class="text-3xl font-black text-brand-darkgray">
					Instalação e configuração
				</h1>
				<p class="mt-10 text-lg text-gray-800 font-regular">
					Este aqui é a sua chave de api:
				</p>

				<div
					class="flex py-3 px-5 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll justify-between">
					<span v-if="!state.isLoading && auth.isLoggedIn" class="text-brand-graydark">{{ auth.user.api_token }}</span>
					<span v-else class="text-brand-pink"> aguarde, estamos gerando sua chave de api... </span>
					<div class="flex ml-20">
						<Icons
							name="IconsCopy"
							color="#C0BCB0"
							size="24"
							class="cursor-pointer"
							@click="handleCopy"
						/>
						<Icons
							name="IconsLoading"
							color="#C0BCB0"
							size="24"
							class="cursor-pointer"
							@click="handleGenerateApiKey"
							/>
					</div>
				</div>

							<!--content loader-->
				<!--<ContentLoader-->
				<!--	v-else-->
				<!--	class="rounded"-->
				<!--	width="600px"-->
				<!--	height="50px"-->
				<!--	/>-->

				<p class="mt-10 text-lg text-gray-800 font-regular">
					Coloque o script abaixo no seu site para começar a receber feedbacks:
				</p>
				<!--content loader-->
				<!--<ContentLoader-->
				<!--	v-else-->
				<!--	class="rounded"-->
				<!--	width="600px"-->
				<!--	height="50px"-->
				<!--	/>-->
				<div
					class=" py-3 px-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
					<pre v-if="!state.isLoading && auth.isLoggedIn" class=" text-brand-darkgray">&lt;script src="http://JulianySavazzi-feedbacker-widget.netlify.app?api_key={{ auth.user.api_token}}"&gt;&lt;/script&gt;
        			</pre>
					<span v-else class="text-brand-pink"> aguarde, estamos gerando sua chave de api... </span>
				</div>
			</div>
		</div>
	</main>
</template>