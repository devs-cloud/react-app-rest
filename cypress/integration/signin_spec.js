describe('login page', () => {
    it('open login form', () => {
        cy.visit('/')
        cy.contains('Log In').click()
        cy.contains('Signin').click()
        cy.contains('Sign In')
    })
})