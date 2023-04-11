pipeline {
    agent any

    parameters {
        string(name: 'BUILT_IMAGE_NAME')
    }

    stages {
        stage('Dev_Deploy') {
            steps {
                sh """
                echo ${params.BUILT_IMAGE_NAME}
                """
            }
        }
    }
}    

