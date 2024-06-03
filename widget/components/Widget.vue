<script setup lang="ts">
import useIframeControl from "assets/js/hooks/iframe";

const iframe = useIframeControl()

const state = reactive({
	component: 'Standby'
})

onMounted(() => {
  //montar o iframe quando montar o widget
  iframe.updateCoreValueOnStore()
})

function handleOpenBox(): void {
  iframe.notifyOpen()
	state.component = 'Box'
}

function handleCloseBox(): void {
  iframe.notifyClose()
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