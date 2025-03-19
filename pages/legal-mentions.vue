<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-tertiary py-16 lg:py-24">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="font-accent text-4xl md:text-5xl lg:text-6xl font-extrabold text-light">
          Mentions légales
        </h1>
      </div>
    </div>
    <div class="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDownIcon class="h-6 w-6 text-light/70" />
    </div>
  </section>

  <!-- Contenu Principal -->
  <section class="py-12 sm:py-16 lg:py-20 bg-white" ref="contentSection">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg max-w-none">
        <!-- Section Identification -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">1. Identification</h2>
          <dl class="grid grid-cols-1 gap-4">
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Nom/Raison sociale</dt>
              <dd class="mt-1">Cédric Lang-Roth EI</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Adresse du siège social</dt>
              <dd class="mt-1">21 route d'Angleterre, 76190 Saint-Martin-de-l'If</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Téléphone</dt>
              <dd class="mt-1">+33 6 88 14 40 84</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Email</dt>
              <dd class="mt-1">contact@eden-labs.fr</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">SIRET</dt>
              <dd class="mt-1">939 109 740 00018</dd>
            </div>
          </dl>
        </div>

        <!-- Section Hébergement -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">2. Hébergement</h2>
          <dl class="grid grid-cols-1 gap-4">
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Nom de l'hébergeur</dt>
              <dd class="mt-1">Hostinger International LTD</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Adresse</dt>
              <dd class="mt-1">61 Lordou Vironos Street, 6023 Larnaca, Chypre</dd>
            </div>
          </dl>
        </div>

        <!-- Section Responsable -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">3. Responsable de la publication</h2>
          <dl class="grid grid-cols-1 gap-4">
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Responsable</dt>
              <dd class="mt-1">Cédric Lang-Roth, dirigeant</dd>
            </div>
            <div class="flex flex-col">
              <dt class="font-medium text-gray-700">Coordonnées</dt>
              <dd class="mt-1">21 route d'Angleterre, 76190 Saint-Martin-de-l'If</dd>
            </div>
          </dl>
        </div>

        <!-- Section Propriété Intellectuelle -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">4. Propriété intellectuelle</h2>
          <div class="space-y-4">
            <p class="text-gray-700">L'ensemble des contenus (textes, images, vidéos, logos, graphiques, icônes, etc.) présents sur ce site est protégé par les dispositions du Code de la propriété intellectuelle.</p>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-gray-900">Droits d'auteur</h3>
                <p class="mt-2 text-gray-700">Tous les droits d'auteur relatifs au contenu de ce site sont réservés. Toute reproduction, représentation, adaptation, modification, publication, transmission, dénaturation ou exploitation de tout ou partie du contenu, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de l'Éditeur.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Marques et logos</h3>
                <p class="mt-2 text-gray-700">Les marques, logos et autres signes distinctifs affichés sur ce site sont également protégés. Toute utilisation non autorisée de ces éléments est passible de poursuites.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section RGPD -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">5. Données personnelles et RGPD</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">5.1 Collecte et utilisation des données</h3>
              <p class="text-gray-700 mb-4">Dans le cadre de son activité de consulting et de formation en intelligence artificielle, l'Éditeur est amené à collecter et traiter certaines données personnelles des utilisateurs du site (comme nom, prénom, adresse e-mail, coordonnées professionnelles). Ces données sont collectées notamment via :</p>
              <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Les formulaires de contact et d'inscription aux formations</li>
                <li>Les échanges commerciaux</li>
                <li>La prise de rendez-vous en ligne</li>
                <li>Les interactions sur le site internet</li>
              </ul>
              <p class="text-gray-700 mb-4">Ces données sont utilisées à des fins commerciales et ne sont traitées que par l’Éditeur ou pour son compte (par ses sous-traitants ou prestataires). Aucune vente ni cession de données à des tiers n’est effectuée sans autorisation préalable, hormis les transferts nécessaires à la prestation des services tiers décrits ci-dessous.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">5.2 Respect du RGPD</h3>
              <p class="text-gray-700 mb-4">L'Éditeur s'engage à respecter la législation en vigueur relative à la protection des données personnelles, et notamment le RGPD (Règlement (UE) 2016/679). À ce titre :</p>
              <ul class="list-disc pl-6 space-y-2 text-gray-700">
                <li>Les données collectées sont limitées au strict nécessaire au regard des finalités poursuivies,</li>
                <li>Les données sont conservées pour une durée n’excédant pas celle nécessaire à la réalisation de la finalité pour laquelle elles sont collectées,</li>
                <li>L’Éditeur met en place des mesures de sécurité appropriées afin de protéger les données contre tout accès non autorisé, perte, altération ou destruction.</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">5.3 Droits des personnes concernées</h3>
              <p class="text-gray-700 mb-4">Conformément à la législation en vigueur, les utilisateurs disposent d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation du traitement ainsi que d’un droit à la portabilité de leurs données. Pour exercer ces droits, il suffit d’adresser une demande écrite par e-mail ou courrier postal aux coordonnées suivantes :</p>
              <div class="bg-gray-50 p-4 rounded-md mb-4">
                <p class="text-gray-700">Email : contact@eden-labs.fr</p>
                <p class="text-gray-700">Adresse : Eden Labs</p>
                <p class="text-gray-700">21 route d'Angleterre</p>
                <p class="text-gray-700">76190 Saint-Martin-de-l'If</p>
              </div>
              <p class="text-gray-700 mb-4">La demande doit être accompagnée d’un justificatif d’identité pour des raisons de sécurité. L’Éditeur s’engage à répondre dans les meilleurs délais et au plus tard dans le délai légal requis.</p>
            </div>
          </div>
        </div>

        <!-- Section Services Tiers -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">6. Utilisation de services tiers</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">6.1 cal.com</h3>
              <p class="text-gray-700">L’Éditeur utilise cal.com pour la prise de rendez-vous en ligne. Les données personnelles (nom, e-mail, etc.) éventuellement collectées via cet outil sont traitées en conformité avec les Conditions Générales d’Utilisation (CGU) et la politique de confidentialité de cal.com. L’utilisateur est invité à consulter la politique de cal.com pour plus d’informations sur la gestion et la sécurisation des données.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">6.2 OpenAI</h3>
              <p class="text-gray-700">Dans le cadre des activités de consulting en intelligence artificielle, le site peut intégrer des services ou API fournis par OpenAI. Toute donnée transférée à OpenAI ou traitée par OpenAI relève de ses Conditions Générales d’Utilisation et de sa politique de confidentialité. L’Éditeur veille à ce que les informations personnelles éventuellement transférées soient protégées conformément aux standards de sécurité en vigueur.</p>
            </div>
            <p class="text-gray-700">L’utilisation de ces services tiers implique un transfert et un traitement éventuel des données hors de l’Union européenne, selon les modalités précisées dans leurs politiques respectives. L’Éditeur met tout en œuvre pour garantir la confidentialité des données et s’assurer que ces transferts respectent les dispositions légales applicables.</p>
          </div>
        </div>

        <!-- Section Cookies -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">7. Politique de cookies</h2>
          <div class="space-y-4">
            <p class="text-gray-700">Lors de la consultation du site, des cookies et autres traceurs peuvent être déposés sur le terminal de l’utilisateur (ordinateur, smartphone, tablette). Ces cookies sont utilisés pour :</p>
            <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Améliorer l’expérience utilisateur (mémorisation des préférences),</li>
              <li>Réaliser des statistiques de fréquentation et d’utilisation du site,</li>
              <li>Permettre le fonctionnement de certains services tiers (comme cal.com).</li>
            </ul>
            <p class="text-gray-700">L’utilisateur a la possibilité de gérer et de désactiver les cookies en paramétrant son navigateur ou via un module de gestion des cookies (bandeau de consentement). Le refus de certains cookies peut toutefois affecter le bon fonctionnement de certaines fonctionnalités du site. Pour en savoir plus sur la gestion des cookies et vos droits, vous pouvez consulter la documentation de votre navigateur ou le paramétrage prévu sur le site.</p>
          </div>
        </div>

        <!-- Section Accessibilité -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">8. Accessibilité</h2>
          <p class="text-gray-700">L’Éditeur s’engage à rendre le site accessible au plus grand nombre et respecte, dans la mesure du possible, les bonnes pratiques et référentiels en vigueur (tels que le RGAA – Référentiel Général d’Amélioration de l’Accessibilité). Malgré tout le soin apporté, certains contenus ou fonctionnalités peuvent occasionnellement être difficiles à appréhender pour certains utilisateurs. En cas de difficulté, nous vous invitons à nous contacter afin que nous puissions améliorer l’accessibilité du site.</p>
        </div>

        <!-- Section Limitation de responsabilité -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">9. Limitation de responsabilité</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900">Exactitude des informations</h3>
              <p class="mt-2 text-gray-700">L’Éditeur s’efforce de diffuser des informations exactes et à jour sur le site. Toutefois, il ne peut être tenu pour responsable d’éventuelles erreurs ou omissions ni des conséquences de l’utilisation de ces informations.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Disponibilité du site</h3>
              <p class="mt-2 text-gray-700">L’Éditeur ne garantit pas un accès permanent et sans interruption au site. Des opérations de maintenance, de mises à jour ou de pannes peuvent entraîner une interruption temporaire du service. L’Éditeur ne peut être tenu pour responsable des conséquences pouvant découler de ces interruptions.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Utilisation des services tiers</h3>
              <p class="mt-2 text-gray-700">Les liens hypertextes présents sur le site et dirigés vers des sites externes, ainsi que l’utilisation des services de cal.com et d’OpenAI, sont proposés à titre informatif. L’Éditeur n’exerce aucun contrôle sur ces services et ne saurait être tenu pour responsable de leur contenu, de leur politique de confidentialité ou de leur utilisation.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Conseils et recommandations</h3>
              <p class="mt-2 text-gray-700">Les informations, conseils et services proposés sur ce site sont délivrés à titre informatif. L’Éditeur ne peut être tenu pour responsable des interprétations et/ou utilisations qui pourraient en être faites et des éventuels préjudices en découlant.</p>
            </div>
          </div>
        </div>

        <!-- Date de mise à jour -->
        <div class="text-right text-sm text-gray-500 mt-8">
          Dernière mise à jour : 07 mars 2025
        </div>
      </div>
    </div>
  </section>
</template>