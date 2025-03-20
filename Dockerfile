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

# Build de l'application
RUN pnpm run build

# Étape de production
FROM node:18-alpine AS production

# Installation de pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
COPY --from=build /app/nuxt.config.js ./
# Si vous utilisez des fichiers statiques ou d'autres assets
COPY --from=build /app/public ./public

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["pnpm", "start"]