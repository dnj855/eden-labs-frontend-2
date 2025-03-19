// plugins/cal.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.hook('app:mounted', () => {
    // Cal.com script
    const script = document.createElement('script')
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "decouverte-eden-labs", {origin:"https://cal.com"});
      Cal.ns["decouverte-eden-labs"]("ui", {"hideEventTypeDetails":false,"layout":"column_view"});
    `
    document.head.appendChild(script)
  })

  return {
    provide: {
      // Fonction utilitaire pour ouvrir Cal.com avec différentes configurations
      openCal: (config = {}) => {
        if (window.Cal && window.Cal.ns && window.Cal.ns["decouverte-eden-labs"]) {
          window.Cal.ns["decouverte-eden-labs"]("openModal", config)
          return true
        }
        return false
      }
    }
  }
})