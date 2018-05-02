function replace (content, lisCode, laboratoryOriginKey) {
  const STRING_TO_REPLACE = '#{codigo_lis}'
  const LABORATORY_ORIGIN_KEY = '#{laboratory_origin_key}'

  return content
    .replace(new RegExp(STRING_TO_REPLACE, 'g'), lisCode)
    .replace(new RegExp(LABORATORY_ORIGIN_KEY, 'g'), laboratoryOriginKey)
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

Cypress.Commands.add('uploadValidOs', (fileName, lisCode, laboratoryOriginKey) => {
  const XML_FILE_TYPE = 'text/xml'
  const SELECTOR = '#fileToUpload'

  fileName = `xml/${fileName}.xml`
  cy.get('#btnDashboardUpload').click()
  cy.fixture(fileName).then(content => {
    const xml = replace(content, lisCode, laboratoryOriginKey)
    cy.uploadString(xml, fileName, XML_FILE_TYPE, SELECTOR)
  })
})

Cypress.Commands.add('waitForUpload', () => {
  cy.get('.md-dialog').contains('Realizando upload do arquivo').should('exist')
  cy.get('.md-dialog').contains('Realizando upload do arquivo').should('not.exist')
  cy.get('#btnDashboardUpload').should('not.exist')
})
