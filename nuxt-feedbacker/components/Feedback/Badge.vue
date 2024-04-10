<script setup>
import { computed } from 'vue'

defineProps({
	type: {
		type: String,
		required: true
	}
})

const label = computed(() => {
	if(defineProps.type === 'ISSUE'){
		return 'problema'
	}
	
	if(defineProps.type === 'IDEA'){
		return 'ideia'
	}
	
	return 'outros'
})

const classColor = computed(() => {
	if(defineProps.type === 'ISSUE'){
		return 'brand-danger'
	}

	if(defineProps.type === 'IDEA'){
		return 'brand-warning'
	}

	return 'brand-graydark'
})
</script>

<template>
	<span :class="`bg-${classColor}`"
		class="p-2 text-xs font-black text-white uppercase rounded-full">
		{{label}}
	</span>
</template>