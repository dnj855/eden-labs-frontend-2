<template>
  <section class="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
          L'IA en action
        </h2>
        <p class="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-secondary/70">
          Testez notre assistant IA et découvrez comment il peut transformer votre entreprise.
        </p>
      </div>

      <!-- Interface de chat -->
      <div class="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-full sm:max-w-2xl md:max-w-3xl">
        <div class="rounded-lg bg-white shadow-xl border border-light/50">
          <!-- En-tête -->
          <div class="border-b border-light px-3 sm:px-4 py-3 sm:py-5 flex items-center space-x-3">
            <div class="flex-shrink-0">
              <div class="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-secondary-tertiary">
                <SparklesIcon class="h-5 w-5 sm:h-6 sm:w-6 text-light" />
              </div>
            </div>
            <div>
              <h3 class="font-headers text-base sm:text-lg font-medium text-secondary">
                Assistant Eden Labs
              </h3>
              <p class="text-xs sm:text-sm text-secondary/70">
                En ligne - Répond instantanément
              </p>
            </div>
          </div>

          <!-- Messages -->
          <div
            ref="chatContainer"
            class="h-64 sm:h-80 md:h-96 overflow-y-auto px-3 sm:px-4 py-4 sm:py-5"
          >
            <div class="space-y-3 sm:space-y-4">
              <template v-for="(message, index) in messages" :key="index">
                <!-- Message de l'assistant -->
                <div
                  v-if="message.type === 'assistant'"
                  class="flex items-start"
                >
                  <div class="flex-shrink-0">
                    <div class="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-secondary-tertiary">
                      <SparklesIcon class="h-4 w-4 sm:h-5 sm:w-5 text-light" />
                    </div>
                  </div>
                  <div class="ml-2 sm:ml-3">
                    <div class="max-w-[75vw] sm:max-w-md rounded-lg bg-light/30 px-3 py-2 sm:px-4 sm:py-2">
                      <p class="text-xs sm:text-sm text-secondary">
                        {{ message.content }}
                      </p>
                    </div>
                    <span class="mt-1 block text-xs text-secondary/50">
                      {{ message.time }}
                    </span>
                  </div>
                </div>

                <!-- Message de l'utilisateur -->
                <div
                  v-else
                  class="flex items-start justify-end"
                >
                  <div class="mr-2 sm:mr-3">
                    <div class="max-w-[70vw] sm:max-w-md rounded-lg bg-gradient-secondary-tertiary px-3 py-2 sm:px-4 sm:py-2">
                      <p class="text-xs sm:text-sm text-light">
                        {{ message.content }}
                      </p>
                    </div>
                    <span class="mt-1 block text-right text-xs text-secondary/50">
                      {{ message.time }}
                    </span>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-light/50">
                      <UserCircleIcon class="h-6 w-6 sm:h-8 sm:w-8 text-secondary/50" />
                    </div>
                  </div>
                </div>
              </template>

              <!-- Indicateur de frappe -->
              <div
                v-if="isTyping"
                class="flex items-start"
              >
                <div class="flex-shrink-0">
                  <div class="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-secondary-tertiary">
                    <SparklesIcon class="h-4 w-4 sm:h-5 sm:w-5 text-light" />
                  </div>
                </div>
                <div class="ml-2 sm:ml-3">
                  <div class="rounded-lg bg-light/30 px-3 py-2 sm:px-4 sm:py-2">
                    <div class="flex space-x-1">
                      <div class="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-bounce rounded-full bg-secondary/40"></div>
                      <div class="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-bounce rounded-full bg-secondary/40" style="animation-delay: 0.2s"></div>
                      <div class="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-bounce rounded-full bg-secondary/40" style="animation-delay: 0.4s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Zone de saisie -->
          <div class="border-t border-light px-3 sm:px-4 py-3 sm:py-4">
            <div class="flex space-x-2 sm:space-x-3">
              <div class="flex-1">
                <input
                  v-model="newMessage"
                  type="text"
                  class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5 sm:p-2"
                  placeholder="Posez votre question sur l'IA..."
                  @keyup.enter="sendMessage"
                />
              </div>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-3 sm:px-4 py-2 text-sm font-medium text-secondary shadow-sm transition-colors duration-200 hover:bg-primary-light hover:border-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                @click="sendMessage"
                aria-label="Envoyer le message"
              >
                <PaperAirplaneIcon class="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <p class="mt-2 text-xs text-secondary/50 line-clamp-2 sm:line-clamp-none">
              Exemples : "Comment l'IA peut améliorer mon marketing ?", "Quels sont les coûts ?", "Par où commencer ?"
            </p>
          </div>
        </div>
      </div>

      <!-- CTAs -->
      <div class="mt-8 sm:mt-10 md:mt-12 text-center">
        <button
          class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-secondary shadow-sm transition-colors duration-200 hover:bg-primary-light hover:border-primary-light"
          @click="$emit('startAudit')"
        >
          Discuter avec un expert
          <ArrowRightIcon class="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-secondary/70">
          Réponse garantie sous 24h - Premier rendez-vous gratuit
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
    ArrowRightIcon,
    PaperAirplaneIcon,
    SparklesIcon,
    UserCircleIcon
} from '@heroicons/vue/24/outline'
import { nextTick, onMounted, ref, watch } from 'vue'

