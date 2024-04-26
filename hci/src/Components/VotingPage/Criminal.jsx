import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export const Criminal = () => {

  const handleSubmit = () => {
    window.location.href = '/civil'; // Change the URL to the SignUpPage
  };

  const district2 = [
    { id: 1, name: 'YES' },
    { id: 2, name: 'NO'},
];

const district3 = [
  { id: 1, name: 'YES' },
  { id: 2, name: 'NO'},
];

  return (
      <div>
        <ProgressBar percentage={70} /> 
        <div className='container'>
        <header className="main-header">
          <h1>JUDICIAL RETENTION</h1>
        </header>
        <BackButton destination="/judicial" /> 
        <p className="sub-header">Vote separately on each justice or judge; they are not running against each other. <br></br>For Judges of the Oklahoma Court of Criminal Appeals</p>

        <VotingBox 
            title="DISTRICT 2" 
            question="Shall ROBERT L. HUDSON of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?"
            candidates={district2} />
        <VotingBox 
            title="DISTRICT 3" 
            question="Shall GARY L. LUMPKIN of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?"
            candidates={district3} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

