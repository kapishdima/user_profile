FROM php:8.1-fpm
#
#--------------------------------------------------------------------------
# Software's Installation
#--------------------------------------------------------------------------
#
# Installing tools and PHP extentions using "apt", "docker-php", "pecl",
#

# Install "curl", "libmemcached-dev", "libpq-dev", "libjpeg-dev",
#         "libpng-dev", "libfreetype6-dev", "libssl-dev", "libmcrypt-dev",
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y --no-install-recommends \
    curl \
    libmemcached-dev \
    libz-dev \
    libzip-dev \
    libpq-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libssl-dev \
    libmcrypt-dev \
    libgmp-dev \
  && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql \
&& docker-php-ext-install pdo_pgsql \
&& docker-php-ext-configure gd \
            --prefix=/usr \
            --with-jpeg \
            --with-freetype \
  && docker-php-ext-install gd \
  && docker-php-ext-install pgsql \
  # && pecl install -o -f redis \
  # && docker-php-ext-enable redis \
  && docker-php-ext-install zip \
  && docker-php-ext-install gmp \
  && docker-php-ext-install exif \
  && docker-php-ext-install bcmath

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug
#####################################
# Composer:
#####################################

# Install composer and add its bin to the PATH.
RUN curl -s http://getcomposer.org/installer | php && \
    echo "export PATH=${PATH}:/var/www/vendor/bin" >> ~/.bashrc && \
    mv composer.phar /usr/local/bin/composer

# Source the bash
RUN . ~/.bashrc
USER root

ARG TZ=UTC
ENV TZ ${TZ}

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

###########################################################################
# Crontab
###########################################################################

USER root

#--------------------------------------------------------------------------
# Final Touch
#--------------------------------------------------------------------------
#
COPY ./php.ini /usr/local/etc/php/conf.d
COPY ./php.pool.conf /usr/local/etc/php-fpm.d/

USER root

# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog
ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}
RUN usermod -u ${PUID} www-data
WORKDIR /var/www

CMD ["php-fpm"]

EXPOSE 9000
