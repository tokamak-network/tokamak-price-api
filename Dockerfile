FROM node:18-alpine

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN apk add --no-cache curl bash
RUN apk upgrade --no-cache musl

WORKDIR /app
ADD . /app

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]