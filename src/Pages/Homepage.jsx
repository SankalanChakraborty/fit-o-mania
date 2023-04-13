import React, { useState } from 'react';
import Herobanner from '../Components/Herobanner/Herobanner';
import SearchExercises from '../Components/SearchExercises/SearchExercises';
import { excerciseContext } from '../Components/Utils/Context';
import Exercise from '../Components/Exercise/Exercise';

const Homepage = () => {
  const [bodyparts, setBodyparts] = useState([]);
  const [exercises, setExercises] = useState([]);
  return (
    <excerciseContext.Provider value={{exercises, setExercises, bodyparts, setBodyparts}}>
        <Herobanner/>
        <SearchExercises/>
        <Exercise/>
    </excerciseContext.Provider>
  )
}

export default Homepage;
