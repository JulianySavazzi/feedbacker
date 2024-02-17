//definir funcoes de validacao
export function validateEmptyAndLength(value){
	if(!value){
		return '* Este campo é obrigatório!'
	}
	if(value.length < 6){
		return '* Este campo precisa de pelo menos 6 digitos!'
	}
	return true
}

export function  validadeEmptyAndEmail(value) {
	if(!value){
		return '* Este campo é obrigatório!'
	}
	return true
}