<script setup>
import {useToast} from "vue-toastification"
import {removeCookie} from "/assets/js/utils/removeCookies.js"
import useModal from '@/assets/js/hooks/useModal'

const auth = useAuthStore()
const toast = useToast()
const modal = useModal()
const state = reactive({
	hasErrors: false,
	isLoading: false
})

async function fetchLogout(){
	state.isLoading = true
	modal.open({
		component: 'ModalGlobalLoading'
	})
	await auth.logout()
	window.localStorage.clear()
	window.sessionStorage.clear();
	//try remove cookies
//	removeCookie(window, "auth")
//	removeCookie(window, "laravel_session")
	navigateTo('/')
	console.log(auth.isLoggedIn)
	state.isLoading = false
	if(auth.isLoggedIn === false && state.isLoading === false){
		modal.close({
			component: 'ModalGlobalLoading'
		})
	}
}

async function handleLogout(){
	state.isLoading = true
	try{
		toast("saindo...")
		await fetchLogout()
		state.isLoading = false
	} catch(e){
		console.log("CATCH: ", e.message)
		await fetchLogout()
		navigateTo('/')
		state.isLoading = false
	}
}

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

					<div class="flex ">
						<ul class="flex list-none">
							<!--to credentials-->
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/credentials">Credenciais</NuxtLink>
							</li>
							<!--to feedbacks-->
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/feedbacks">Feedbacks</NuxtLink>
							</li>
							<!--logout-->
							<li>
								<button
									class="px-6 py-2 font-bold bg-white rounded-full text-brand-main ">
									{{ auth.user.name }} <span @click="handleLogout" class="focus:outline:none bg-brand-main rounded-full text-white" >( SAIR )</span>
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
