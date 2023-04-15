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
                    kubectl apply --kubeconfig ${KUBECONFIG} -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.48.1/deploy/static/provider/baremetal/deploy.yaml
                    kubectl apply --kubeconfig ${KUBECONFIG} -f k8s/web-server.yaml
                    kubectl apply --kubeconfig ${KUBECONFIG} -f k8s/Dev_Deploy.yaml --namespace=dev
                    '''
                }
            }
        }
    } 
}   

