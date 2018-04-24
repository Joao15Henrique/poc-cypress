const Util = require('../class/Util')

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  let util = new Util()
  cy.uploadValidOs(util.lisCode)
})
