Cypress.Commands.add('searchForOsByLisCode', lisCode => {
  cy.get('#inputSearchBar').type(lisCode).type('{enter}')
  cy.get('.apoio-datatable').first().click()
})
