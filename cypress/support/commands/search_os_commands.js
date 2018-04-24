Cypress.Commands.add('searchForOsByLisCode', lisCode => {
  waitForLoadingOsList()
  enterLisCode(lisCode)
  waitForLoadingOsList().click()
})

function waitForLoadingOsList () {
  return cy.get('.apoio-datatable > tbody:nth-child(2)')
}

function enterLisCode (lisCode) {
  cy.get('#inputSearchBar').type(lisCode).type('{enter}')
}
