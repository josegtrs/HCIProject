import React from 'react'
import '../CSS/Global.css'

import logo from '../Assets/OKlogo.jpg'

export const LetsVote = () => {


    const handleHomePageClick = () => {
        window.location.href = '/instructions'; // Change the URL to the SignUpPage
    };

    return (
        <div>
            <div className='container'>
                <img src={logo} alt="" />
                <header className="main-header">
                    <h1>OFFICIAL BALLOT</h1>
                </header>

                <p className="sub-header">GENERAL ELECTION<br></br>November 03, 2020<br></br>GARFIELD COUNTY, OKLAHOMA<br></br>PRECINT 240204-REGNP</p>
                <div className="submit-container">
                    <div className="submit-button" onClick={handleHomePageClick}>Let's Vote!</div>
                </div>
            </div>
        </div>
    )
}