import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div className=' mt-[10vw] sm:mt-[5vw] flex flex-wrap justify-center items-start'>
      <div className='w-[80%] h-[250px] sm:h-[350px] md:h-[350px]  overflow-hidden flex flex-wrap justify-center items-start shadow-lg'>
        {product?  <img src={product?.attributes?.image.data.attributes?.url}
          alt={product?.attributes?.title}

          className='relative w-full h-full object-cover overflow-hidden'
          />:
        <div className='skeleton w-[200px] h-[250px] bg-skeleton-bg rounded-lg animate-pulse'>

        </div>}

      </div>
    </div>
  )
}

export default ProductBanner