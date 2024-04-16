<script setup>
import { computed } from 'vue'

const props = defineProps({
	feedbackType: {
		type: String,
		required: true
	}
})

const label = computed(() => {
	if(props.feedbackType === 'ISSUE'){
		return 'problema'
	}
	
	if(props.feedbackType === 'IDEA'){
		return 'ideia'
	}
	
	return 'outros'
})

const classColor = computed(() => {
	if(props.feedbackType === 'ISSUE'){
		return 'bg-brand-danger'
	}

	if(props.feedbackType === 'IDEA'){
		return 'bg-brand-warning'
	}

	return 'bg-brand-graydark'
})
</script>

<template>
	<span :class="`${classColor}`"
		class="p-2 text-xs font-black text-white uppercase rounded-full">
		{{label}}
	</span>
</template>