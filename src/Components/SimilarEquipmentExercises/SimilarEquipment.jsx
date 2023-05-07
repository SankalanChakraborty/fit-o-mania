import React from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./SimilarEquipment.css";
import Loader from "../Loader/Loader";

const SimilarEquipment = ({ simialrEquipment }) => {
  return (
    <div className="similarEquipments__container">
      <h2>
        Similar <span>Equipments</span> Exerceise
      </h2>
      {simialrEquipment.length ? (
        <ScrollMenu>
          {simialrEquipment.map((equipmentExercise) => {
            return (
              <ExerciseCard
                key={equipmentExercise.id}
                exercise={equipmentExercise}
              />
            );
          })}
        </ScrollMenu>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarEquipment;
