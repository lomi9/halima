import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MinimalistButton from '../(ui)/MinimalistButton';


function HomeCategory({ topImage, behindImage, title, paragraph, btnLink, btnText }) {

  return (
    <section className='category'>
        <div className=' category__left'>
            <div className="category__left-image1">
                <Image layout="fill" src={topImage} alt="Produit artisanal marocain" className='object-cover w-full h-full text-center shadow-lg'/>
            </div>
            <div className="category__left-image2">
                <Image  layout="fill" src={behindImage} alt="Produit artisanal marocain" className='object-cover w-full h-full text-center shadow-lg'/>
            </div>
            <span className='category__left-line'></span>
            <div></div>
            <span></span>
        </div>

        <div className='category__right'>
            <div className='category__right-content'>
                <h1 className='category__right-content-title kodchasan'>{title}</h1>
                <span className='category__right-content-line'></span>
                <p className='category__right-content-text chakra '>{paragraph}</p>
                <MinimalistButton link={btnLink} btnText={btnText}/>
            </div>
        </div>
        
    </section>
  )
}

export default HomeCategory