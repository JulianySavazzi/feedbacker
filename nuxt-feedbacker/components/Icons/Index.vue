<script setup>
	
</script>

<template>
	<component :is="name" v-bind="$props"/>
</template>

<script>
	import {IconsLoading, IconsCopy} from '#components'

	export default{
		components: {IconsLoading, IconsCopy},
		props: {
			name: {	type: String, required: true}
		}
	}
</script>