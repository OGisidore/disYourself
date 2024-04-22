/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/04/2024 17:39:32
*/
import React, { FC, useEffect } from 'react';
import './DisplayMovie.css';
import { Trends } from '../../models/Trends';
import { RequestResponse } from '../../models/Request';
import { getData } from '../../api/entities';


interface DisplayMovieProps {
  movie: Trends

}


const DisplayMovie: FC<DisplayMovieProps> = ({ movie }) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const videoData: RequestResponse = await getData(`movie/${movie.id}/videos?language=fr-FR`)
      console.log(videoData.results[0]);




    }
    runLocalData()
  },[])

  return (
    <div className="DisplayMovie bg-gray-200 p-4 col-span-1">
      <img src={` https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`} className='w-full h-auto' alt={movie.title} />
      <h1 className='desc'>{movie.title} disponible </h1>

     

    </div>
  );
}

export default DisplayMovie;
