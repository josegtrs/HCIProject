import { useState } from 'react';
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent';
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Congressional = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

  const handleSubmit = () => {
    window.location.href = '/representative'; // Redirect to the next page
  };

  const straightPartyVoting = [
    { id: 1, name: "JIM INHOFE (Republican)" },
    { id: 2, name: "ROBERT MURPHY (Libertarian)" },
    { id: 3, name: "ABBY BROYLES (Democrat)" },
    { id: 4, name: "JOAN FARR (Independent)" },
    { id: 5, name: "A. D. NESBIT (Independent)" },
  ];

  const handleCandidateSelect = (candidateName) => {
    // Store the user's choice in local storage
    localStorage.setItem('congressionalOfficerChoice', candidateName);
  };

  return (
      <div>
        <ProgressBar percentage={40} /> 
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>CONGRESSIONAL OFFICERS</h1>
        </header>
        <BackButton destination="/state" /> 
        <p className="sub-header">For United States Senator (Vote for One)</p>

        <VotingBox
          title="SENATOR"
          candidates={straightPartyVoting}
          onCandidateSelect={handleCandidateSelect}
        />

        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>
        </div>
      </div>
    </div>
  );
};

export default Congressional;
