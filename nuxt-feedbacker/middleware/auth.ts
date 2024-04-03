export default defineNuxtRouteMiddleware((to, from) => {

	const auth = useAuthStore()
	
	console.log(auth.isLoggedIn)
	
	if (!auth.isLoggedIn || auth.user === null) {
		return navigateTo('/')
	}

})
