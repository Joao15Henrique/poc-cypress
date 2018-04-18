describe('Upload XML', function () {
  it('should upload a XML when I have a valid XML', function () {
    cy.login()
    cy.get('#btnDashboardUpload').click()
    cy.upload_file('xml/teste.xml', '#fileToUpload')
  })
})
