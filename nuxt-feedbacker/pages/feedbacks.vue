<script setup>

definePageMeta({
  middleware: 'auth'
})

const defaultPagination = {
  limit: 5,
  offset: 0
}

const state = reactive({
  hasErrors: false,
  isLoading: false,
  feedbacks: [],
  currentFeedbackType: '',
  pagination: {
    limit: 5,
    offset: 0
  }
})

onMounted(async() => {
  await getAll()
  console.log(state.feedbacks.value)
})

//get all feedbacks
async function getAll(){
  try{
    state.isLoading = true

//    const { data } = await getFeedbacks({
//      ...state.pagination,
//      type: state.currentFeedbackType
//    })

    const { data } = await useApiFetch("/api/feedbacks", { params: state.pagination, params: state.currentFeedbackType })

//    const { data } = await useApiFetch("/api/feedbacks")

    state.feedbacks = data.value
    state.pagination = data.value.pagination
    state.isLoading = false
    console.log(data.value)

  } catch (e) {
    state.hasErrors = !!e
    state.isLoading = false
  }
}

async function getFeedbacks({type, limit = defaultPagination.limit, offset = defaultPagination.offset}) {


  let query = { limit, offset }

  if (type) {
    query.type = type
  }

  const { data, error } = await useApiFetch("/api/feedbacks", { params: query})

  console.log("FEDDBACK: " + data.value + "\nERRO: " + error.value)
  return data.value
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
             <FeedbackFilters/>
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
            v-if="state.hasErrors"
            class="text-lg text-center font-regular text-brand-pink ">Aconteceu um erro ao carregar os feedbacks... 🥺</p>
          <p
            v-if="state.feedbacks.lenght>0 && !state.isLoading"
            class="text-lg text-center font-regular text-brand-pink ">Nenhum feedback por enquanto... 😋</p>
      <!--cards    -->
          <FeedbackCardLoading
            v-if="state.isLoading"/>
          <FeedbackCard
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedbacks="feedback"
            class="mb-8"/>
        </div>
      </div>
    </div>
  </main>
</template>