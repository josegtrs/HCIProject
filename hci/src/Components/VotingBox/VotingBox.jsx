import React, { useState, useEffect } from 'react';
import '../CSS/VotingBox.css';

const VotingBox = ({ title, question, candidates, onCandidateSelect }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Load the selected choice from local storage when the component mounts
  useEffect(() => {
    const storedChoice = localStorage.getItem(`selectedCandidate_${title}`);
    if (storedChoice) {
      setSelectedCandidate(storedChoice);
    }
  }, [title]);

  // Handle selection of a candidate
  const handleSelect = (candidateName) => {
    setSelectedCandidate(candidateName);
    onCandidateSelect(candidateName);
    localStorage.setItem(`selectedCandidate_${title}`, candidateName); // Store the selected choice in local storage
  };

  return (
    <div className="voting-box">
      <div className="voting-box-header">
        <div className="title">{title}</div>
      </div>
      <div className="question">{question}</div>
      <div className="candidates">
        {candidates.map(candidate => (
          <label className="candidate" key={candidate.id}>
            {candidate.name}
            <input
              type="radio"
              name={`voting-box-${title}`}
              value={candidate.name}
              checked={selectedCandidate === candidate.name} // Set checked attribute based on selectedCandidate state
              onChange={() => handleSelect(candidate.name)}
            />
            <div className="candidate-text">
              <div className="candidate-square" onClick={() => console.log(candidate.name)}></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VotingBox;
