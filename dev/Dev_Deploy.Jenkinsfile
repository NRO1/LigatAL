pipeline {
    agent any

    parameters {
        string(name: 'BUILT_IMAGE_NAME')
    }

    stages {
        stage('Build image') {
            steps {
                sh """
                echo ${params.BUILT_IMAGE_NAME}
                """
            }
        }
    }
}    

