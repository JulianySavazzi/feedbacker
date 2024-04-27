//testes unitarios para: validators
//importar funcoes que serao testatadas
import {validateEmptyAndLength, validadeEmptyAndEmail} from './validators.js'

describe('Validators utils', () => {
	it('should give an error with empty value', () => {
			expect(validateEmptyAndLength()).toBe('* Este campo é obrigatório!')
	})
	
	it('shold give an error with less than 8 caracteres', () => {
		expect(validateEmptyAndLength('test')).toBe('* Este campo precisa de pelo menos 8 digitos!')
	})
	
	it('shold give an error with invalid email', () => {
			expect(validadeEmptyAndEmail('test')).toBe('Este campo precisa ser um e-mail!')
	})
})

