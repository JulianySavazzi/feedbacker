<script setup>
defineProps({
	myFeedback: {
		type: Object,
		required: true
	}
})

function handleToggle(){
	
}
</script>

<template>
	<div
		@click="handleToggle"
		class="flex flex-col px-8 py-6 rouded cursor-pointer bg-brand-gray">
	
	</div>
</template>