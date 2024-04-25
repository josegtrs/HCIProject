import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ProgressBar from '../ProgressBar/ProgressBar';

export const Representative = () => {

  const handleSubmit = () => {
    window.location.href = '/judicial'; // Change the URL to the SignUpPage
  };

  const straightPartyVoting = [
    { id: 1, name: <span>FRANK D. LUCAS<br />(Republican)</span> },
    { id: 2, name: <span>ZOE MIDYETT<br />(Democrat)</span> },
];

  return (
      <div>
        <ProgressBar percentage={50} /> 
        <div className='container'>
        <header className="main-header">
          <h1>REPRESENTATIVE</h1>
        </header>

        <p className="sub-header">For United States Representative District 03 (Vote for One)</p>

        <VotingBox title="Representative" candidates={straightPartyVoting} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

