const APP_URL = 'http://127.0.0.1:3000'

describe('Credentials', () => {
	beforeEach(() => {
		// runs before each test in the block
		cy.viewport(1280, 800) // Set viewport to 550px x 750px
		cy.viewport('macbook-13')
		cy.visit(APP_URL)
		cy.wait(4000)
	})

	it('should generate api key', () => {
		cy.get('#header-login-button').click({force: true})
		cy.get('#modal-login', {timeout: 6000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button', {timeout: 26000}).click()
		cy.wait(30000)
		cy.visit(`${APP_URL}/credentials`, {timeout: 8000})
//		cy.wait(8000)
		const oldApiKey = cy.get('#api-key').invoke('text')
		cy.get('#generate-api-key', {timeout: 6000}).click({force: true})
		cy.wait(6000)
		const newApiKey = cy.get('#api-key').invoke('text')
		cy.wait(6000)
		expect(oldApiKey).to.not.equal(newApiKey)
	})
})