<template>
  <section class="py-10 sm:py-12 md:py-16 lg:py-24 bg-light overflow-hidden">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl leading-8 font-headers font-extrabold tracking-tight text-secondary">
          L'IA peut transformer votre entreprise, mais par où commencer?
        </h2>
        <p class="mt-3 sm:mt-4 max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl text-secondary/70">
          Découvrez comment nous répondons aux défis courants de la transformation numérique.
        </p>
      </div>

      <!-- Sélecteur de secteur -->
      <div class="mt-8 sm:mt-10 md:mt-12">
        <div class="flex flex-wrap justify-center gap-2 sm:gap-1">
          <template v-for="(sector, index) in sectors" :key="sector.id">
            <button
              class="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200"
              :class="{
                'bg-gradient-secondary-tertiary text-light': activeSector === sector.id,
                'text-secondary hover:text-tertiary hover:bg-light': activeSector !== sector.id,
                'rounded-l-lg': index === 0 && !isMobile,
                'rounded-r-lg': index === sectors.length - 1 && !isMobile
              }"
              @click="activeSector = sector.id"
            >
              {{ sector.name }}
            </button>
          </template>
        </div>
      </div>

      <!-- Problématiques et solutions -->
       <Transition>
        <div
          :key="activeSector"
          class="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-y-10"
        >
          <div
            v-for="problem in currentProblems"
            :key="problem.id"
            class="relative bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <!-- Icône et contenu principal -->
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-gradient-secondary-tertiary text-light">
                <component :is="problem.icon" class="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div class="mt-4 flex-grow">
                <h3 class="text-base sm:text-lg leading-6 font-headers font-medium text-secondary">{{ problem.title }}</h3>
                <p class="mt-2 text-sm sm:text-base text-secondary/70">{{ problem.description }}</p>
              </div>
            </div>

            <!-- Solution -->
            <div class="mt-3 sm:mt-4 border-t border-light pt-3 sm:pt-4">
              <h4 class="text-xs sm:text-sm font-accent font-semibold text-tertiary">Notre solution :</h4>
              <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-secondary/70">{{ problem.solution }}</p>
            </div>

            <!-- Témoignage -->
            <!-- <div class="mt-4 sm:mt-5 md:mt-6 border-t border-light pt-3 sm:pt-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-primary"
                    :src="problem.testimonial.avatar"
                    :alt="problem.testimonial.name"
                  />
                </div>
                <div class="ml-2 sm:ml-3">
                  <p class="text-xs sm:text-sm text-secondary/70 italic">
                    "{{ problem.testimonial.quote }}"
                  </p>
                  <div class="mt-1">
                    <p class="text-xs sm:text-sm font-medium text-secondary">{{ problem.testimonial.name }}</p>
                    <p class="text-xs text-tertiary">{{ problem.testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </Transition>

      <!-- CTA -->
      <div class="mt-8 sm:mt-10 md:mt-12 text-center">
        <button
          class="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-primary bg-primary text-sm sm:text-base font-medium rounded-md shadow-sm text-secondary hover:bg-primary-light hover:border-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          @click="$emit('openQualification')"
        >
          <span class="hidden sm:inline">Comment Eden Labs peut résoudre vos défis spécifiques</span>
          <span class="sm:hidden">Résoudre vos défis spécifiques</span>
          <ArrowRightIcon class="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ChartPieIcon,
  CheckIcon,
  ClockIcon,
  CogIcon,
  CurrencyEuroIcon,
  DocumentIcon,
  DocumentTextIcon,
  LightBulbIcon,
  PhoneIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const sectors = [
  { id: 'marketing', name: 'Marketing' },
  { id: 'rh', name: 'RH' },
  { id: 'finance', name: 'Finance' },
  { id: 'vente', name: 'Vente' },
  { id: 'operations', name: 'Opérations' }
]

const activeSector = ref('marketing')
const isMobile = ref(false)

// Responsive detection for mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 640
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

interface Problem {
  id: number;
  icon: any;
  title: string;
  description: string;
  solution: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
  };
}

interface Problems {
  [key: string]: Problem[];
}

const problems: Problems = {
  marketing: [
    {
      id: 1,
      icon: LightBulbIcon,
      title: "Manque de temps pour la création de contenu",
      description: "La production régulière de contenu marketing de qualité est chronophage et coûteuse.",
      solution: "Automatisation de la génération de contenu avec des outils IA adaptés à votre ton et votre marque.",
      testimonial: {
        quote: "Nous avons réduit de 60% le temps de création de nos newsletters.",
        name: "Sophie Martin",
        role: "Directrice Marketing, TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 2,
      icon: ChartBarIcon,
      title: "Difficulté à personnaliser les campagnes",
      description: "La personnalisation à grande échelle semble impossible avec les ressources actuelles.",
      solution: "Utilisation de l'IA pour segmenter et personnaliser automatiquement vos communications.",
      testimonial: {
        quote: "Notre taux de conversion a augmenté de 35% grâce à la personnalisation IA.",
        name: "Thomas Dubois",
        role: "CMO, RetailPlus",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 3,
      icon: ClockIcon,
      title: "Analyse des données marketing",
      description: "Trop de données, pas assez d'insights actionnables.",
      solution: "IA pour analyser vos données et générer des recommandations concrètes.",
      testimonial: {
        quote: "Nous identifions maintenant nos meilleures opportunités en quelques clics.",
        name: "Julie Leroux",
        role: "Digital Manager, E-Shop",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  rh: [
    {
      id: 4,
      icon: UserGroupIcon,
      title: "Recrutement chronophage",
      description: "Le tri des CV et la présélection des candidats prennent trop de temps.",
      solution: "IA pour présélectionner les candidats et automatiser les premiers échanges.",
      testimonial: {
        quote: "Notre temps de recrutement a été divisé par deux.",
        name: "Marc Lefevre",
        role: "DRH, IndustriePlus",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 5,
      icon: CheckIcon,
      title: "Gestion inefficace des formations",
      description: "Les processus de formation interne sont mal adaptés aux besoins spécifiques des employés.",
      solution: "Plateforme de formation basée sur l'IA qui personnalise les parcours d'apprentissage en fonction des compétences et besoins.",
      testimonial: {
        quote: "Les formations sont maintenant beaucoup plus pertinentes pour notre équipe.",
        name: "Camille Roux",
        role: "Responsable Formation, HRTech",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 6,
      icon: BriefcaseIcon,
      title: "Suivi de la performance flou",
      description: "L'évaluation des performances se fait de manière subjective et peu structurée.",
      solution: "Système d'évaluation continue basé sur l'IA pour fournir des feedbacks objectifs et réguliers.",
      testimonial: {
        quote: "L'objectivité de notre suivi a nettement amélioré notre efficacité.",
        name: "Luc Bernard",
        role: "Directeur RH, PeopleCorp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  finance: [
    {
      id: 7,
      icon: CurrencyEuroIcon,
      title: "Gestion des factures manuelle",
      description: "Le traitement et la validation des factures sont sources d'erreurs et de retards.",
      solution: "Automatisation du traitement des factures avec reconnaissance IA.",
      testimonial: {
        quote: "Nous avons réduit nos délais de traitement de 75%.",
        name: "Pierre Durand",
        role: "DAF, LogiGroup",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 8,
      icon: ChartPieIcon,
      title: "Prévision budgétaire incertaine",
      description: "Les méthodes traditionnelles ne permettent pas de prévoir avec précision les fluctuations financières.",
      solution: "Utilisation d'algorithmes d'apprentage automatique pour établir des prévisions budgétaires dynamiques.",
      testimonial: {
        quote: "Nos prévisions sont désormais plus fiables et ajustées en temps réel.",
        name: "Claire Fontaine",
        role: "Analyste Financier, FinCorp",
        avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 9,
      icon: DocumentTextIcon,
      title: "Audit financier inefficace",
      description: "Les audits manuels sont longs et manquent d'approfondissement dans l'analyse des risques.",
      solution: "Outils d'audit automatisé alimentés par l'IA pour détecter les irrégularités et sécuriser les processus.",
      testimonial: {
        quote: "L'automatisation a considérablement amélioré notre processus d'audit.",
        name: "Antoine Leroy",
        role: "Contrôleur de Gestion, AuditPlus",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  vente: [
    {
      id: 10,
      icon: ShoppingCartIcon,
      title: "Conversion de leads insuffisante",
      description: "Les équipes commerciales peinent à transformer les prospects en clients fidèles.",
      solution: "CRM intelligent alimenté par l'IA pour améliorer le suivi et la conversion des leads.",
      testimonial: {
        quote: "Nous avons vu une hausse significative de notre taux de conversion.",
        name: "Julien Morel",
        role: "Responsable Commercial, SellFast",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 11,
      icon: PhoneIcon,
      title: "Suivi des appels commerciaux inefficace",
      description: "Le suivi des interactions téléphoniques manque de précision et d'organisation.",
      solution: "Intégration d'un système d'analyse d'appels basé sur l'IA pour optimiser les interactions commerciales.",
      testimonial: {
        quote: "Les retours de nos clients se font désormais en temps réel.",
        name: "Laura Dupuis",
        role: "Manager des Ventes, CallPro",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 12,
      icon: DocumentIcon,
      title: "Gestion des retours clients laborieuse",
      description: "Le traitement des retours et des réclamations est souvent complexe et chronophage.",
      solution: "Plateforme de gestion des retours alimentée par l'IA pour automatiser et simplifier le processus.",
      testimonial: {
        quote: "Le traitement des réclamations est devenu beaucoup plus efficace.",
        name: "Emmanuel Renaud",
        role: "Directeur Commercial, RetourExpress",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  operations: [
    {
      id: 13,
      icon: CogIcon,
      title: "Optimisation de la chaîne logistique",
      description: "La coordination entre les différents maillons de la chaîne logistique est souvent défaillante.",
      solution: "Système de gestion logistique intelligent intégrant l'IA pour optimiser les flux et réduire les délais.",
      testimonial: {
        quote: "Notre chaîne logistique fonctionne désormais comme une machine bien huilée.",
        name: "Mathieu Girard",
        role: "Responsable Opérations, LogiTech",
        avatar: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 14,
      icon: TruckIcon,
      title: "Gestion des stocks inefficace",
      description: "La gestion des stocks repose sur des processus manuels peu réactifs aux fluctuations de la demande.",
      solution: "Outil d'optimisation des stocks basé sur l'IA pour anticiper les besoins et automatiser les réapprovisionnements.",
      testimonial: {
        quote: "Nos inventaires sont mieux maîtrisés et nos coûts réduits.",
        name: "Chantal Morel",
        role: "Directrice des Opérations, StockPlus",
        avatar: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 15,
      icon: WrenchScrewdriverIcon,
      title: "Maintenance préventive défaillante",
      description: "Les équipements ne bénéficient pas d'une maintenance prédictive, entraînant des pannes imprévues.",
      solution: "Utilisation de capteurs IoT et d'algorithmes de maintenance prédictive pour anticiper les défaillances.",
      testimonial: {
        quote: "Nos arrêts de production se sont fortement réduits grâce à cette technologie.",
        name: "Nicolas Petit",
        role: "Responsable Technique, EquipPro",
        avatar: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ]
};

const currentProblems = computed(() => problems[activeSector.value] || [])
</script>