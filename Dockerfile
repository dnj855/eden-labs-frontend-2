# Étape de build (cette partie reste inchangée)
FROM node:18-alpine AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .
ENV NITRO_PRESET=node-server
ENV NUXT_PRERENDER=false
RUN pnpm run build

# Étape de production - ici viennent les modifications
FROM node:18-alpine AS production
RUN npm install -g pnpm
WORKDIR /app

# Définir des variables d'environnement par défaut qui seront remplacées au runtime
ENV STRAPI_URL=""
ENV STRAPI_API_TOKEN=""

# Ces variables avec préfixe NUXT_PUBLIC_ seront accessibles par Nuxt au runtime
ENV NUXT_PUBLIC_STRAPI_URL=${STRAPI_URL}
ENV NUXT_PUBLIC_STRAPI_API_TOKEN=${STRAPI_API_TOKEN}

# Copier les fichiers de build
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", ".output/server/index.mjs"]