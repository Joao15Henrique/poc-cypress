const ManualRegister = require('../class/ManualRegister')
let LIS_CODE = new ManualRegister().lisCode

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  cy.uploadValidOs(exam, LIS_CODE)
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  // not implemented
})

given('busco a ordem de serviço cadastrada', () => {
  cy.searchForOsByLisCode(LIS_CODE)
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
