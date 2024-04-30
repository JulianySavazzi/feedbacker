import fetch from 'node-fetch'
//import {useApiFetch} from './useApiFetch.ts'

//const {Response} = jest.requireActual('node-fetch')

//jest.mock('node-fetch')

describe('Api Fetch composable', () => {
	it.skip('should return token when request url', async () => {
		const token = 'tokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentkJU'
		const url = 'feedbacks'
		fetch.post.mockImplementationOnce(() => {
			return Promise.resolve({url, token})
		})
		
//		const data = await useApiFetch(fetch)
//		expect(data.value).toHaveProperty('token')
//		expect(data).toMatchSnapshot()
	})
})