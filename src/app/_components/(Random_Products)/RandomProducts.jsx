// RandomProducts.jsx
import React from 'react';
import LitleCard from './LitleCard';

function RandomProducts({productList}) {


  return (
    <div className="random__products flex flex-wrap overflow-hidden w-screen mt-7 pb-28 bg-section-color rounded-[30px]">
      <div className='w-full pb-20 pt-12'>
        <div className='relative flex flex-wrap justify-center content-center w-auto'>
        <h3 className='kodchasan font-light uppercase flex flex-wrap content-center justify-center text-secondary-color text-3xl m-1.5'>Tous nos produits</h3>
        <span className='line bottom-0 absolute flex w-44 h-px bg-primary-color flex-wrap justify-center content-center'></span>
        </div>
      </div>
              <div className="flex overflow-scroll pb-10">
      {productList.map((item, index) => (
        <LitleCard
        key={index}
        product={item}
        />
      ))}
      </div>
    </div>
  );
}

export default RandomProducts;
