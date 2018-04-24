const Util = require('../class/Util')
let lisCode = new Util().lisCode

given('realizo o login no sistema Apoio', () => {
  cy.clearCookie('token')
  cy.login()
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  // not implemented
})

given('busco a ordem de serviço cadastrada', () => {
  cy.searchForOsByLisCode(lisCode)
})

given('vejo os exames da ordem de serviço', () => {
  cy.get('.row-details__container').contains('TESTE DE ESTÍMULO DO GH COM CLONIDINA - Basal')
})

given('transmito a ordem de serviço', () => {
  cy.get('label[for="chkOrderSelectAllElement"]').click()
  closeSnack()
  closeSnack()
  cy.get('#BtnOrdersSend').click()
})

function closeSnack () {
  cy.get('#snackBtnClose').click()
}
