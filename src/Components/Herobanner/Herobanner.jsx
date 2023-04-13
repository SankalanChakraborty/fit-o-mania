import React from 'react'
import image  from '../../assets/images/banner.png';
import './Herobanner.css';

const Herobanner = () => {
  return (
    <div className="homepage-container">
    <div className="homepage-texts">
        <span>Fitness Club</span>
        <h1>Sweat, Smile and <br/> Repeat</h1>
        
        <span>Check out the most effective exercises</span>  
        <button className="btn-search">Explore Exercises</button>
       
    </div>
      <div className="image-container">
      <img src={image} alt="girl with a yoga mat" />
      </div>
    </div>
  )
}

export default Herobanner
