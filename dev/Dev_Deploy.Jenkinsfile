pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                withCredentials([string(credentialsId: 'RAK', variable: 'rak'), string(credentialsId: 'RAH', variable: 'rah')]) {
                    sh '''
                    echo "#####   BUILDING IMAGE   ###"
                    docker build --tag nrdevac1/la:v1 --build-arg RAK=rak --build-arg RAH=rah .
                    echo rah
                    echo $rah
                    echo $RAH
                    echo "#####   DONE   ######"
                    '''
                }
            }
        }
        
        stage('Push to Repo') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dh_creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    echo "#####   PUSHING IMAGE TO Repo   ###"
                    docker login -u $USERNAME -p $PASSWORD
                    docker push nrdevac1/la:v1
                    echo "#####   DONE   #####"
                    '''
                }
            }
        }
        
        stage('Deploy') {
            steps {
                withCredentials([
                    file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')
                ]) {
                    sh '''
                    kubectl apply --kubeconfig ${KUBECONFIG} -f k8s/Dev_Deploy.yaml --namespace=dev
                    '''
                }
            }
        }
    } 

    post {
        failure {
            echo "Deploy stage failed due to issue in the build or pushing to image repo"
        }

        success {
            echo "Build and Deploy are successful!"
        }
    }
}   

