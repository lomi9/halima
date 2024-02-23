import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default  function ProductCard({product, onProductClick}) {
  return (
    <Link href={'/product/'+product.id} className="product__card">
        <article className='product__card-content'>
                    <div className='product__card-content-header'>
                        <h3 className='product__card-content-header-title kodchasan'>{product?.attributes?.title}</h3>
                        <p className='product__card-content-header-text judson'>{product?.attributes?.size}</p>
                    </div>
                    <div className='product__card-content-product'>
                        <div className='product__card-content-product-container relative'>
                            <Image 
                            src={product?.attributes?.image.data.attributes?.url} 
                            alt='produit' 
                            layout='fill'
                            className='product__card-content-product-container-img'/>
                        </div>
                    </div>
                    <div className='product__card-content-infos'>
                        <div className='product__card-content-infos-top'>
                            <button className='product__card-content-infos-top-btn kodchasan btn-ghost'
                           onClick={() => onProductClick(product)}
                            >
                                Voir</button>
                        </div>
                        <div className='product__card-content-infos-bottom'>
                            <p className='product__card-content-infos-bottom-price chakra'>{product?.attributes?.price}€</p>
                            <div className='product__card-content-infos-bottom-cta'>
                                <div className='product__card-content-infos-bottom-cta-btn'>
                                    <button className='product__card-content-infos-bottom-cta-btn-text kodchasan'>
                                     Acheter
                                    </button>
                                    <span className='product__card-content-infos-bottom-cta-btn-line1'></span>
                                    <span className='product__card-content-infos-bottom-cta-btn-line2'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
    </Link>
  )
}

