pipeline {
  agent {
    docker {
     image 'node:16-alpine'
     args '-p 3000:3000'
    }
  }      
  tools {
    nodejs "node"
    jdk "openjdk11"
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
			environment {
        scannerHome = tool 'sonar-scanner' // the name you have given the Sonar Scanner (in Global Tool Configuration)
        //ORGANIZATION = tool 'Revature-Reverb_frontend' // the name you have given the Sonar Scanner (in Global Tool Configuration)
        //PROJECT_NAME = tool 'ReverbScanner' // the name you have given the Sonar Scanner (in Global Tool Configuration)
			}
      steps {
        withSonarQubeEnv(installationName: 'SonarCloud', credentialsId: 'a') {
          echo 'Starting Sonar...'
          echo 'Echos...'
          sh 'ls'
          //sh 'npm install sonarqube-scanner'
          sh "${scannerHome}/bin/sonar-scanner"
          echo 'Successfully ran Sonar'
        }
      }
		}
    // stage('SonarQube Analysis') {
    //   steps {
    //     script {
    //       def scannerHome = tool 'ReverbScanner'
    //       withSonarQubeEnv(installationName: 'SonarCloud', credentialsId: 'a') {
    //         sh "${scannerHome}/bin/sonar-scanner"
    //       }
    //     }
    //   }
    // }
    stage('Create Build Artifacts') {
      steps {
        echo 'Building...'
        sh 'yarn build'
      }
    }
  }
}
