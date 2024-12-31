
import React, { useEffect, useState } from 'react';


const AdUnit = ({ slot, format = 'auto', className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6911267030368068';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    return () => {
      const script = document.querySelector('script[src*="adsbygoogle"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [isLoaded]);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '100px' }}
        data-ad-client="ca-pub-6911267030368068"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;