<script setup>
import {reactive} from 'vue'

definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const state = reactive({
  hasErrors: false,
  isLoading: false,
  myFeedbacks: [],
})

console.log(auth.user.name)

//get all feedbacks
async function getAll(){
  
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
      </div>
      <div class="px-10 pt-20 col-span-3 ">
      <!--feedbacks-->
        <p
          v-if="state.hasErrors"
          class="text-lg text-center font-regular text-brand-pink ">Aconteceu um erro ao carregar os feedbacks...</p>
        <p
          v-if="!state.myFeedbacks.lenght && !state.isLoading"
          class="text-lg text-center font-regular text-brand-pink ">Nenhum feedback por enquanto...</p>
      <!--cards    -->
          <FeedbackCardLoading
            v-if="state.isLoading"/>
          <FeedbackCard
            v-else
            v-for="(feedback, index) in state.myFeedbacks"
            :key="myFeedbacks.id"
            :is-opended="index === 0"
            :myFeedbacks="myFeedbacks"
            class="mb-8"/>
      </div>
    </div>
  </main>

</template>