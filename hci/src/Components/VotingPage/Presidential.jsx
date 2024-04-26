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
    window.location.href = '/state'; // Redirect to the next page
  };

  const president = [
  { id: 1, name: "FOR PRESIDENT AND VICE PRESIDENT: DONALD J. TRUMP & MICHAEL R. PENCE (Republican)" },
  { id: 2, name: "FOR PRESIDENT AND VICE PRESIDENT: JO JORGENSEN & JEREMY SPIKE COHEN (Libertarian)" },
  { id: 3, name: "FOR PRESIDENT AND VICE PRESIDENT: JOSEPH R. BIDEN & KAMALA D. HARRIS (Democrat)" },
  { id: 4, name: "FOR PRESIDENT AND VICE PRESIDENT: JADE SIMMONS & CLAUDELIAH J. ROZE (Independent)" },
  { id: 5, name: "FOR PRESIDENT AND VICE PRESIDENT: KANYE WEST & MICHELLE TIDBALL (Independent)" },
  { id: 6, name: "FOR PRESIDENT AND VICE PRESIDENT: BROCK PIERCE & KARLA BALLARD (Independent)" },
];


const handleCandidateSelect = (candidateName) => {
  // Store the user's choice in local storage
  localStorage.setItem('presidentialChoice', candidateName);
  console.log(candidateName)
};

return (
  <div>
        <ProgressBar percentage={20} /> 
        <BackButton destination="/letsvotepage" />
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>PRESIDENTIAL</h1>
        </header>
        <p className="sub-header">Electors for President and Vice President (Vote for one)</p>

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

