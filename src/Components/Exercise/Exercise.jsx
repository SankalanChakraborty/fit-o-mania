import React, { useState, useContext } from 'react';
import { excerciseContext } from '../Utils/Context';
import './Exercise.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Pagination from '@mui/material/Pagination';
import {Stack} from '@mui/material';

const Exercise = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {exercises} = useContext(excerciseContext);
  const exerceisesPerPage = 9;
  const lastExerciseIndex = currentPage*exerceisesPerPage;
  const firstExerciseIndex = lastExerciseIndex - exerceisesPerPage;
  const currentExercises = exercises.slice(firstExerciseIndex, lastExerciseIndex);

  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top: 1200, behavior: 'smooth'})
  }

  return (
    <>
      {exercises.length ? <h1 className="results-banner">Showing results</h1> : ""}
      <div className="search-results__container">
        {exercises && currentExercises.map(exercise=>
          <ExerciseCard key={exercise.id} exercise={exercise}/>
        )}
      </div>
      <Stack mt="30px" mb="20px" alignItems="center">
      {exercises.length > 9 && (
        <Pagination
        color="secondary"
        count={Math.ceil(exercises.length/9)}
        page={currentPage}
        onChange={paginate}

        />
      )}
      </Stack>
    </>
  )
}

export default Exercise;
