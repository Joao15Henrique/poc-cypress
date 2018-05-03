#!groovy

pipeline {
  agent {
      docker { image "cypress/base:8" }
  }
  stages {
    stage('Quality Assurance - E2E Tests') {
      steps {
        sh 'npm run cypress run'
      }
    }
  }
}
