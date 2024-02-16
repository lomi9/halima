import Image from 'next/image';
import React from 'react';

function ProductsBanner({ image, title, paragraph }) {
  return (
    <div className='relative w-full h-96 overflow-hidden flex flex-wrap justify-start content-center'>
        <Image layout="fill" src={image} alt='Paysage marocain' className='w-full h-full object-cover'/>
        <div className='filter absolute w-full h-full bg-black opacity-30 z-20'>
        </div>
        <div className='absolute content w-full lg:w-2/3 h-full p-10 pt-20 lg:p-20 lg:pt-28 z-30 flex flex-wrap justify-start content-center'>
                <h1 className='relative kodchasan font-normal uppercase text-2xl sm:text-4xl text-main-color z-30'>{title}</h1>
                <p className='relative chakra text-base sm:text-lg lg:text-2xl font-thin text-main-color z-30'>{paragraph}</p>

            </div>
    </div>
  )
}

export default ProductsBanner