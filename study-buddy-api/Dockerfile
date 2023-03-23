# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install npm@8.18.0 -g
RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev
