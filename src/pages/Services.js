// File: src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChefHat, Clock, Book, Sparkles } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const Services = () => {
  // Schema.org structured data for rich snippets
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "AI Recipe Generation",
        "description": "Get personalized recipe suggestions based on your available ingredients and preferences.",
        "provider": {
          "@type": "Organization",
          "name": "TastyAI"
        }
      },
      {
        "@type": "Service",
        "name": "Meal Planning",
        "description": "Plan your weekly meals efficiently with our smart meal planning system.",
        "provider": {
          "@type": "Organization",
          "name": "TastyAI"
        }
      }
    ]
  };

  const services = [
    {
      icon: <ChefHat className="text-orange-600" size={24} />,
      title: "AI Recipe Generation",
      description: "Get personalized recipe suggestions based on your available ingredients and preferences."
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Meal Planning",
      description: "Plan your weekly meals efficiently with our smart meal planning system."
    },
    {
      icon: <Book className="text-orange-600" size={24} />,
      title: "Recipe Library",
      description: "Access our extensive collection of AI-generated and community-shared recipes."
    },
    {
      icon: <Sparkles className="text-orange-600" size={24} />,
      title: "Smart Suggestions",
      description: "Receive intelligent ingredient substitutions and cooking tips."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - TastyAI | AI-Powered Recipe Generation & Meal Planning</title>
        <meta name="description" content="Discover TastyAI's services including AI recipe generation, meal planning, recipe library, and smart cooking suggestions. Transform your cooking experience." />
        <meta name="keywords" content="AI recipe generator, meal planning, recipe library, cooking suggestions, food AI services" />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect recipe for every occasion with our AI-powered tools
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-orange-100"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            </article>
          ))}
        </section>
        <AdUnit 
  slot="1234567890"
  format="rectangle" 
  className="my-4"
  fallbackHeight="250px"
/>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <Link
            to="/recipe"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Try our Recipe Generator"
          >
            <ChefHat className="mr-2" size={20} />
            Try Recipe Generator
          </Link>
        </section>
      </main>
    </>
  );
};

export default Services;