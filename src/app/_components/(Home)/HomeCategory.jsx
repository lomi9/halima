import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function HomeCategory({ topImage, behindImage, title, paragraph, link }) {
  return (
    <section className='category'>
        <div className=' category__left'>
            <div className="category__left-image1">
                <Image layout="fill" src={topImage} alt="Produit artisanal marocain" className='object-cover w-full h-full text-center'/>
            </div>
            <div className="category__left-image2">
                <Image  layout="fill" src={behindImage} alt="Produit artisanal marocain" className='object-cover w-full h-full text-center'/>
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
                <div className='category__right-content-button'>
                    <Link href={link} className='kodchasan category__right-content-button-btn btn-ghost'>Voir les produits</Link>
                    <span className='category__right-content-button-line1'></span>
                    <span className='category__right-content-button-line2'></span>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HomeCategory