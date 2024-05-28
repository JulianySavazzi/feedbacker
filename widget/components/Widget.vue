<script setup lang="ts">

const state = reactive({
	component: 'Standby'
})

function handleOpenBox(): void {
	state.component = 'Box'
}

function handleCloseBox(): void {
	state.component = 'Standby'
}

</script>

<template>
<teleport to="body">
	<component
		@open-box="handleOpenBox"
		@close-box="handleCloseBox"
		:is="state.component"/>
</teleport>
</template>

<script lang="ts">
import {Standby, Box} from '#components'

export default defineComponent({
	components: {
		Standby,
		Box
	}
})
</script>