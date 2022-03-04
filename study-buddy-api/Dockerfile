# syntax=docker/dockerfile:1
FROM node:14.18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "start"]