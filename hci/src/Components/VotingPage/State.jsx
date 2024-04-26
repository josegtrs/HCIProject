// State.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const State = () => {
  const handleSubmit = () => {
    window.location.href = '/congressional'; // Redirect to the next page
  };

  const straightPartyVoting = [
    { id: 1, name: "TODD HIETT (Republican)" },
    { id: 2, name: "TODD HAGOPIAN (Libertarian)" },
  ];

  const handleCandidateSelect = (candidateName) => {
    // Store the user's choice in local storage
    localStorage.setItem('stateOfficerChoice', candidateName);
  };

  return (
      <div>
        <ProgressBar percentage={30} /> 
        <div className='container'>
        <header className="main-header">
          <h1>STATE OFFICERS</h1>
        </header>
        <BackButton destination="/presidential" /> 
        <p className="sub-header">For Corporation Commisioner (Vote for One)</p>

        <VotingBox
          title="CORPORATION COMMISSIONER"
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

export default State;
