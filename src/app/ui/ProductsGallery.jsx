'use client'

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ProductsDescription from '../_components/(CategoriesPages)/ProductsDescription';
import ProductCard from '../_components/(CategoriesPages)/ProductCard';

gsap.registerPlugin(ScrollToPlugin);


export default function ProductsGallery({ products }) {

    const [selectedProduct, setSelectedProduct] = useState({});

    const handleButtonClick = (product) => {
        setSelectedProduct(product);
      
        gsap.to(window, {duration: 1, scrollTo: "#target-section"});
      };

    useEffect(() => {
        if (products && Object.keys(products).length > 0) {
            const firstKey = Object.keys(products)[0];
            setSelectedProduct(products[firstKey]);
        }
    }, [products]);


  return (
    <>
    <section className='products'>
        <div className='products__content whitespace-nowrap scroll-smooth'>
        {Object.keys(products).map((key) => {
          const product = products[key];
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
    </section>
    <section id="target-section"> 
        <ProductsDescription product={selectedProduct}/>
    </section>
    </>
  )
}