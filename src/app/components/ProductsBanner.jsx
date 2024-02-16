import Image from 'next/image';
import React from 'react';

function ProductsBanner({ image, title, paragraph }) {
  return (
    <div className='relative w-full h-96 overflow-hidden flex flex-wrap justify-start content-center'>
        <Image src={image} alt='Paysage marocain' className='w-full h-full object-cover'/>
        <div className='filter absolute w-full h-full bg-black opacity-30 z-20'>
        </div>
        <div className='absolute content w-full sm:w-2/3 h-full p-20 z-30 flex flex-wrap justify-start content-center'>
                <h1 className='relative kodchasan font-normal uppercase text-4xl text-main-color z-30'>{title}</h1>
                <p className='relative chakra text-lg font-thin text-main-color z-30'>{paragraph}</p>

            </div>
    </div>
  )
}

export default ProductsBanner