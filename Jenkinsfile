#!groovy

pipeline {
  agent { dockerfile true }
  stages {
    stage('Quality Assurance - E2E Tests') {
      steps {
        sh 'pwd'
        sh 'ls -la ../'
        sh 'npm install'
        sh 'npm run cypress run'
      }
    }
  }
}
