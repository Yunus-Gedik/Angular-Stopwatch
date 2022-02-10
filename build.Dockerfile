FROM nginx:alpine

COPY . /beforeWebpack
WORKDIR /beforeWebpack

RUN apk add --update npm
RUN npm install webpack
RUN npm run prod
