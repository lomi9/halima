"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi';
import ProductsList from './ProductsList';

function ProductsSection({ category }) {

    const [productList,setProductList]=useState([]);

    useEffect(()=>{
        getProducts_(category);

    }, [category])

    const getProducts_=(category)=>{
        GlobalApi.getProducts(category).then(resp=>{
            console.log(resp.data.data);
            setProductList(resp.data.data)
        })
    }

  return productList&&(
    <div className='products'>
            <ProductsList productList={productList} />
    </div>
  )
}

export default ProductsSection