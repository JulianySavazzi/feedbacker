<template>
<!--modal components-->
	<teleport to="body">
		<div
		v-if="state.isActive"
		class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
		@click="handleModalToggle({ status: false })"
		>
			<div class="fixed mx-10">
				<div class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
					<div class="flex flex-col px-12 py-10 bg-white">
						<!--componente dinamico-->
						<component :is="state.component"/>
					</div>
				</div>
			</div>
		</div>
	</teleport>
</template>

<script>
import {defineEmits, defineAsyncComponent, onMounted, onBeforeUnmount, reactive} from 'vue'
import useModal from "@/hooks/useModal.js"

const ModalLogin = defineAsyncComponent(
	//definir o componente asincrono de login
	() => import('@/components/ModalLogin.vue')
)

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'
const modal = useModal()

export default{
	setup(){

		const state = reactive({
			isActive: false,
			component: {
				ModalLogin
			},
			props: {},
			width: DEFAULT_WIDTH
		})
		
		onMounted(() => {
			//chamado antes de montar o componente
			//status true para emitir o componente
			modal.listen(handleModalToggle)
		})

		onBeforeUnmount(() => {
				//chamado antes de desmontar o componente
				//status false para fechar o componente
				modal.off(handleModalToggle)
		})

		function handleModalToggle({ payload }){
			console.log('payload ', payload)
			if(payload.status){
				//montando o componente
				state.component = payload.component
				state.props = payload.props
				state.width = payload.width ?? DEFAULT_WIDTH
			} else {
				//desmontando o componente
				state.component = {}
				state.props = {}
				state.width = DEFAULT_WIDTH
			}
		}
		
		return {
			state,
			onMounted,
			onBeforeUnmount,
			handleModalToggle
		}
	}
}
</script>