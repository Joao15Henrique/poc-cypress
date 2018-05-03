#!groovy

pipeline {
  stages {
    stage('Quality Assurance - E2E Tests') {
      steps {
        sh 'npm run cypress-dev run'
      }
    }
  }
}
