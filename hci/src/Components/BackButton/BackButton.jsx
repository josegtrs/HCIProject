import React from 'react';
// import { useHistory } from 'react-router-dom';
import '../CSS/Global.css'; 

const BackButton = ({ destination }) => {
  // const history = useHistory();

  const handleBack = () => {
    window.location.href = destination;
  };

  return (
    <button className="back-button" onClick={handleBack}>
      &#x2190; 
      </button>
  );
};

export default BackButton;
