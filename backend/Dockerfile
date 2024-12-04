# 빌드 환경
FROM maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

# JAR 파일과 프로젝트 파일 복사
COPY ./pom.xml /app/pom.xml
COPY ./src /app/src

# 의존성 설치 및 빌드
RUN mvn clean install -DskipTests

# 실행 환경
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 9090

CMD ["java", "-jar", "/app/app.jar", "--server.port=9090"]
