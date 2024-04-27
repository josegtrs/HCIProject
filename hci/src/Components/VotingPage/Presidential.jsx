import { useState } from 'react';
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent';
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Presidential = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

  const handleSubmit = () => {
    const presidentialChoice = localStorage.getItem('presidentialChoice');
  
    if (presidentialChoice) {
      window.location.href = '/state'; 
    } else {
      alert('Please vote in each box before proceeding.');
    }
  };

  const president = [
  { id: 1, name: "DONALD J. TRUMP & MICHAEL R. PENCE (Republican)" },
  { id: 2, name: "JO JORGENSEN & JEREMY SPIKE COHEN (Libertarian)" },
  { id: 3, name: "JOSEPH R. BIDEN & KAMALA D. HARRIS (Democrat)" },
  { id: 4, name: "JADE SIMMONS & CLAUDELIAH J. ROZE (Independent)" },
  { id: 5, name: "KANYE WEST & MICHELLE TIDBALL (Independent)" },
  { id: 6, name: "BROCK PIERCE & KARLA BALLARD (Independent)" },
];


const handleCandidateSelect = (candidateName) => {
  // Store the user's choice in local storage
  localStorage.setItem('presidentialChoice', candidateName);
  console.log(candidateName)
};

return (
  <div>
        <ProgressBar percentage={20} /> 
        <BackButton destination="/instructions" />
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>PRESIDENTIAL</h1>
        </header>
        <p className="sub-header">Electors for President & Vice President (Vote for one)</p>

      <VotingBox
        title="PRESIDENT AND VICE PRESIDENT"
        question="Select your preferred candidate:"
        candidates={president}
        onCandidateSelect={handleCandidateSelect}
      />

      <div className='submit-container'>
        <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
      </div>
    </div>
  </div>
)
}

