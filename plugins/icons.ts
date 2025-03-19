import {
  AcademicCapIcon,
  ChartBarIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ChartBarIcon', ChartBarIcon)
  nuxtApp.vueApp.component('AcademicCapIcon', AcademicCapIcon)
  nuxtApp.vueApp.component('UserGroupIcon', UserGroupIcon)
  nuxtApp.vueApp.component('SparklesIcon', SparklesIcon)
}) 