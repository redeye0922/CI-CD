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
                    def remoteHost = "172.29.231.196"
                    def remoteUser = "testdev"

                    for (int i = 1; i <= env.NUM_DIRS.toInteger(); i++) {
                        def newDir = "${baseDir}-${i}"
                        sh """
                        ssh -o StrictHostKeyChecking=no -p 2222 ${remoteUser}@${remoteHost} << EOF
                            if [ ! -d "${newDir}" ]; then
                                cp -r ${baseDir} ${newDir}

                                cd ${newDir}
                                
                                # 포트를 증가시키는 명령어 수정
                                awk '{ if (\$1 == "ports:") { getline; sub(":","\$((\\\$0 + 1)):",\$0); print \$0 } else print \$0 }' docker-compose.yml > docker-compose.yml.tmp && mv docker-compose.yml.tmp docker-compose.yml
                                
                                # 네트워크 이름 변경
                                sed -i 's/networks:\\n\\s*- \\([a-zA-Z0-9_-]*\\)/networks:\\n  - \\1-1/g' docker-compose.yml
                                sed -i '/networks:/a \\\\  \\1-1:' docker-compose.yml

                                docker-compose up -d --build
                            fi
EOF
                        """
                    }
                }
            }
        }
    }
}
