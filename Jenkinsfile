pipeline {
    agent any

    stages {
        stage ('Set Environment Variable') {
            steps {
                script {
                    env.EMAIL = 'itamar.asr@gmail.com'
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
                emailext (
                    subject: 'Pipeline Executado!',
                    body: 'Build completed. Please check the status.',
                    to: env.EMAIL,
                    from: 'seu-email@example.com',
                    mimeType: 'text/html'
                )
            }
        }
    }
}
