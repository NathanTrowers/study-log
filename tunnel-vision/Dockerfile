# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3001

CMD ["npm", "start"]
