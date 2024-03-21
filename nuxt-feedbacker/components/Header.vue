<script setup>
//import Credentials from "~/pages/credentials.vue";
const auth = useAuthStore()
</script>

<template>
	<header class="header">
		<div class="header-group">
			<div class="flex items-center justify-between py-10">
				<!--header items-->
				<div class="w-28 lg:w-36">
					<NuxtLink to="/">
						<img src="../assets/images/logo_white.png" alt="logo"
							 class="w-full animate__animated animate__swing">
					</NuxtLink>
				</div>
				<div class="flex">
					<!--<button-->
					<!--	class="px-6 py-2 font-bold rounded-full text-white focus:outline:none">-->
					<!--	Feedbacks-->
					<!--</button>-->
					<!--<button-->
					<!--	class="px-6 py-2 font-bold rounded-full text-white focus:outline:none">-->
					<!--	Credenciais-->
					<!--</button>-->

					<div class="flex ">
						<ul class="flex list-none">
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/credentials">Credenciais</NuxtLink>
							</li>
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/feedbacks">Feedbacks</NuxtLink>
							</li>
							<li>
								<button
									class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline:none">
									{{ auth.user.name }} ( SAIR )
								</button>
							</li>

						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>

</template>

<style lang="postcss" scoped>
.header {
	@apply bg-brand-main w-full flex justify-center;
}

.header-group {
	@apply flex flex-col w-4/5 max-w-6xl;
}
</style>
