import { ref } from 'vue';

export const useContactModal = () => {
  // État de la modale partagé globalement
  const isOpen = ref(false);
  const initialService = ref('');

  // Méthodes pour contrôler la modale
  function open(service: string = '') {
    initialService.value = service;
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  // Exposer les refs directement pour accès réactif
  return {
    isOpen,
    initialService,
    open,
    close
  };
};

// Créer une instance unique pour toute l'application
const contactModalState = useContactModal();

// Exporter l'instance pour l'utiliser partout
export default function useContactModalState() {
  return contactModalState;
}