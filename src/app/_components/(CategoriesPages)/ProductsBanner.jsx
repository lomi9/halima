import Image from 'next/image';
import React from 'react';

function ProductsBanner({ image, title }) {
  return (
    <div className='relative w-full h-[50vw] sm:h-[30vw] overflow-hidden flex flex-wrap justify-start content-center'>
        <Image fill src={image} alt='Paysage marocain' className='w-full h-full object-cover'/>
        <div className='filter absolute w-full h-full bg-black opacity-30 z-20'>
        </div>
        <div className='mt-[3vw] absolute content w-full lg:w-2/3 h-full p-10 pt-20 lg:p-20 lg:pt-28 z-30 flex flex-wrap justify-start content-center'>
                <h1 className='relative kodchasan font-normal uppercase text-[5vw] sm:text-[2.8vw] text-main-color z-30'>{title}</h1>
            </div>
    </div>
  )
}

export default ProductsBanner