<template>
  <div>
    <!-- Hero Section -->
    <OffresHeroComponent ref="heroSection" />

    <!-- Sections de services avec alternance de couleurs -->
    <div class="relative">
      <!-- Audit Flash Section -->
      <section class="bg-light py-10 sm:py-16 md:py-20 lg:py-24">
        <AuditFlashComponent ref="auditSection" @open-booking="openBookingModal" />
      </section>

      <!-- Formation Section -->
      <section class="bg-secondary/5 py-10 sm:py-16 md:py-20 lg:py-24">
        <FormationComponent ref="formationSection" @open-booking="openBookingModal" />
      </section>

      <!-- Ateliers Section -->
      <section class="bg-light py-10 sm:py-16 md:py-20 lg:py-24">
        <AteliersComponent ref="ateliersSection" @open-booking="openBookingModal" />
      </section>

      <!-- Coaching Section -->
      <section class="bg-secondary/5 py-10 sm:py-16 md:py-20 lg:py-24">
        <CoachingComponent ref="coachingSection" @open-booking="openBookingModal" />
      </section>

      <!-- Tableau Comparatif avec fond distinct -->
      <section class="bg-light py-10 sm:py-16 md:py-20 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionsComparisonComponent ref="comparisonSection" @open-booking="openBookingModal" />
        </div>
      </section>
    </div>

    <!-- Bouton retour en haut - Taille adaptée pour mobile -->
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

    <!-- Modal de réservation - Adaptée pour mobile -->
    <TransitionRoot as="template" :show="showBookingModal">
      <Dialog as="div" class="relative z-50" @close="showBookingModal = false" :initial-focus="bookingModalInitialFocus">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-3 sm:p-4 text-center sm:items-center">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-3 sm:px-4 pb-3 sm:pb-4 pt-4 sm:pt-5 text-left shadow-xl transition-all w-full sm:my-8 sm:max-w-lg sm:p-6">
                <div class="absolute right-0 top-0 pr-3 sm:pr-4 pt-3 sm:pt-4">
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    @click="showBookingModal = false"
                    ref="bookingModalInitialFocus"
                  >
                    <span class="sr-only">Fermer</span>
                    <XMarkIcon class="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </button>
                </div>
                <div class="sm:flex sm:items-start">
                  <div class="mt-2 sm:mt-3 text-center sm:ml-4 sm:text-left w-full">
                    <DialogTitle as="h3" class="text-lg sm:text-xl font-semibold leading-6 text-secondary">
                      Réserver une consultation
                    </DialogTitle>
                    <div class="mt-4 sm:mt-6">
                      <form class="space-y-3 sm:space-y-4" @submit.prevent="submitBooking">
                        <!-- Formulaire adapté pour mobile -->
                        <div>
                          <label for="name" class="block text-sm font-medium text-secondary">Nom complet</label>
                          <div class="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary text-sm"
                              placeholder="Votre nom"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label for="email" class="block text-sm font-medium text-secondary">Email</label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary text-sm"
                              placeholder="votre@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label for="service" class="block text-sm font-medium text-secondary">Service souhaité</label>
                          <div class="mt-1">
                            <select
                              id="service"
                              name="service"
                              class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary text-sm"
                              required
                            >
                              <option value="">Sélectionnez un service</option>
                              <option value="audit">Audit Flash & Diagnostic</option>
                              <option value="formation">Formation "Socle" IA & No-Code</option>
                              <option value="ateliers">Ateliers Thématiques</option>
                              <option value="coaching">Coaching Personnalisé</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label for="message" class="block text-sm font-medium text-secondary">Message (optionnel)</label>
                          <div class="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows="3"
                              class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary text-sm"
                              placeholder="Précisez votre demande..."
                            ></textarea>
                          </div>
                        </div>
                        <div class="mt-4 sm:mt-5 flex flex-col sm:flex-row-reverse sm:gap-3">
                          <button
                            type="submit"
                            class="w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          >
                            Envoyer ma demande
                          </button>
                          <button
                            type="button"
                            class="mt-3 sm:mt-0 w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-secondary/20 hover:bg-gray-50"
                            @click="showBookingModal = false"
                          >
                            Annuler
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Navigation latérale - version desktop -->
    <nav class="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div class="space-y-6">
        <div v-for="section in sections" :key="section.id" class="group relative flex items-center">
          <button
            @click="scrollToSection(section.ref)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300 border-2 relative z-10',
              activeSection === section.id 
                ? 'bg-primary border-primary' 
                : 'border-secondary/30 hover:border-primary'
            ]"
            :aria-label="`Aller à la section ${section.title}`"
          />
          <div class="flex items-center">
            <div class="w-8 h-[2px] scale-x-0 origin-left transition-transform duration-300 bg-primary group-hover:scale-x-100" />
            <span 
              class="absolute left-12 whitespace-nowrap px-3 py-1.5 text-sm text-secondary bg-white/90 rounded-md shadow-sm backdrop-blur-sm 
              opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            >
              {{ section.title }}
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ArrowUpIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Composants
import AteliersComponent from '~/components/services/Ateliers.vue'
import AuditFlashComponent from '~/components/services/AuditFlash.vue'
import CoachingComponent from '~/components/services/Coaching.vue'
import EvolutionSection from '~/components/services/EvolutionSection.vue'
import FormationComponent from '~/components/services/Formation.vue'
import OffresHeroComponent from '~/components/services/ServicesHero.vue'
import SolutionsComparisonComponent from '~/components/services/SolutionsComparison.vue'

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Refs pour les sections
const heroSection = ref<InstanceType<typeof OffresHeroComponent> | null>(null)
const auditSection = ref<InstanceType<typeof AuditFlashComponent> | null>(null)
const formationSection = ref<InstanceType<typeof FormationComponent> | null>(null)
const ateliersSection = ref<InstanceType<typeof AteliersComponent> | null>(null)
const coachingSection = ref<InstanceType<typeof CoachingComponent> | null>(null)
const comparisonSection = ref<InstanceType<typeof SolutionsComparisonComponent> | null>(null)
const evolutionSection = ref<InstanceType<typeof EvolutionSection> | null>(null)

