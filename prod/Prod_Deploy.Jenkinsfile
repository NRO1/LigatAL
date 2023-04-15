pipeline {
    agent any

    environment {
        APP_ENV = "prod"
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
}   

