import React from 'react';
import banner from '../../../public/maroc-architecture.webp';
import Button from './Button';

function Banner() {
  return (
    <div className='banner relative flex inset-x-0 h-screen w-screen z-30'>
        <img src={banner.src} alt='achitecture marocaine' className='banner-img relative object-cover w-full h-full'/>
        <div className='banner-filter absolute flex flex-wrap h-full w-full content-center bg-black opacity-45 z-35'></div>
            <div className=' banner-content flex flex-wrap absolute p-10 h-full content-center sm:w-full md:w-2/3 z-40'>
                <h1 className=' text-main-color kodchasan font-semibold text-4xl z-40'>HALIMA GARDEN</h1>
                <p className=' text-main-color chakra text-2xl font-thin z-40 text-justify'>Découvrez notre séléction de produits locaux directement issus de l'artisanat du Maroc. Nos produits sont un hommage aux traditions et à la richesse culturelle et agricole marocaine.</p>
                <Button text="DÉCOUVRIR" href="/content" />
            </div>
    </div>
  )
}

export default Banner