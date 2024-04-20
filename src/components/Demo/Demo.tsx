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
import { Trends } from '../../models/Trends';
import DisplayMovie from '../DisplayMovie/DisplayMovie';


interface DemoProps {

}


const Demo: FC<DemoProps> = () => {
  const [videos, setVideos] = useState<Trends[]>([])



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const data: RequestResponse = await getData("trending/all/week?language=fr-FR")
      setVideos(data.results as Trends[])
      console.log(data.isSuccess);

      console.log(data.results);

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
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient' >OpenAI GPT-4</span>
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {
          videos.length && videos.map((video:Trends)=>{
            return <DisplayMovie key={video.id} movie={video}/>
          })
        }
        
      </div>


    </div>
  );
}

export default Demo;