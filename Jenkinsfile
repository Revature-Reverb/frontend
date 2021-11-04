pipeline {
  agent any 
  tools {
    nodejs "node"
    jdk "openjdk11"
  }
  environment {
    CI = 'true'
    // HOME = '.'
    // npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Dependencies') {
      // agent {
      //   docker {
      //     image 'node:16-alpine'
      //     args '-p 3000:3000'
      //   }
      // }
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
        sh 'npm install -g sonarqube-scanner'
        echo 'Successfully installed dependencies'
      }
    }
    stage('Testing') {
      parallel {
        stage('Run Tests') {
          steps {
            echo 'Testing...'
            sh 'npm run test'
            echo 'Successfully ran tests'
          }
        }
        stage('Run Coverage Test') {
          steps {
            echo 'Test coverage...'
            sh 'npm run test:cov'
            echo 'Successfully ran test coverage'
          }
        }
      }
    }
    stage('SonarQube Analysis') {
			environment {
        scannerHome = tool 'sonar-scanner'
			}
      steps {
        withSonarQubeEnv(installationName: 'SonarCloud', credentialsId: 'a') {
          echo 'Starting Sonar...'
          sh "${scannerHome}/bin/sonar-scanner"
          echo 'Successfully ran Sonar'
        }
      }
		}
    stage("Quality Gate") {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
	  }

    stage('Create Build Artifacts') {
      agent {
        docker {
          image 'node:16-alpine'
          args '-p 3000:3000'
        }
      }
      steps {
        sh 'npm install'
        echo 'Building...'
        sh 'npm run build'
      }
    }
  }
}
