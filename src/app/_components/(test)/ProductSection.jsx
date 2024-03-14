"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import ProductList from './ProductList';

function ProductSection() {

    const [productList,setProductList]=useState([]);

    useEffect(()=>{
        getProducts_();

    }, [])

    const getProducts_=()=>{
        GlobalApi.getProducts().then(resp=>{
            console.log(resp.data.data);
            setProductList(resp.data.data)
        })
    }

  return productList&&(
    <div>
        <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection