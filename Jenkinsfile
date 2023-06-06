pipeline {
    agent any

    stages {
        stage ('Set Environment Variable') {
            steps {
                script {
                    env.EMAIL = 'itamar.asr19@gmail.com'
                }
            }
        }

        stage ('Test') {
            steps {
                echo 'Testing'
                sh '''
                    node --version
                    npm --version
                    npm install --save-dev jest jest-html-reporters     
                    node --version
                    npm --version
                    npm audit fix
                    npx jest --config=jest.config.js
                '''
                archiveArtifacts 'report.html'
            }
        }

        stage ('Notifications') {
            steps {
                echo 'Notifications'
                sh '''
                    echo $EMAIL
                    cd scripts/
                    chmod 777 *
                    ./jenkins.sh
                '''
            }
        }
    }
}
