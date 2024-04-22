import React from 'react';
import '../CSS/VotingBox.css';

const VotingBox = ({ title, question, candidates }) => {
  return (
    <div className="voting-box">
      <div className="voting-box-header">
        <div className="title">{title}</div>
      </div>
      <div className="question">{question}</div> {/* Add the question section */}
      <div className="candidates">
        {candidates.map(candidate => (
          <label className="candidate" key={candidate.id}>
            {candidate.name}
            <input type="radio" name={`voting-box-${title}`} value={candidate.name} />
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
