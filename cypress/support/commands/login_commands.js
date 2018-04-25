Cypress.Commands.add('login', operator => {
  cy.visit('/login')
  cy.get('#txtLoginUser').type(operator.email)
  cy.get('#txtLoginPassword').type(operator.password)
  cy.get('#btnLoginSignIn').click()
})
