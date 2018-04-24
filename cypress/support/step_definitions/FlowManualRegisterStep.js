let codeLis = Math.random().toString(36).substring(2)

given('realizo o login no sistema Apoio', () => {
  cy.clearCookie('token')
  cy.login()
})

then('cadastro manualmente uma ordem de serviço com o exame {string}', exam => {
  cy.get('#btnMenuNewOrder').click()

  cy.fillPatient(codeLis)
  cy.fillExam(exam)

  cy.scrollTo(0, 500)
  cy.get('#btnNewSave').click({force: true})

  cy.url().should('eq', 'https://apoiob2b-frontend-dev.azurewebsites.net/orders?filterBy=PENDING_TRANSMIT')
})

then('a ordem de serviço deve ser exibida na listagem de ordens', () => {
  cy.get('#inputSearchBar').type(codeLis)

  cy.get('#btnSerachFilter').click()
})