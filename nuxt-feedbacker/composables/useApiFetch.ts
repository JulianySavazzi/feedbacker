import type { UseFetchOptions } from '#app'

export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
	const token: string | null | undefined = useCookie('XSRF-TOKEN').value
	
	let headers: any = {}
	
	if(token) {
		headers['X-XSRF-TOKEN'] = token as string
	}

	return useFetch('http://127.0.0.1:8000' + url, {
		credentials: "include",
		watch: false,
		...options,
		headers: {
			...headers,
			...options?.headers
		}
	})
	
}