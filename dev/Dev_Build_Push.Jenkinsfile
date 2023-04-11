pipeline {
    agent any

    stages {
        stage('Build image') {
            steps {
                withCredentials([string(credentialsId: 'RAK', variable: 'rak'), string(credentialsId: 'RAH', variable: 'rah')]) {
                    sh '''
                        echo "#####   BUILDING IMAGE   ###"
                        docker build --tag nro1-la:v1 --build-arg RAK=rak --build-arg RAH=rah .
                        echo "#####   DONE   ######"
                        '''
                }
            }
        }

        stage('login to Repo') {
            steps {
                script{
                    sh "echo '#####   LOGING IN TO ECR   ###'"
                    sh """aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/n5h8m9x0"""
                    sh "echo '#####   DONE   #####'"
                }
            }
        }

        stage('Push to Repo') {
            steps {
                    script{
                        sh "echo '#####   PUDING IMAGE TO ECR   ###'"
                        sh "docker tag nro1-la:v1 public.ecr.aws/n5h8m9x0/nro1-la:v1"
                        sh "docker push public.ecr.aws/n5h8m9x0/nro1-la:v1"
                        sh "echo '#####   DONE   #####'"
                    }
                }
            }

        stage('Trigger Push') {
            steps {
                build job: 'Dev_Push_Image', wait: false, parameters: [
                    string(name: 'BUILT_IMAGE_NAME', value: "public.ecr.aws/n5h8m9x0/nro1-la:v1")
                ]
            }
        }
    }
}

        
