import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import './VotingPage.css';

export const VotingPage = () => {

  const handleSubmit = () => {
    window.location.href = '/finishpage'; // Change the URL to the SignUpPage
  };

  const straightPartyVoting = [
    { id: 1, name: 'Republican' },
    { id: 2, name: 'Libertarian' },
    { id: 3, name: 'Democratic' }
  ];

  const representativeCandidates = [
    { id: 1, name: 'Representative Candidate 1' },
    { id: 2, name: 'Representative Candidate 2' }
  ];

  return (
      <div>
        <div className='header'>
        </div>
        <VotingBox title="Straight Party Voting" candidates={straightPartyVoting} />
        <VotingBox title="Representative" candidates={representativeCandidates} />
        <div className='submit-container'>
          <div className='submit' onClick={handleSubmit}>Submit</div>   
        </div>
      </div>
  )
}

