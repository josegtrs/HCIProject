// Judicial.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Judicial = () => {
  const handleSubmit = () => {
    window.location.href = '/criminal'; // Redirect to the next page
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
      <div className='container'>
        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>

        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other.<br />For Justices of the Oklahoma Supreme Court</p>

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
