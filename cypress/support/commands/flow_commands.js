Cypress.Commands.add('waitForModalLoading', () => {
  cy.get('.md-dialog').should('not.exist')
})

Cypress.Commands.add('waitForLoader', () => {
  cy.get('.loader').should('not.exist')
})

Cypress.Commands.add('closeAllSnack', () => {
  cy.get('.close-snack-container-btn').each($el => {
    $el.click()
  })
})
