import React, {useState,useEffect} from 'react'
import {Type} from './Type'
import { Skills } from './Skills'
import hero from '../assets/flowerbw.jpg'
import wave from '../assets/parrot.gif'



export const Banner = () => {


  return (
    <main >
      <section>
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0v flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            Hey There! <img src={wave} alt=":Insert Waving Hand:" className="w-12 h-12 ml-5 mb-5"  />
          </h1>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white "> 
            I'M GEORGE ABRAHAM</h1>
          <div className='text-4xl font-bold mb-4 text-gray-800 dark:text-greeny' >
              <Type  />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={hero}
            alt="Developer working" 
            className="rounded-lg shadow-lg opacity-90 w-1/2"
          />
        </div>
      </div>
      </section>
      <Skills />
    </main>
      
  );
}