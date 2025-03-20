// plugins/strapi.ts
export default defineNuxtPlugin(() => {
  const token = "cc6094f2df1d029bd58adfc913d84bd8203573fb4444ab579d6f488bcebd0d1d7287ec6acdc036e254f60eef7d4bf94bc470e9e1bc14ada6e30dd6e70fbc32204ab6939f114dd39f15f777c49f6c3d3d26f40d6bfb1b228817b1cc9a2e9d13d9e08de1e8b133685ba59c1d80366cb6985c4c170fe960da4da5edf7e7788a0527";
  
  const useApiFetch = (url: string, options: any = {}) => {
    const fullUrl = url.startsWith('http') ? url : 'https://api.eden-labs.fr' + url;
    
    console.log(`Requête vers ${fullUrl}`);
    
    return useFetch(fullUrl, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...options.headers,
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