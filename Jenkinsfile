pipeline {
    agent any

    stages {

        stage ('Test'){
            steps {
                echo 'Testing'
                sh '''
                    npm install --save-dev coverage
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