<script setup>

definePageMeta({
  middleware: 'auth'
})

const state = reactive({
  hasErrors: false,
  isLoading: false,
  isLoadingFeedback: false,
  isLoadingMoreFeedbacks: false,
  feedbacks: [],
  currentFeedbackType: '',
  pagination: {
    limit: 5,
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

async function  handleScroll(){
  //saber a rolagem da pagina
  const isBottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight

  //verificar se precisa fazer a paginacao
  if(state.isLoading || state.isLoadingMoreFeedbacks) return
  if(isBottomOfWindow) return
  if(state.feedbacks.length >= state.pagination.total) return

  //preparar a paginacao
  try{
    state.isLoadingMoreFeedback = true

    const { data } = await  useApiFetch('/api/feedbacks', {
      ...state.pagination,
      type: state.currentFeedbackType,
      offset: (state.pagination.offset + 5)
    })

    if(data.value.length){
      state.feedbacks.push(...data.value)
    }

    state.isLoadingMoreFeedback = false
    state.pagination = data.pagination
  } catch (e) {
    state.hasErrors = !!e
    state.isLoadingMoreFeedback = false
  }
}

//get all feedbacks
async function getAll(){
  try{
    state.isLoading = true

    const { data } = await useApiFetch("/api/feedbacks")

    if(data.value === null){
      state.hasErrors = !!error
      console.log(data.value, state.hasErrors)
    }

    state.feedbacks = data.value
    state.pagination = data.value.pagination
    state.isLoading = false
    console.log(data.value)

  } catch (e) {
    state.hasErrors = !!e
    state.isLoading = false
  }
}

async function changeFeedbacksType(type){
  try{
    state.isLoadingFeedback = true
      //pagination
//    state.pagination.offset = 0
//    state.pagination.limit = 5
    state.currentFeedbackType = type
      //request type when filters is clicked
    const { data } = await useApiFetch('/api/feedbacks', {
      query: {type: type, pagination: state.pagination}
    })
    state.feedbacks = data.value
    state.pagination = data.value.pagination
    state.isLoadingFeedback = false
  } catch (e) {
    state.hasErrors = !!e
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
            v-if="state.hasErrors && !state.isLoading"
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