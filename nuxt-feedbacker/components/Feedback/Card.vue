<script setup>
import { getDiffTimeBetweenCurrentDate } from '../assets/js/utils/getDiffTimeBetweenCurrentDate.js'

defineProps({
	feedbacks: {
		type: Object,
		required: true
	}
})

const state = reactive({
	isOpen: false
})

function handleToggle(){
	if(state.isOpen == false){
		state.isOpen = true
	} else if(state.isOpen == true){
		state.isOpen = false
	}
	console.log("Open: ",state.isOpen)
}
</script>

<template>
	<div
		@click="handleToggle"
		id="feedback-card"
		class="flex flex-col px-8 py-6 rouded cursor-pointer bg-brand-gray">
		<div class="flex items-center justify-between w-full mb-8">
				<!--badge-->
			<FeedbackBadge :feedbackType="feedbacks.type"/>
			<span class="font-regular text-brand-graydark">
				{{getDiffTimeBetweenCurrentDate(feedbacks.created_at)}}
			</span>
		</div>
		<div class="text-lg font-medium text-gray-800">
			{{feedbacks.text}}
		</div>
		<div class="flex mt-8 animate__animated animate__fadeInUp animate__faster" v-if="state.isOpen">
			<div class="flex flex-col w-1/2">

				<div class="flex flex-col  pb-2">
					<span class="font-bold text-gray-400 uppercase select-none">Página</span>
					<span class="font-medium text-gray-700">{{feedbacks.page}}</span>
				</div>

				<div class="flex flex-col pb-2">
					<span class="font-bold text-gray-400 uppercase select-none">Dispositivo</span>
					<span class="font-medium text-gray-700">{{feedbacks.device}}</span>
				</div>

			</div>
			<div class="flex flex-col w-1/2">
				<div class="flex flex-col  pb-2">
					<span class="font-bold text-gray-400 uppercase select-none">Usuário</span>
					<span class="font-medium text-gray-700">{{feedbacks.fingerprint}}</span>
				</div>
			</div>
		</div>
		<div class="flex justify-end mt-8 text-brand-graydark" >
			<span v-if="!state.isOpen" id="feedback-show-more">+</span>
			<span v-if="state.isOpen" id="feedback-show-less">-</span>
		</div>
	</div>
</template>