import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader__container">
      <h1 className="loading-text">Loading</h1>
      <div className="circle-container">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  )
}

export default Loader;
