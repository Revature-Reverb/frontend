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
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'yarn install'
        sh 'npm install -g sonarqube-scanner'
        sh 'apk update'
        sh 'apk upgrade'
        sh 'apk add ca-certificates'
        sh 'update-ca-certificates'
        sh 'apk add --update coreutils && rm -rf /var/cache/apk/*'
        sh 'apk add --update openjdk11 tzdata curl unzip bash'
        sh 'apk add --no-cache nss'
        sh 'rm -rf /var/cache/apk/*'
        echo 'Successfully installed dependencies'
      }
    }
    stage('Testing') {
      parallel {
        stage('Run Tests') {
          steps {
            echo 'Testing...'
            sh 'yarn test'
            echo 'Successfully ran tests'
          }
        }
        stage('Run Coverage Test') {
          steps {
            echo 'Test coverage...'
            sh 'yarn test:cov'
            echo 'Successfully ran test coverage'
          }
        }
      }
    }
    
    stage('SonarQube Analysis') {

      steps {
        script {
          def scannerHome = tool 'ReverbScanner'
          withSonarQubeEnv(installationName: 'SonarCloud', credentialsId: 'CD_sonarcloud') {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
    stage('Create Build Artifacts') {
      steps {
        echo 'Building...'
        sh 'yarn build'
      }
    }
  }
}
