// Review.jsx
import React from 'react';
import { useState } from 'react';
import '../CSS/Global.css'
import BackButton from '../BackButton/BackButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import ZoomComponent from '../Zoom/ZoomComponent';
import EditButton from '../EditButton/EditButton'; // Import your EditButton component

export const Review = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

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
      <BackButton destination="/civil" /> 
      <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
      <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>REVIEW</h1>
        </header>

        <p className="sub-header">Please double check to verify all selections are correct</p>

        {/* Display the user's choice */}
          <div className='review-container'>
            <div className='review-item'>
                <p>For President & Vice President: <br></br><strong>{presidentialChoice}</strong></p>
                <EditButton destination="/presidential" />
            </div>
            <div className='review-item'>
            <p>For Corporation Commissioner: <br></br><strong>{stateOfficerChoice}</strong></p>
            <EditButton destination="/state" />
            </div>
            <div className='review-item'>
            <p>For United States Senator: <br></br><strong>{congressionalOfficerChoice}</strong></p>
            <EditButton destination="/congressional" />
            </div>
            <div className='review-item'>
            <p>For U.S. Representative District 03: <br></br><strong>{representativeChoice}</strong></p>
            <EditButton destination="/representative" />
            </div>
            {/* JUDICIAL */}
            <div className='review-item'>
            <p>Supreme Court District 1<br></br>Shall MATTHEW JOHN KANE, IV of the OKLAHOMA SUPREME COURT be retained in office?:
            <br></br><strong>{district1Choice}</strong></p>
            <EditButton destination="/judicial" />
            </div>
            <div className='review-item'>
            <p>Supreme Court District 6<br></br>Shall TOM COLBERT, of the OKLAHOMA SUPREME COURT be retained in office?:
            <br></br><strong>{district6Choice}</strong></p>
            <EditButton destination="/judicial" />
            </div>
            <div className='review-item'>
            <p>Supreme Court District 9<br></br>Shall RICHARD B. DARBY, of the OKLAHOMA SUPREME COURT be retained in office?:
            <br></br><strong>{district9Choice}</strong></p>
            <EditButton destination="/judicial" />
            </div>
            {/* CRIMINAL */}
            <div className='review-item'>
            <p>Court of Criminal Appeals District 2: <br></br>Shall ROBERT L. HUDSON of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?:<br></br>
            <strong>{district2Choice}</strong></p>
            <EditButton destination="/criminal" />
            </div>
            <div className='review-item'>
            <p>Court of Criminal Appeals District 3: <br></br>Shall GARY L. LUMPKIN of the OKLAHOMA COURT OF CRIMINAL APPEALS be retained in office?:<br></br>
            <strong>{district3Choice}</strong></p>
            <EditButton destination="/criminal" />
            </div>
            {/* CIVIL */}
            <div className='review-item'>
            <p>Court of Civil Appeals District 1 - Office 2: <br></br>Shall JANE P. WISEMAN of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?:<br></br>
            <strong>{district1Office2Choice}</strong></p>
            <EditButton destination="/civil" />
            </div>
            <div className='review-item'>
            <p>Court of Civil Appeals District 2 - Office 1: <br></br>Shall DEBORAH B. BARNES of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?:<br></br>
            <strong>{district2Office1Choice}</strong></p>
            <EditButton destination="/civil" />
            </div>
            <div className='review-item'>
            <p>Court of Civil Appeals District 2 - Office 2: <br></br>Shall KEITH RAPP of the OKLAHOMA COURT OF CIVIL APPEALS be retained in office?:<br></br>
            <strong>{district2Office2Choice}</strong></p>
            <EditButton destination="/civil" />
            </div>
          </div>


          <div className='submit-container'>
            <div className='submit-button' onClick={handleSubmit}>S U B M I T</div>   
          </div>
      </div>
    </div>
  )
}
