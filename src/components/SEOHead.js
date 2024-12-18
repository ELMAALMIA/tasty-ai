// File: src/components/SEOHead.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>TastyAI - AI-Powered Recipe Generator | Smart Cooking Assistant</title>
      <meta name="title" content="TastyAI - AI-Powered Recipe Generator | Smart Cooking Assistant" />
      <meta name="description" content="Transform your ingredients into delicious recipes with TastyAI. Our AI-powered recipe generator creates personalized recipes based on your available ingredients." />
      <meta name="keywords" content="recipe generator, AI cooking, meal planner, food AI, recipe finder, cooking assistant, ingredient-based recipes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tastyai.com/" />
      <meta property="og:title" content="TastyAI - Transform Ingredients into Delicious Recipes" />
      <meta property="og:description" content="Get personalized recipes based on your available ingredients. AI-powered cooking assistant for perfect meals every time." />
      <meta property="og:image" content="/tastyai-social-preview.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tastyai.com/" />
      <meta property="twitter:title" content="TastyAI - Smart Recipe Generation" />
      <meta property="twitter:description" content="Transform your ingredients into delicious recipes with our AI-powered cooking assistant." />
      <meta property="twitter:image" content="/tastyai-social-preview.jpg" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="TastyAI" />
      <link rel="canonical" href="https://tastyai.com/" />
    </Helmet>
  );
};

export default SEOHead;