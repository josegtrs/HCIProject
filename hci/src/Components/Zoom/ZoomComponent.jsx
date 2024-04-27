import React from 'react';
import '../CSS/Global.css'

const ZoomComponent = ({ zoomIn, zoomOut }) => {
  return (
    <div className="zoom-container">
    <button className="zoom-button zoom-out" onClick={zoomOut}></button>
      <button className="zoom-button zoom-in" onClick={zoomIn}></button>
    </div>
  );
};

export default ZoomComponent;