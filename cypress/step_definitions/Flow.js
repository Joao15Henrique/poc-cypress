const Util = require('../class/Util')
let util

given('realizo o login no sistema Apoio', () => {
  cy.clearCookie('token')

  cy.fixture('operators').then(function (operators) {
    cy.login(operators.JOSE)
    util = new Util(operators.JOSE.laboratoryOriginKey)
  })
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  // not implemented
})

given('busco a ordem de serviço cadastrada', () => {
  cy.searchForOsByLisCode(util.lisCode)
})

given('vejo os exames da ordem de serviço', () => {
  cy.get('.row-details__container').should('be.visible')
})

given('transmito a ordem de serviço', () => {
  cy.closeAllSnack()
  cy.get('label[for="chkOrderSelectAllElement"]').click()
  cy.get('#BtnOrdersSend').click()
})

given('as amostras da OS transmitida devem ser exibidas na listagem de Amostras', () => {
  cy.waitForModalLoading()
})

given('busco pelas amostras da ordem de serviço transmitida', () => {
  cy.get('#inputSearchBar').type(util.lisCode).type('{enter}')
  cy.get('.os-lis-span').should('exist')
  cy.get('.apoio-datatable__line').click()
})

given('as amostras processadas da ordem de serviço devem ser exibidas', () => {
  cy.get('.row-details__container').should('exist')
  cy.closeAllSnack()
})

given('gero o recibo das amostras', () => {
  cy.get('.list-checkbox').click()
  cy.get('#btnReceipt').click()
  cy.get('.md-dialog').contains('Gerando recibo...')
})

given('eu imprimo a etiqueta das amostras processadas', () => {

})

given('as etiquetas impressas da ordem de serviço devem ser exibidas', () => {

})

given('busco o lote em que as amostras foram alocadas', () => {

})
