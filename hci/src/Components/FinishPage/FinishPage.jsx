import React, { useState } from 'react'
import '../CSS/Global.css'
import logo from '../Assets/OKlogo.jpg'

export const FinishPage = () => {

  const handleletsvote = () => {
    window.location.href = '/letsvotepage'; // Change the URL to the SignUpPage
  };

  return (
    <div className='container'>
      <img src={logo} alt="" />
      <header className="main-header">
          <h1>THANK YOU FOR VOTING</h1>
        </header>

        <p className="sub-header">Your vote has been recorded. Please click the button below to return to the starting page and allow the next user to vote</p>
        <div className="submit-container">
            <div className='submit-button' onClick={handleletsvote}>R E T U R N</div>
            
        </div>
    </div>
  )
}
