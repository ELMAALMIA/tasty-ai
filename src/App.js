// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import Recipe from './pages/Recipe';
import SEOHead from './components/SEOHead';
import Footer from './components/Footer';
import Services from './pages/Services';
import AdUnit from './components/AdUnit';

const App = () => {
  return (
    <Router>
       <SEOHead />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <AdUnit /> {/* Top ad after navbar */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </main>
        <AdUnit /> {/* Bottom ad before footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;