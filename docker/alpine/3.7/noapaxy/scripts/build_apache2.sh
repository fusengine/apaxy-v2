#!/bin/ash

# Add script function
source /root/.script_base/base

# add packages
PACK_DEFAULT="fcgi fcgi-dev libxml2-dev ca-certificates coreutils \
			gcc gnupg zlib-dev libc-dev libressl libressl-dev \
			apache2 apache2-utils apache2-proxy apache-mod-fcgid \
			apache2-mod-wsgi"

## update system
update_sys

# install pakage
install_pack

# clean system
clean

# Create /app repertory and delete  /var/www/html
echo " Create directory and config apache"

load

# apache create dir
mkdir -p /app/web
rm -fr /var/www
mkdir -p ${APACHE_DIR}vhost.d
mkdir -p /run/apache2

# link apache config dir
ln -s /var/log/apache2 /app/logs
ln -s /run/apache2 /app/run
ln -s /usr/lib/apache2 /app/modules

touch /var/log/apache2/error.log

rc-update add apache2

#move file to app dir
mv /apaxy-v2/htaccess.txt /app/.htaccess
mv /apaxy-v2/theme /app/theme
mv /app/theme/htaccess.txt /app/theme/.htaccess

# delete apaxy file
rm -rf /apaxy-v2

echo " Done! "