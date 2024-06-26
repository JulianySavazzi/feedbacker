const APP_URL = 'http://127.0.0.1:3000'

describe('Home', () => {

	beforeEach(() => {
		// runs before each test in the block
		cy.viewport(1280, 800) // Set viewport to 550px x 750px
		cy.viewport('macbook-13')
		cy.visit(APP_URL)
		cy.wait(4000)
	})

	it('should render create account modal when clicked in cta create account button', () => {
		cy.get('#cta-create-account-button').click()
		cy.get('#modal-create-account', {timeout: 6000})
		cy.wait(1000)
	})

	it('should render create account modal when clicked in header button', () => {
		cy.get('#header-create-account-button').click()
		cy.get('#modal-create-account', {timeout: 6000})
		cy.wait(1000)
	})

	it('should render login modal when clicked in header button', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 6000})
		cy.wait(1000)
	})

	it('should create account modal fill incorrect form ', () => {
		cy.get('#header-create-account-button').click()
		cy.get('#modal-create-account', {timeout: 6000})
		cy.get('#name-field').type('Cypress')
		cy.get('#email-field-create').type('cypress@test')
		cy.get('#password-field-create').type('cypress')
		cy.get('#repassword-field-create').type('cypres')
		cy.get('#error-name-create')
		cy.get('#error-email-create')
		cy.get('#error-password-create')
		cy.get('#error-repassword-create')
		cy.get('#submit-register').click({force: true})
		cy.wait(1000)
	})

	it('should create account modal fill form correctly', () => {
		cy.get('#header-create-account-button').click({force: true})
		cy.get('#modal-create-account', {timeout: 6000})
		cy.get('#name-field').type('Cypress E2e Testing')
		cy.get('#email-field-create').type('cypresse2e@test.com')
		cy.get('#password-field-create').type('cypresse2epassword')
		cy.get('#repassword-field-create').type('cypresse2epassword')
		cy.get('#submit-register').click()
		cy.wait(15000)
		cy.get('#modal-success-account', {timeout: 6000})
		cy.wait(6000)
	})

	it('should login incorrectly email', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 6000})
		cy.get('#email-field').type('cypresse2e@test')
		cy.get('#password-field').type('cypresse2epassword')
		cy.get('#email-error')
		cy.get('#submit-button').click()
		cy.wait(1000)
	})

	it('should login incorrectly password', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 6000})
		cy.get('#email-field').type('cypresse2e@test.com')
		cy.get('#password-field').type('cypress')
		cy.get('#password-error')
		cy.get('#submit-button').click()
		cy.wait(1000)
	})

	it('should login correctly', () => {
		cy.get('#header-login-button').click({force: true})
		cy.wait(6000)
		cy.get('#modal-login', {timeout: 10000})
		cy.get('#email-field').type('cypresse2e@test.com')
		cy.get('#password-field').type('cypresse2epassword')
		cy.get('#submit-button', {timeout: 10000}).click()
		cy.wait(6000)
//		cy.url().should('include', '/feedbacks', {timeout: 8000})
		cy.visit(`${APP_URL}/feedbacks`)
		cy.wait(5000)
	})

//	it('should logout correctly', () => {
//		cy.get('#header-login-button').click({force: true})
//		cy.get('#modal-login', {timeout: 6000})
//		cy.get('#email-field').type('cypress@test.com')
//		cy.get('#password-field').type('cypresspassword')
//		cy.get('#submit-button', {timeout: 10000}).click({force: true})
//		cy.wait(6000)
////		cy.url().should('include', '/feedbacks', {timeout: 8000})
//		cy.visit(`${APP_URL}/feedbacks`, {timeout: 6000})
//		cy.wait(10000)
//		cy.get('#logout-button', {timeout: 6000}).click({force: true})
//		cy.wait(5000)
//		cy.get('#modal-loading', {timeout: 6000})
//		cy.wait(10000)
////		cy.url().should('include', '/', {timeout: 8000})
//		cy.visit(`${APP_URL}/`, {timeout: 6000})
//		cy.wait(5000)
//	})

	it('should logout correctly', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 10000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button').click()
		cy.wait(15000)
//		cy.url().should('include', '/feedbacks')
		cy.visit(`${APP_URL}/feedbacks`)
		cy.wait(10000)
		cy.get('#logout-button', {timeout: 8000}).click()
		cy.wait(5000)
		cy.get('#modal-loading')
		cy.wait(10000)
		cy.url().should('include', '/')
		cy.wait(5000)
	})
})
