const LIS_CODE = randomString()

function randomString () {
  return Math.random().toString(36).substring(2)
}

function replaceRandomLisCode (content, lisCode) {
  const STRING_TO_REPLACE = '#{codigo_lis}'
  return content.replace(new RegExp(STRING_TO_REPLACE, 'g'), lisCode)
}

function waitForLoadingOsList () {
  return cy.get('.apoio-datatable > tbody:nth-child(2)')
}

function enterLisCode (lisCode) {
  cy.get('#inputSearchBar').type(lisCode).type('{enter}')
}

Cypress.Commands.add('uploadString', (content, fileName, fileType, selector) => {
  cy.get(selector).then(subject => {
    const el = subject[0]
    const testFile = new File([content], fileName, { type: fileType })
    const dataTransfer = new DataTransfer()

    dataTransfer.items.add(testFile)
    el.files = dataTransfer.files
  })
})

Cypress.Commands.add('uploadValidOs', xmlOs => {
  const XML_FILE_NAME = 'content.xml'
  const XML_FILE_TYPE = 'text/xml'
  const SELECTOR = '#fileToUpload'
  cy.get('#btnDashboardUpload').click()
  cy.fixture('xml/teste.xml').then(xml => {
    const resultXml = replaceRandomLisCode(xml, LIS_CODE)
    cy.uploadString(resultXml, XML_FILE_NAME, XML_FILE_TYPE, SELECTOR)
  })
})

Cypress.Commands.add('searchForOsByLisCode', () => {
  waitForLoadingOsList()
  enterLisCode(LIS_CODE)
  waitForLoadingOsList().click()
})
