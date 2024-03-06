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
    <div className="skeleton-product-card w-[65vw] h-[85vw] sm:w-[27vw] sm:h-[35vw] bg-skeleton-bg animate-pulse m-[1.7vw] mr-[5.5vw] sm:m-[1.5vw] inline-block">
    </div>
  );


  return (
    <>
    <div className='products__content whitespace-nowrap scroll-smooth'>
    {isLoading ? (
      <div className='skeleton-cards-container w-auto px-0 py-[5vw] overflow-hidden'>
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