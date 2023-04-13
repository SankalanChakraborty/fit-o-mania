import React from 'react';
import bodyPart from '../../assets/icons/body-part.png';
import equipment from '../../assets/icons/equipment.png';
import target from '../../assets/icons/target.png';
import './Detail.css';

const Detail = ({detail}) => {
  return (
    <div className="exercise-detail__container">
        <div className="exercise-gif__container">
        <img src={detail.gifUrl} alt={detail.name} />
        </div>
        <div className="exercise-info">
            <h1>{detail.name}</h1>
            <span>Exercises keep you strong. <br/>
            {detail.name} is of of the best exercises to get a well defined and toned muscles. <br/>
            Including this exercise in your workout routine can give you great result over a period of time.</span>
            <div className="target-muscles">
                <div className="body-part">
                    <span><img src={bodyPart} alt="bodypart included" /></span>
                    <span>{detail.bodyPart}</span>
                </div>
                <div className="target">
                    <span><img src={target} alt="target muscle" /></span>
                    <span>{detail.target}</span>
                </div>
                <div className="equipment">
                    <span><img src={equipment} alt="equipment" /></span>
                    <span>{detail.equipment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail;
