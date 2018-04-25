#language: pt
#encoding: utf-8

@FlowManualRegister
Funcionalidade: Fluxo de upload
  COMO laboratório apoiado
  EU QUERO realizar um fluxo completo de upload
  DE MODO QUE seja possível utilizar as funcionalidades do sistema de apoio DASA

  Esquema do Cenario: Fluxo completo com a funcionalidade de lote e impressão
    Quando realizo o login no sistema Apoio
    E realizo um upload de XML para cadastrar uma ordem de serviço com o exame "<EXAME>"
    Então a ordem de serviço deve ser exibida na listagem de OS's
    Quando busco a ordem de serviço cadastrada
    E vejo os exames da ordem de serviço
    E transmito a ordem de serviço
    Então as amostras da OS transmitida devem ser exibidas na listagem de Amostras
    Quando busco pelas amostras da ordem de serviço transmitida
    Então as amostras processadas da ordem de serviço devem ser exibidas
    Quando eu imprimo a etiqueta das amostras processadas
    E gero o recibo das amostras
    Então as etiquetas impressas da ordem de serviço devem ser exibidas
    Quando busco o lote em que as amostras foram alocadas
    Então as amostras alocadas no lote devem ser exibidas
    Quando transmito o lote
    E imprimo a etiqueta do lote
    Então a etiqueta do lote deve ser exibida
    Exemplos:
      |EXAME|
      |TSH|
  #     |17ALFCURVA|
  #     |OXALI|
  #     |PAT|
  #
  # Esquema do Cenario: Fluxo completo sem a funcionalidade de lote com impressão
  #   Quando realizo o login no sistema Apoio
  #   E realizo um upload de XML para cadastrar uma ordem de serviço com o exame <EXAME>
  #   Então a ordem de serviço deve ser exibida na listagem de OS's
  #   Quando busco a ordem de serviço cadastrada
  #   E vejo os exames da ordem de serviço
  #   E transmito a ordem de serviço
  #   Então as amostras da OS transmitida devem ser exibidas na listagem de Amostras
  #   Quando busco pelas amostras da ordem de serviço transmitida
  #   Então as amostras processadas da ordem de serviço devem ser exibidas
  #   Quando eu imprimo a etiqueta das amostras processadas
  #   E gero o recibo das amostras
  #   Então as etiquetas impressas da ordem de serviço devem ser exibidas
  #   Exemplos:
  #     |EXAME|
  #     |TSH|
  #     |17ALFCURVA|
  #     |OXALI|
  #     |PAT|
