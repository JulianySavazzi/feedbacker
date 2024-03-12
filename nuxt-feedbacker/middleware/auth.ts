const auth = useAuthStore()

function isAuthenticated(): boolean {

	let isAuth: boolean = false
	
		if(auth.isLoggedIn){
			return isAuth = true
		}else{
			return isAuth = false
		}
	
	return isAuth
}

export default defineNuxtRouteMiddleware((to, from) => {
	// isAuthenticated() is an example method verifying if a user is authenticated
	if (isAuthenticated() === false) {
		return navigateTo('/')
	}
//	else {
//		return navigateTo(from)
//	}
})
