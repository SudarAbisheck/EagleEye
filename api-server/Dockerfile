FROM node:8.12.0-alpine

WORKDIR /app
COPY ./dist ./
COPY package*.json ./
COPY .env ./

RUN yarn install --production=true --ignore-scripts

EXPOSE 3000
CMD [ "node", "server.js"]