import type { UseFetchOptions } from '#app'

export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
	const token: string = useCookie('XSRF-TOKEN')
	
	let headers: any = {}
	
	if(token.value) {
		headers['X-XSRF-TOKEN'] = token.value as string
	}

	return $fetch('http://127.0.0.1:8000' + url, {
		credentials: "include",
		watch: false,
		...options,
		headers: {
			...headers,
			...options?.headers
		}
	})
	
}