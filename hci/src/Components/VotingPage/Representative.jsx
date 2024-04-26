// Representative.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Representative = () => {
  const handleSubmit = () => {
    window.location.href = '/judicial'; // Redirect to the next page
  };

  const straightPartyVoting = [
    { id: 1, name: "FRANK D. LUCAS (Republican)" },
    { id: 2, name: "ZOE MIDYETT (Democrat)" },
  ];

  const handleCandidateSelect = (candidateName) => {
    // Store the user's choice in local storage
    localStorage.setItem('representativeChoice', candidateName);
  };

  return (
      <div>
        <ProgressBar percentage={50} /> 
        <div className='container'>
        <header className="main-header">
          <h1>REPRESENTATIVE</h1>
        </header>
        <BackButton destination="/congressional" /> 
        <p className="sub-header">For United States Representative District 03 (Vote for One)</p>

        <VotingBox
          title="Representative"
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

export default Representative;