// État des modals
const showBookingModal = ref(false)
const bookingModalInitialFocus = ref<HTMLButtonElement | null>(null)

// État du bouton de retour en haut
const showScrollTopButton = ref(false)

// État de la section active pour la navigation
const activeSection = ref<string>('hero')

// Détection réactive de l'appareil
const isMobile = ref(false)
const isTablet = ref(false)

// Configuration des sections pour la navigation
const sections = [
  { id: 'hero', title: 'Accueil', ref: heroSection },
  { id: 'audit', title: 'Audit Flash', ref: auditSection },
  { id: 'formation', title: 'Formation', ref: formationSection },
  { id: 'ateliers', title: 'Ateliers', ref: ateliersSection },
  { id: 'coaching', title: 'Coaching', ref: coachingSection },
  { id: 'comparison', title: 'Comparaison', ref: comparisonSection }
]

// Mise à jour des détecteurs d'appareil
function updateDeviceDetection() {
  isMobile.value = window.innerWidth < 640 // sm breakpoint
  isTablet.value = window.innerWidth >= 640 && window.innerWidth < 1024 // entre sm et lg
}

// Animations
onMounted(() => {
  // Mettre à jour les détecteurs d'appareil
  updateDeviceDetection()
  window.addEventListener('resize', updateDeviceDetection)

  // Détection de la préférence de réduction des animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Ajustement des paramètres d'animation en fonction de l'appareil
  const getAnimationParams = () => {
    if (isMobile.value) {
      return {
        duration: 0.6,
        delay: 0.2,
        distance: 20
      }
    } else if (isTablet.value) {
      return {
        duration: 0.8,
        delay: 0.3,
        distance: 35
      }
    } else {
      return {
        duration: 1,
        delay: 0.5,
        distance: 50
      }
    }
  }

  const { duration, delay, distance } = getAnimationParams()

  // Animation Hero
  const heroEl = heroSection.value?.$el
  if (heroEl && !prefersReducedMotion) {
    const heroTitle = heroEl.querySelector('h1')
    const heroContent = heroEl.querySelector('.hero-content')
    
    if (heroTitle) {
      gsap.from(heroTitle, {
        y: distance,
        opacity: 0,
        duration,
        ease: 'power3.out'
      })
    }

    if (heroContent) {
      gsap.from(heroContent, {
        y: distance * 0.6,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out'
      })
    }
  }

  // Animation des sections au scroll avec effet de parallaxe
  if (!prefersReducedMotion) {
    const sections = [
      auditSection.value?.$el,
      formationSection.value?.$el,
      ateliersSection.value?.$el,
      coachingSection.value?.$el,
      comparisonSection.value?.$el,
      evolutionSection.value?.$el
    ].filter((section): section is HTMLElement => section !== undefined && section !== null)

    sections.forEach((section, index) => {
      // Animation d'entrée avec léger décalage entre les éléments
      const sectionTitle = section.querySelector('h2, h3')
      const sectionContent = section.querySelectorAll('p, ul, dl')
      
      // Ajustement du déclenchement en fonction de la taille d'écran
      const triggerStart = isMobile.value ? 'top 90%' : 'top 85%'
      const triggerEnd = isMobile.value ? 'top 10%' : 'top 15%'
      
      if (sectionTitle) {
        gsap.from(sectionTitle, {
          scrollTrigger: {
            trigger: section,
            start: triggerStart,
            end: triggerEnd,
            toggleActions: 'play none none none'
          },
          y: distance,
          opacity: 0,
          duration,
          ease: 'power2.out'
        })
      }
      
      if (sectionContent.length) {
        gsap.from(sectionContent, {
          scrollTrigger: {
            trigger: section,
            start: triggerStart,
            end: triggerEnd,
            toggleActions: 'play none none none'
          },
          y: distance * 0.8,
          opacity: 0,
          duration,
          delay: delay * 0.8,
          stagger: isMobile.value ? 0.05 : 0.1, // Réduire le stagger sur mobile
          ease: 'power2.out'
        })
      }
      
      // Effet de parallaxe subtil - réduit sur mobile
      if (!isMobile.value && index % 2 === 0) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          },
          backgroundPosition: `center ${isTablet.value ? -25 : -40}px`,
          ease: 'none'
        })
      }
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
  window.removeEventListener('resize', updateDeviceDetection)
  
  // Tuer toutes les animations GSAP
  gsap.killTweensOf('*')
  
  // Nettoyer tous les ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Configuration des observateurs d'intersection pour la navigation
function setupIntersectionObservers() {
  const sections = [
    { ref: heroSection, id: 'hero' },
    { ref: auditSection, id: 'audit' },
    { ref: formationSection, id: 'formation' },
    { ref: ateliersSection, id: 'ateliers' },
    { ref: coachingSection, id: 'coaching' },
    { ref: comparisonSection, id: 'comparison' },
    { ref: evolutionSection, id: 'evolution' }
  ]
  
  // Seuil adaptatif en fonction de l'appareil
  const threshold = isMobile.value ? 0.15 : isTablet.value ? 0.2 : 0.3
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('data-section-id')
        if (sectionId) activeSection.value = sectionId
      }
    })
  }, { threshold })
  
  sections.forEach(section => {
    if (section.ref.value?.$el) {
      section.ref.value.$el.setAttribute('data-section-id', section.id)
      observer.observe(section.ref.value.$el)
    }
  })
}

