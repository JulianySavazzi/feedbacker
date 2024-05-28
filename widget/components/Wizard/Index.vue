<script setup lang="ts">
import useStore from 'assets/js/hooks/store'
import {setFeedbackType} from "~/stores/useWidgetStore"
import useNavigation from "assets/js/hooks/navigation"

const store = useStore()
const navigation = useNavigation()

function handleSelectFeedbackType(type: string): void {
  setFeedbackType(type)
}
</script>

<template>
  <component :is="store.currentComponent" @select-feedback-type="handleSelectFeedbackType" @next="navigation.next()"/>
</template>

<script lang="ts">
import { WizardSelectFeedbackType, WizardWriteFeedback, WizardError, WizardSuccess } from "#components"

export default {
  components: { WizardSelectFeedbackType, WizardWriteFeedback, WizardError, WizardSuccess }
}
</script>