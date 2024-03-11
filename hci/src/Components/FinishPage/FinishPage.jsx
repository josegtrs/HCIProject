import React, { useState } from 'react'
import './FinishPage.css'

export const FinishPage = () => {

  const handleletsvote = () => {
    window.location.href = '/letsvotepage'; // Change the URL to the SignUpPage
  };

  return (
    <div className='container'>
        <div className="header">
            <div className="text">Thank You!</div>
            <div className="underline"></div>
        </div>
        <div>
            <div className='dialog'>Your vote has been recorded.</div>
            <div className='dialog'>Please click the button below to return to the home page.</div>
        </div>
        <div className="submit-container">
            <div className='submit' onClick={handleletsvote}>Home Page</div>
            
        </div>
    </div>
  )
}
