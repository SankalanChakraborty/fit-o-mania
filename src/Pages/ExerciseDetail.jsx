import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../Components/Utils/FetchData";
import React, { useEffect, useState } from 'react';
import Detail from "../Components/Detail/Detail";
import ExerciseVideos from "../Components/ExerciseVideos/ExerciseVideos";
import SimilarEquipment from "../Components/SimilarEquipmentExercises/SimilarEquipment";
import SimilarTargetMuscle from "../Components/SimilarTargetMuscle/SimilarTargetMuscle";
import Footer from "../Components/Footer/Footer";

const ExerciseDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState([]);
    const [exerciseVideos, setExerciseVideos] = useState({});
    const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState([]);
    const [similarTargetMuscleExercises, setsimilarTargetMuscleExercises] = useState([]);

    useEffect(()=>{
      const fetchExcerciseDetail = async()=>{
          const exerciseDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
          setDetail(exerciseDetail);
          
          const exerciseVideosData =  await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,youtubeOptions);
          setExerciseVideos(exerciseVideosData);

          console.log(exerciseDetail);

          const equipemntExercisesData = await fetchData (`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions);
          setSimilarEquipmentExercises(equipemntExercisesData);

          const targetMuscleExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}`, exerciseOptions);
          setsimilarTargetMuscleExercises(targetMuscleExercises);

      }
      fetchExcerciseDetail();
    }, [id])

  return (
    <>
        <Detail detail={detail}/>
        <ExerciseVideos videos={exerciseVideos} name={detail.name}/>
        <SimilarTargetMuscle similarTargetMuscles={similarTargetMuscleExercises}/>
        <SimilarEquipment simialrEquipment={similarEquipmentExercises}/>
        <Footer/>
    </>
  )
}

export default ExerciseDetail;
