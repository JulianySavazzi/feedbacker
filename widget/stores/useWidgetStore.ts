//store simples usando reactive e readonly

export type StoreState = {
	currentComponent: string
	message: string
	feedbackType: string
	fingerprint: string
	apiKey: string
	currentPage: string
}

// type Response = {
// 	data: Feedback
// 	error: Error | null
// }

type Options = {}

//estado inicial do widget -> atributos do feedback
const initialState: StoreState = {
	currentComponent: 'WizardSelectFeedbackType',
	message: '',
	feedbackType: '',
	fingerprint: '',
	apiKey: '',
	currentPage: ''
}

//estado
const state = reactive<StoreState>({...initialState})

export function setCurrentComponent(component: string ): void {
	state.currentComponent = component	
}

export function setMessage(message: string): void {
	state.message = message
}

export function setFeedbackType(type: string): void {
	state.feedbackType = type
}

export function setFingerprint(fingerprint: string): void {
	state.fingerprint = fingerprint
}

export function setApiKey(apiKey: string): void {
	state.apiKey = apiKey
}

export function setCurrentPage(currentPage: string): void {
	state.currentPage = currentPage
}

export function resetStore (): void {
	setCurrentComponent(initialState.currentComponent)
	setMessage(initialState.message)
	setFeedbackType(initialState.feedbackType)
	setFingerprint(initialState.fingerprint)
	setApiKey(initialState.apiKey)
	setCurrentPage(initialState.currentPage)
}

//request create feedback
export async function createFeedback(device: string) {
	await useApiFetch('/sanctum/csrf-cookie')
	const createFeedback = await useApiFetch('/api/feedbacks', {
		method: "POST",
		body: {
			type: state.feedbackType,
			text: state.message,
			page: state.currentPage,
			apiKey: state.apiKey,
			device: device,
			fingerprint: state.fingerprint,
		}
	})
	return createFeedback
}

//exportar estado como apenas leitura -> nao modificar o estado diretamente
export default readonly(state)