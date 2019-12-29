# Version Image
ARG IMAGE=fuseboat/alpine
ARG VERSION=latest

FROM ${IMAGE}:${VERSION}
LABEL maintainer="Fusengine <info@fusengine.ch>"

# Define Conf
ARG EMAIL_APACHE="localhost"
ARG APACHE_DIR="/etc/apache2/"

# Add script
ADD scripts/build_apache2.sh /root/.install_http
RUN chmod +x /root/.install_http

# install apache
RUN ./root/.install_http

# add apache config file
ADD scripts/httpd.conf ${APACHE_DIR}httpd.conf
ADD scripts/proxy.conf ${APACHE_DIR}conf.d/proxy.conf

# Add and fix permission file
ADD scripts/run.sh /.httpd
RUN chmod +x /.httpd

# Volume
VOLUME ["/etc/apache2/vhost.d", "/var/log/apache2", "/app/web"]

# WORKDIR
WORKDIR /app/web

EXPOSE 80

CMD ["/.httpd"]