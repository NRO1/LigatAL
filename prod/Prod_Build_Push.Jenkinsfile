pipeline {
    agent any

    stages {
        stage('Build image') {
            steps {
                withCredentials([string(credentialsId: 'RAK', variable: 'rak'), string(credentialsId: 'RAH', variable: 'rah')]) {
                    sh '''
                    echo "#####   BUILDING IMAGE   ###"
                    docker build --tag nrdevac1/la-prod:v1 --build-arg RAK=rak --build-arg RAH=rah .
                    echo "#####   DONE   ######"
                    '''
                }
            }
        }
        
        stage('Push to Repo') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dh_cred', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    echo "#####   PUSHING IMAGE TO ECR   ###"
                    docker login -u $USERNAME -p $PASSWORD
                    docker push nrdevac1/la-prod:v1
                    echo "#####   DONE   #####"
                    '''
                }
            }
        }

        stage('Trigger Deploy') {
            steps {
                build job: 'Prod_Deploy', wait: false, parameters: [
                    string(name: 'BUILT_IMAGE_NAME', value: "nrdevac1/la-prod:v1")
                ]
            }
        }
    }

     post {
        failure {
            echo "Build stage failed due to issue in the build or pushing to image repo"
        }

        success {
            echo "Build satge is successful, continuing to deploy stage"
        }
    }
}

        
