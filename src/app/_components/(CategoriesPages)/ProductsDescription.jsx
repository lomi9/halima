"use client"

import React, { useState, useEffect } from 'react';
import image from "../../../../public/oliviers.jpg";
import proudly from "../../../../public//proudly.png";
import TabButton from '../(ui)/TabButton';
import Image from 'next/image';

function ProductsDescription({ product }) {

    const [activeTab, setActiveTab] = useState('ingredients');

    if (!product) {
        return <div>Sélectionnez un produit pour voir les détails.</div>;
    }

    const changeTab = (newTab) => {
        setActiveTab(newTab);
    };

    const getContent = () => {
        switch (activeTab) {
            case 'ingredients':
                return product?.attributes?.ingredients;
            case 'vertues':
                return product?.attributes?.benefits; 
            case 'utilisation':
                return product?.attributes?.utilisation; 
            default:
                return 'Contenu non disponible';
        }
    };

    useEffect(() => {
        setActiveTab('ingredients'); // Réinitialise l'onglet actif à chaque changement de produit
      }, [product]);


  return (
    <section className='description'>
        <div className='description__line'>
        </div>
        <div className='description__triangle'>
        </div>
        <div className='description__content'> 
            <div className='description__content-left'>
                <div className='description__content-left-content'>
                    <div className='description__content-left-content-img1 relative'>
                        <Image layout="fill" src={proudly.src} className='description__content-left-content-img1-img' alt='Production marocaine'/>
                    </div>
                    <div className='description__content-left-content-img2 relative'>
                                    <Image layout="fill" src={image.src} alt="image produit" className='description__content-right-text-content-top-image-img'/>
                                
                    </div>
                </div>
            </div>
            <div className='description__content-right'>
                <h4 className='description__content-right-title kodchasan'>{product?.attributes?.title}</h4>
                <p className='description__content-right-subtitle chakra'>- {product?.attributes?.size}</p>
                <div className='description__content-right-text chakra'>
                    <div className='description__content-right-text-content chakra'>
                        <div className='description__content-right-text-content-top'>
                            <div className='description__content-right-text-content-top-image relative'>
                            {product?.attributes?.image.data && (
                                    <Image layout="fill" src={product?.attributes?.image.data.attributes?.url} alt="image produit" className='description__content-right-text-content-top-image-img'/> 
                                )}
                            </div>
                        <p className='description__content-right-text-content-top-p chakra'>
                        {getContent()}
                        </p>
                        </div>
                        <div className='description__content-right-text-content-buttons'>
                        <TabButton
                            tabButton="Ingrédients"
                            isActive={activeTab === 'ingredients'}
                            onClick={() => changeTab('ingredients')}
                        />
                        <TabButton
                            tabButton="Vertues"
                            isActive={activeTab === 'vertues'}
                            onClick={() => changeTab('vertues')}
                        />
                        <TabButton
                            tabButton="Utilisation"
                            isActive={activeTab === 'utilisation'}
                            onClick={() => changeTab('utilisation')}
                        />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsDescription