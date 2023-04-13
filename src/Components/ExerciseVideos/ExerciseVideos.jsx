import React from 'react';
import './ExerciseVideos.css';
import Loader from '../Loader/Loader';

const ExerciseVideos = ({videos, name}) => {
    console.log(videos.contents);
  return (
    <div className="exercise-video__container">
        <h1>Watch <span>{name}</span> exercise videos</h1>
        {videos.contents ? (<div className="videos">
            {videos.contents.slice(0,10).map((video, index)=>{
                return ( <a 
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                >
                <img src={video.video.thumbnails[0].url} alt="Thumbnail" />
                <h5><span>YouTube Channel:</span> &nbsp; {video.video.channelName}</h5>
                </a>)
            })}
        </div>) : (<Loader/>)}
        
    </div>
    
  )
}

export default ExerciseVideos;