// Gérer l'affichage du bouton de retour en haut
function handleScroll() {
  showScrollTopButton.value = window.scrollY > window.innerHeight / 2
}

// Méthodes de navigation
function scrollToSection(ref: any) {
  if (!ref.value?.$el) return
  
  // Calcul de la position avec offset ajusté en fonction de l'appareil
  // Sur mobile, compenser la hauteur de la navigation
  const offset = isMobile.value ? 70 : isTablet.value ? 48 : 32
  const targetPosition = ref.value.$el.getBoundingClientRect().top + window.pageYOffset - offset
  
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

// Handlers
function openBookingModal() {
  showBookingModal.value = true
}

function subscribeNewsletter(email: string) {
  // TODO: Implémenter l'inscription à la newsletter
  console.log('Inscription à la newsletter:', email)
}

function submitBooking(event: Event) {
  // Récupérer les données du formulaire
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  
  // TODO: Implémenter la soumission du formulaire
  console.log('Soumission du formulaire:', data)
  
  // Fermer le modal après soumission
  showBookingModal.value = false
}

// SEO
useHead({
  title: 'Nos Solutions d\'IA Générative pour Entreprises | Eden Labs',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos solutions d\'accompagnement IA pour entreprises : audit flash, formation, ateliers thématiques et coaching personnalisé. Transformez votre productivité sans expertise technique.'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
    }
  ]
})
</script>

<style scoped>
/* Effet de transition entre les sections */
section {
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.03;
  pointer-events: none;
}

/* Masquage du parallaxe sur mobile */
@media (max-width: 640px) {
  section::before {
    display: none;
  }
}

/* Effet de surbrillance pour la navigation */
nav button.active {
  width: 5px;
  height: 5px;
  background-color: var(--color-primary);
}

/* Ajustements pour la navigation mobile */
@media (max-width: 1023px) {
  /* Ajouter du padding au bas de la page pour compenser la navigation fixe */
  body {
    padding-bottom: 3rem;
  }
}
</style>