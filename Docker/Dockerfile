# Define nossa imagem base
FROM jenkins/jenkins:lts-jdk11

# Define nosso usuário dentro do contêiner
USER root

# Instalação do NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Configuração do NVM
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalação do Node.js 14
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install 14"

# Define a versão padrão do Node.js
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm alias default 14"

# Instalação do npm
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && npm install -g npm"

USER jenkins
