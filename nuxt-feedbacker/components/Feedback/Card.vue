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
		<div class="flex items-center justify-between w-full mb-8">
				<!--badge-->
			<Badge :type="myFeedback.type"/>
			<span class="font-regular text-brand-graydark">
				{{myFeedback.created_at}}
			</span>
		</div>
	</div>
</template>