#!/bin/sh

set -e

exec tail -F /var/log/apache2/*.log&
rm -rf /run/apache2/* || true

httpd -D FOREGROUND