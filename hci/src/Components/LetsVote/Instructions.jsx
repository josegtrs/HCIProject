import React from 'react'
import '../CSS/Global.css'

export const Instructions = () => {

    const handleHomePageClick = () => {
        window.location.href = '/straightparty'; // Change the URL to the SignUpPage
    };

    return (
        <div className='container'>
                <header className="main-header">
          <h1>Instructions</h1>
        </header>

        <p style={{}} className="instruction-sub-header"> Voting </p>
        <p className='instructions'>
            On each page, you will be presented with the name of the office as well as the candidates running for that office.
            To cast a vote for a candidate, click on the right of the candidate's name. You will only be able to select one candidate per office.
        </p>
        <p className='instructions'>
            Once you have chosen a candidate, click the next button to continue to the next section of the ballot.
            You will not be able to move on to the next section until you have chosen a candidate for the current section
        </p>
        <p className='instructions'>
            Once you complete the last section of the ballot, you will be able to review/edit all your selections.
            
        </p>
        <p className='instruction-sub-header'>Accessibility</p>
        <p className='instructions'>
            To make the text bigger or smaller, click on either of the magnifying glass buttons in the upper right corner of the screen.<br></br>
            For more information or extra assistance, click the help button in the upper right corner of the screen.
        </p>
                <div className="submit-container">
                    <div className= "submit-button" onClick={handleHomePageClick}>Let's Vote!</div>
            </div>
        </div>
      )
  }