Cypress.Commands.add('uploadString', (content, fileName, fileType, selector) => {
  cy.get(selector).then(subject => {
    const el = subject[0]
    const testFile = new File([content], fileName, { type: fileType })
    const dataTransfer = new DataTransfer()

    dataTransfer.items.add(testFile)
    el.files = dataTransfer.files
  })
})
