const XML_FILE_TYPE = 'text/xml'

function randomString () {
  return Math.random().toString(36).substring(2)
}

function replaceRandomLisCode (content, lisCode) {
  const STRING_TO_REPLACE = '#{codigo_lis}'
  return content.replace(new RegExp(STRING_TO_REPLACE, 'g'), lisCode)
}

function uploadAXml (lisCode) {
  cy.fixture('xml/teste.xml').then(function (xml) {
    const resultXml = replaceRandomLisCode(xml, lisCode)
    cy.uploadString(resultXml, 'upload.xml', XML_FILE_TYPE, '#fileToUpload')
    cy.get('#modDashboardComponents').contains('Realizando upload do arquivo…')
  })
}

function waitForLoadingOsList () {
  return cy.get('.apoio-datatable > tbody:nth-child(2)', { timeout: 40000 })
}

function clickForOsDetails () {
  cy.get('td.column-check > div > label').click()
}

function checkForOsDetailsIsVisible () {
  cy.get('.row-details').should('be.visible')
}

function enterLisCode (lisCode) {
  cy.get('#inputSearchBar').type(lisCode).type('{enter}')
}

describe('Upload XML', function () {
  beforeEach(function () {
    cy.login()
  })

  it('UploadClassTest', function () {
    const UploadTest = require('../class/UploadTest')
    const uploadTest = new UploadTest()
    uploadTest.uploadAValidXml()
    uploadTest.searchForOsByLisCode()
    uploadTest.closeAllToaster()
  })

  // it('should upload a XML when I have a valid XML', function () {
  //   const lisCode = randomString()
  //   cy.get('#btnDashboardUpload').click()
  //   cy.contains('Upload de Arquivo XML')
  //   uploadAXml(lisCode)
  //   waitForLoadingOsList()
  //   enterLisCode(lisCode)
  //   cy.contains('Listagem de Ordens de Serviço')
  //   waitForLoadingOsList().click()
  //   clickForOsDetails()
  //   checkForOsDetailsIsVisible()
  //   cy.get('#snackBtnClose').click()
  //   // cy.get('#snackBtnClose').click()
  //   cy.get('#BtnOrdersSend').click()
  //   cy.get('#btnStartTransfer').click()
  //   cy.get('.md-dialog-content > p').contains('Transferindo OS selecionadas...')
  //   cy.contains('Listagem de Amostras Transferidas', { timeout: 40000 })
  // })
})
