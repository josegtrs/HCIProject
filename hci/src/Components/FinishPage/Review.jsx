import React from 'react';
import VotingBox from '../VotingBox/VotingBox'; // Assuming VotingBox can be used here for display
import '../CSS/Global.css'
import ReviewBox from '../VotingBox/ReviewBox';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Review = () => {
  // Retrieve votes from local storage
  const civilVotes = JSON.parse(localStorage.getItem('votes'));
  const congressionalVotes = JSON.parse(localStorage.getItem('congressionalVotes'));

  const allVotes = { ...civilVotes, ...congressionalVotes };
  // Prepare review boxes based on votes
  const reviewbox = Object.entries(allVotes).map(([key, value], index) => ({
    id: index + 1,
    name: `${key.toUpperCase()}: ${value}`
  }));

  const handleSubmit = () => {
    alert('Submitting Votes...');
  };


  return (
    <div>
      <ProgressBar percentage={90} /> 
    
    <div className='container'>
      <header className="main-header">
        <h1>REVIEW YOUR VOTES</h1>
      </header>
      <p className="sub-header">Please double check to verify all selections are correct</p>
      {Object.entries(civilVotes).map(([title, data], index) => (
        <ReviewBox
          key={index}
          title={title}
          question={data.question}
          candidates={data.options.map(name => ({ id: Math.random(), name }))} // Assign unique IDs for key props
          reviewMode={true}
          selectedOption={data.selected}
        />
      ))}
      <div className='submit-container'>
        <div className='submit-button' onClick={() => alert('Submitting Votes...')}>S U B M I T</div>   
      </div>
    </div>
    </div>
  );
};

export default Review;

