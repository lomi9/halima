import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
    <div>
        <div>
            <Image
            src={product?.attributes?.image.data.attributes?.url}
            alt='banner'
            width={400}
            height={350}
            />
            <p>{product?.attributes?.price}</p>
        </div>
    </div>
  )
}

export default ProductItem