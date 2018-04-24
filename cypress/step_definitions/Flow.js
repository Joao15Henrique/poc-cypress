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
  cy.get('.row-details__container').should('be.visible')
})

given('transmito a ordem de serviço', () => {
  closeAllSnack()
  cy.get('label[for="chkOrderSelectAllElement"]').click()
  cy.get('#BtnOrdersSend').click()
})

function closeAllSnack () {
  cy.get('.close-snack-container-btn').each($el => {
    $el.click()
  })
}
