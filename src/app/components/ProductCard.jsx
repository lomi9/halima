import Image from 'next/image'
import React from 'react'

export default  function ProductCard({ product, isSelected, onProductClick }) {
  return (
    <article className={`product__card ${isSelected ? 'selected' : ''}`} onClick={() => onProductClick(product)}>
        <div className='product__card-content'>
                    <div className='product__card-content-header'>
                        <h3 className='product__card-content-header-title kodchasan'>{product.title}</h3>
                        <p className='product__card-content-header-text judson'>{product.subtitle}</p>
                    </div>
                    <div className='product__card-content-product'>
                        <div className='product__card-content-product-container relative'>
                            <Image layout="fill" src={product.image} alt='produit' className='product__card-content-product-container-img'/>
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
                            <p className='product__card-content-infos-bottom-price chakra'>{product.price}€</p>
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
                </div>
    </article>
  )
}

