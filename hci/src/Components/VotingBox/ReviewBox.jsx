import React from 'react';
import '../CSS/VotingBox.css';

const titlesMap = {
     "district1office2":"DISTRICT 1 - OFFICE 2",
     "district2office1":"DISTRICT 2 - OFFICE 1",
     "district2office2":"DISTRICT 2 - OFFICE 2"
    // ... any other titles you have
  };

const ReviewBox = ({ title, question, candidates, onChange, reviewMode, selectedOption }) => {
    return (
      <div className="voting-box">
        <div className="voting-box-header">
          <div className="title">{titlesMap[title]}</div>
        </div>
        <div className="question">{question}</div>
        <div className="candidates">
          {candidates.map(candidate => (
            <div className={`candidate ${selectedOption === candidate.name ? 'selected' : ''}`} key={candidate.id}>
              {reviewMode ? (
                <div className={`candidate-text ${selectedOption === candidate.name ? 'selected' : ''}`}>
                  {candidate.name}
                </div>
              ) : (
                <label className={`candidate ${selectedOption === candidate.name ? 'selected' : ''}`} key={candidate.id}>
      {candidate.name}
      <input type="radio" name={`voting-box-${title}`} value={candidate.name} onChange={() => onChange(candidate.name)} />
    </label>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewBox;