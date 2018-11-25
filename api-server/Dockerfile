FROM node:8.12.0-alpine

ENV NODE_ENV production

WORKDIR /app
COPY ./dist ./
COPY package*.json ./

RUN yarn install --production=true --ignore-scripts

EXPOSE 3000
CMD [ "node", "server.js"]