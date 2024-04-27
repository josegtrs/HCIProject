import React from 'react'
import '../CSS/Global.css'
import { useState } from 'react';
import ZoomComponent from '../Zoom/ZoomComponent';
import ProgressBar from '../ProgressBar/ProgressBar';
import howtovote from '../Assets/howtovote.png'
import next from '../Assets/next.png'
import edit from '../Assets/editbutton.png'
import back from '../Assets/back.png'
import zoom from '../Assets/zoom.png'

export const Instructions = () => {

    const[zoomLevel, setZoomLevel] = useState(100);

    const zoomIn = () => {
      setZoomLevel(zoomLevel => zoomLevel + 10);
    }
  
    const zoomOut = () => {
      setZoomLevel(zoomLevel => zoomLevel - 10);
    }

    const handleHomePageClick = () => {
        window.location.href = '/presidential'; // Change the URL to the SignUpPage
    };

    return (
        <div>
        <ProgressBar percentage={10} /> 
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}/>
        <div style={{transform: `scale(${zoomLevel/100})`}} className='container'>
                <header className="main-header">
          <h1>Guidelines</h1>
        </header>

        <div className='instructions-container'>
        <p className="instruction-sub-header"> Voting </p>
        <p className='instructions'>
            On each page, you will be presented with the name of the office as well as the candidates running for that office.
            To cast a vote for a candidate, click on the <strong>box</strong> to the right of the candidate's name. You will only be able to select one candidate per office.
        </p>
        {/* INSERT IMAGE HERE */}
        <div className="image-container">
            <img style= {{width: '400px'}} src={howtovote} alt= "vote" className="instruction-image"/>
        </div>

        <p className='instructions'>
            Once you have chosen a candidate, click the <strong>next</strong> button to continue to the next section of the ballot.
            You will not be able to move on to the next section until you have chosen a candidate for the current section
        </p>
        <div className="image-container">
        <img style= {{width: '400px'}} src={next} alt= "forward" className="instruction-image"/>
        </div>
        <p className='instructions'>
            Once you complete the last section of the ballot, you will be able to review/edit all your selections using the <strong>edit</strong> button. 
            This will navigate you back to the page you wish to change. 
        </p>
        {/* INSERT EDIT IMAGE HERE */}
        <div className="image-container">
        <img style= {{width: '200px'}} src={edit} alt= "edit" className="instruction-image"/>
        </div>
        <p className='instruction-sub-header'>Accessibility</p>
        <p className='instructions'>
            To make the text bigger or smaller, click on either of the <strong>magnifying glass buttons</strong> in the upper right corner of the screen.
        </p>
        <div className="image-container">
        <img style= {{width: '400px'}} src={zoom} alt= "zoom" className="instruction-image"/>
        </div>
        <p className='instructions'>
            If you wish to navigate back to a previous page in order to change your answer, click the <strong>back arrow</strong> in the upper left corner of the screen. 
        </p>
        <div className="image-container">
        <img style= {{width: '200px'}} src={back} alt= "back" className="instruction-image"/>
        </div>
        </div>
        <div className="submit-container">
            <div style= {{width: '600px'}} className= "submit-button" onClick={handleHomePageClick}>Begin Voting</div>
        </div>
        </div>
        </div>
      )
  }