# Define nossa imagem base
FROM jenkins/jenkins:lts-jdk11

# Define nosso usuário dentro do contêiner
USER root

# Executa comandos para instalar o npm
RUN apt-get update
# Instala o nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Carrega o nvm no ambiente
ENV NVM_DIR /root/.nvm
RUN . $NVM_DIR/nvm.sh && nvm install node

# Define a versão do Node.js como padrão
RUN . $NVM_DIR/nvm.sh && nvm alias default node

# Instala npm
RUN apt-get install -y npm

# Limpa arquivos baixados com apt-get
RUN apt-get clean

USER jenkins
