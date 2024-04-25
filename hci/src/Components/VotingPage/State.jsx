import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ProgressBar from '../ProgressBar/ProgressBar';

export const State = () => {

  const handleSubmit = () => {
    window.location.href = '/congressional'; // Change the URL to the SignUpPage
  };

  const straightPartyVoting = [
    { id: 1, name: <span>TODD HIETT<br />(Republican)</span> },
    { id: 2, name: <span>TODD HAGOPIAN<br />(Libertarian)</span> },
];

  return (
      <div>
        <ProgressBar percentage={30} /> 
        <div className='container'>
        <header className="main-header">
          <h1>STATE OFFICERS</h1>
        </header>

        <p className="sub-header">For Corporation Commisioner (Vote for One)</p>

        <VotingBox title="CORPORATION COMMISIONER" candidates={straightPartyVoting} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

