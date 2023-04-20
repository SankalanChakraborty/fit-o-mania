import React from 'react'
import image  from '../../assets/images/banner.png';
import './Herobanner.css';
import { fetchData, exerciseOptions } from '../Utils/FetchData';
import { useContext } from 'react';
import { excerciseContext } from '../Utils/Context';

const Herobanner = () => {

  const {exercises, setExercises} = useContext(excerciseContext);

  const exploreAllExercises = async()=>{
    if(exercises) return;
    const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
    console.log("All exercises",exercisesData);
    setExercises(exercisesData);
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className="homepage-container">
    <div className="homepage-texts">
        <span>Fitness Club</span>
        <h1>Sweat, Smile and <br/> Repeat</h1>
        
        <span>Check out the most effective exercises</span>  
        <button className="btn-search" onClick={exploreAllExercises}>Explore Exercises</button>
       
    </div>
      <div className="image-container">
      <img src={image} alt="girl with a yoga mat" />
      </div>
    </div>
  )
}

export default Herobanner
