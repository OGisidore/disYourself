/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/04/2024 13:28:57
*/
import React, { FC, useEffect } from 'react';
import './Hero.css';


interface HeroProps {
 
}


const Hero : FC<HeroProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Hero">
          Hero Component
      </div>
  );
}

export default Hero;