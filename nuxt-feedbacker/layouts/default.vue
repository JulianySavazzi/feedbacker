<script setup>
import handleModalFactory from '@/assets/js/hooks/handleModalFactory.js'

const auth = useAuthStore()
const modal = handleModalFactory()

</script>

<template>
	<!--<p>Some default layout content shared across all pages</p>-->
	<!--<slot /> -> indica que deve carregar a pagina-->
	<Header v-if="auth.user !== null && auth.isLoggedIn"/>
	<HomeHeader
		v-else
		@create-account="modal.handleAccountCreate"
		@login="modal.handleLogin"
		@success-account="modal.handleSuccessAccount"
		@global-loading="modal.handleGlobalLoading"
	/>
	<slot/>
	<Footer/>
</template>
