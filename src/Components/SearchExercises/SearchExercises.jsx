import React, { useEffect, useState } from 'react'
import './SearchExercises.css';
import { fetchData } from '../Utils/FetchData';
import { exerciseOptions } from '../Utils/FetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';
import { useContext } from 'react';
import { excerciseContext } from '../Utils/Context';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const {setExercises, bodyparts, setBodyparts} = useContext(excerciseContext);

  useEffect(()=>{
    const exercisesData = async()=>{
      const bodyPartExcerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyparts(()=> {
        return ["all", ...bodyPartExcerciseData]
      });
    }
    exercisesData();
  }, [])

  const clickHandler = async ()=>{
    if(inputValue){
      const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
      
      const searchedExercise = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(inputValue) || exercise.bodyPart.toLowerCase().includes(inputValue) || exercise.equipment.toLowerCase().includes(inputValue) || exercise.target.toLowerCase().includes(inputValue));
      console.log("Search data==================",searchedExercise);
      setExercises(searchedExercise);
      setInputValue('');
    }
  }
  return (
    <div className="search-container">
      <h1>Awesome exercises you should know</h1>
      <div className="search-bar">
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value.toLowerCase())} placeholder="Search Exercises"/>
      <button className="btn-search-workouts" onClick={clickHandler}>Search</button>
      </div>
      <div className="bodypart-container">
          <HorizontalScrollbar data={bodyparts}/>
      </div>
    </div>
  )
}

export default Search;
