Cypress.Commands.add('fillPatient', (fileName) => {
  cy.fixture(fileName).then(function (orders) {
    cy.get('#txtNewPatientName').type(orders.PATIENT.name)
    cy.get('#txtNewPatientAge').type(orders.PATIENT.age)

    cy.get('#cboNewSex').click()
    cy.get('#cboNewSex > div > div.multiselect__content-wrapper > ul > li:nth-child(2) > span > span').click()

    cy.get('#txtNewDoctor').type(orders.PATIENT.doctor_name)
    cy.get('#txtNewCRM').type(orders.PATIENT.crm)
    cy.get('#txtNewUF').click()
    cy.get('#txtNewUF > div > div.multiselect__content-wrapper').scrollTo('bottom')
    cy.get('#txtNewUF > div > div.multiselect__content-wrapper > ul > li:nth-child(26)').click()
    cy.get('#btnNewSubmitPatient').click()
  })
})

Cypress.Commands.add('fillStandardExam', (fileName) => {
  cy.fixture(fileName).then(function (orders) {
    cy.get('#txtNewSearchExam').type(orders.STANDARD.name)

    cy.get('#resultsContainer > div:nth-child(1) > div > div > div.search__result-text > span:nth-child(1)').click()

    cy.get('#mainScroll').scrollTo('bottom')
    cy.get('#btnNewSubmitExam').click()
  })
})

Cypress.Commands.add('fillCurveExam', (fileName) => {
  cy.fixture(fileName).then(function (orders) {
    cy.get('#txtNewSearchExam').type(orders.CURVE.name)

    cy.get('#resultsContainer > div:nth-child(1) > div > div > div.search__result-text > span:nth-child(1)').click()

    cy.get('#chbxID101-377').click({force: true})

    cy.get('#mainScroll').scrollTo('bottom')
    cy.get('#btnNewSubmitExam').click()
  })
})

Cypress.Commands.add('fillAdditionalExam', (fileName) => {
  cy.fixture(fileName).then(function (orders) {
    cy.get('#txtNewSearchExam').type(orders.ADDITIONAL.name)

    cy.get('#resultsContainer > div:nth-child(1) > div > div').click()

    cy.get(' #additionalField_0').type(orders.ADDITIONAL.value)

    cy.get('#mainScroll').scrollTo('bottom')
    cy.get('#btnNewSubmitExam').click()
  })
})
