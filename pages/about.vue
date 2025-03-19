<template>
  <div>
    <!-- Hero Section -->
    <AboutHeroComponent ref="heroSection" />

    <!-- Notre Vision -->
    <section class="py-10 sm:py-16 md:py-20 lg:py-24 bg-white" ref="visionSection">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-accent text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
            Notre vision
          </h2>
          <div class="mt-6 space-y-4 text-secondary/70">
            <p>
              Dans un monde où la technologie évolue à une vitesse fulgurante, notre vision est claire : démocratiser l'intelligence artificielle et la rendre accessible à toutes les entreprises.
            </p>
            <p>
              Chez Eden Labs, nous croyons que l'IA n'est pas destinée à remplacer l'humain, mais à l'augmenter. Notre approche se distingue par sa dimension pédagogique et pratique.
            </p>
            <p>
              Notre mission : vous accompagner pas à pas dans votre transformation digitale, en faisant tomber les barrières techniques et en rendant ces technologies aussi simples à utiliser qu'elles sont puissantes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- L'histoire d'Eden Labs -->
    <section class="py-10 sm:py-16 md:py-20 lg:py-24 bg-light" ref="historySection">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
            L'histoire d'Eden Labs
          </h2>
          <div class="mt-6 space-y-4 text-secondary/70">
            <p>
              L'histoire d'Eden Labs commence par celle de son fondateur, Cédric Lang-Roth. Pendant 15 ans, Cédric a exercé le métier de journaliste, aiguisant sa capacité à décrypter des situations complexes et à vulgariser sans simplifier à l'excès.
            </p>
            <p>
              Fasciné par les possibilités offertes par l'intelligence artificielle et les outils no-code, Cédric a entrepris une reconversion audacieuse dans le domaine de la tech. Son double profil constitue un atout précieux : il sert de "traducteur" entre le monde de la technologie et celui du business.
            </p>
            <p>
              C'est ainsi qu'est née Eden Labs, à la croisée de la rigueur journalistique et de l'expertise technique. Notre raison d'être : combler le fossé entre l'IA et les PME, en transformant des concepts techniques en solutions pratiques.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre méthodologie -->
    <section class="py-10 sm:py-16 md:py-20 lg:py-24 bg-white" ref="methodologySection">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
            Notre méthodologie
          </h2>
          <p class="mt-6 text-secondary/70">
            Ce qui distingue Eden Labs des autres prestataires, c'est notre capacité à transformer l'abstrait en concret. Là où beaucoup se perdent dans les concepts, nous excellons à illustrer par l'exemple et à montrer comment l'IA s'applique précisément à votre contexte.
          </p>

          <!-- Points différenciants -->
          <div class="mt-8 space-y-8">
            <!-- Focus sur les fonctions supports -->
            <div class="bg-light/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Focus sur les fonctions supports</h3>
              <div class="mt-4 space-y-4 text-secondary/70">
                <p>
                  Nos interventions se concentrent sur les fonctions supports, où l'impact de l'IA est souvent immédiat et transformateur :
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li><strong>Communication :</strong> Automatisation de la création de contenus variés tout en préservant votre identité de marque</li>
                  <li><strong>Marketing :</strong> Optimisation des campagnes grâce à l'analyse prédictive et la personnalisation à grande échelle</li>
                  <li><strong>Veille :</strong> Systèmes de surveillance 24/7 de votre écosystème avec alertes sur opportunités et menaces</li>
                </ul>
              </div>
            </div>

            <!-- Approche pragmatique -->
            <div class="bg-light/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Approche pragmatique</h3>
              <div class="mt-4 space-y-4 text-secondary/70">
                <p>
                  Notre méthodologie se distingue par son pragmatisme et sa capacité à générer des résultats rapides :
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Solutions immédiatement actionnables dès la première session</li>
                  <li>Focus sur les gains rapides pour construire la confiance</li>
                  <li>Progression graduelle vers des projets plus ambitieux</li>
                  <li>Mesure systématique des résultats et ajustements en temps réel</li>
                </ul>
              </div>
            </div>

            <!-- Accompagnement personnalisé -->
            <div class="bg-light/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Accompagnement personnalisé</h3>
              <div class="mt-4 space-y-4 text-secondary/70">
                <p>
                  Notre engagement à vos côtés se traduit par :
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Formations en petits groupes (10-12 personnes max) pour un suivi optimal</li>
                  <li>Ateliers thématiques en très petits groupes (4-8 personnes)</li>
                  <li>Coaching individuel post-formation pour garantir la mise en œuvre</li>
                  <li>Flexibilité totale dans la planification des sessions</li>
                </ul>
              </div>
            </div>

            <!-- Garantie résultats -->
            <div class="bg-light/30 p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Garantie résultats</h3>
              <div class="mt-4 space-y-4 text-secondary/70">
                <ul class="list-disc pl-6 space-y-2">
                  <li>Audit flash remboursé si vous poursuivez avec une formation</li>
                  <li>Suivi jusqu'à l'obtention de résultats concrets</li>
                  <li>Packs avantageux avec remises substantielles pour un accompagnement complet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos engagements -->
    <section class="py-10 sm:py-16 md:py-20 lg:py-24 bg-light" ref="commitmentsSection">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
            Nos engagements
          </h2>
          <div class="mt-6 space-y-6 text-secondary/70">
            <div class="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Garantie résultats</h3>
              <p class="mt-4">
                Nous nous engageons sur des objectifs mesurables et des résultats concrets pour chaque intervention.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Éthique & transparence</h3>
              <p class="mt-4">
                Transparence totale sur les technologies utilisées, gestion rigoureuse des données et respect des principes éthiques.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 class="font-headers text-xl font-bold text-secondary">Suivi structuré</h3>
              <ul class="mt-4 list-disc pl-6 space-y-2">
                <li>Réunions mensuelles</li>
                <li>KPIs mesurables</li>
                <li>Formation continue</li>
                <li>Support réactif</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bouton retour en haut -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button 
        v-show="showScrollTopButton" 
        @click="scrollToTop"
        class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 bg-primary text-light rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Retour en haut de page"
      >
        <ArrowUpIcon class="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpIcon } from '@heroicons/vue/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutHeroComponent from '~/components/about/AboutHero.vue'

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Refs pour les sections
const heroSection = ref<InstanceType<typeof AboutHeroComponent> | null>(null)
const visionSection = ref<HTMLElement | null>(null)
const historySection = ref<HTMLElement | null>(null)
const methodologySection = ref<HTMLElement | null>(null)
const commitmentsSection = ref<HTMLElement | null>(null)
const testimonialsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

// État du bouton de retour en haut
const showScrollTopButton = ref(false)

// État de la section active pour la navigation
const activeSection = ref<string>('hero')

// Configuration des sections pour la navigation
const sections = [
  { id: 'hero', title: 'Accueil', ref: heroSection },
  { id: 'vision', title: 'Notre Vision', ref: visionSection },
  { id: 'history', title: 'Notre Histoire', ref: historySection },
  { id: 'methodology', title: 'Notre Méthodologie', ref: methodologySection },
  { id: 'commitments', title: 'Nos Engagements', ref: commitmentsSection },
  { id: 'testimonials', title: 'Ils nous font confiance', ref: testimonialsSection },
  { id: 'cta', title: 'Contact', ref: ctaSection }
]

// Données des clients
const clients = [
  { name: 'Client 1', logo: '/images/clients/client1.png' },
  { name: 'Client 2', logo: '/images/clients/client2.png' },
  { name: 'Client 3', logo: '/images/clients/client3.png' },
  { name: 'Client 4', logo: '/images/clients/client4.png' },
  { name: 'Client 5', logo: '/images/clients/client5.png' },
  { name: 'Client 6', logo: '/images/clients/client6.png' },
]

// Animations
onMounted(() => {
  // Détection de la préférence de réduction des animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Vérification de la taille d'écran pour les animations
  const isMobile = window.innerWidth < 768

  // Animations moins intenses sur mobile
  const defaultDuration = isMobile ? 0.7 : 1
  const defaultDelay = isMobile ? 0.3 : 0.5
  const defaultDistance = isMobile ? 30 : 50

  // Animation Hero
  const heroTitle = document.querySelector('h1')
  const heroSubtitle = document.querySelector('h1 + p')
  
  if (heroTitle && !prefersReducedMotion) {
    gsap.from(heroTitle, {
      y: defaultDistance,
      opacity: 0,
      duration: defaultDuration,
      ease: 'power3.out'
    })
  }

  if (heroSubtitle && !prefersReducedMotion) {
    gsap.from(heroSubtitle, {
      y: defaultDistance * 0.6,
      opacity: 0,
      duration: defaultDuration,
      delay: defaultDelay,
      ease: 'power3.out'
    })
  }

  // Animation des sections au scroll
  if (!prefersReducedMotion) {
    const sections = [
      visionSection.value,
      historySection.value,
      methodologySection.value,
      commitmentsSection.value,
      testimonialsSection.value,
      ctaSection.value
    ].filter((section): section is HTMLElement => section !== null)

    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none none'
        },
        y: defaultDistance,
        opacity: 0,
        duration: defaultDuration,
        ease: 'power2.out'
      })
    })
  }

  // Gestionnaire de défilement pour le bouton de retour en haut
  window.addEventListener('scroll', handleScroll)
  
  // Configuration des observateurs pour détecter la section active
  setupIntersectionObservers()
})

