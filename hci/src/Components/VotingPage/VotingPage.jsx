import React from 'react';
import VotingBox from '../VotingBox/VotingBox';

const VotingPage = () => {
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
      <VotingBox title="Straight Party Voting" candidates={straightPartyVoting} />
      <VotingBox title="Representative" candidates={representativeCandidates} />
    </div>
  );
};

export default VotingPage;
