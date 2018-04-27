Cypress.Commands.add('waitForModalLoading', () => {
  cy.get('.md-dialog').contains('Aguarde').should('exist')
  cy.get('.md-dialog').contains('Aguarde').should('not.exist')
})

Cypress.Commands.add('waitForLoader', () => {
  cy.get('.infinite-loading-container').should('exist').and('visible')
  cy.get('.infinite-loading-container').should('not.visible')
})

Cypress.Commands.add('closeAllSnack', () => {
  if (Cypress.$('.close-snack-container-btn').length > 0) {
    cy.get('.close-snack-container-btn').each($el => {
      $el.click()
    })
  }
})
