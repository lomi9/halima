import React from 'react';
import banner from '../../../public/maroc-architecture.webp';
import Button from './Button';
import Image from 'next/image';

function Banner() {
  return (
    <div className='banner relative flex inset-x-0 h-screen w-screen z-30'>
        <Image layout="fill" src={banner.src} alt='achitecture marocaine' className='banner-img relative object-cover w-full h-full'/>
        <div className='banner-filter absolute flex flex-wrap h-full w-full content-center bg-black opacity-45 z-35'></div>
            <div className=' banner-content flex flex-wrap absolute p-10 h-full sm:w-full md:w-2/3 z-40 justify-center sm:justify-start'>
                <h1 className=' text-main-color w-full kodchasan flex flex-wrap content-end font-semibold text-2xl sm:text-4xl z-40 justify-center sm:justify-start'>HALIMA GARDEN</h1>
                <p className=' text-main-color w-full chakra flex flex-wrap content-center text-lg sm:text-2xl font-normal sm:font-thin z-40 text-center sm:text-justify'>Découvrez notre séléction de produits locaux directement issus de l&apos;artisanat du Maroc. Nos produits sont un hommage aux traditions et à la richesse culturelle et agricole marocaine.</p>
                <Button text="DÉCOUVRIR" href="#content" />
            </div>
    </div>
  )
}

export default Banner