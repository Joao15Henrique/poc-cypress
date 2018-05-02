const Util = require('../class/Util')
let util

given('realizo o login no sistema Apoio', () => {
  cy.fixture('operators').then(function (operators) {
    cy.login(operators.JOSE)
    util = new Util(operators.JOSE)
    util.lisCode = Util.randomString()
  })
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  cy.waitForLoader()
  cy.get('.apoio-datatable__line').contains(util.lisCode)
})

given('busco a ordem de serviço cadastrada', () => {
  cy.searchForOsByLisCode(util.lisCode)
  cy.waitForLoader()
})

given('vejo os exames da ordem de serviço', () => {
  cy.get('.apoio-datatable__line').first().click()
  cy.get('.order-details__table').should('exist')
})

given('transmito a ordem de serviço', () => {
  cy.closeAllSnack()
  cy.get('label[for="chkOrderSelectAllElement"]').click()
  cy.get('#BtnOrdersSend').click()

  cy.wait(3000).then(() => {
    if (Cypress.$('#btnStartTransfer').length > 0) {
      cy.get('#btnStartTransfer').click()
      cy.waitForModalLoading()
    }
  })
})

given('as amostras da OS transmitida devem ser exibidas na listagem de Amostras', () => {
  cy.waitForLoader()
})

given('busco pelas amostras da ordem de serviço transmitida', () => {
  cy.get('#inputSearchBar').type(util.lisCode).type('{enter}')
  cy.get('.os-lis-span').should('exist')
  cy.get('.apoio-datatable__line').each($el => {
    cy.wrap($el).click()
  })
})

given('as amostras processadas da ordem de serviço devem ser exibidas', () => {
  cy.get('.row-details__container').should('exist')
  cy.closeAllSnack()
})

given('gero o recibo das amostras', () => {
  cy.get('.list-checkbox').click()
})

given('eu imprimo a etiqueta das amostras processadas', () => {
  cy.get('.os-lis-span').contains(util.lisCode)
  cy.get('#btnPrint').click()
  cy.get('.md-dialog').contains('Imprimindo etiquetas...').should('exist')
  cy.get('.md-dialog').contains('Imprimindo etiquetas...').should('not.exist')
})

given('as etiquetas impressas da ordem de serviço devem ser exibidas', () => {
  // cy.visit('/samples?printed=true')
  // cy.get('#inputSearchBar').type(util.lisCode).type('{enter}')
  // cy.get('.column-narrow > .status-icon.status-false')
})

given('busco o lote em que as amostras foram alocadas', () => {
  cy.get('#btnMenuBatches').click()
  cy.waitForLoader()
  cy.get('#inputSearchBar').type(util.lisCode).type('{enter}')
  cy.waitForLoader()
})

given('as amostras alocadas no lote devem ser exibidas', () => {
  cy.get('.apoio-datatable__line').first().click()
  cy.get('.batch-details__table').contains(util.lisCode)
})

given('transmito o lote', () => {
  cy.get('label[for="chkBatchesSelectAll"]').click()
  cy.get('#btnCloseAndTransmit').click()
  cy.waitForModalLoading()
})

given('imprimo a etiqueta do lote', () => {
  cy.get('label[for="chkBatchesSelectAll"]').click()
  cy.get('#btnPrintBatch').click()
})

given('a etiqueta do lote deve ser exibida', () => {
  cy.get('.apoio-datatable__line').contains(util.batchCodeMatch)
})

given('eu saio do sistema', () => {
  cy.get('#btnDashboardLogout').click()
})

given('devo ver a tela de Boas Vindas', () => {
  cy.get('.intro').contains('Bem vindo ao').contains('AOL 2.0')
})
