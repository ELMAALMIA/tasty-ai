import React from 'react';

const AdUnit = ({ className = '' }) => {
  return (
    <div 
      className={`bg-gray-50 rounded-lg flex items-center justify-center my-4 ${className}`}
      style={{ minHeight: '100px' }}
    >
      <p className="text-gray-400">Advertisement</p>
    </div>
  );
};

export default AdUnit;