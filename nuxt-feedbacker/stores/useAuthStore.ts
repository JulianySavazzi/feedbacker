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

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>(null)

	async function login(credentials: Credentials) {

		await useApiFetch('/sanctum/csrf-cookie')

		const login = await useApiFetch('/login', {
			method: "POST",
			body: credentials,
		})

		//usuario logado
		const { data } = await useApiFetch("/api/user")
		user.value = data.value as User;

		return login
	}
	return { user, login }
})