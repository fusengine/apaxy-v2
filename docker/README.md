![Alt text](https://cdn.fusengine.ch/docker/apaxy.svg)
========================================================

This repository contains an apaxy dark version and completely changes interface.


Directory and volumes
--------------------

`/app/web` this is directory work. if you want a beautiful repertory list on apaxy v2 user `volume:/app/web`

```
VOLUME :
  /app/web
  /etc/apache2/sites-enabled => ubuntu
  /etc/apache2/vhost.d => alpine
  /var/log/apache2
```

Expose port 80

```
EXPOSE : 80
```

if you have any correction please suggest me Thanks for use that.

&copy; 2019 [Fusengine](http://fusengine.com)
