// src/config/adsense.js
export const ADSENSE_CONFIG = {
    clientId: process.env.REACT_APP_ADSENSE_CLIENT_ID || '',
    isEnabled: process.env.REACT_APP_ADSENSE_ENABLED === 'true'
  };
  
  // src/config/index.js
  export * from './adsense';