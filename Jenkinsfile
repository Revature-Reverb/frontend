pipeline {
  agent any 
  tools {
    nodejs "node"
    jdk "openjdk11"
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Install Dependencies') {

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
            sh 'npm run test:cov .'
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
          
          // sh 'npm run test:cov .'
          sh "cat ./coverage/lcov.info"
          echo 'COVERAGE THINGS'
          sh "cat sonar-project.properties"
          echo 'COVERAGE'
          sh "${scannerHome}/bin/sonar-scanner"
          echo 'Successfully ran Sonar'
        }
      }
		}
    // stage("Quality Gate") {
    //   steps {
    //     timeout(time: 1, unit: 'MINUTES') {
    //       waitForQualityGate abortPipeline: true
    //     }
    //   }
	  // }

    stage('Create Build Artifacts') {
      steps {
        // sh 'npm install'
        echo 'WILL NEED TO ADJUST THIS TO DOCKER.'
        echo 'serve -s build'
        echo 'Building...'
        // sh 'npm run build'
        echo 'Fake build complete'
      }
    }
  }
  post {
    always {
      script {
        status = "${currentBuild.currentResult.toLowerCase()}"

        commit = sh (
          script: "echo ${env.GIT_COMMIT} | cut -c -6",
          returnStdout: true
        ).trim()

        GIT_COMMIT_MESSAGE = sh (
          script: "git log -1 --pretty=%B",
          returnStdout: true
        ).trim()

        title = "${env.JOB_NAME} ${env.BUILD_DISPLAY_NAME}"
        footer = 'Jenkins Discord Notifier'
        url = 'https://discord.com/api/webhooks/905935341721092118/Wrz7wszOrsJL5SJkNqomcB4Pq1iR_BEF_Z1mcuaEJRkAtdXsVd2dmEBnyKLRmr6L9mDM'

        // GIT_COMMITTER_EMAIL = sh(
        //   script: "git --no-pager show -s --format='%ae'",
        //   returnStdout: true
        // ).trim()
        GIT_AUTHOR = sh(
          script: "git show -s --pretty=\"%an <%ae>\" ${GIT_COMMIT}",
          returnStdout: true
        )

        description = """**Build:** ${env.BUILD_NUMBER}
        **Status:** ${status}
        **Changes:**
        - `${commit}` *${GIT_COMMIT_MESSAGE}* - ${GIT_AUTHOR}"""
        // ${GIT_COMMITTER_EMAIL}
        discordSend description: "${description}", footer: "${footer}", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${title}", webhookURL: "${url}"
      }
    }
  }
}