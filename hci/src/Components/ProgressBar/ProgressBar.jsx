import React from 'react';
import '../CSS/ProgressBar.css'; // Make sure to create a corresponding CSS file

const ProgressBar = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const fillPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${fillPercentage}%` }}>
        <span className="progress-bar-text">{`${fillPercentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
