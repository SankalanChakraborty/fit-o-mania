import React from 'react';
import './BodypartCard.css';
import cardLogo from '../../assets/icons/gym.png'

const BodypartCard = ({bodyPart}) => {
  return (
    <div className="bodyPart-card__container" >
        <div className="card-image__container">
            <img src={cardLogo} alt="card logo"/>
        </div>
        <span>{bodyPart}</span>
    </div>
  )
}

export default BodypartCard;
