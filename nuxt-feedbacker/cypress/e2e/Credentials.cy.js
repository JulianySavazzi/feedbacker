const APP_URL = 'http://127.0.0.1:3000'

describe('Credentials', () => {
	beforeEach(() => {
		// runs before each test in the block
		cy.viewport(1280, 800) // Set viewport to 550px x 750px
		cy.viewport('macbook-13')
		cy.visit(APP_URL)
		cy.wait(5000)
	})

	it('should generate api key', () => {
		cy.get('#header-login-button').click()
		cy.get('#modal-login', {timeout: 10000})
		cy.get('#email-field').type('cypress@test.com')
		cy.get('#password-field').type('cypresspassword')
		cy.get('#submit-button').click()
		cy.wait(15000)
		cy.visit(`${APP_URL}/credentials`)
		cy.wait(6000)
		const oldApiKey = cy.get('#api-key').invoke('text')
		cy.get('#generate-api-key').click()
		cy.wait(6000)
		const newApiKey = cy.get('#api-key').invoke('text')
		expect(oldApiKey).to.not.equal(newApiKey)
	})
})