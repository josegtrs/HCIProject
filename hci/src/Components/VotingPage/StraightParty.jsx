import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const StraightParty = () => {

  const handleSubmit = () => {
    window.location.href = '/presidential'; // Change the URL to the SignUpPage
  };

  const straightPartyVoting = [
    { id: 1, name: 'Republican' },
    { id: 2, name: 'Libertarian' },
    { id: 3, name: 'Democratic' },
    { id: 4, name: 'I do not wish to Straight Party Vote'}
  ];

  return (
      <div>
        <ProgressBar percentage={10} /> 
        <div className='container'>
        <header className="main-header">
          <h1>STRAIGHT PARTY VOTING</h1>
        </header>

        <BackButton destination="/letsvotepage" />
        <p className="sub-header">A straight party vote is a vote for all candidates of that party in partisan races.</p>

        <VotingBox title="STRAIGHT PARTY" candidates={straightPartyVoting} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

