"use client"

import ProductBanner from '../../../app/_components/(ProductPage)/ProductBanner'
import ProductInfo from '../../../app/_components/(ProductPage)/ProductInfo'
import RandomSection from '../../../app/_components/(Random_Products)/RandomSection'
import Breadcrumb from '../../../app/_components/Breadcrumb'
import GlobalApi from '../../../app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

export default function ProductPage ({params}) {


    const [productDetail, setProductDetail]=useState();
    const [category, setCategory] = useState('');

    useEffect(() => {
        params?.productId&&getProductById_();
    }, [params?.productId])

    const getProductById_=()=>{
        GlobalApi.getProductById(params?.productId).then(resp=>{
            const productData = resp.data.data;
            setProductDetail(resp.data.data);
            setCategory(productData?.attributes?.category);
        })
    }

  return (
    <div className='pt-20 '> 
            <Breadcrumb category={productDetail?.attributes?.category} product={productDetail?.attributes?.title}/>
        <div className='flex flex-col mt-10 mb-10 sm:flex-row justify-evenly items-center gap-2'>
            <ProductBanner product={productDetail}/>
            <ProductInfo product={productDetail}/>
        </div>
        <RandomSection/>
    </div>
  )
}

 