# Define nossa imagem base
FROM jenkins/jenkins:lts-jdk11

# Define nosso usuário dentro do contêiner
USER root

# Executa comandos para instalar o npm
RUN apt-get update
RUN apt-get install nodejs
RUN apt-get install -y npm

# Limpa arquivos baixados com apt-get
RUN apt-get clean

USER jenkins
