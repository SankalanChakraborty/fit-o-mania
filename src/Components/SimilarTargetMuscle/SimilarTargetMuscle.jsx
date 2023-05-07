import React from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./SimilarTargetMuscle.css";
import Loader from "../Loader/Loader";

const SimilarTargetMuscle = ({ similarTargetMuscles }) => {
  return (
    <div className="similar-target-muscles__container">
      <h2>
        Similar <span>Target Muscle</span> exercises
      </h2>
      {similarTargetMuscles.length ? (
        <ScrollMenu>
          {similarTargetMuscles.map((exercise) => {
            return <ExerciseCard key={exercise.id} exercise={exercise} />;
          })}
        </ScrollMenu>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarTargetMuscle;
