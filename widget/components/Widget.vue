<script setup lang="ts">
import useIframeControl from "assets/js/hooks/iframe";
import useWidgetStore from "~/stores/useWidgetStore";

const iframe = useIframeControl()
const store = useWidgetStore

const state = reactive({
	component: 'Standby'
})

watch(() => store.currentComponent, () => {
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