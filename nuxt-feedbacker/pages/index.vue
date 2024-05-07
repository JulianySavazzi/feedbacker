<script setup>
//executa toda vez que uma instancia do componente é criada
//definir props e emits aqui dentro

//imports funcoes e consts
import handleModalFactory from '../assets/js/hooks/handleModalFactory.js'
import {useToast} from 'vue-toastification'

//constants
const toast = useToast()
const auth = useAuthStore()
const modal = handleModalFactory()

async function test() {
	const {data} = await useApiFetch('/api/welcome')
	console.log(data.value)
}

onMounted(() => {
	if (!auth.isLoggedIn) {
		toast.success("bem vindo")
	}
	test()
})
</script>

<template>

	<main class="bg-white">
		<Banner @create-account="modal.handleAccountCreate"/>
		<Contact/>
	</main>

</template>