# Define nossa imagem base
FROM jenkins/jenkins:lts-jdk11

# Define nosso usuário dentro do contêiner
USER root

# Instalação do NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Carrega o NVM
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalação do Node.js 14
RUN nvm install 14

# Define a versão padrão do Node.js
RUN nvm alias default 14

# Instalação do npm
RUN npm install -g npm

USER jenkins
