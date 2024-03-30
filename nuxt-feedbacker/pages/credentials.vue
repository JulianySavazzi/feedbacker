<script setup>
//import pallet from "../assets/js/palette.js"

definePageMeta({
	middleware: 'auth'
})

const auth = useAuthStore()
//let colors = pallet.brand

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
				<!--content loader-->
				<!--<ContentLoader-->
				<!--	v-if="auth.isLoggedIn"-->
				<!--	class="rounded"-->
				<!--	width="600px"-->
				<!--	height="50px"-->
				<!--	/>-->
				<div
					class="flex py-3 px-5 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll justify-between">
					<span class="text-brand-graydark">{{ auth.user.apiKey }}</span>
					<div class="flex ml-20">
						<Icons
							name="IconsCopy"
							color="#C0BCB0"
							size="24"
							class="cursor-pointer"
						/>
						<Icons
							name="IconsLoading"
							color="#C0BCB0"
							size="24"
							class="cursor-pointer"
							/>
					</div>
				</div>
				<p class="mt-10 text-lg text-gray-800 font-regular">
					Coloque o script abaixo no seu site para começar a receber feedbacks:
				</p>
				<!--content loader-->
				<!--<ContentLoader-->
				<!--	v-if="auth.isLoggedIn"-->
				<!--	class="rounded"-->
				<!--	width="600px"-->
				<!--	height="50px"-->
				<!--	/>-->
				<div
					class=" py-3 px-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
					<pre class=" text-brand-darkgray">&lt;script src="http://JulianySavazzi-feedbacker-widget.netlify.app?api_key={{ auth.user.apiKey }}"&gt;&lt;/script&gt;
        		</pre>
				</div>
			</div>
		</div>
		<!--<pre-->
		<!--	class="mt-9 ml-9 mr-9 text-gray-800 bg-blue-300 rounded px-6 py-3">-->
		<!--	{{ auth.user }}-->
    	<!--</pre>-->
	</main>
</template>