pipeline {
    agent any
    stages {
        stage('Build') {
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
                withCredentials([usernamePassword(credentialsId: 'dh_creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    echo "#####   PUSHING IMAGE TO Repo #####"
                    docker login -u $USERNAME -p $PASSWORD
                    docker push nrdevac1/la-prod:v1
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
                    kubectl apply --kubeconfig ${KUBECONFIG} -f k8s/Prod_Deploy.yaml --namespace=prod
                    '''
                }
            }
        }

        stage('E2E tests') {
                  steps {
                    sh '''
                        npx cypress install
                        npx cypress verify
                        npx cypress run
                    '''
                  }
               }
    } 

    post {
        failure {
            echo "Deploy stage failed due to issue in the build or pushing to image repo"
            emailext body: 'Deploy stage failed due to issue in the build or pushing to image repo',
                subject: 'Jenkins build - Dev stage FAILED',
                to: 'nrdevac1@gmail.com'
        }

        success {
            echo "Build and Deploy are successful!"
            emailext body: 'Build and Deploy are successful!',
                subject: 'Jenkins build - Dev stage SUCCEEDED',
                to: 'nrdevac1@gmail.com'
        }
    }
}   


