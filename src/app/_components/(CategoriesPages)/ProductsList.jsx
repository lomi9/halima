"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'


function ProductsList( {productList} ){

  const [selectedProduct, setSelectedProduct] = useState({});

  const handleButtonClick = (product) => {
      setSelectedProduct(product);
    
    };

    useEffect(() => {
      if (productList && Object.keys(productList).length > 0) {
          const firstKey = Object.keys(productList)[0];
          setSelectedProduct(productList[firstKey]);
      }
  }, [productList]);


  return (
    <>
    <div className='products__content whitespace-nowrap scroll-smooth'>
        {Object.keys(productList).map((key) => {
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
      })}
    </div>
    <section id="target-section"> 
</section>
</>
  )
}

export default ProductsList