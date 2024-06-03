import type { UseFetchOptions } from '#app'
//services for request api
export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
	const token: string | null | undefined = useCookie('XSRF-TOKEN').value
	
	let headers: any = {}
	
	const API_ENVS = {
		production: "https://feedbacker-2iw4pvitq-julianysavazzis-projects.vercel.app",
		local: "http://127.0.0.1:8000"
	}

//	let base = API_ENVS.production ?? API_ENVS.local
	let base = API_ENVS.local

	if(token) {
		headers['X-XSRF-TOKEN'] = token as string
	}

	//faz uma requisição no servidor cada vez que recarrega a página?
	if(process.server){
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