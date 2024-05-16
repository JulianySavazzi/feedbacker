import type {UseFetchOptions} from '#app'

export function useApiFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
	const token: string | null | undefined = useCookie('XSRF-TOKEN').value

	let headers: any = {}

	const API_ENVS = {
		production: "https://feedbacker-julianysavazzis-projects.vercel.app",
		proxy: "https://julianysavazzi-feedbacker.netlify.app/feedbacker",
		local: "http://127.0.0.1:8000"
	}

//		let base = API_ENVS.production ?? API_ENVS.local
	let base = API_ENVS.proxy ?? API_ENVS.local

	if (token) {
		headers['X-XSRF-TOKEN'] = token as string
		headers['X-Authorization'] = true
		headers['Access-Control-Allow-Credentials'] =  true
		headers['Access-Control-Request-Headers'] = "content-type"
		headers['Content-Type'] = "application/json"
//		headers['Set-Cookie'] = token as string
	}

	//faz uma requisicao no servidor cada vez que recarrega a pagina?
	if (process.server) {
		headers = {
			...headers,
			...useRequestHeaders(["referer", "cookie"])
		}
	}

	return useFetch(base + url, {
		credentials: "include",
		watch: false,
		...options,
		headers: {
			...headers,
			...options?.headers
		}
	})

}