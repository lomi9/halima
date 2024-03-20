import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import MinimalistLitleButton from '../(ui)/MinimalistLitleButton';
import { CartContext } from '../../../app/_context/CartContext';
import { BadgeAlert, BadgeCheck, ShoppingBasket } from 'lucide-react';
import GlobalApi from "../../_utils/GlobalApi";


export default function LitleCard({ product }) {

    const MinimalistButtonLink = `/product/${product.id}` ;
    const MinimalistButtonText = "Voir";

    const {user}=useUser();
    const router=useRouter();
    const {cart,setCart}=useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);

    const onAddToCartClick=()=> {
        if(!user)
        {
          router.push('/sign-in')
          return;
        }
        else{
          const data={
            data:{
              userName:user.fullName,
              email:user.primaryEmailAddress.emailAddress,
              products:product?.id
            }
          }
          GlobalApi.addToCart(data).then(
            (resp) => {
            console.log("Add to cart",resp);
            if(resp)
            {
              setCart((cart) => [
                ...cart,
                {
                  id:resp?.data?.id,
                  product:product
                }
              ]);
              setShowAlert(true); 
              setTimeout(() => setShowAlert(false), 6000);
            }
    
          },(error)=>{
            console.log("Erreur",error)
          }
          )
        }
      }

      const closeAlert = () => {
        setShowAlert(false);
      };

      const isOutOfStock = product?.attributes?.stock < 1;


    return (
        <article className="litle__card ">
        <div className='litle__card-content'>
                    <div className='litle__card-content-header'>
                        <h3 className='litle__card-content-header-title kodchasan'>{product?.attributes?.title}</h3>
                        <p className='litle__card-content-header-text judson'>{product?.attributes?.size}</p>
                    </div>
                    <div className='litle__card-content-product'>
                        <div className='litle__card-content-product-container relative'>
                            <Image  fill src={product?.attributes?.image.data.attributes?.url} alt='produit' className='litle__card-content-product-container-img object-cover'/>
                        </div>
                    </div>
                    <div className='litle__card-content-infos'>
                        <div className='litle__card-content-infos-top'>
                        <MinimalistLitleButton link={MinimalistButtonLink} btnText={MinimalistButtonText} />
                        </div>
                        <div className='litle__card-content-infos-bottom'>
                            <p className='litle__card-content-infos-bottom-price chakra'>{product?.attributes?.price}€</p>
                            <div className='litle__card-content-infos-bottom-cta'>
                                
                                <button className={`litle__card-content-infos-bottom-cta-btn kodchasan ${isOutOfStock ? 'button-inactive' : ''}`}
                            onClick={!isOutOfStock ? onAddToCartClick : undefined}
                            disabled={isOutOfStock}
                            >
                                                                {isOutOfStock ? 'En rupture' : 'Acheter'}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {showAlert && (
            <div role="alert" className="fixed bottom-5 z-10 right-5 w-[26vw] border border-solid border-clear-grey bg-main-color rounded-lg p-4">
              <div className="flex items-start gap-4">
                <span className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  </svg>
                </span>

                <div className="flex-1">
                  <strong className="chakra block font-medium text-gray-900"> Ajouté au panier : </strong>

                    <p className="chakra mt-1 text-sm text-gray-700">{product?.attributes?.title}</p>
                </div>

                  <button className="text-gray-500 transition hover:text-primary-color bg-main-color border-none cursor-pointer" onClick={closeAlert}>
                    <span className="sr-only">Dismiss popup</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                </div>
            </div>
                )}
    </article>
    )
  }
  