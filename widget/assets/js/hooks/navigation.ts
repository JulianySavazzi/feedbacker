import useStore from './store'
import { setCurrentComponent, setFeedbackType } from "~/stores/useWidgetStore"

export interface Navigation {
    //tipos de funções para a paginação do wizard
    setErrorState(): void
    setSuccessState(): void
    next(): void
    back(): void
}

export default function useNavigation(): Navigation {
    const store = useStore()

    function setErrorState(): void {
        setCurrentComponent('WizardError')
    }

    function setSuccessState(): void {
        setCurrentComponent('WizardSuccess')
    }

    function next(): void {
        //ir para a próxima pagina wizard
        if(store.currentComponent === 'WizardSelectFeedbackType'){
            setCurrentComponent('WizardWriteFeedback')
        }
    }

    function back(): void {
        //ir para a pagina wizard anterior
        if(store.currentComponent === 'WizardWriteFeedback'){
            setCurrentComponent('WizardSelectFeedbackType')
            setFeedbackType('')
        }
    }

    return  { setErrorState, setSuccessState, next, back }
}