interface Message {
  type: 'user' | 'assistant'
  content: string
  time: string
}

const chatContainer = ref<HTMLElement | null>(null)
const newMessage = ref('')
const isTyping = ref(false)
const messages = ref<Message[]>([
  {
    type: 'assistant',
    content: 'Bonjour ! Je suis l\'assistant Eden Labs. Comment puis-je vous aider à transformer votre entreprise avec l\'IA ?',
    time: formatTime(new Date())
  }
])

// Réponses prédéfinies pour la démo
const predefinedResponses = {
  marketing: 'L\'IA peut révolutionner votre marketing de plusieurs façons : génération de contenu automatisée, personnalisation des campagnes à grande échelle, analyse prédictive des tendances... Nos clients constatent en moyenne +40% de ROI sur leurs campagnes marketing. Voulez-vous en savoir plus sur un aspect particulier ?',
  costs: 'Nos solutions sont adaptées à chaque entreprise, avec des formules à partir de 500€/mois. Le ROI moyen constaté est de 3 à 5 fois l\'investissement dès les premiers mois. Je peux vous mettre en relation avec un expert pour un audit gratuit de vos besoins ?',
  start: 'La meilleure façon de commencer est de réaliser un audit gratuit de 45 minutes pour identifier les opportunités d\'IA dans votre entreprise. Nous établirons ensemble une feuille de route personnalisée. Souhaitez-vous planifier cet audit ?'
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

async function scrollToBottom() {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

watch(messages, () => {
  scrollToBottom()
})

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes('marketing') || lowerMessage.includes('communication')) {
    return predefinedResponses.marketing
  }
  if (lowerMessage.includes('coût') || lowerMessage.includes('prix') || lowerMessage.includes('tarif')) {
    return predefinedResponses.costs
  }
  if (lowerMessage.includes('commencer') || lowerMessage.includes('débuter')) {
    return predefinedResponses.start
  }
  return 'Je comprends votre intérêt. Le mieux serait d\'en discuter avec un de nos experts lors d\'un audit gratuit. Souhaitez-vous planifier un rendez-vous ?'
}

async function sendMessage() {
  if (!newMessage.value.trim()) return

  // Ajouter le message de l'utilisateur
  messages.value.push({
    type: 'user',
    content: newMessage.value,
    time: formatTime(new Date())
  })

  // Réinitialiser l'input
  newMessage.value = ''

  // Simuler la réponse de l'assistant
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isTyping.value = false

  messages.value.push({
    type: 'assistant',
    content: getResponse(messages.value[messages.value.length - 1].content),
    time: formatTime(new Date())
  })
}

onMounted(() => {
  scrollToBottom()
})
</script>