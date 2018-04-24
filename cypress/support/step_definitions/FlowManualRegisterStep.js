// import ManualRegister from '../../class/ManualRegister'
let lisCode = 212

given('realizo o login no sistema Apoio', () => {
  cy.clearCookie('token')
  cy.login()
})

then('cadastro manualmente uma ordem de serviço com o exame {string}', exam => {
  cy.get('#btnMenuNewOrder').click()

  cy.fillPatient(lisCode)
  cy.fillExam(exam)

  cy.scrollTo(0, 500)
  cy.get('#btnNewSave').click({force: true})

  cy.url().should('eq', 'https://apoiob2b-frontend-dev.azurewebsites.net/orders?filterBy=PENDING_TRANSMIT')
})

then('a ordem de serviço deve ser exibida na listagem de ordens', () => {
  cy.get('#inputSearchBar').type(lisCode)

  cy.get('#btnSerachFilter').click()
})
