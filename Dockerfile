# Étape de build
FROM node:18-alpine AS build
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./
RUN npm ci

# Copie du reste du code source
COPY . .

# Build de l'application
RUN npm run build

# Étape de production
FROM node:18-alpine AS production
WORKDIR /app

# Copie des dépendances et du build depuis l'étape précédente
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/package*.json ./
COPY --from=build /app/nuxt.config.js ./

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]