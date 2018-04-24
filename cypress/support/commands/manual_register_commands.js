function birthday (age) {
  var date = new Date()
  var currentYear = date.getFullYear()
  var nasYear = currentYear - age
  date.setFullYear(nasYear)
  return date
}

Cypress.Commands.add('fillPatient', (codeLis) => {
  cy.fixture('PATIENT').then(function (patient) {
    cy.get('#txtNewPatientName').type(patient.name)
    cy.get('#txtNewPatientAge').type(patient.age)
    var date = birthday(patient.age)
    cy.get('#dtNewBirthDate').type(date.toLocaleDateString('pt-BR'))
    cy.get('#txtNewPatientOSLIS').type(codeLis)

    cy.get('#cboNewSex').click()
    cy.get('#cboNewSex > div > div.multiselect__content-wrapper > ul > li:nth-child(2) > span > span').click()

    cy.get('#txtNewDoctor').type(patient.doctor_name)
    cy.get('#txtNewCRM').type(patient.crm)
    cy.get('#txtNewUF').click()
    cy.get('#txtNewUF > div > div.multiselect__content-wrapper').scrollTo('bottom')
    cy.get('#txtNewUF > div > div.multiselect__content-wrapper > ul > li:nth-child(26)').click()
    cy.get('#btnNewSubmitPatient').click()
  })
})

Cypress.Commands.add('fillExam', (exam) => {
  if (exam === 'TSH') {
    cy.fillStandardExam()
  } else if (exam === '17ALFCURVA') {
    cy.fillCurveExam()
  } else {
    cy.fillAdditionalExam()
  }
})

Cypress.Commands.add('fillStandardExam', () => {
  cy.fixture('TSH').then(function (exam) {
    cy.get('#txtNewSearchExam').type(exam.name)
    cy.get('#resultsContainer > div:nth-child(1) > div > div > div.search__result-text > span:nth-child(1)').click()
    cy.get('#btnNewSubmitExam').click({force: true})
  })
})

Cypress.Commands.add('fillCurveExam', (exam) => {
  cy.fixture('17ALFCURVA').then(function (exam) {
    cy.get('#txtNewSearchExam').type(exam.name)
    cy.get('#resultsContainer > div:nth-child(1) > div > div > div.search__result-text > span:nth-child(1)').click()
    cy.get('#examSearchContainer > div.new-exam > div.search-results__exams.exam-card-num-0 > div > div > div > div.md-layout.exam-curve__curves > div > div:nth-child(1) > label').click({force: true})
    cy.get('#btnNewSubmitExam').click({force: true})
  })
})

Cypress.Commands.add('fillAdditionalExam', (exam) => {
  cy.fixture('OXALI').then(function (exam) {
    cy.get('#txtNewSearchExam').type(exam.name)
    cy.get('#resultsContainer > div:nth-child(1) > div > div').click()
    cy.get(' #additionalField_0').type(exam.value)

    cy.get('#btnNewSubmitExam').click({force: true})
  })
})
