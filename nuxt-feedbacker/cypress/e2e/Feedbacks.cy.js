const APP_URL = 'http://127.0.0.1:3000'

describe('Feedbacks', () => {
	beforeEach(() => {
		// runs before each test in the block
		cy.viewport(1280, 800) // Set viewport to 550px x 750px
		cy.viewport('macbook-13')
		cy.visit(APP_URL)
		cy.wait(4000)
	})

//	it('should pages navigation', () => {
//		cy.get('#header-login-button', {timeout: 6000}).click()
//		cy.get('#modal-login', {timeout: 10000})
//		cy.get('#email-field').type('cypress@test.com')
//		cy.get('#password-field').type('cypresspassword')
//		cy.get('#submit-button', {timeout: 30000}).click()
////		cy.wait(6000)
//		cy.get('#header-credentials', {timeuot: 6000}).click()
//		cy.wait(6000)
//		cy.get('#header-feedbacks', {timeuot: 6000}).click()
//		cy.wait(6000)
//		cy.get('#header-home', {timeuot: 6000}).click()
//		cy.wait(6000)
//	})

	it('should pages navigation', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 10000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button').click()
		cy.wait(10000)
		cy.get('#header-credentials').click()
		cy.wait(8000)
		cy.get('#header-feedbacks').click()
		cy.wait(8000)
		cy.get('#header-home').click()
		cy.wait(8000)
	})

	it('should feedbakcs click button show more and show less', () => {
		cy.get('#header-login-button', {timeout: 6000}).click()
		cy.get('#modal-login', {timeout: 6000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button', {timeout: 6000}).click()
		cy.wait(10000)
		cy.get('#feedback-show-more', {timeout: 6000}).click()
		cy.wait(8000)
		cy.get('#feedback-show-less', {timeout: 6000}).click()
		cy.wait(4000)
	})

	it('should feedbakcs filters navigation', () => {
		//navigate by filters and open a feedback card
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 6000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button', {timeout: 6000}).click()
		cy.wait(8000)
		cy.get('#feedback-filter-label').click({force: true})
		cy.wait(8000)
	})
})