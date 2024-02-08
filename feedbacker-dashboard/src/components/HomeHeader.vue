<template>
<!--<h1>Header</h1>-->
<header class="header">
	<div class="header-group">
		<div class="flex items-center justify-between py-10">
		<!--header items-->
			<div class="w-28 lg:w-36">
				<img src="../assets/images/logo_white.png" alt="logo" class="w-full">
			</div>
			<div class="flex">
				<button class="px-6 py-2 font-bold rounded-full text-white focus:outline:none">
					Crie uma conta
				</button>
				<button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline:none">
					Entrar
				</button>
			</div>
		</div>
		<!--<div class="flex flex-col mt-28 max-w-fit">-->
		<!--&lt;!&ndash;banner items&ndash;&gt;-->
		<!--	<h1 class="text-4xl font-black text-white">-->
		<!--		Tenha um feedback.-->
		<!--		<br>-->
		<!--		E faça seus clientes mais-->
		<!--		<br class="hidden lg-inline-block">-->
		<!--		felizes!-->
		<!--	</h1>-->
		<!--	<p class="text-lg font-medium text-white">-->
		<!--		Receba ideias, reclamações e feedbacks com um-->
		<!--		<br class="hidden lg-inline-block">-->
		<!--		simples widget na página.-->
		<!--	</p>-->
		<!--	<button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main mt-10 focus:outline:none max-w-fit">-->
		<!--		Crie uma conta grátis-->
		<!--	</button>-->
		<!--</div>-->
	</div>
</header>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.header{
	@apply bg-brand-main w-full flex justify-center;
/*	height: 700px;*/
}

.header-group{
	@apply flex flex-col w-4/5 max-w-6xl;
}

/*@media (min-width: 640px) {*/
/*	.header-group{*/
/*		background-image: url("../assets/images/home_image.png");*/
/*		background-size: 622px;*/
/*		background-position: 90% 100%;*/
/*		background-repeat: no-repeat;*/
/*	}*/
/*}*/

</style>