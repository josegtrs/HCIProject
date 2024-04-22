import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'

export const Review = () => {

  const handleSubmit = () => {
    window.location.href = '/finishpage'; // Change the URL to the SignUpPage
  };

  const reviewbox = [
    { id: 1, name: 'PRESIDENT: INSERT' },
    { id: 2, name: 'VICE PRESIDENT: INSERT..so forth'},
];


  return (
      <div>
        <div className='container'>
        <header className="main-header">
          <h1>REVIEW</h1>
        </header>

        <p className="sub-header">Please double check to verify all selections are correct (THIS LAYOUT CAN BE/WILL NEED TO BE CHANGED)</p>

        <VotingBox 
            title="PRESIDENTIAL" 
            candidates={reviewbox} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>S U B M I T</div>   
        </div>
        </div>
      </div>
  )
}

