# Declare a Docker build-time variable
ARG NODE_IMAGE_VERSION=18-alpine

### Builder Stage ###

FROM node:${NODE_IMAGE_VERSION} as builder

WORKDIR /usr/src/app


COPY package.json ./

RUN ls -al

# Copy files from host to container then list it
COPY ./ ./
RUN ls -al

RUN npm install
# Build project
RUN npm run build:prod

# List files under build directory for reference
RUN ls -al build

### Final Stage ###

FROM node:${NODE_IMAGE_VERSION} as app

ENV NODE_ENV=production

EXPOSE 8080

WORKDIR /usr/src/app

# Copy the necessary files from the builder stage to this stage
COPY --chown=node:node --from=builder /usr/src/app/build .


# On npm@9, `npm set-script` has been removed: https://github.blog/changelog/2022-10-24-npm-v9-0-0-released/
# This is mainly for disabling Husky on Docker and CI.
RUN npm pkg set scripts.prepare=" "


# Install production dependencies only

# List the final directory for reference
RUN ls -al
RUN ls ./src -al

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

CMD ["node", "./src/app.js"]
