// import React from 'react';
// import VotingBox from '../VotingBox/VotingBox';
// import '../CSS/Global.css'

// export const Congressional = () => {

//   const handleSubmit = () => {
//     window.location.href = '/representative'; // Change the URL to the SignUpPage
//   };

//   const straightPartyVoting = [
//     { id: 1, name: <span>JIM INHOFE<br />(Republican)</span> },
//     { id: 2, name: <span>ROBERT MURPHY<br />(Libertarian)</span> },
//     { id: 3, name: <span>ABBY BROYLES<br />(Democrat)</span> },
//     { id: 4, name: <span>JOAN FARR<br />(Independent)</span> },
//     { id: 5, name: <span>A. D. NESBIT<br />(Independent)</span> },



// ];

//   return (
//       <div>
//         <div className='container'>
//         <header className="main-header">
//           <h1>CONGRESSIONAL OFFICERS</h1>
//         </header>

//         <p className="sub-header">For United States Senator (Vote for One)</p>

//         <VotingBox title="SENATOR" candidates={straightPartyVoting} />
//         <div className='submit-container'>
//           <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
//         </div>
//         </div>
//       </div>
//   )
// }





// Semi working attempt

// import React, { useState } from 'react';
// import VotingBox from '../VotingBox/VotingBox';
// import '../CSS/Global.css';
// import ProgressBar from '../ProgressBar/ProgressBar';

// export const Congressional = () => {
//   const [votes, setVotes] = useState({
//     senator: null, // Track the vote for the senator
//   });

//   const straightPartyVoting = [
    
//     { id: 1, name: "JIM INHOFE (Republican)" },
//     { id: 2, name: "ROBERT MURPHY (Libertarian)" }
//     // { id: 1, name: <span>JIM INHOFE<br />(Republican)</span> },
//     // { id: 2, name: <span>ROBERT MURPHY<br />(Libertarian)</span> },
//     // { id: 3, name: <span>ABBY BROYLES<br />(Democrat)</span> },
//     // { id: 4, name: <span>JOAN FARR<br />(Independent)</span> },
//     // { id: 5, name: <span>A. D. NESBIT<br />(Independent)</span> },
//   ];

//   const handleVoteChange = (value) => {
//     setVotes({ ...votes, senator: value });
//   };

//   const handleSubmit = () => {
//     if (votes.senator) {
//       localStorage.setItem('votes', JSON.stringify(votes));
//       window.location.href = '/representative'; // Navigate to the next page
//     } else {
//       alert('Please select an option before proceeding.');
//     }
//   };

//   return (
//     <div>
//     <ProgressBar percentage={40} /> 
//     <div className='container'>
      
//       <header className="main-header">
//         <h1>CONGRESSIONAL OFFICERS</h1>
//       </header>

//       <p className="sub-header">For United States Senator (Vote for One)</p>

//       <VotingBox 
//         title="SENATOR" 
//         candidates={straightPartyVoting} 
//         onChange={(value) => handleVoteChange(value)}
//       />
//       <div className='submit-container'>
//         <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
//       </div>
//     </div>
//     </div>
//   );
// };


// GPT ATTEMPT NEWEST
import React, { useState, useEffect } from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css';

export const Congressional = () => {
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const storedVotes = localStorage.getItem('votes');
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  const handleVoteChange = (title, value) => {
    const newVotes = {
      ...votes,
      [title]: value
    };
    setVotes(newVotes);
    localStorage.setItem('votes', JSON.stringify(newVotes));
  };

  const handleSubmit = () => {
    if (votes['SENATOR']) {
      window.location.href = '/representative'; // Change the URL to the next page
    } else {
      alert('Please make a selection before proceeding.');
    }
  };

  const straightPartyVoting = [
    { id: 1, name: <span>JIM INHOFE<br />(Republican)</span> },
    { id: 2, name: <span>ROBERT MURPHY<br />(Libertarian)</span> },
    { id: 3, name: <span>ABBY BROYLES<br />(Democrat)</span> },
    { id: 4, name: <span>JOAN FARR<br />(Independent)</span> },
    { id: 5, name: <span>A. D. NESBIT<br />(Independent)</span> },
  ];

  return (
    <div>
      <div className='container'>
        <header className="main-header">
          <h1>CONGRESSIONAL OFFICERS</h1>
        </header>
        <p className="sub-header">For United States Senator (Vote for One)</p>
        <VotingBox 
          title="SENATOR" 
          candidates={straightPartyVoting} 
          onChange={(value) => handleVoteChange('SENATOR', value)}
        />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
      </div>
    </div>
  );
};
