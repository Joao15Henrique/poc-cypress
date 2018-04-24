class UploadTest {
  constructor () {
    if (!UploadTest.instance) {
      this._lisCode = UploadTest.randomString()
      UploadTest.instance = this
    }

    return UploadTest.instance
  }

  searchForOsByLisCode () {
    this.waitForLoadingOsList()
    cy.get('#inputSearchBar').type(this._lisCode).type('{enter}')
    this.waitForLoadingOsList().click()
  }

  verifyOsIsValid () {
    cy.get('.row-details').should('be.visible').contains(this._lisCode)
  }

  closeAllToaster () {
    console.log('Closing all snack button...')
    let snackBtnClose = document.getElementById('#snackBtnClose')
    while (snackBtnClose) {
      cy.get('#snackBtnClose').click()
      snackBtnClose = document.getElementById('#snackBtnClose')
    }
  }
}

export default UploadTest
