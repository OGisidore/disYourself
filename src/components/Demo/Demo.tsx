/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/04/2024 13:28:57
*/
import React, { FC, useEffect, useState } from 'react';
import './Demo.css';
import { logo } from '../../assets';
import { RequestResponse } from '../../models/Request';
import { getData } from '../../api/entities';
import { videos } from '../../api/data';
import { Trends } from '../../models/Trends';
import DisplayMovie from '../DisplayMovie/DisplayMovie';


interface DemoProps {

}


const Demo: FC<DemoProps> = () => {
 // const [videos, setVideos] = useState<Trends[]>([])



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
    /*  const data: RequestResponse = await getData("trending/all/week?language=fr-FR")
      setVideos(data.results as Trends[])
      console.log(data.isSuccess);

      console.log(data.results);*/
	console.log(videos)

    }
    runLocalData()
  },[])

  return (
    <div className="Demo w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/isidoreo/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Detends-toi avec les choix de film que nous avons faire pour vous  <br className='max-md:hidden' />
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {
           videos.map((video)=>{
            return <DisplayMovie key={video.id} movie={video}/>
          })
        }
        
      </div> 
	<div className="" > ola </div>


    </div>
  );
}

export default Demo;
