import React from 'react';
import './VotingBox.css'; // You can define your CSS styles in this file

const VotingBox = ({ title, candidates }) => {
  return (
    <div className="voting-box">
      <div className="voting-box-header">
        <div className="title">{title}</div>
      </div>
      <div className="candidates">
        {candidates.map(candidate => (
          // <div className="candidate" key={candidate.id}>
          //   {candidate.name}
          // </div>

        //   <label className="candidate" key={candidate.id}>
        //   <input type="radio" name={title} value={candidate.name} />
        //   {candidate.name}
        // </label>
          
        // <label className="candidate" key={candidate.id}>
        //   {candidate.name}  
        //     <input type="radio" name={title} value={candidate.name} />
        //     <label></label>
            
        //   </label>

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
