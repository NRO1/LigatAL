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
    
        stage('Bot Deploy') {
                steps {
                    withCredentials([
                        file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')
                    ]) {
                        sh '''
                        kubectl apply --kubeconfig ${KUBECONFIG} -f k8s/Prod_Deploy.yaml --namespace=prod
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

        
