describe('Authentication', function () {
  context('Login AOL 2.0', function () {
    function login () {
      cy.fixture('operators').then(function (operators) {
        cy.get('#txtLoginUser').type(operators.BILBO.email)
        cy.get('#txtLoginPassword').type(operators.BILBO.password)
        cy.get('#btnLoginSignIn').click()
      })
    }

    beforeEach(function () {
      cy.fixture('operators').as('operators')
      cy.visit('/login')
    })

    it('should login when email and password is correct', function () {
      login()
      cy.url().should('contain', '/dashboard')
    })

    it('should logout when I click in Logout', function () {
      login()
      cy.get('#logoutIcon').click()
      cy.url().should('contain', '/login')
    })
  })
})
