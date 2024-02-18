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

	//regex para validar email
	const isValid = /^\w+([\.-]?\w+)*@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

	if(!isValid){
		return 'Este campo precisa ser um e-mail!'
	}

	return true
}