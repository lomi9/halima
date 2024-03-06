import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div className='p-[3vw]'>

      {product?  <Image src={product?.attributes?.image.data.attributes?.url}
        alt="Image du produit"
        width={200}
        height={250}
        className='rounded-lg object-cover '
        />:
        <div className='w-[200px] h-[250px] bg-skeleton-bg rounded-lg animate-pulse'>

        </div>}
    </div>
  )
}

export default ProductBanner