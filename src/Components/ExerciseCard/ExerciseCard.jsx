import React from 'react';
import './ExerciseCard.css';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card__container" to={`/exercise/${exercise.id}`}>
          <div className="exercise-card__gif-container"><img src={exercise.gifUrl} alt={exercise.name} /></div>
          <div className="exercise-target-area">
          <span>{exercise.target}</span>
          <span>{exercise.bodyPart}</span>
          </div>
          <div className="exercise-name"><h2>{exercise.name}</h2></div>
    </Link>
  )
}

export default ExerciseCard;
