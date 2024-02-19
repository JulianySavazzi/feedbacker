import axios from 'axios'
import AuthService from './auth.js'

//constantes das APIs
const API_ENVS = {
	production: '',
	development: '',
	local: 'http://localhost:8000/api'
}

const httpClient = axios.create({
	baseURL: API_ENVS.local
})

//interceptar erros desnecessarios de cairem no try catch
//verifica os tipos de erro que ja foram tratados
httpClient.interceptors.response.use((response) => response, (error) => {
	//const canThrowAnError = error.request.status === 0 || error.request.status === 500
	const canThrowAnError = error.request.status === 0
	if(canThrowAnError){
		throw new Error(error.message)
	}
	return error
})

export default {
	auth: AuthService(httpClient)
}