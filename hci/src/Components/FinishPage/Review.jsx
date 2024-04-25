import React from 'react';
import VotingBox from '../VotingBox/VotingBox'; // Assuming VotingBox can be used here for display
import '../CSS/Global.css'
import ReviewBox from '../VotingBox/ReviewBox';

export const Review = () => {
  // Retrieve votes from local storage
  const votes = JSON.parse(localStorage.getItem('votes'));

  // Prepare review boxes based on votes
  const reviewbox = Object.entries(votes).map(([key, value], index) => ({
    id: index + 1,
    name: `${key.toUpperCase()}: ${value}`
  }));

  const handleSubmit = () => {
    alert('Submitting Votes...');
  };


  return (
    <div className='container'>
      <header className="main-header">
        <h1>REVIEW YOUR VOTES</h1>
      </header>
      <p className="sub-header">Please double check to verify all selections are correct</p>
      {Object.entries(votes).map(([title, data], index) => (
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
  );
};

export default Review;
