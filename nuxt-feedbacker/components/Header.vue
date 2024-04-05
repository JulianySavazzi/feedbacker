<script setup>
import {reactive} from 'vue'
import {useToast} from "vue-toastification"
import useModal from '@/assets/js/hooks/useModal'
//import Credentials from "~/pages/credentials.vue";
const auth = useAuthStore()
//const globalLoading = useGlobalStore()
const toast = useToast()
const modal = useModal()
const state = reactive({
	hasErrors: false,
	isLoading: false
})

async function fetchLogout(){
	state.isLoading = true
	window.localStorage.clear()
	window.sessionStorage.clear();
	navigateTo('/')
	const {error} = await auth.logout({}, {
		onResponseError({response}){
			console.log(response.status)
		}
	})
	console.log(auth.isLoggedIn)
	console.log(error.value)
}

async function handleLogout(){
	state.isLoading = true
	toast("saindo...")
//	$emit('global-loading')
//	modal.open({
//		component: 'ModalGlobalLoading'
//	})
	try{
		fetchLogout()
		navigateTo('/')
	} catch(e){
		console.log("CATCH: ", e.message)
		fetchLogout()
	}
//	modal.close({
//		component: 'ModalGlobalLoading'
//	})
	state.isLoading = false
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
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/credentials">Credenciais</NuxtLink>
							</li>
							<li class="px-6 py-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
								<NuxtLink to="/feedbacks">Feedbacks</NuxtLink>
							</li>
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
