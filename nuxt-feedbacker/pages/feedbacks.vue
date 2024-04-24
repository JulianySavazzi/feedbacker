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
    limit: 1,
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
  if(state.isLoading || state.isLoadingMoreFeedbacks) return
  if(!isBottomOfWindow) return
  //comparar se o numero de feedbacks carregados é menor do que a quantidade salva no bd
  if(state.feedbacks.length >= state.pagination.total){
    toast.warning("já carregamos todos os feedbacks!")
    return
  }
  console.log("scroll pagination")

  //preparar a paginacao
  try{
    toast.clear()
    state.isLoadingMoreFeedback = true
    console.log("chegou aqui try pagination")

    if(state.pagination.total >= state.feedbacks.length){
      console.log("if pagination chegou aqui")
      //atualizar o offset
//      if(state.pagination.total >= state.pagination.offset) state.pagination.offset += 1
      state.pagination.offset += 1
      await getAll()

    }

    state.isLoadingMoreFeedback = false
//    state.pagination = data.value.pagination
    console.log("PAGINATION TOTAL: " + state.pagination.total + ". ARRAY LENGTH: " + state.feedbacks.length)
  } catch (e) {
    toast.clear()
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
    state.isLoadingMoreFeedback = false
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

    if(state.currentFeedbackType == 'all' || state.currentFeedbackType == 'Todos' || state.currentFeedbackType == '') state.feedbacks = data.value.results
    else {
      if(data.value.results.length > 0){
        state.feedbacks.push(...data.value.results)
      }
    }
//    state.pagination = data.value.pagination
    if(data.value.pagination) state.pagination = data.value.pagination;

    state.isLoading = false
    console.log(data.value.results, data.value.pagination)
  } catch (e) {
    toast.clear()
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
    state.isLoading = false
  }
}

//get feedbacks by type
async function changeFeedbacksType(type){
  toast.clear()
  try{
    state.isLoadingFeedback = true
    //request type when filters is clicked
    state.currentFeedbackType = type
    if(type != 'all' || type != 'Todos' || state.currentFeedbackType == '') state.feedbacks = []
    state.pagination.limit = 1
    state.pagination.offset = 0

    await getAll()

    state.isLoadingFeedback = false
  } catch (e) {
    state.hasErrors = !!e
    toast.error("ERRO: "+e.message)
    state.isLoadingFeedback = false
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
          <p
            v-if="state.hasErrors && !state.isLoading && !state.isLoadingMoreFeedbacks"
            class="text-lg text-center font-regular text-brand-pink ">Aconteceu um erro ao carregar os feedbacks... 🥺</p>
          <p
            v-if="state.feedbacks.length<1 && !state.isLoading && !state.isLoadingMoreFeedbacks && !state.hasErrors"
            class="text-lg text-center font-regular text-brand-pink ">Nenhum feedback por enquanto... 😋</p>
      <!--cards    -->
          <FeedbackCardLoading
            v-if="state.isLoading || state.isLoadingFeedback"/>
          <FeedbackCard
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedbacks="feedback"
            class="mb-8"/>
          <FeedbackCardLoading
          v-if="state.isLoadingMoreFeedbacks"/>
        </div>
      </div>
    </div>
  </main>
</template>