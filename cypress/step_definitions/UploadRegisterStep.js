const Util = require('../class/Util')

given('realizo um upload de XML para cadastrar uma ordem de serviço com o exame {string}', function (exam) {
  let util = new Util()
  let lisCode = util.lisCode
  let laboratoryOriginKey = util.laboratoryOriginKey
  cy.uploadValidOs(exam, lisCode, laboratoryOriginKey)
})
