<script setup>
const auth = useAuthStore()
if(!auth.isLoggedIn) console.log('auth: ', auth.isLoggedIn)
</script>

<template>
<div class="banner">
	<div class="banner-bg">
		<div class="flex flex-col mt-28 max-w-fit">
		<!--banner items-->
			<h1 class="text-4xl font-black text-white">
				Tenha um feedback.
				<br>
				E faça seus clientes mais
				<br class="hidden lg-inline-block">
				felizes!
			</h1>
			<p class="text-lg font-medium text-white">
				Receba ideias, reclamações e feedbacks com um
				<br class="hidden lg-inline-block">
				simples widget na página.
			</p>
			<button
				v-if="!auth.isLoggedIn"
				@click="$emit('create-account')"
				class="px-6 py-2 font-bold bg-white rounded-full text-brand-main mt-10 focus:outline:none max-w-fit"
				id="cta-create-account-button">
				Crie uma conta grátis
			</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	
}
</script>

<style lang="postcss" scoped>
.banner{
	@apply bg-brand-main w-full flex justify-center;
	height: 500px;
}

.banner-bg{
	@apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
	.banner-bg{
		background-image: url("../assets/images/home_image.png");
		background-size: 450px;
		background-position: 90% 100%;
		background-repeat: no-repeat;
	}
}
</style>