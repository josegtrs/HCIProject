// Criminal.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Criminal = () => {
  const handleSubmit = () => {
    window.location.href = '/civil'; // Redirect to the next page
  };

  const district2 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const district3 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO' },
  ];

  const handleCandidateSelect = (district, choice) => {
    // Store the user's choice in local storage
    localStorage.setItem(`criminalRetention_${district}`, choice);
  };

  return (
    <div>
      <div className='container'>
        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>

        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other.<br />For Judges of the Oklahoma Court of Criminal Appeals</p>

        <VotingBox
          title="DISTRICT 2"
          question="Shall ROBERT L. HUDSON of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?"
          candidates={district2}
          onCandidateSelect={(choice) => handleCandidateSelect('district2', choice)}
        />
        <VotingBox
          title="DISTRICT 3"
          question="Shall GARY L. LUMPKIN of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?"
          candidates={district3}
          onCandidateSelect={(choice) => handleCandidateSelect('district3', choice)}
        />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>
        </div>
      </div>
    </div>
  );
};

export default Criminal;
