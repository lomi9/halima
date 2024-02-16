import Link from 'next/link';
import React from 'react'


export default function LitleCard({ title, subtitle, image, price, category }) {

    const categoryPath = `/${category}`;


    return (
        <article className="litle__card ">
        <div className='litle__card-content'>
                    <div className='litle__card-content-header'>
                        <h3 className='litle__card-content-header-title kodchasan'>{title}</h3>
                        <p className='litle__card-content-header-text judson'>{subtitle}</p>
                    </div>
                    <div className='litle__card-content-product'>
                        <div className='litle__card-content-product-container'>
                            <img src={image} alt='produit' className='litle__card-content-product-container-img'/>
                        </div>
                    </div>
                    <div className='litle__card-content-infos'>
                        <div className='litle__card-content-infos-top'>
                            <Link href={categoryPath} className='litle__card-content-infos-top-btn kodchasan btn-ghost'
                            >
                                Voir</Link>
                        </div>
                        <div className='litle__card-content-infos-bottom'>
                            <p className='litle__card-content-infos-bottom-price chakra'>{price}€</p>
                            <div className='litle__card-content-infos-bottom-cta'>
                                <button className='litle__card-content-infos-bottom-cta-btn kodchasan btn-ghost'>
                                    Acheter
                                </button>
                                <span className='litle__card-content-infos-bottom-cta-line1'></span>
                                <span className='litle__card-content-infos-bottom-cta-line2'></span>
                            </div>
                        </div>
                    </div>
                </div>
    </article>
    )
  }
  