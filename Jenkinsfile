// Jenkins: el mismo pipeline que GitHub Actions, en tu propio servidor.
pipeline {
  agent any

  options {
    ansiColor('xterm')
    timestamps()
  }

  environment {
    FORCE_COLOR = '1'
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'node --version && npm ci'
      }
    }
    stage('Escenarios BDD (Cucumber)') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }

  post {
    always {
      junit testResults: 'reportes/cucumber.xml', allowEmptyResults: true
      publishHTML(target: [
        reportName: 'Reporte Cucumber',
        reportDir: 'reportes',
        reportFiles: 'cucumber.html',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: true
      ])
    }
    success { echo 'Todos los escenarios pasaron.' }
    failure { echo 'Hay escenarios en rojo: revisa el reporte.' }
  }
}
