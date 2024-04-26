// Review.jsx
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Review = () => {
  const handleSubmit = () => {
    window.location.href = '/finishpage'; // Redirect to the finish page
  };

  // Retrieve the user's choice from local storage
  const presidentialChoice = localStorage.getItem('presidentialChoice');
  const stateOfficerChoice = localStorage.getItem('stateOfficerChoice');
  const congressionalOfficerChoice = localStorage.getItem('congressionalOfficerChoice');
  const representativeChoice = localStorage.getItem('representativeChoice');
  const district1Choice = localStorage.getItem('judicialRetention_district1');
  const district6Choice = localStorage.getItem('judicialRetention_district6');
  const district9Choice = localStorage.getItem('judicialRetention_district9');
  const district2Choice = localStorage.getItem('criminalRetention_district2');
  const district3Choice = localStorage.getItem('criminalRetention_district3');
  const district1Office2Choice = localStorage.getItem('civilRetention_district1_office2');
  const district2Office1Choice = localStorage.getItem('civilRetention_district2_office1');
  const district2Office2Choice = localStorage.getItem('civilRetention_district2_office2');



  return (
    <div>
      <ProgressBar percentage={90} /> 
      <div className='container'>
        <header className="main-header">
          <h1>REVIEW</h1>
        </header>

        <BackButton destination="/civil" /> 

        <p className="sub-header">Please double check to verify all selections are correct</p>

        {/* Display the user's choice */}
        <p>Selected Presidential Candidate: {presidentialChoice}</p>
        <p>Selected State Officer Candidate: {stateOfficerChoice}</p>
        <p>Selected Congressional Officer: {congressionalOfficerChoice}</p>
        <p>Selected Representative: {representativeChoice}</p>
        {/* JUDICIAL */}
        <p>District 1: {district1Choice}</p>
        <p>District 6: {district6Choice}</p>
        <p>District 9: {district9Choice}</p>
        {/* CRIMINAL */}
        <p>District 2: {district2Choice}</p>
        <p>District 3: {district3Choice}</p>
        {/* CIVIL */}
        <p>District 1 - Office 2: {district1Office2Choice}</p>
        <p>District 2 - Office 1: {district2Office1Choice}</p>
        <p>District 2 - Office 2: {district2Office2Choice}</p>


        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>S U B M I T</div>   
        </div>
      </div>
    </div>
  )
}
