// Congressional.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Congressional = () => {
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
      <div className='container'>
        <header className="main-header">
          <h1>CONGRESSIONAL OFFICERS</h1>
        </header>

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
