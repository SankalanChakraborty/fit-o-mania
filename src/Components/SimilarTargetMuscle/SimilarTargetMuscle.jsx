import React from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './SimilarTargetMuscle.css';

const SimilarTargetMuscle = ({similarTargetMuscles}) => {
  return (
    <div className="similar-target-muscles__container">
      <h1>Similar <span>Target Muscle</span> exercises</h1>
        <ScrollMenu>
        {similarTargetMuscles.map((exercise)=>{
          return <ExerciseCard key={exercise.id} exercise={exercise}/>
        })}
        </ScrollMenu>
      </div>
  )
}

export default SimilarTargetMuscle;
