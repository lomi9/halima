"use client"

import Image from 'next/image';
import React from 'react';
import proudly from "../../../../public/proudly.png";
import oliviers from "../../../../public/oliviers.jpg";


function CategoryDescription({ text }) {

  const proudlyImg = proudly;
  const oliviersImg = oliviers;

  return (
  <div className=' product-description bg-yellow-main-color w-[100vw] flex flex-wrap justify-center mt-10 mb-10 max-w-[100vw]'>

    <div className=' w-full sm:w-[70%] m-0 p-[5vw] sm:p-0 sm:pr-[6vw] chakra text-secondary-color text-[4vw] font-thin sm:text-[1.8vw] flex flex-wrap justify-center items-center'>
      {text}
    </div>

    <div className='hidden relative w-1/3 flex-wrap justify-center items-center'>
      <div className='p-5 h-auto max-w-[245px]'>
        <div className=' relative z-[8] rounded-t-[50%] overflow-hidden border-2 border-solid border-tabbutton-border-color border-b-0 flex flex-wrap justify-center items-center shadow-lg'>
          <Image className="relative z-[8] overflow-hidden object-cover rounded-[50%] mt-1" width={200} height={200} src={proudlyImg} alt='Fabriqué au Maroc'/>

        </div>
        <div className=' relative z-[7] mt-[-100px] overflow-hidden border-2 border-solid lex flex-wrap justify-center items-center shadow-lg'>
        <Image className="relative  z-[7] p-0 m-0 overflow-hidden object-cover" width={240} height={200} src={oliviersImg} alt='Paysage Maroc'/>
        </div>
      </div>
    </div>

<div className='right-container w-full sm:w-[15%] h-auto py-[4vw] sm:p-0 flex flex-wrap flex-row sm:flex-col justify-evenly items-center content-center'>
  <div className=' image-top-container w-[30%] sm:w-full overflow-hidden h-[40vw] sm:h-[20vw] flex flex-wrap justify-center items-center content-center'>
    <img src={proudly.src} alt='Fabriqué au maroc'  className=' w-[130%] object-cover'/>

  </div>
  <div className=' image-top-container w-[30%] sm:w-full overflow-hidden h-[33vw] sm:h-[20vw] flex flex-wrap justify-center items-center content-center shadow-md'>
    <img src={oliviers.src} alt='Fabriqué au maroc' className=' w-full object-cover'/>

  </div>

</div>

  </div>
  )
}

export default CategoryDescription