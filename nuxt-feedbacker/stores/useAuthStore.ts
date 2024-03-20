import { defineStore } from "pinia"

type User = {
	id: number,
	name: string,
	email: string
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

	return { user, login, isLoggedIn, fetchUser }
}, {persist: true})