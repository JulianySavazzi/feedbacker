<script setup>
const auth = useAuthStore()
</script>
<template>
<!--<h1>Contato</h1>-->
	<div class="flex justify-center w-full">
		<div class="flex flex-col items-center w-4/5 max-w-6xl my-16">
			<h1 class="text-4xl font-black text-center text-gray-800">
			Alguma dúvida?
			</h1>
			<p class="text-lg text-center text-gray-800 font-regular">
			Quer saber melhor como funciona e quais são os preços?
			</p>
			<pre
				v-if="auth.user != null"
				class="flex mt-9 w-4/5 text-gray-800 bg-blue-300 rounded px-6 py-3 w-full lg:w-2/3 overflow-x-scroll justify-between">
			{{ auth.user.name }}
			{{ auth.user.email }}
			{{ auth.user.api_token }}
			</pre>
			<button class="mt-10">
				<a href="mailto:"
				class="px-6 py-2 mt-10 font-bold text-white rounded-full bg-brand-main facus:outline-none">
				Mande um e-mail pra gente!
				</a>
			</button>
		</div>
	</div>
</template>
