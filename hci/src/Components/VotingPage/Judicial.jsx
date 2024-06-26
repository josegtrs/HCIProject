import { useState } from 'react';
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent';
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Judicial = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

  const handleSubmit = () => {
    const district1Choice = localStorage.getItem('judicialRetention_district1');
    const district6Choice = localStorage.getItem('judicialRetention_district6');
    const district9Choice = localStorage.getItem('judicialRetention_district9');
  
    if (district1Choice && district6Choice && district9Choice) {
      window.location.href = '/criminal'; 
    } else {
      alert('Please vote in each box before proceeding.');
    }
  };

  const district1 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const district6 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const district9 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const handleCandidateSelect = (district, choice) => {
    // Store the user's choice in local storage
    localStorage.setItem(`judicialRetention_${district}`, choice);
  };

  return (
    <div>
        <ProgressBar percentage={60} />
        <BackButton destination="/representative" />  
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>

        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>
        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other. <br></br>For Justices of the Oklahoma Supreme Court</p>

        <VotingBox
          title="DISTRICT 1"
          question="Shall MATTHEW JOHN KANE, IV of the OKLAHOMA SUPREME COURT be retained in office?"
          candidates={district1}
          onCandidateSelect={(choice) => handleCandidateSelect('district1', choice)}
        />
        <VotingBox
          title="DISTRICT 6"
          question="Shall MATTHEW TOM COLBERT, of the OKLAHOMA SUPREME COURT be retained in office?"
          candidates={district6}
          onCandidateSelect={(choice) => handleCandidateSelect('district6', choice)}
        />
        <VotingBox
          title="DISTRICT 9"
          question="Shall MATTHEW RICHARD B. DARBY, of the OKLAHOMA SUPREME COURT be retained in office?"
          candidates={district9}
          onCandidateSelect={(choice) => handleCandidateSelect('district9', choice)}
        />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>
        </div>
      </div>
    </div>
  );
};

export default Judicial;
