FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
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
