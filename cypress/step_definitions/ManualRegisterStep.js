const Util = require('../class/Util')

then('cadastro manualmente uma ordem de serviço com o exame {string}', exam => {
  let util = new Util()

  cy.get('#btnMenuNewOrder').click()

  cy.fillPatient(util.lisCode)
  cy.fillExam(exam)

  cy.get('#btnNewSave').click({force: true})
})
