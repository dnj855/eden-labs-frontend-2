# Étape de build
FROM node:18-alpine AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .
ENV NITRO_PRESET=node-server
ENV NUXT_PRERENDER=false
RUN pnpm run build

RUN mkdir -p .output/server/utils
RUN echo "export default { strapiUrl: '', strapiApiToken: '' };" > .output/server/utils/runtime-config.mjs

# Étape de production
FROM node:18-alpine AS production
RUN npm install -g pnpm
WORKDIR /app

# Copier les fichiers de build
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]

# Commande pour démarrer l'application
CMD ["node", ".output/server/index.mjs"]