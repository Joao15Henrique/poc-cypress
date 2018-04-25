const Util = require('../class/Util')
let util = new Util()

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', exam => {
  let lisCode = util.lisCode
  let laboratoryOriginKey = util.laboratoryOriginKey()
  cy.uploadValidOs(exam, lisCode, laboratoryOriginKey)
})
