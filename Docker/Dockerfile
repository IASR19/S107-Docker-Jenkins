# Define nossa imagem base
FROM jenkins/jenkins:lts-jdk11

# Define nosso usuário dentro do contêiner
USER root

# Instalação do Node.js 14 e npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get install -y nodejs

USER jenkins
