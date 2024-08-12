# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

USER node

EXPOSE 3002

CMD ["sh", "-c", "npm ci --omit=dev && npm start"]
