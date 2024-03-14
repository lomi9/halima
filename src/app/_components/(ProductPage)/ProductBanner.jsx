import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div className=' mt-[5vw] flex flex-wrap justify-center items-center'>
      <div className='w-[80%] overflow-hidden flex flex-wrap justify-center items-center shadow-lg'>
        {product?  <img src={product?.attributes?.image.data.attributes?.url}
          alt={product?.attributes?.title}

          className='relative w-full h-full object-cover'
          />:
        <div className='skeleton w-[200px] h-[250px] bg-skeleton-bg rounded-lg animate-pulse'>

        </div>}

      </div>
    </div>
  )
}

export default ProductBanner