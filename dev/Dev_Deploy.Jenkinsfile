pipeline {
    agent any

    environment {
        APP_ENV = "dev"
    }

    parameters {
        string(name: 'BUILT_IMAGE_NAME')
    }

   stages {
        stage('Bot Deploy') {
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

