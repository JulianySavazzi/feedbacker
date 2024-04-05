import { reactive } from 'vue'
import { readonly } from 'vue'

const state = reactive({
	isLoading: false
})

//export default state

export function setGlobalLoading (status) {
	state.isLoading = status
}

export default readonly({
	state
})