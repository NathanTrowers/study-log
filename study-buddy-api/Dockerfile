# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

USER node

EXPOSE 3002

# If you are building your code for production
# RUN npm ci --omit=dev
CMD ["sh", "-c", "npm install && npm run dev"]
