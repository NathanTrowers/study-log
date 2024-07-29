# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3002

CMD ["npm", "run", "dev"]
