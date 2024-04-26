// Civil.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Civil = () => {
  const handleSubmit = () => {
    window.location.href = '/review'; // Redirect to the next page
  };

  const district1office2 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const district2office1 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const district2office2 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const handleCandidateSelect = (district, office, choice) => {
    // Store the user's choice in local storage
    localStorage.setItem(`civilRetention_${district}_${office}`, choice);
  };

  return (
    <div>
      <div className='container'>
        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>

        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other.<br />For Judges of the Oklahoma Court of Civil Appeals</p>

        <VotingBox
          title="DISTRICT 1 - OFFICE 2"
          question="Shall JANE P. WISEMAN of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?"
          candidates={district1office2}
          onCandidateSelect={(choice) => handleCandidateSelect('district1', 'office2', choice)}
        />
        <VotingBox
          title="DISTRICT 2 - OFFICE 1"
          question="Shall DEBORAH B. BARNES of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?"
          candidates={district2office1}
          onCandidateSelect={(choice) => handleCandidateSelect('district2', 'office1', choice)}
        />
        <VotingBox
          title="DISTRICT 2 - OFFICE 2"
          question="Shall KEITH RAPP of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?"
          candidates={district2office2}
          onCandidateSelect={(choice) => handleCandidateSelect('district2', 'office2', choice)}
        />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>
        </div>
      </div>
    </div>
  );
};

export default Civil;
