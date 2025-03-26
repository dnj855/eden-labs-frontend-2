# Étape 1 : Construction de l’application
FROM node:18-alpine AS builder
WORKDIR /app

# Installer pnpm globalement
RUN npm install -g pnpm

# Copier les fichiers de dépendances (package.json et pnpm-lock.yaml) pour profiter du cache Docker
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances avec pnpm
RUN pnpm install

# Copier l'ensemble du code source
COPY . .

# Construire l’application en mode production (génère le dossier .output)
RUN pnpm run build

# Étape 2 : Création de l’image de production
FROM node:18-alpine AS runner
WORKDIR /app

# Définir la variable d'environnement pour le mode production
ENV NODE_ENV=production

# Copier les fichiers de build depuis l'étape "builder"
COPY --from=builder /app/.output ./.output

# Exposer le port sur lequel Nuxt sera accessible (par défaut 3000)
EXPOSE 3000

# Commande de démarrage de l’application
CMD ["node", ".output/server/index.mjs"]
