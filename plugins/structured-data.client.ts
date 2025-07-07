export default defineNuxtPlugin(() => {
  // Données structurées pour l'organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eden Labs",
    url: "https://eden-labs.fr",
    logo: "https://eden-labs.fr/images/logo.webp",
    description:
      "Eden Labs accompagne les PME/ETI dans leur transformation numérique avec l'IA générative",
    founder: {
      "@type": "Person",
      name: "Cédric Lang-Roth",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 route d'Angleterre",
      addressLocality: "Saint-Martin-de-l'If",
      postalCode: "76190",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-88-14-40-84",
      contactType: "customer service",
      email: "contact@eden-labs.fr",
    },
    sameAs: ["https://www.linkedin.com/company/eden-labs-fr"],
    areaServed: "France",
    knowsAbout: [
      "Intelligence Artificielle",
      "IA Générative",
      "Transformation Numérique",
      "Formation IA",
      "Consulting IA",
    ],
  };

  // Services offerts
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Services d'accompagnement IA générative",
    provider: {
      "@type": "Organization",
      name: "Eden Labs",
    },
    serviceType: "Consulting en Intelligence Artificielle",
    description:
      "Formation, audit, ateliers et coaching pour intégrer l'IA générative dans votre entreprise",
    areaServed: "France",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services IA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit Flash IA",
            description: "Identification des opportunités d'IA en 45 minutes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Formation IA Générative",
            description: "Formation de 2 jours pour maîtriser l'IA générative",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ateliers Thématiques IA",
            description: "Ateliers pratiques sur des cas d'usage spécifiques",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coaching IA",
            description: "Accompagnement personnalisé pour l'autonomisation IA",
          },
        },
      ],
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que l'IA générative ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'IA générative est une technologie qui permet de créer du contenu automatiquement : textes, images, code, analyses. Elle peut transformer la productivité de votre entreprise sans nécessiter d'expertise technique.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour voir des résultats ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dès la première semaine de formation, vous pourrez utiliser l'IA pour vos tâches quotidiennes. Les gains de productivité significatifs (+45% en moyenne) sont visibles après 2-3 mois d'utilisation régulière.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il des compétences techniques ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, nos formations sont spécialement conçues pour les non-techniciens. Nous vous apprenons à utiliser l'IA avec des outils no-code et des interfaces simples.",
        },
      },
    ],
  };

  // Injecter les données structurées
  if (process.client) {
    // Organisation
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Services
    const servicesScript = document.createElement("script");
    servicesScript.type = "application/ld+json";
    servicesScript.textContent = JSON.stringify(servicesSchema);
    document.head.appendChild(servicesScript);

    // FAQ
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
  }
});
