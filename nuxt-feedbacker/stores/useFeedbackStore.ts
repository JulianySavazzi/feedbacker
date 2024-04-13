import { defineStore } from "pinia"

type Feedback = {
	id: number,
	text: string,
	fingerprint: string,
	api_key: string,
	type: string,
	device: string,
	page: string,
	created_at: string
}

type Sumary = {
	all: string,
	issue: string,
	idea: string,
	other: string
}

type RegistrationFeedback = {
	
}

const defaultPagination = {
	limit: 5,
	offset: 0
}

export const useFeedbackStore = defineStore('feedbacks', () => {
	const feedback = ref<Feedback | null>(null)

	const auth = useAuthStore()

	async function getAll({ type = '', limit = defaultPagination.limit, offset = defaultPagination.offset}) {
		let query = { type, limit, offset }
			
		if (type != '') {

			query.type = type
		}
		
		const { data, error } = await useApiFetch("/api/feedbacks", { params: query})
		feedback.value = data.value as Feedback;
			
		console.log("FEDDBACK: " + feedback.value + "\nERRO: " + error.value)
		return feedback.value
	}

	async function getSummary() {
		const { data, error } = await useApiFetch("/api/feedbacks/summary")
//		let response = data.value as Sumary;

		console.log("FEDDBACK: " + data.value + "\nERRO: " + error.value)
		return data.value
	}

	async function register(infos: RegistrationFeedback) {

		await useApiFetch('/sanctum/csrf-cookie')

		const register = await useApiFetch('', {
			method: "POST",
			body: infos
		})

		return register
	}
	
	return {feedback, getAll, getSumary, register}
}, {persist: true})