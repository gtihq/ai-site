# syntax=docker/dockerfile:1
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=github_token,required=true \
    apk add --no-cache git && \
    export GITHUB_TOKEN="$(cat /run/secrets/github_token)" && \
    export GIT_CONFIG_COUNT=1 && \
    export GIT_CONFIG_KEY_0="url.https://x-access-token:${GITHUB_TOKEN}@github.com/.insteadOf" && \
    export GIT_CONFIG_VALUE_0="https://github.com/" && \
    npm ci && \
    apk del git
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=80
COPY --from=build /app/dist ./dist
COPY --from=build /app/public/updates ./public/updates
COPY server.mjs ./
EXPOSE 80
CMD ["node", "server.mjs"]
