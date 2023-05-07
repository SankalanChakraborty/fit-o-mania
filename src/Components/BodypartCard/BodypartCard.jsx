import React from "react";
import "./BodypartCard.css";
import cardLogo from "../../assets/icons/gym.png";
import { fetchData, exerciseOptions } from "../Utils/FetchData";
import { useContext } from "react";
import { excerciseContext } from "../Utils/Context";

const BodypartCard = ({ bodyPart }) => {
  const { setExercises } = useContext(excerciseContext);

  const searchBasedOnBodypart = async (e) => {
    if (!e.target.innerText) {
      return;
    }
    if (e.target.innerText.toLowerCase() === "all") {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    } else {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${e.target.innerText.toLowerCase()}`,
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  };
  return (
    <a href="#search-results">
      <div className="bodyPart-card__container" onClick={searchBasedOnBodypart}>
        <div className="card-image__container">
          <img src={cardLogo} alt="card logo" />
        </div>
        <span>{bodyPart}</span>
      </div>
    </a>
  );
};

export default BodypartCard;
