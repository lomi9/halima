"use client"

import ProductBanner from '../../../app/_components/(ProductPage)/ProductBanner'
import ProductInfo from '../../../app/_components/(ProductPage)/ProductInfo'
import RandomSection from '../../../app/_components/(Random_Products)/RandomSection'
import Breadcrumb from '../../../app/_components/Breadcrumb'
import GlobalApi from '../../../app/_utils/GlobalApi'
import React, { useEffect, useState, useCallback } from 'react'
import AllCategories from '../../_components/(CategoriesPages)/AllCategories'

export default function ProductPage ({params}) {


    const [productDetail, setProductDetail]=useState();
    const [category, setCategory] = useState('');

    const getProductById_ = useCallback(() => {
        if (params?.productId) {
            GlobalApi.getProductById(params.productId).then(resp => {
                const productData = resp.data.data;
                setProductDetail(productData);
                setCategory(productData?.attributes?.category);
            });
        }
    }, [params?.productId]);

    useEffect(() => {
        getProductById_();
    }, [getProductById_]);

  return (
    <div className='pt-[90px] '> 
            <Breadcrumb category={productDetail?.attributes?.category} product={productDetail?.attributes?.title}/>
        <div className='flex flex-wrap mt-[5vw] w-[100%]'>
            <ProductInfo product={productDetail}/>
        </div>
        <AllCategories/>
        <RandomSection/>
    </div>
  )
}

 