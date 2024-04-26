import { useState } from 'react'
import React from 'react'
import '../CSS/Global.css'
import ZoomComponent from '../Zoom/ZoomComponent'

import logo from '../Assets/OKlogo.jpg'

export const LetsVote = () => {

    const [zoomLevel, setZoomLevel] = useState(100);

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
            <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut} />
            <div style={{ transform: `scale(${zoomLevel / 100})` }} className='container'>
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