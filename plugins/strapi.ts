export default defineNuxtPlugin(() => {
  const token = useRuntimeConfig().public.strapiApiToken;

  const useApiFetch = (url: string, options: any = {}) => {
    return useFetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      }
    })
  }

  return {
    provide: {
      api: {
        fetch: useApiFetch,
      }
    }
  }
})