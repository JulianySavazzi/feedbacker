<script setup lang="ts">
import useStore from "assets/js/hooks/store";
import useNavigation from "assets/js/hooks/navigation";
import {setMessage} from "~/stores/useWidgetStore";

const emit = defineEmits([''])

const store = useStore()
const navigation = useNavigation()

type State = {
  feedback: string
  isLoading: boolean
  hasError: Error | null
}

const state = reactive<State>({
    feedback: '',
    isLoading: false,
    hasError: null
})

//verificar se o feedback foi escrito antes de poder envia-lo
const submitButtonDisabled = computed<boolean>(() => {
  return !state.feedback.length
})

function handleError (error: Error){
  state.hasError = error
  state.isLoading =  false
  navigation.setErrorState()
}

async function submitFeedback(): Promise<void> {
  try {
    setMessage(state.feedback)
    state.isLoading = true

    //response CRUD feedback
    const response = ''


  } catch (e) {
    handleError(e)
  }
}
</script>

<template>
<div class="flex flex-col items-center justify-center w-full my-5">
  <textarea v-model="state.feedback"
            class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none"
  >

  </textarea>
  <button :disabled="submitButtonDisabled"
        :class="{
          'opacity-50': state.isLoading,
          'opacity-50 bg-gray-100 text-gray-500': submitButtonDisabled,
          'bg-brand-main text-white': !submitButtonDisabled
        }"
        @click="submitFeedback"
        class="rounded-lg font-black mt-3 flex flex-col justify-center items-center py-2 w-full cursor-pointer
        focus:outline-none transition-all duration-200"
  >
    <IconsLoading v-if="state.isLoading" class="animate__animated animate-spin" color="white"/>
    <template v-else>Enviar feedback</template>
  </button>
</div>
</template>

<style scoped lang="postcss">

</style>