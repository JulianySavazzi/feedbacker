<template>
	<!--<h1>Header</h1>-->
	<header class="header">
		<div class="header-group">
			<div class="flex items-center justify-between py-10">
				<!--header items-->
				<div class="w-28 lg:w-36">
					<img src="../assets/images/logo_white.png" alt="logo"
						 class="w-full animate__animated animate__swing">
				</div>
				<div class="flex">
					<!--create account-->
					<button
						@click="$emit('create-account')"
						class="px-6 py-2 font-bold rounded-full text-white focus:outline:none"
						id="header-create-account-button">
						Crie uma conta
					</button>
					<!--login-->
					<button
						@click="$emit('login')"
						class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline:none"
						id="header-login-button">
						Entrar
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.header {
	@apply bg-brand-main w-full flex justify-center;
	/*	height: 700px;*/
}

.header-group {
	@apply flex flex-col w-4/5 max-w-6xl;
}
</style>