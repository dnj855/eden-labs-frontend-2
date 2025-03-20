# Étape de build
FROM node:18-alpine AS build

# Installation de pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copie des fichiers de configuration pnpm
COPY package.json pnpm-lock.yaml* ./

# Installation des dépendances avec pnpm
RUN pnpm install --frozen-lockfile

# Copie du reste du code source
COPY . .

# Ajout d'une variable d'environnement pour désactiver le prérendu si nécessaire
ENV NITRO_PRESET=node-server
ENV NUXT_PRERENDER=false

# Build de l'application
RUN pnpm run build

# Étape de production
FROM node:18-alpine AS production

ARG STRAPI_URL
ARG STRAPI_API_TOKEN

# Définir les variables d'environnement
ENV STRAPI_URL=$STRAPI_URL
ENV STRAPI_API_TOKEN=$STRAPI_API_TOKEN

# Installation de pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", ".output/server/index.mjs"]