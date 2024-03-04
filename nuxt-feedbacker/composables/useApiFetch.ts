import type { UseFetchOptions } from '#app'

export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
	// @ts-ignore
	const token: string = useCookie('XSRF-TOKEN')
	
	let headers: any = {}
	
	// @ts-ignore
	if(token.value) {
		// @ts-ignore
		headers['X-XSRF-TOKEN'] = token.value as string
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