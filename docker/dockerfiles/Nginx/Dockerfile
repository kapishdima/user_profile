FROM nginx:1.15.12-alpine

COPY nginx.conf /etc/nginx/

ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash \
    && adduser -D -H -u ${PUID} -s /bin/bash www-data


# Set upstream conf and remove the default conf
RUN echo "upstream php-upstream { server php-fpm:9000; }" > /etc/nginx/conf.d/upstream.conf \
    && rm /etc/nginx/conf.d/default.conf

CMD ["nginx"]

EXPOSE 80 443
