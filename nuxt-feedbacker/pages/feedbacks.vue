<script setup>
import {useToast} from "vue-toastification"

definePageMeta({
  middleware: 'auth'
})

const toast = useToast()

const state = reactive({
  hasErrors: false,
  isLoading: false,
  isLoadingFeedback: false,
  isLoadingMoreFeedbacks: false,
  feedbacks: [],
  currentFeedbackType: '',
  pagination: {
    limit: 2,
    offset: 0,
    total: 0
  }
})

onMounted(async() => {
  window.addEventListener('scroll', handleScroll, false)
  await getAll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, false)
})

//error handling by vue components -> suspense
onErrorCaptured((error) => {
  if(error){
    state.hasErrors = !!error
    state.isLoading = false
  }
})

//pagination
async function handleScroll(){
  //saber a rolagem da pagina -> se rolou ate o final
  const isBottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight

  //verificar se precisa fazer a paginacao
  if(state.isLoadingMoreFeedbacks || state.isLoading) return
  if(!isBottomOfWindow) return
  //comparar se o numero de feedbacks carregados é menor do que a quantidade salva no bd
    if(state.feedbacks.length >= state.pagination.total){
      toast.warning("já carregamos todos os feedbacks!")
      return
    }

  //preparar a paginacao
  try{
    toast.clear()
    state.isLoadingMoreFeedbacks = true
    console.log("chegou aqui try pagination")

    if(state.pagination.total >= state.feedbacks.length){
      console.log("if pagination chegou aqui")
      //atualizar o offset
      state.pagination.offset += 2
      await getAll()
    }

    console.log("scroll pagination")
//    state.pagination = data.value.pagination
    console.log("PAGINATION TOTAL: " + state.pagination.total + ". ARRAY LENGTH: " + state.feedbacks.length)
  } catch (e) {
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
  } finally {
    state.isLoadingMoreFeedbacks = false
    toast.clear()
  }
}

//get all feedbacks
async function getAll(){
  toast.clear()
  try{
    state.isLoading = true

    const { data } = await useApiFetch('/api/feedbacks', {
      query: {
        type: state.currentFeedbackType,
        ...state.pagination
      }
    })

    if(data.value.results === null){
      state.hasErrors = !!error
      console.log("ERRO AO CARREGAR FEEDBACKS: " + state.hasErrors)
    }

    if(data.value.results.length > 0){
      state.feedbacks.push(...data.value.results)
    }

    state.pagination = data.value.pagination;

    console.log(data.value.results, data.value.pagination)
  } catch (e) {
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
  } finally {
    state.isLoading = false
    toast.clear()
  }
}

//get feedbacks by type
async function changeFeedbacksType(type){
  toast.clear()
  try{
    state.isLoadingFeedback = true
    //request type when filters is clicked
    state.currentFeedbackType = type
    state.feedbacks = []
    state.pagination.limit = 2
    state.pagination.offset = 0

    await getAll()

  } catch (e) {
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
  } finally {
    state.isLoadingFeedback = false
    toast.clear()
  }
}
</script>

<template>
  <main class="bg-white">
    <LoggedBanner
      title="Feedbacks"
      subtitle="Detalhes de todos os feedbacks recebidos"
      />
    <!--body components-->
    <div class="flex justify-center w-full pb-20">
      <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">
       <div>
         <h1 class="text-3xl font-black text-brand-darkgray pb-5">Listagem</h1>
         <Suspense>
          <!-- componente com dependências assíncronas encaixada -->
           <template #default>
             <FeedbackFilters @select="changeFeedbacksType"/>
           </template>
          <!-- estado de carregamento através da ranhura #fallback -->
           <template #fallback>
             <p class="text-xl text-brand-pink ">Loading...</p>
           </template>
         </Suspense>
       </div>
        <!--feedbacks-->
        <div class="px-10 pt-20 col-span-3 ">
          <!--errors-->
          <p v-if="state.hasErrors && !state.isLoading && !state.isLoadingMoreFeedbacks && !state.isLoadingFeedback"
            class="text-lg text-center font-regular text-brand-pink ">Aconteceu um erro ao carregar os feedbacks... 🥺</p>
            <!--nao tem feedbacks-->
          <p v-if="state.feedbacks.length<1 && !state.isLoading && !state.isLoadingMoreFeedbacks && !state.isLoadingFeedback && !state.hasErrors"
            class="text-lg text-center font-regular text-brand-pink ">Nenhum feedback por enquanto... 😋</p>
      <!--cards    -->
          <FeedbackCardLoading v-if="!state.isLoadingMoreFeedbacks && state.isLoading"/>
          <FeedbackCard
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedbacks="feedback"
            class="mb-8"/>
          <FeedbackCardLoading v-if="state.isLoadingMoreFeedbacks"/>
        </div>
      </div>
    </div>
  </main>
</template>