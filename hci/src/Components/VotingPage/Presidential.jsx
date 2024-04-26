import { useState } from 'react';
import React from 'react';
import VotingBox from '../VotingBox/VotingBox';
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent';

export const Presidential = () => {

  const[zoomLevel, setZoomLevel] = useState(100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel => zoomLevel + 10);
  }

  const zoomOut = () => {
    setZoomLevel(zoomLevel => zoomLevel - 10);
  }

  
  const handleSubmit = () => {
    window.location.href = '/state'; // Change the URL to the SignUpPage
  };

  const straightPartyVoting = [
    { id: 1, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />DONALD J. TRUMP & MICHAEL R. PENCE<br />(Republican)</span> },
    { id: 2, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />JO JORGENSEN & JEREMY SPIKE COHEN<br />(Libertarian)</span> },
    { id: 3, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />JOSEPH R. BIDEN & KAMALA D. HARRIS<br />(Democrat)</span> },
    { id: 4, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />JADE SIMMONS & CLAUDELIAH J. ROZE<br />(Independent)</span> },
    { id: 5, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />KANYE WEST & MICHELLE TIDBALL<br />(Independent)</span> },
    { id: 6, name: <span>FOR PRESIDENT AND VICE PRESIDENT:<br />BROCK PIERCE & KARLA BALLARD<br />(Independent)</span> },

  ];

  return (
      <div>
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
        <header className="main-header">
          <h1>PRESIDENTIAL</h1>
        </header>

        <p className="sub-header">Electors for President and Vice President (Vote for one)</p>

        <VotingBox title="PRESIDENT AND VICE PRESIDENT" candidates={straightPartyVoting} />
        <div className='submit-container'>
          <div className='submit-button' onClick={handleSubmit}>N E X T</div>   
        </div>
        </div>
      </div>
  )
}

