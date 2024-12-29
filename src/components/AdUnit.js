// src/components/AdUnit.js
import React, { useEffect, useState } from 'react';
import { ADSENSE_CONFIG } from '../config/adsense';

const AdUnit = ({ slot, format = 'auto', className = '' }) => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    // Only proceed if AdSense is enabled in config
    if (!ADSENSE_CONFIG.isEnabled) {
      return;
    }

    // Load Google AdSense script if not already loaded
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => setIsAdLoaded(true);
      script.onerror = (error) => {
        console.error('Failed to load AdSense script:', error);
        setIsAdLoaded(false);
      };
      document.head.appendChild(script);
    } else {
      setIsAdLoaded(true);
    }

    // Push ad when component mounts
    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    };

    // Wait for script to be loaded
    if (isAdLoaded) {
      pushAd();
    }
  }, [isAdLoaded]);

  // Don't render anything if AdSense is disabled
  if (!ADSENSE_CONFIG.isEnabled) {
    return null;
  }

  return (
    <div className={`ad-container ${className}`}>
      {isAdLoaded && ADSENSE_CONFIG.clientId ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '100px' }}
          data-ad-client={`ca-pub-${ADSENSE_CONFIG.clientId}`}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      ) : (
        <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Advertisement</p>
        </div>
      )}
    </div>
  );
};

export default AdUnit;