FROM node:14 AS build

RUN mkdir /app
COPY package.json yarn.lock /app/
COPY ./public/pkg /app/public/pkg
WORKDIR /app

RUN yarn install
COPY  . /app/
# this will build the browser and server files:
RUN yarn build


FROM nginx:1.16.1 AS frontend-browser
COPY --from=build /app/build/ /usr/share/nginx/html
COPY react-server.nginx.conf /etc/nginx/conf.d/default.conf