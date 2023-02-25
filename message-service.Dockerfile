# build
FROM node:16.13-alpine as build

ENV NODE_ENV build

WORKDIR /app/message-microservice

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build message-microservice && npm prune --production

# run 
FROM node:16.13-alpine

ENV NODE_ENV production

WORKDIR /app/message-microservice

EXPOSE 3000

COPY --from=build /app/message-microservice/package*.json ./
COPY --from=build /app/message-microservice/node_modules/ ./node_modules/
COPY --from=build /app/message-microservice/dist/ ./dist/

CMD node dist/apps/message-microservice/main.js