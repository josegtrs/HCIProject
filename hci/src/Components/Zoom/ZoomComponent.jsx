import React from 'react';

const ZoomComponent = ({ zoomIn, zoomOut }) => {
  return (
    <div>
      <button onClick={zoomIn}>Zoom In</button>
      <button onClick={zoomOut}>Zoom Out</button>
    </div>
  );
};

export default ZoomComponent;