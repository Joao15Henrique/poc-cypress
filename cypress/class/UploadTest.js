class UploadTest {
  constructor () {
    this._lisCode = UploadTest.randomString()
    this._xmlFileName = 'content.xml'
    this._xmlFileType = 'text/xml'
  }

  static randomString () {
    return Math.random().toString(36).substring(2)
  }

  static replaceRandomLisCode (content, lisCode) {
    const STRING_TO_REPLACE = '#{codigo_lis}'
    return content.replace(new RegExp(STRING_TO_REPLACE, 'g'), lisCode)
  }

  uploadAValidXml () {
    let instance = this
    cy.get('#btnDashboardUpload').click()
    cy.contains('Upload de Arquivo XML')
    cy.fixture('xml/teste.xml').then(function (xml) {
      const resultXml = UploadTest.replaceRandomLisCode(xml, instance._lisCode)
      cy.uploadString(resultXml, instance._xmlFileName, instance._xmlFileType, '#fileToUpload')
      cy.get('#modDashboardComponents').contains('Realizando upload do arquivo…')
    })
  }

  searchForOsByLisCode () {
    this.waitForLoadingOsList()
    cy.get('#inputSearchBar').type(this._lisCode).type('{enter}')
    cy.contains('Listagem de Ordens de Serviço')
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

  transferSelectedOs () {

  }

  proceedWithOpenBatches () {

  }

  waitForLoadingOsList () {
    return cy.get('.apoio-datatable > tbody:nth-child(2)', { timeout: 40000 })
  }
}

export default UploadTest
