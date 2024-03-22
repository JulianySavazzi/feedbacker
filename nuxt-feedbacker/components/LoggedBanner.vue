<script setup>
defineProps({
	title: String,
	subtitle: String
})
</script>

<template>
<div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
	<h1 class="text-4xl font-black text-center text-gray-800">
	{{title}}
	</h1>
	<p class="text-lg font-black text-center text-gray-800 font-regular">
	{{subtitle}}
	</p>
</div>
</template>