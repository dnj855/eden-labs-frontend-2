#!/bin/sh

# Créer le dossier si nécessaire
mkdir -p /app/.output/server/utils

# Générer le fichier de configuration avec les variables d'environnement
echo "export default {
  strapiUrl: '${STRAPI_URL}',
  strapiApiToken: '${STRAPI_API_TOKEN}'
};" > /app/.output/server/utils/runtime-config.mjs

# Exécuter la commande d'origine
exec "$@"