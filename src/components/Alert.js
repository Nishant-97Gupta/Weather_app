import React from 'react';

const Alert = ({ temp, threshold }) => {
  if (!temp || !threshold) return null;

  return (
    <div className="alert">
      {temp > threshold ? (
        <p>Alert: Temperature exceeds {threshold}°C!</p>
      ) : (
        <p>Temperature is within normal range.</p>
      )}
    </div>
  );
};

export default Alert;
