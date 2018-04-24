given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  cy.uploadValidOs()
})

given('a ordem de serviço deve ser exibida na listagem de OS\'s', () => {
  cy.searchForOsByLisCode()
})
