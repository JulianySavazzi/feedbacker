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

type RegistrationFeedback = {
	
}

const defaultPagination = {
	limit: 5,
	offset: 0
}

export const useFeedbackStore = defineStore('feedbacks', () => {
	const feedback = ref<Feedback | null>(null)

	const auth = useAuthStore()

	async function getAll({ type, limit = defaultPagination.limit, offset = defaultPagination.offset}) {
		const query = { limit, offset }
			
		if (type) {
			query.type = type
		}
		
		const { data, error } = await useApiFetch("/api/feedbacks", { params: query})
		feedback.value = data.value;
			
		console.log(feedback.value, error)
		return feedback.value
	}

	async function getSumary() {
		const { data, error } = await useApiFetch("/api/feedbacks/sumary")
		feedback.value = data.value;

		console.log(feedback.value, error)
		return feedback.value
	}

	async function register(infos: RegistrationFeedback) {

		await useApiFetch('/sanctum/csrf-cookie')

		const register = await useApiFetch('', {
			method: "POST",
			body: infos
		})

		return register
	}
	
	async function refreshFilters(type){
		const {refreshFilters} = await getAll(type)
		return refreshFilters
	}
	
	return {feedback, getAll, getSumary, register, refreshFilters}
}, {persist: true})