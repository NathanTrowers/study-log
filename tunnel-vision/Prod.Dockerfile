# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

USER node

EXPOSE 3001

CMD ["sh", "-c", "npm ci --omit=dev && npm run build && npm start"]
