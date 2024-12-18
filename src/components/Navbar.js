// File: src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChefHat, Home, Info, UtensilsCrossed, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <ChefHat size={32} className="text-white group-hover:rotate-12 transition-transform" />
            <div>
              <span className="text-2xl font-bold block">TastyAI</span>
              <span className="text-xs text-orange-200">AI-Powered Recipe Generator</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/recipe" className="nav-link flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <UtensilsCrossed size={18} />
              <span>Recipe Generator</span>
            </Link>
            <Link to="/services" className="nav-link flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Menu size={18} />
              <span>Browse Recipes</span>
            </Link>
            <Link to="/about" className="nav-link flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Info size={18} />
              <span>About Us</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="px-4 py-2 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-orange-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-2 hover:bg-orange-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recipe" 
              className="block px-4 py-2 hover:bg-orange-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipe Generator
            </Link>
            <Link 
              to="/services" 
              className="block px-4 py-2 hover:bg-orange-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Recipes
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 hover:bg-orange-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;