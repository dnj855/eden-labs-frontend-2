# Frontend Eden Labs

Ce projet est une application web moderne construite avec Nuxt.js 3, Vue.js 3 et TailwindCSS.

## 🚀 Technologies Utilisées

- **Framework**: Nuxt.js 3
- **UI Framework**: Vue.js 3
- **Styling**: TailwindCSS
- **Animations**: GSAP
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Image Optimization**: @nuxt/image
- **Package Manager**: pnpm

## 📋 Prérequis

- Node.js (version LTS recommandée)
- pnpm (version 9.15.4 ou supérieure)
- Docker (optionnel, pour le déploiement)

## 🛠️ Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd frontend
```

2. Installer les dépendances :
```bash
pnpm install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env
```
Puis éditer le fichier `.env` avec vos configurations.

## 🚀 Développement

Pour lancer le serveur de développement :
```bash
pnpm dev
```

L'application sera accessible à l'adresse `http://localhost:3000`

## 🏗️ Build

Pour construire l'application pour la production :
```bash
pnpm build
```

Pour prévisualiser la version de production :
```bash
pnpm preview
```

## 🐳 Docker

Le projet inclut une configuration Docker pour le déploiement.

Pour construire l'image Docker :
```bash
docker build -t frontend .
```

Pour lancer l'application avec Docker Compose :
```bash
docker-compose up
```

## 📁 Structure du Projet

```
frontend/
├── assets/          # Ressources statiques
├── components/      # Composants Vue réutilisables
├── composables/     # Composables Vue
├── layouts/         # Layouts de l'application
├── pages/          # Pages de l'application
├── plugins/        # Plugins Nuxt
├── public/         # Fichiers publics
├── server/         # Code côté serveur
├── services/       # Services et API
└── types/          # Types TypeScript
```

## 🔧 Configuration

- `nuxt.config.ts` : Configuration principale de Nuxt
- `tsconfig.json` : Configuration TypeScript
- `.env` : Variables d'environnement (à créer à partir de .env.example)

## 📄 Licence

Ce projet est privé et propriétaire. Tous droits réservés.