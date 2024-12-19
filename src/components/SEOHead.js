import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  pageTitle = "TastyAI - Générateur de Recettes IA | Assistant Culinaire Intelligent",
  pageDescription = "Créez des recettes délicieuses personnalisées avec TastyAI. Notre générateur de recettes alimenté par l'IA transforme vos ingrédients en repas savoureux.",
  pageUrl = "https://tastyai.com",
  imageUrl = "/tastyai-social-preview.jpg",
  ratings = {
    ratingValue: "4.8",
    ratingCount: "1250",
    reviewCount: "980"
  }
}) => {
  // Données structurées enrichies pour un meilleur référencement
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TastyAI",
    "applicationCategory": "FoodService",
    "description": pageDescription,
    "url": pageUrl,
    "image": imageUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratings.ratingValue,
      "ratingCount": ratings.ratingCount,
      "reviewCount": ratings.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "applicationSuite": "Recipe Generator",
    "featureList": [
      "Génération de recettes personnalisées",
      "Suggestions d'ingrédients",
      "Planification de repas",
      "Calcul nutritionnel",
      "Recommandations intelligentes"
    ],
    "operatingSystem": "Web-based",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "2.0",
    "author": {
      "@type": "Organization",
      "name": "TastyAI",
      "url": pageUrl
    }
  };

  // FAQ structurées pour le rich snippet
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment TastyAI génère-t-il des recettes personnalisées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TastyAI utilise l'intelligence artificielle pour analyser vos ingrédients disponibles et créer des recettes uniques adaptées à vos préférences."
        }
      },
      {
        "@type": "Question",
        "name": "Les recettes de TastyAI sont-elles gratuites ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, TastyAI propose des recettes gratuites générées par IA. Des fonctionnalités premium sont disponibles pour une expérience enrichie."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Optimisés pour le référencement */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="générateur de recettes, cuisine IA, planificateur de repas, IA culinaire, recherche de recettes, assistant cuisine, recettes personnalisées, meilleur générateur de recettes, recipe generator, AI cooking, meal planner, recettes faciles, cuisine intelligente" />

      {/* Balises de langue et région */}
      <meta name="language" content="fr" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.position" content="46.227638;2.213749" />
      <meta name="ICBM" content="46.227638, 2.213749" />
      
      <link rel="alternate" hrefLang="fr" href={`${pageUrl}/fr`} />
      <link rel="alternate" hrefLang="en" href={pageUrl} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph / Facebook - Enrichi */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="TastyAI" />
      <meta property="og:updated_time" content={new Date().toISOString()} />

      {/* Twitter Card - Enrichi */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TastyAI" />
      <meta name="twitter:creator" content="@TastyAI" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="TastyAI - Assistant Culinaire Intelligent" />

      {/* Meta tags additionnels pour le SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="TastyAI" />
      <meta name="copyright" content="TastyAI" />
      <meta name="application-name" content="TastyAI" />
      <meta name="apple-mobile-web-app-title" content="TastyAI" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Performance et sécurité */}
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      <link rel="canonical" href={pageUrl} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ structured data */}
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;