import { defineStore } from "pinia"

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

type Options = {}

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>(null)

	const isLoggedIn = computed(() => !!user.value)

	async function fetchUser(){
		//usuario logado
		const { data, error } = await useApiFetch("/api/user")
		user.value = data.value as User;

		console.log(user.value, error)
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

	async function logout(){

		await useApiFetch('/logout', {
			method: "POST",
		})

		await fetchUser()

		//setar current user para null com o pinia

		if(!isLoggedIn){
			navigateTo('/')
			console.log("logout sucess!")
		}

	}

	async function refreshUser(){
		await fetchUser()
	}

	return { user, login, isLoggedIn, fetchUser, logout, refreshUser}
}, {persist: true})