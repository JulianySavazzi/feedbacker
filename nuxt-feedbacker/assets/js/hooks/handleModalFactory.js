//imports funcoes e consts
import useModal from '@/assets/js/hooks/useModal'

//constants
const modal = useModal()

export default function handleModalFactory(){
	function handleLogin() {
		modal.open({
			component: 'ModalLogin'
		})
	}
	
	function handleAccountCreate() {
		modal.open({
			component: 'ModalCreateAccount'
		})
	}
	
	function handleSuccessAccount() {
		modal.open({
			component: 'ModalSuccessAccount'
		})
	}
	
	function handleGlobalLoading() {
		modal.open({
			component: 'ModalGlobalLoading'
		})
	}
	
	return{
		handleLogin,
		handleAccountCreate,
		handleSuccessAccount,
		handleGlobalLoading
	}
}