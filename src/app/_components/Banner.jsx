import React from 'react';
import banner from '../../../public/maroc-architecture.webp';
import Button from './(ui)/Button';
import Image from 'next/image';

function Banner() {
  return (
    <div className='banner relative flex inset-x-0 h-screen w-screen z-30'>
        <Image fill src={banner.src} alt='achitecture marocaine' className='banner-img relative object-cover w-full h-full'/>
        <div className='banner-filter absolute flex flex-wrap h-full w-full content-center bg-black opacity-45 z-35'></div>
            <div className=' banner-content flex flex-wrap absolute p-10 h-full sm:w-full md:w-3/4 z-40 justify-center sm:justify-start'>
                <h1 className=' text-main-color w-full kodchasan flex flex-wrap content-end font-semibold text-[6vw] sm:text-[4.5vw] md:text-[4vw] xl:text-[4vw] z-40 justify-center sm:justify-start'>HALIMA GARDEN</h1>
                <div className='w-full flex flex-wrap content-center pt-[2vw] pb-[5vw]'>
                  <p className=' text-main-color w-full chakra flex flex-wrap content-center text-[4vw] leading-[8vw] sm:text-[3vw] md:text-[3vw] sm:leading-[4.5vw] font-normal sm:font-thin xl:text-[2.5vw] z-40 text-center sm:text-justify xl:text-left xl:tracking-[0.4vw] xl:leading-[3vw] p-0 m-0'>Découvrez notre séléction de produits locaux directement issus de l&apos;artisanat du Maroc. </p>
                  <p className='text-main-color w-full chakra flex flex-wrap content-center text-[4vw] leading-[8vw] sm:text-[3vw] md:text-[3vw] sm:leading-[4.5vw] font-normal sm:font-thin xl:text-[2.5vw] z-40 text-center sm:text-justify xl:text-left xl:tracking-[0.4vw] xl:leading-[3vw] p-0 m-0'> Nos produits sont un hommage aux traditions et à la richesse culturelle et agricole marocaine.</p>
                </div>
                <Button text="DÉCOUVRIR" href="#content" />
            </div>
    </div>
  )
}

export default Banner