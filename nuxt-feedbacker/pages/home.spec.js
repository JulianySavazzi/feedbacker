//import Home from './index.vue'
import {shallowMount} from '@vue/test-utils'

describe('Home component', () => {
	it.skip('should render home correctly', () => {
		const wrapper = shallowMount(Home, {
			global: {
				plugins: []
			}
		})
		
		expect(wrapper.html()).toMatchSnapshot()
	})
	
	it.skip('should mount home correctly', () => {
		const wrapper = mount(Home, {})
		
		expect(wrapper.html()).toMatchSnapshot()
	})
})