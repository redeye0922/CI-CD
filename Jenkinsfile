pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                script {
                    // 사용자 입력 받기
                    def userInput = input(
                        id: 'userInput', message: 'Enter the number of directories to create:',
                        parameters: [
                            string(defaultValue: '1', description: 'Number of directories', name: 'NUM_DIRS')
                        ]
                    )
                    env.NUM_DIRS = userInput
                }
            }
        }

        stage('Create Directories') {
            steps {
                script {
                    def baseDir = "/home/testdev/devCompose/docker-compose-deploy"
                    for (int i = 1; i <= env.NUM_DIRS.toInteger(); i++) {
                        def newDir = "${baseDir}-${i}"
                        sh """
                        if [ ! -d "$newDir" ]; then
                            cp -r $baseDir $newDir

                            cd $newDir
                            sed -i 's/ports:\\n\\s*- "\\([0-9]*\\):\\([0-9]*\\)"/ports:\\n  - "$((\\1 + 1)):\\2"/g' docker-compose.yml
                            sed -i 's/networks:\\n\\s*- \\([a-zA-Z0-9_-]*\\)/networks:\\n  - \\1-1/g' docker-compose.yml
                            sed -i '/networks:/a \\  \\1-1:' docker-compose.yml

                            docker-compose up -d --build
                        fi
                        """
                    }
                }
            }
        }
    }
}
