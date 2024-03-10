import React from 'react'
import './LetsVote.css'

import logo from '../Assets/OKlogo.jpg'

export const LetsVote = () => {

    const handleHomePageClick = () => {
        window.location.href = '/homepage'; // Change the URL to the SignUpPage
    };

    return (
        <div className='container'>
            <div className="inputs">
                <img src={logo} alt="" />
                <div className="submit-container">
                    <div className= "submit" onClick={handleHomePageClick}>Let's Vote</div>
                </div>
            </div>
        </div>
      )
  }