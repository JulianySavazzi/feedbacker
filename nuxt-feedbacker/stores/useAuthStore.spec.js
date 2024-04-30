//import {setActivePinia, createPinia} from 'pinia'
//import {createTestingPinia} from '@pinia/testing'
//import {useAuthStore, resetAllStores} from './useAuthStore.ts'
//import fetch from 'node-fetch'

//const {Response} = jest.requireActual('node-fetch')

//jest.mock('node-fetch')

describe('Auth store', () => {
//	beforeEach(() => {
//		// cria uma nova pinia e torna-a ativa, para ser
//		// automaticamente apanhada por qualquer chamada
//		// de `useStore()` sem ter que a passar para ela:
//		// `useStore(pinia)`
//		setActivePinia(createPinia())
//	})
//
//	//inicialize pinia for test
//	const wrapper = mount(useAuthStore, {
//		global: {
//			plugins: [
//				createTestingPinia()
//			]
//		}
//	})

//	const reset = mount(resetAllStores(), {
//		global: {
//			plugins: [
//				createTestingPinia()
//			]
//		}
//	})
//
//	afterEach(() => {
//		reset.resetAllStores()
//	})
	
	it.skip('shold return a XSRF-TOKEN when user login', async () => {


		const token = 'tokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentkJU'

		const credentials = {
			email: 'juliany@test.com',
			password: '12345678'
		}

		fetch.post.mockImplementationOnce(() => {
			return Promise.resolve(token)

		})
		
		expect(wrapper.login(credentials, token)).toBe(true)
	})


})