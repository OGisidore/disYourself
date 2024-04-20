/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/04/2024 17:39:32
*/
import React, { FC, useEffect, useState } from 'react';
import './DisplayMovie.css';
import { Trends } from '../../models/Trends';
import { RequestResponse } from '../../models/Request';
import { getData } from '../../api/entities';
import { Movies } from '../../models/Movies';
import ReactPlayer from 'react-player';


interface DisplayMovieProps {
  movie: Trends

}


const DisplayMovie: FC<DisplayMovieProps> = ({ movie }) => {
  const [video, setVideo] = useState<Movies | null>(null)



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const videoData: RequestResponse = await getData(`movie/${movie.id}/videos?language=fr-FR`)
      console.log(videoData.results[0]);

      setVideo(videoData.results[0] as Movies)



    }
    runLocalData()
  },[])

  return (
    <div className="DisplayMovie bg-gray-200 p-4 col-span-1">
      <img src={` https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`} className='w-full h-auto' alt={movie.title} />
      <h1 className='desc'>{movie.title}</h1>

      <div className=" player h-auto">
        

        <ReactPlayer  url={`https://www.youtube.com/watch?v=${video?.key}`} controls />
      </div>

    </div>
  );
}

export default DisplayMovie;