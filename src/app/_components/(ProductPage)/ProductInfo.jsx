import React, { useContext, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import GlobalApi from "../../_utils/GlobalApi";
import { CartContext } from '../../../app/_context/CartContext';
import { BadgeAlert, BadgeCheck, ShoppingBasket } from 'lucide-react';

function ProductInfo({product}) {

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

  return (
    <div>
    <div className='p-[3vw]'>
        <h2 className='infos__title kodchasan uppercase text-primary-color text-[4vw]'>
            {product?.attributes?.title}
        </h2>
        <p className='infos__title chakra text-primary-color text-[2vw]'>
            {product?.attributes?.size}
        </p>
        {product?.attributes?.stock > 0 && (
        <div className='flex items-center gap-3'>
          <BadgeCheck className='text-green-500'/>
          <p className='chakra text-clear-grey text-[2.5vw]'>En stock</p>
        </div>
      )}
      {product?.attributes?.stock < 1 && (
        <div className='flex items-center gap-3'>
          <BadgeAlert className='text-red-500'/>
          <p className='chakra text-red-500 text-[2.5vw]'>Produit en rupture de stock</p>
        </div>
      )}
        <p className='infos__title chakra text-primary-color text-[2vw]'>
            {product?.attributes?.description}
        </p>
        <p className='infos__title chakra text-secondary-color text-[3vw]'>
            {product?.attributes?.price}€
        </p>
        <button className='flex gap-2 p-4 bg-accent-color border border-solid kodchasan uppercase justify-center items-center text-main-color rounded-lg border-border-accent font-normal text-[3vw] px-10 hover:bg-hover-accent cursor-pointer'
        onClick={()=>onAddToCartClick()}
        >
            <ShoppingBasket className="text" />
            Ajouter
        </button>

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


    </div>
  </div>
  )
}

export default ProductInfo