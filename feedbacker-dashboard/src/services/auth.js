export default httpClient => ({
	//api create account
	register: async ({ name, email, password }) => {
		const response = await httpClient.post('/auth/me', {
			name,
			email,
			password
		})

		let errors = null

		if(!response.data){
			errors = {
				status: response.request.status,
				statusText: response.request.statusText
			}
		}

		return {
			data: response.data,
			errors
		}
	},
	//api login
	login: async ({ email, password }) => {
		const response = await httpClient.post('/auth/login', {
			email,
			password
		})
		
		let errors =  null
		
		if(!response.data){
			errors = {
				status: response.request.status,
				statusText: response.request.statusText
			}
		}
		
		return {
			data: response.data,
			errors
		}
	}
})