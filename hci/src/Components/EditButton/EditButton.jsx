import React from 'react';
import '../CSS/Global.css'; 

const EditButton = ({ destination }) => {

  const handleEdit = () => {
    window.location.href = destination;
  };

  return (
    <button className="edit-button" onClick={handleEdit}></button>
  );
};

export default EditButton;