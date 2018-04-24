const Util = require('../class/Util')
let lisCode = new Util().lisCode

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  cy.uploadValidOs(exam, lisCode)
})
