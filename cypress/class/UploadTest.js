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
    cy.get('#btnDashboardUpload').click()
    cy.contains('Upload de Arquivo XML')
    cy.fixture('xml/teste.xml').then(function (xml) {
      const resultXml = UploadTest.replaceRandomLisCode(xml, this._lisCode)
      cy.uploadString(resultXml, this._xmlFileName, this._xmlFileType, '#fileToUpload')
      cy.get('#modDashboardComponents').contains('Realizando upload do arquivo…')
    })
  }

  searchForOsByLisCode () {
    this.uploadAValidXml()
    this.enterLisCode(lisCode)
    cy.contains('Listagem de Ordens de Serviço')
  }

  verifyOsIsValid () {

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
