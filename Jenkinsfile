pipeline {
    agent any

    stages {

        stage ('Test'){
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

        stage ('Notifications'){
            steps {
                echo 'Notifications'
                sh '''
                    cd scripts/
                    chmod 777 *
                    ./jenkins.sh
                   '''
            }
            
        }
    }
}