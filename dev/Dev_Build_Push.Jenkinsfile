pipeline {
    agent any

    stages {
        stage('Build image') {
            steps {
                withCredentials([string(credentialsId: 'RAK', variable: 'rak'), string(credentialsId: 'RAH', variable: 'rah')]) {
                    sh '''
                    echo "#####   BUILDING IMAGE   ###"
                    docker build --tag nrdevac1/la:v1 --build-arg RAK=rak --build-arg RAH=rah .
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
                    docker push nrdevac1/la:v1
                    echo "#####   DONE   #####"
                    '''
                }
            }
        }

        stage('Trigger Deploy') {
            steps {
                build job: 'Dev_Deploy', wait: false, parameters: [
                    string(name: 'BUILT_IMAGE_NAME', value: "nrdevac1/la:v1")
                ]
            }
        }
    }
}

        
