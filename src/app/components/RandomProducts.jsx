// RandomProducts.jsx
import React from 'react';
import LitleCard from './LitleCard';
import productsData from '../products.json';

function RandomProducts() {
  // Transformez les produits en tableau et mélangez-les
  const allProducts = Object.values(productsData.categories).flatMap(Object.values);
  const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

  return (
    <div className="random__products flex flex-wrap overflow-hidden w-screen mt-7 pb-28 bg-section-color">
      <div className='w-full pb-20 pt-12'>
        <div className='relative flex flex-wrap justify-center content-center w-auto'>
        <h3 className='kodchasan font-light uppercase flex flex-wrap content-center justify-center text-secondary-color text-3xl m-1.5'>Tous nos produits</h3>
        <span className='line bottom-0 absolute flex w-44 h-px bg-primary-color flex-wrap justify-center content-center'></span>
        </div>
      </div>
              <div className="flex overflow-scroll">
      {shuffledProducts.map((product) => (
        <LitleCard
        key={product.id}
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ))}
      </div>
    </div>
  );
}

export default RandomProducts;
