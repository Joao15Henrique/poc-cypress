describe('Cadastro Manual', function () {
  it('should complete flow with manual register', function () {
    cy.login()
    cy.get('#btnMenuNewOrder').click()
    cy.fillPatient('order-curve-additional-standard')
    cy.fillStandardExam('order-curve-additional-standard')
    cy.fillCurveExam('order-curve-additional-standard')
    cy.fillAdditionalExam('order-curve-additional-standard')

    cy.get('#mainScroll').scrollTo('bottom')
    cy.get('#btnNewSave').click()
  })
})
