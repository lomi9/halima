"use client"

import React, { useEffect, useState } from 'react';
import LitleCard from './LitleCard';

function RandomProducts({productList}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (productList && Object.keys(productList).length > 0) {
        setIsLoading(false);
    }
}, [productList]);

const Skeleton = () => (
  <div className="skeleton-product-card w-[65vw] h-[85vw] sm:w-[27vw] sm:h-[35vw] bg-skeleton-bg animate-pulse m-[1.7vw] mr-[5.5vw] sm:m-[1.5vw] inline-block">
  </div>
);

  return (
    <div className="random__product flex flex-wrap overflow-hidden w-screen mt-7 pb-28 bg-section-color">
      <div className='w-full pb-20 pt-12'>
        <div className='relative flex flex-wrap justify-center content-center w-auto'>
        <h3 className='kodchasan font-light uppercase flex flex-wrap content-center justify-center text-secondary-color text-3xl m-1.5'>Tous nos produits</h3>
        <span className='line bottom-0 absolute flex w-44 h-px bg-primary-color flex-wrap justify-center content-center'></span>
        </div>
      </div>
              <div className="random-products-list flex overflow-scroll pb-10">
              {isLoading ? (
      <div className='skeleton-cards-container w-auto px-0 py-[5vw] overflow-hidden'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          </div>
        ) : (
      productList.map((item, index) => (
        <LitleCard
        key={index}
        product={item}
        />
      ))
      )}
      </div>
     
    </div>
  );
}

export default RandomProducts;
