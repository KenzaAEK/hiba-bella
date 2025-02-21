import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-dots" role="status" aria-label="Loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;