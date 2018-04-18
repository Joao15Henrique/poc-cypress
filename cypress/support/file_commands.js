Cypress.Commands.add('upload_file', (fileName, selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName).then((content) => {
      const el = subject[0]
      const testFile = new File([content], fileName, {type: 'text/xml'})
      const dataTransfer = new DataTransfer()

      dataTransfer.items.add(testFile)
      el.files = dataTransfer.files
    })
  })
})
