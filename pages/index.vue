<template>
  <div>
    <!-- Hero -->
    <TheHeroComponent
      ref="heroSection"
      @open-booking="openBookingModal"
      @open-solutions="scrollToSolutions"
    />

    <!-- Problématiques & Solutions -->
    <ProblemsSolutionsComponent
      ref="problemsSection"
    />

    <!-- Parcours -->
    <JourneyTimelineComponent
      ref="journeySection"
      @start-audit="openBookingModal"
      @learn-more="scrollToResources"
    />

    <!-- Solutions par secteur -->
    <SectorSolutionsComponent
      ref="sectorsSection"
    />

    <!-- Démo IA
    <AiDemoComponent
      ref="aiDemoSection"
      @start-audit="openBookingModal"
    /> -->

    <!-- Témoignages
    <TestimonialsComponent
      ref="testimonialsSection"
      @start-audit="openBookingModal"
    /> -->

    <!-- Ressources
    <ResourcesComponent
      ref="resourcesSection"
      @download-resource="downloadResource"
    /> -->

    <!-- Bouton retour en haut -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
    <ScrollTopButton :show="showScrollTopButton" />

    </transition>
  </div>
</template>

<script setup lang="ts">
defineOgImageComponent('ELTemplate')
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Types pour les composants

// Composants
import AiDemoComponent from '~/components/home/AiDemo.vue'
import JourneyTimelineComponent from '~/components/home/JourneyTimeline.vue'
import ProblemsSolutionsComponent from '~/components/home/ProblemsSolutions.vue'
import ResourcesComponent from '~/components/home/Resources.vue'
import SectorSolutionsComponent from '~/components/home/SectorSolutions.vue'
import TestimonialsComponent from '~/components/home/Testimonials.vue'
import TheHeroComponent from '~/components/home/TheHero.vue'

const { $gsap, $ScrollTrigger } = useNuxtApp();

// Refs pour les sections
const solutionsSection = ref<InstanceType<typeof ProblemsSolutionsComponent> | null>(null)
const resourcesSection = ref<InstanceType<typeof ResourcesComponent> | null>(null)
const heroSection = ref<InstanceType<typeof TheHeroComponent> | null>(null)
const problemsSection = ref<InstanceType<typeof ProblemsSolutionsComponent> | null>(null)
const journeySection = ref<InstanceType<typeof JourneyTimelineComponent> | null>(null)
const sectorsSection = ref<InstanceType<typeof SectorSolutionsComponent> | null>(null)
const aiDemoSection = ref<InstanceType<typeof AiDemoComponent> | null>(null)
const testimonialsSection = ref<InstanceType<typeof TestimonialsComponent> | null>(null)

// État des modals
const showBookingModal = ref(false)
const bookingModalInitialFocus = ref<HTMLButtonElement | null>(null)

// État du bouton de retour en haut
const showScrollTopButton = ref(false)

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
  const heroEl = heroSection.value?.$el
  if (heroEl && !prefersReducedMotion) {
    const heroTitle = heroEl.querySelector('h1')
    const heroStats = heroEl.querySelector('.stats')
    
    if (heroTitle) {
      $gsap.from(heroTitle, {
        y: defaultDistance,
        opacity: 0,
        duration: defaultDuration,
        ease: 'power3.out'
      })
    }

    if (heroStats) {
      $gsap.from(heroStats, {
        y: defaultDistance * 0.6,
        opacity: 0,
        duration: defaultDuration,
        delay: defaultDelay,
        ease: 'power3.out'
      })
    }
  }

  // Animation des sections au scroll
  if (!prefersReducedMotion) {
    const sections = [
      problemsSection.value?.$el,
      journeySection.value?.$el,
      sectorsSection.value?.$el,
      aiDemoSection.value?.$el,
      testimonialsSection.value?.$el,
      resourcesSection.value?.$el,
    ].filter((section): section is HTMLElement => section !== undefined && section !== null)

    sections.forEach((section) => {
      $gsap.from(section, {
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
})

onBeforeUnmount(() => {
  // Nettoyer les écouteurs d'événements
  window.removeEventListener('scroll', handleScroll)
  
  // Tuer toutes les animations GSAP
  gsap.killTweensOf('*')
  
  // Nettoyer tous les ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Gérer l'affichage du bouton de retour en haut
function handleScroll() {
  showScrollTopButton.value = window.scrollY > window.innerHeight
}

// Méthodes de navigation
function scrollToSection(ref: any) {
  if (!ref.value?.$el) return
  
  // Détection du support pour scrollBehavior
  if ('scrollBehavior' in document.documentElement.style) {
    ref.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    // Fallback pour les navigateurs qui ne supportent pas scrollBehavior
    const targetPosition = ref.value.$el.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function scrollToSolutions() {
  scrollToSection(problemsSection)
}

function scrollToResources() {
  scrollToSection(resourcesSection)
}

// Handlers
function openBookingModal() {
  showBookingModal.value = true
}

// SEO
useHead({
  title: 'Eden Labs - Experts en IA générative pour entreprises',
  meta: [
    {
      name: 'description',
      content: 'Eden Labs accompagne les entreprises dans leur transformation numérique grâce à l\'IA générative. Formations, consulting et solutions sur mesure.'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
    }
  ]
})
</script>