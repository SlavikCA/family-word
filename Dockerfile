# syntax=docker/dockerfile:1

# ---- Stage 1: build the Eleventy site ----
FROM node:22-alpine AS build

WORKDIR /app

# Install deps first so the layer caches across content edits.
COPY package.json package-lock.json ./
RUN npm ci

# Eleventy reads src/ and writes _site/ (see eleventy.config.js).
COPY . .
RUN npm run build


# ---- Stage 2: serve the static output ----
FROM nginxinc/nginx-unprivileged:stable-alpine-slim

COPY --chown=101:101 --from=build /app/_site/ /usr/share/nginx/html/

EXPOSE 8080
