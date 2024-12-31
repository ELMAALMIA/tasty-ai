// File: src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Clock, UserCheck } from 'lucide-react';
import { Helmet } from 'react-helmet';
import AdUnit from '../components/AdUnit';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TastyAI - Smart Recipe Generator | Transform Ingredients into Delicious Meals</title>
        <meta name="description" content="Turn your available ingredients into delicious recipes with our AI-powered recipe generator. Get personalized recipes, cooking tips, and meal ideas instantly." />
        <meta name="keywords" content="recipe generator, AI recipes, cooking assistant, meal ideas, food ai, cooking helper" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 mb-12 overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Transform Your Ingredients into
              <span className="text-orange-600"> Delicious Meals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let our AI-powered recipe generator create perfect recipes from your available ingredients. 
              No more food waste, just endless culinary possibilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/recipe"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ChefHat className="mr-2" size={20} />
                Get Started Free
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors border-2 border-orange-600"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            {/* You can add a decorative SVG pattern here */}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Recipe Generation</h3>
            <p className="text-gray-600">
              Input your available ingredients and get personalized recipe suggestions instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quick & Easy</h3>
            <p className="text-gray-600">
              Get detailed recipes with step-by-step instructions and cooking times.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Results</h3>
            <p className="text-gray-600">
              Recipes tailored to your preferences and available ingredients.
            </p>
          </div>
        </div>
        <AdUnit 
  slot="1234567890"
  format="rectangle" 
  className="my-4"
  fallbackHeight="250px"
/>


        {/* CTA Section */}
        <div id="how-it-works" className="bg-orange-50 rounded-3xl p-8 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your cooking experience in three simple steps
            </p>
          </div>
          <AdUnit slot="home-how-it-works" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter Ingredients",
                description: "List the ingredients you have available in your kitchen"
              },
              {
                step: "2",
                title: "Select Preferences",
                description: "Choose your dietary preferences and cuisine type"
              },
              {
                step: "3",
                title: "Get Your Recipe",
                description: "Receive a personalized recipe instantly"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-3xl shadow-lg p-8 border border-orange-100">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who are already creating delicious meals with TastyAI
          </p>
          <Link
            to="/recipe"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ChefHat className="mr-2" size={20} />
            Try Recipe Generator
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;