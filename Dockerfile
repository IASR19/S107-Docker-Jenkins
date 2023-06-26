FROM igsr19/s107-pv2:v1.0

USER root

# Copiar arquivos de configuração do Jenkins
COPY ./jenkins_compose/jenkins_configuration /var/jenkins_home

# Instalar o MySQL
RUN apt-get update && apt-get install -y mysql-client

# Copiar arquivos de configuração do MySQL
COPY ./mysql_data /var/lib/mysql

# Instalar o Nginx
RUN apt-get update && apt-get install -y nginx

# Copiar arquivos de configuração do Nginx
COPY ./frontend /usr/share/nginx/html

# Expor portas
EXPOSE 8080
EXPOSE 50000
EXPOSE 3306
EXPOSE 80

# Comando de inicialização
CMD ["/bin/bash"]

USER jenkins
