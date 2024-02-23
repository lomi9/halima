import React from 'react'
import ProductItem from './ProductItem'

function ProductList( {productList} ){
  return (
    <div>
        {productList.map((item, index) =>(
            <div key={index}>
                <ProductItem product={item} />
            </div>
        ))}
    </div>
  )
}

export default ProductList