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
    stage('Create Build Artifacts') {
      steps {
        sh 'yarn build'
      }
    }
  }
}
