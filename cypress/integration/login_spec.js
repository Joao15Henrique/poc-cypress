describe('Authentication', function () {
  context('Login AOL 2.0', function () {
    it('should login when email and password is correct', function () {
      cy.login()
      cy.url().should('contain', '/dashboard')
    })
  })

  context('Logout AOL 2.0', function () {
    it('should logout when I click in Logout', function () {
      cy.login()
      cy.get('#logoutIcon').click()
      cy.url().should('contain', '/login')
    })
  })
})
