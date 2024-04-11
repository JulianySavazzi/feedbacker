<script setup>
import {reactive} from 'vue'

const emit = defineEmits(['select'])

const auth = useAuthStore()
const feedbacks = useFeedbackStore()

try{
	//fetch sumary route
	const {data} = await feedbacks.getSumary()
	state.filters = applyFiltersStructure(data)
}catch(e){
	state.hasErrors = true
	console.log(e.message)
	state.filters = applyFiltersStructure({all: 0, issue: 0, idea: 0, other: 0})
}

function handleSelected({ type }){
	//checar loading global -> pagina credentials -> api_key
	if(status.isLoading){
		return
	}
	
	state.filters = state.filters.map((filter) => {
		if(filter.type === type){
			return {...filter, active: true}
		}
		return {...filter, active: false}
	})
	
	emit('select', type)
	console.log("cliquei em ", type)
}
</script>

<template>
<div class="flex flex-col">
	<h1 class="text-2xl font-regular text-brand-darkgray">Filtros</h1>
	<ul class="flex flex-col mt-3 list-none">
		<li
			v-for="filter in state.filters"
			:key="filter.label"
			:class="{
				'bg-brand-main bg-opacity-25': filter.active
			}"
			@click="() => handleSelected(filter)"
			class="flex items-center justify-between px-2 py-1 rounded cursor-pointer"
			>
			<div class="flex items-center text-brand-darkgray">
				<span :class="filter.color.bg"
					class="inline-block w-2 h-2 m-1 rounded-full"/> {{filter.label}}
			</div>
			<span :class="filter.active ? filter.color.text : text-brand-darkgray" class="m-1 font-bold">{{filter.amount}}</span>
		</li>
	</ul>
</div>
</template>

<script>
const LABELS = {
	all: 'Todos',
	issue: 'Problemas',
	idea: 'Ideias',
	other: 'Outros'
}

const COLORS = {
	all: { text: 'text-brand-info', bg: 'bg-brand-info' },
	issue: { text: 'text-brand-danger', bg: 'bg-brand-danger' },
	idea: { text: 'text-brand-warning', bg: 'bg-brand-warning' },
	other: { text: 'text-brand-graydark', bg: 'bg-brand-graydark' }
}

const state = reactive({
	hasErrors: false,
	isLoading: false,
	filters: [
		{label: null, amount: null}
	]
})

function applyFiltersStructure(sumary){
	return Object.keys(sumary).reduce((acc, cur) => {
		const currentFilter = {
			label: LABELS[cur],
			color: COLORS[cur],
			amount: sumary[cur]
		}

		if(cur === 'all'){
			currentFilter.active = true
		} else {
			currentFilter.active = cur
		}
		console.log(currentFilter.value)
		return [...acc, currentFilter]
	}, [])
}
</script>