import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

import './index.css';
import { ADSENSE_CONFIG } from './config/adsense';

// Initialize Google AdSense
const initializeAdsense = () => {
  if (ADSENSE_CONFIG.isEnabled && ADSENSE_CONFIG.clientId) {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-ad-client', ADSENSE_CONFIG.clientId);
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load AdSense script');
    };
    
    document.head.appendChild(script);
  }
};

// Initialize AdSense before rendering the app
initializeAdsense();

const container = document.getElementById('root');
const root = createRoot(container);

// Development warning for missing AdSense configuration
if (process.env.NODE_ENV === 'development' && !ADSENSE_CONFIG.clientId) {
  console.warn('AdSense client ID is not configured. Add REACT_APP_ADSENSE_CLIENT_ID to your .env file.');
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);