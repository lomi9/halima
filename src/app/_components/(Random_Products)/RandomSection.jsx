"use client"
import React, { useEffect, useState } from 'react'

import GlobalApi from '@/app/_utils/GlobalApi';
import RandomProducts from './RandomProducts';

export default function RandomSection( ) {

    const [randomProducts,setRandomProducts]=useState([]);

    useEffect(() => {
      GlobalApi.getProducts().then(response => {
        const products = response.data.data;
        const shuffledProducts = shuffleArray(products); // Mélange les produits
        setRandomProducts(shuffledProducts);
      }).catch(error => {
        console.error("Erreur lors de la récupération des produits:", error);
      });
    }, []);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    return (
      <div className='random-products'>
        {randomProducts && <RandomProducts productList={randomProducts} />}
      </div>
    );
  }
