FROM maven:3.8.4-openjdk-17-slim

WORKDIR /app

COPY pom.xml ./
RUN mvn dependency:go-offline -B

COPY src ./src

EXPOSE 8000

CMD ["mvn", "spring-boot:run"]
