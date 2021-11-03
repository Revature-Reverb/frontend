pipeline {
  agent {
    docker {
     image 'node:16-alpine'
     args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'yarn install'
        sh 'npm install -g sonarqube-scanner'
      }
    }
    stage('Testing') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'yarn test'
          }
        }
        stage('Run Coverage Test') {
          steps {
            sh 'yarn test:cov'
          }
        }
      }
    }
    
    stage('SonarQube Analysis') {

      steps {
        script {
          def scannerHome = tool 'ReverbScanner'
          withSonarQubeEnv(installationName: 'SonarCloud', credentialsId: 'CD_sonarcloud') {
            sh 'sonar-scanner'
          }
        }
      }
    }
    stage('Create Build Artifacts') {
      steps {
        sh 'yarn build'
      }
    }
  }
}
