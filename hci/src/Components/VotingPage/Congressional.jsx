import { useState } from 'react';
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent';

export const Congressional = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

  const handleSubmit = () => {
    window.location.href = '/representative'; // Change the URL to the SignUpPage
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
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>CONGRESSIONAL OFFICERS</h1>
        </header>

        <p className="sub-header">For United States Senator (Vote for One)</p>

        <VotingBox title="SENATOR" candidates={straightPartyVoting} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

