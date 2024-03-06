"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'


function ProductsList( {productList} ){

  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (product) => {
      setSelectedProduct(product);
    
    };

    useEffect(() => {
      if (productList && Object.keys(productList).length > 0) {
          const firstKey = Object.keys(productList)[0];
          setSelectedProduct(productList[firstKey]);
          setIsLoading(false);
      }
  }, [productList]);

  const Skeleton = () => (
    <div className="skeleton-product-card w-[65vw] h-[75vw] sm:w-[23vw] sm:h-[20vw] bg-skeleton-bg animate-pulse mr-[3vw]">
    </div>
  );


  return (
    <>
    <div className='products__content whitespace-nowrap scroll-smooth'>
    {isLoading ? (
      <div className='skeleton-cards-container flex w-auto px-0 py-[5vw] overflow-hidden'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          </div>
        ) : (
        Object.keys(productList).map((key) => {
                    const product = productList[key];
                    const isSelected = selectedProduct && product.id === selectedProduct.id;
                    return (
                      <ProductCard 
                        key={key}
                        product={product} 
                        isSelected={isSelected}
                        onProductClick={handleButtonClick}
                        />
        );
      })
        )}
    </div>
    <section id="target-section"> 
</section>
</>
  )
}

export default ProductsList