onBeforeUnmount(() => {
  // Nettoyer les écouteurs d'événements
  window.removeEventListener('scroll', handleScroll)
  
  // Tuer toutes les animations GSAP
  gsap.killTweensOf('*')
  
  // Nettoyer tous les ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Configuration des observateurs d'intersection pour la navigation
function setupIntersectionObservers() {
  const sections = [
    { ref: visionSection, id: 'vision' },
    { ref: historySection, id: 'history' },
    { ref: methodologySection, id: 'methodology' },
    { ref: commitmentsSection, id: 'commitments' },
    { ref: testimonialsSection, id: 'testimonials' },
    { ref: ctaSection, id: 'cta' }
  ]
  
  // Seuil adaptatif en fonction de l'appareil
  const threshold = window.innerWidth < 768 ? 0.15 : window.innerWidth < 1024 ? 0.2 : 0.3
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('data-section-id')
        if (sectionId) activeSection.value = sectionId
      }
    })
  }, { threshold })
  
  sections.forEach(section => {
    if (section.ref.value) {
      section.ref.value.setAttribute('data-section-id', section.id)
      observer.observe(section.ref.value)
    }
  })
}

// Gérer l'affichage du bouton de retour en haut
function handleScroll() {
  showScrollTopButton.value = window.scrollY > window.innerHeight / 2
}

// Méthodes de navigation
function scrollToSection(ref: any) {
  if (!ref.value) return
  
  // Calcul de la position avec offset ajusté en fonction de l'appareil
  const offset = window.innerWidth < 768 ? 70 : window.innerWidth < 1024 ? 48 : 32
  const targetPosition = ref.value.getBoundingClientRect().top + window.pageYOffset - offset
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Meta tags
useHead({
  title: 'À propos - Eden Labs | Notre histoire et notre vision',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l\'histoire d\'Eden Labs, notre vision de l\'IA et notre méthodologie unique d\'accompagnement des entreprises dans leur transformation numérique.'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
    }
  ]
})
</script>

<style scoped>
:root {
  --color-primary-rgb: 59, 130, 246;
  --color-secondary-rgb: 17, 24, 39;
}

/* Effet de transition entre les sections */
section {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(var(--color-primary-rgb), 0.1);
}

section:last-child {
  border-bottom: none;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.05) 0%, rgba(var(--color-secondary-rgb), 0.05) 100%);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}

section > div {
  position: relative;
  z-index: 1;
}

/* Effets de survol améliorés pour les cartes */
.bg-light\/30 {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(var(--color-primary-rgb), 0.1);
  backdrop-filter: blur(10px);
}

.bg-light\/30:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: rgba(var(--color-primary-rgb), 0.2);
}

/* Titres avec effet de gradient */
.font-headers {
  color: var(--color-secondary);
  position: relative;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.font-headers::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.font-headers:hover::after {
  width: 60px;
}

/* Bouton retour en haut amélioré */
button[aria-label="Retour en haut de page"] {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

button[aria-label="Retour en haut de page"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Masquage du parallaxe sur mobile */
@media (max-width: 640px) {
  section::before {
    opacity: 0.3;
  }
}

/* Effet de surbrillance pour la navigation */
nav button.active {
  width: 5px;
  height: 5px;
  background-color: var(--color-primary);
  box-shadow: 0 0 8px rgba(var(--color-primary-rgb), 0.3);
}

/* Ajustements pour la navigation mobile */
@media (max-width: 1023px) {
  body {
    padding-bottom: 3rem;
  }
}
</style> 