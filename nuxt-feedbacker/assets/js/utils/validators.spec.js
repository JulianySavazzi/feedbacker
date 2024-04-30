//testes unitarios para: validators
//importar funcoes que serao testatadas
import {validateEmptyAndLength, validadeEmptyAndEmail} from './validators.js'

describe('Validators utils', () => {
	it('should give an error with empty value', () => {
			expect(validateEmptyAndLength()).toBe('* Este campo é obrigatório!')
	})
	
	it('should return true with not empty value and 8 caracters', () => {
				expect(validateEmptyAndLength('testing ')).toBe(true)
		})

	it('shold give an error with less than 8 caracters', () => {
		expect(validateEmptyAndLength('test')).toBe('* Este campo precisa de pelo menos 8 digitos!')
	})

	it('shold return true with 8 caracteres or more', () => {
			expect(validateEmptyAndLength('12345678')).toBe(true)
		})
	
	it('shold give an error with invalid email', () => {
			expect(validadeEmptyAndEmail('test')).toBe('Este campo precisa ser um e-mail!')
	})

	it('shold return true with a valid email', () => {
			expect(validadeEmptyAndEmail('test@test.com')).toBe(true)
	})
})

