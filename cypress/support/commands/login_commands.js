const Util = require('../../class/Util')
let util = new Util()

Cypress.Commands.add('login', () => {
  cy.visit('/login')
  cy.fixture('operators').then(function (operators) {
    cy.get('#txtLoginUser').type(operators.BILBO.email)
    cy.get('#txtLoginPassword').type(operators.BILBO.password)
    cy.get('#btnLoginSignIn').click()
    util.laboratoryOriginKey(operators.BILBO.laboratoryOriginKey)
  })
})
