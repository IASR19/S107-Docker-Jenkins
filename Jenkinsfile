pipeline {
    agent any

    stages {

        stage ('Test'){
            steps {
                echo 'Testing'
                sh '''
                    node --version
                    npm --version
                    npm install --save-dev coverage
                    node --version
                    npm --version
                    npm audit fix
                    npm test
                   '''
                   archiveArtifacts 'coverage/lcov-report'
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