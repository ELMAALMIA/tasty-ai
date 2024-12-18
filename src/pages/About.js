// File: src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, Book, Sparkles, Utensils } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Transform Your Ingredients into Delicious Meals</h1>
          <p className="text-xl mb-6 text-orange-100">
            Let our AI-powered recipe generator create perfect recipes from your available ingredients.
            No more food waste, just delicious possibilities.
          </p>
          <Link
            to="/recipe"
            className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors"
          >
            <ChefHat className="mr-2" size={20} />
            Start Cooking
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
          <div className="flex items-center mb-4">
            <Sparkles className="text-orange-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold">AI-Powered Magic</h3>
          </div>
          <p className="text-gray-600">
            Our advanced AI understands ingredients and cooking techniques to create perfect recipe combinations.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
          <div className="flex items-center mb-4">
            <Clock className="text-orange-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Quick & Easy</h3>
          </div>
          <p className="text-gray-600">
            Get instant recipes with detailed instructions and accurate cooking times.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
          <div className="flex items-center mb-4">
            <Book className="text-orange-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Recipe Library</h3>
          </div>
          <p className="text-gray-600">
            Access a growing collection of AI-generated recipes from around the world.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-orange-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enter Ingredients</h3>
            <p className="text-gray-600">List the ingredients you have available</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Preferences</h3>
            <p className="text-gray-600">Select cuisine type and dietary requirements</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Your Recipe</h3>
            <p className="text-gray-600">Receive a customized recipe instantly</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-xl shadow-md p-8 border border-orange-100">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Turn your ingredients into delicious meals with our AI recipe generator.
        </p>
        <Link
          to="/recipe"
          className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
        >
          <Utensils className="mr-2" size={20} />
          Generate Recipe Now
        </Link>
      </div>
    </div>
  );
};

export default Home;