# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

FROM node:18-alpine

EXPOSE 8080

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

# Copy files from host to container
COPY ./ ./

RUN pnpm build

RUN ls -al

CMD [ "pnpm", "start" ]
