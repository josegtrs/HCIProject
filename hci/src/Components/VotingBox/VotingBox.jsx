import React from 'react';
import '../CSS/VotingBox.css';

const VotingBox = ({ title, question, candidates, onChange }) => {
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
            <input type="radio" name={`voting-box-${title}`} value={candidate.name} onChange={() => onChange(candidate.name)} />
            <div className="candidate-text">
              <div className="candidate-square" onClick={() => onChange(candidate.name)}></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VotingBox;
