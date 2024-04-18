import { defineStore, getActivePinia } from "pinia";

type User = {
	id: number,
	name: string,
	email: string,
	api_token: string
}

type Credentials = {
	email: string,
	password: string
}

type RegistrationInfo = {
	name: string,
	email: string,
	password: string,
	password_confirmation: string
}

type Options = {}

export function resetAllStores() {
		const activepinia = getActivePinia();
		if (activepinia) {
		Object.entries(activepinia.state.value).forEach(([storeName, state]) => {
			const storeDefinition = defineStore(storeName, state);
			const store = storeDefinition(activepinia);
			console.log("RESET STORE: " + store)
			store.$reset();

		});

	}
}

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>(null)

	const isLoggedIn = computed(() => !!user.value)

	function $reset() {
		user.value = null
		console.log("RESET: " + isLoggedIn + user.value)
	}


	async function fetchUser(){
		//usuario logado
		const { data, error } = await useApiFetch("/api/user")
		user.value = data.value as User;

		console.log(user.value, error.value)
		return user.value
	}

	async function login(credentials: Credentials, options: Options) {

		await useApiFetch('/sanctum/csrf-cookie')

		const login = await useApiFetch('/login', {
			method: "POST",
			body: credentials,
			...options
		})

		await fetchUser()

		return login
	}

	async function register(infos: RegistrationInfo){

		await useApiFetch('/sanctum/csrf-cookie')

		const register = await useApiFetch('/register', {
			method: "POST",
			body: infos
		})

		return register
	}

	async function logout(){
//		globalLoading.setGlobalLoading(true)

		await useApiFetch('/logout', {
			method: "POST",
		})

		//setar current user para null com o pinia
		user.value = null

		$reset()
//		resetAllStores()
	}

	async function refreshUser(){
		await fetchUser()
	}

	return { user, login, isLoggedIn, fetchUser, register, logout, refreshUser }
}, {persist: true})