const UploadRegister = require('../class/UploadRegister')
let LIS_CODE = new UploadRegister().lisCode

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  cy.uploadValidOs(LIS_CODE)
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  // not implemented
})

given('busco a ordem de serviço cadastrada', () => {
  cy.searchForOsByLisCode(LIS_CODE)
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
