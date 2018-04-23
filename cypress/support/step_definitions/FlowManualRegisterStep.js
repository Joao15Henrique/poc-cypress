
when('realizo o login no sistema Apoio', () => {
  cy.login()
})

when('cadastro manualmente uma ordem de serviço com o exame {string}', exam => {
  cy.get('#btnMenuNewOrder').click()

  cy.fillPatient()
  cy.fillExam(exam)

  cy.scrollTo(0, 500)
  cy.get('#btnNewSave').click({force: true})

  cy.url().should('eq', 'https://apoiob2b-frontend-dev.azurewebsites.net/orders?filterBy=PENDING_TRANSMIT')

})

when('a ordem de serviço deve ser exibida na listagem de ordens', () => {
  cy.get('#inputSearchBar').click()
})
