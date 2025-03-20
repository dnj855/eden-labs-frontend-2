export default defineNuxtPlugin(() => {
  // Configuration par défaut
  let token = '';
  let baseUrl = '';
  
  // Essayer d'abord les variables d'environnement runtime
  const config = useRuntimeConfig();

  if (config.public.strapiApiToken && config.public.strapiUrl) {
    token = String(config.public.strapiApiToken);
    baseUrl = String(config.public.strapiUrl);
  } else {
    // En développement, utiliser les variables d'environnement locales
    if (process.env.NODE_ENV === 'development') {
      baseUrl = process.env.STRAPI_URL || 'http://localhost:1337';
      token = process.env.STRAPI_API_TOKEN || '';
    } else {
      // En production, utiliser les variables d'environnement de production
      baseUrl = process.env.STRAPI_URL || '';
      token = process.env.STRAPI_API_TOKEN || '';
    }
  }

  const useApiFetch = (url: string, options: any = {}) => {
    // Si l'URL ne commence pas par http, ajouter l'URL de base
    const fullUrl = url.startsWith('http') ? url : (baseUrl + url);
    
    return useFetch(fullUrl, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...options.headers
      }
    });
  };

  return {
    provide: {
      api: {
        fetch: useApiFetch,
      }
    }
  };
});