import React from 'react';
import '../CSS/Global.css'; 

const BackButton = ({ destination }) => {

  const handleBack = () => {
    window.location.href = destination;
  };

  return (
    <button className="back-button" onClick={handleBack}></button>
  );
};

export default BackButton;
