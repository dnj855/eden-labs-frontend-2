declare global {
  interface Window {
    axeptioSettings: {
      clientId: string;
      cookiesVersion: string;
      googleConsentMode: {
        default: {
          analytics_storage: string;
          ad_storage: string;
          ad_user_data: string;
          ad_personalization: string;
          wait_for_update: number;
        }
      }
    }
  }
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Configuration d'Axeptio
    window.axeptioSettings = {
      clientId: "67e4582ed1a54dcd3ace4bb8",
      cookiesVersion: "eden labs-fr-EU",
      googleConsentMode: {
        default: {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          wait_for_update: 500
        }
      }
    };

    // Chargement du script Axeptio
    const script = document.createElement('script');
    script.async = true;
    script.src = "//static.axept.io/sdk.js";
    document.head.appendChild(script);
  }
});
