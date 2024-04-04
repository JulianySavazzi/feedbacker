<script setup>
//imports funcoes e consts
import useModal from '@/assets/js/hooks/useModal'

//constants
const modal = useModal()
const auth = useAuthStore()

    function handleLogin(){
		modal.open({
			component: 'ModalLogin'
		})
	}

   function handleAccountCreate() {
	   modal.open({
		   component: 'ModalCreateAccount'
	   })
   }

	function handleSuccessAccount(){
		modal.open({
			component: 'ModalSuccessAccount'
		})
	}

	function handleGlobalLoading(){
		modal.open({
			component: 'ModalGlobalLoading'
		})
	}

</script>

<template>
	<!--<p>Some default layout content shared across all pages</p>-->
	<!--<slot /> -> indica que deve carregar a pagina-->
	<HomeHeader
		v-if="auth.user === null"
		@create-account="handleAccountCreate"
		@login="handleLogin"
		@success-account="handleSuccessAccount"
		@global-loading="handleGlobalLoading"
	/>
	<Header	v-else/>
	<slot/>
	<Footer/>
</template>
