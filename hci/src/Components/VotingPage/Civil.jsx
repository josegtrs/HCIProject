import React, { useState } from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Civil = () => {
  const [votes, setVotes] = useState({
    district1office2: null,
    district2office1: null,
    district2office2: null,
  });

  const questions = {
    district1office2: "Shall JANE P. WISEMAN of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?",
    district2office1: "Shall DEBORAH B. BARNES of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?",
    district2office2: "Shall KEITH RAPP of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?",
  };

  const titlesMap = {
    "DISTRICT 1 - OFFICE 2": "district1office2",
    "DISTRICT 2 - OFFICE 1": "district2office1",
    "DISTRICT 2 - OFFICE 2": "district2office2",
    // ... any other titles you have
  };

  const options = {
    district1office2: [
      { id: 1, name: 'YES' },
      { id: 2, name: 'NO' },
    ],
    district2office1: [
      { id: 1, name: 'YES' },
      { id: 2, name: 'NO' },
    ],
    district2office2: [
      { id: 1, name: 'YES' },
      { id: 2, name: 'NO' },
    ],
  };

  const handleVoteChange = (title, value) => {
    console.log('Title:', title);
    console.log('Value:', value);
    console.log('Options for the title:', options[title]);

    if (!options[title]) {
        console.error('Options for the given title are undefined.');
        return; // Exit the function to avoid further errors
    }

    const newVotes = {
        ...votes,
        [title]: {
            question: questions[title],
            options: options[title].map(opt => opt.name),  // Assuming options is an array
            selected: value
        }
    };
    setVotes(newVotes);
    localStorage.setItem('votes', JSON.stringify(newVotes));
};

  

  const handleSubmit = () => {
    if (Object.values(votes).every(vote => vote !== null)) {
      window.location.href = '/review'; // Navigate to review page
    } else {
      alert('Please vote in all categories before proceeding.');
    }
  };

  const isSubmitEnabled = Object.values(votes).every(vote => vote !== null);

  return (
      <div>
        <div className='container'>
        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>

        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other. <br></br>For Judges of the Oklahoma Court of Civil Appeals</p>

        <VotingBox 
          title="DISTRICT 1 - OFFICE 2" 
          question={questions.district1office2}
          candidates={options.district1office2}
          onChange={(value) => handleVoteChange(titlesMap["DISTRICT 1 - OFFICE 2"], value)}
        />
        <VotingBox 
          title="DISTRICT 2 - OFFICE 1" 
          question={questions.district2office1}
          candidates={options.district2office1}
          onChange={(value) => handleVoteChange(titlesMap["DISTRICT 2 - OFFICE 1"] , value)}
        />
        <VotingBox 
          title="DISTRICT 2 - OFFICE 2" 
          question={questions.district2office2}
          candidates={options.district2office2}
          onChange={(value) => handleVoteChange(titlesMap["DISTRICT 2 - OFFICE 2"] , value)}
        />  
        <div className='submit-container'>
          <div className={`submit-button ${isSubmitEnabled ? '' : 'disabled'}`} onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  );
};
