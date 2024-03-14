import React, { useContext, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import GlobalApi from "../../_utils/GlobalApi";
import { CartContext } from '../../../app/_context/CartContext';
import { BadgeAlert, BadgeCheck, ShoppingBasket } from 'lucide-react';
import ProductBanner from './ProductBanner';

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
    } else if(!product?.id) {
      console.error("L'ID du produit est undefined.");
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
      <div className='top-content w-[100%] flex flex-wrap'>
        <div className='flex flex-wrap w-[100%]'>
          <div className='w-[5%]'>

          </div>
          <div className='top-bloc w-[95%] border border-solid border-primary-color border-r-transparent'>
            <h2 className='px-[2vw] py-[2vw] m-0 infos__title kodchasan uppercase text-primary-color text-[3vw] font-normal w-full'>
              {product?.attributes?.title}
            </h2>
          </div>
        <div className='2-bloc w-full  flex flex-wrap'>
          <div className='w-[5%]'>
          </div>
          <div className='w-[95%] flex'>
            <div className='w-[50%] py-[2vw] flex flex-wrap justify-center align-center border border-solid border-primary-color border-t-0'>
              <p className='m-0 infos__title chakra text-primary-color text-[1.6vw]'>
                {product?.attributes?.size}
              </p>
            </div>
          <div className='w-[50%] py-[2vw] flex flex-wrap justify-center align-center border border-solid border-r-primary-color border-t-0 border-l-0 border-r-0'>
            {product?.attributes?.stock > 0 && (
              <div className='flex items-center gap-3'>
                <BadgeCheck className='text-green-500'/>
                <p className='m-0 chakra text-tabbutton-border-color text-[1.6vw]'>En stock</p>
              </div>
            )}
            {product?.attributes?.stock < 1 && (
              <div className='flex items-center gap-3'>
                <BadgeAlert className='text-red-500'/>
                <p className='chakra text-red-500 text-[1.6vw]'>Produit en rupture de stock</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-wrap w-[100%]'>
      <div className='w-[5%]'>
      </div>
      <div className=' w-[95%] py-[3vw] flex flex-wrap justify-center border border-solid border-primary-color border-t-0'>
              <div className='w-[45%] flex flex-wrap justify-center items-center '>
                <ProductBanner product={product}/>
              </div>
              <div className='w-[55%] flex flex-wrap justify-center content-evenly'>
                <div className='flex flex-wrap justify-content items-center w-full'>
                  <p className='infos__title chakra pb-[4vw] pt-[2vw] pr-[2vw] text-primary-color text-[1.5vw]'>
                    {product?.attributes?.description}
                  </p>
                </div>

                <div className='bg-section-color w-[100%] mr-[4vw] h-[400px] rounded-lg'>
                  <p className='chakra text-[1.6vw] p-[3vw]'>
                    {product?.attributes?.utilisation}
                  </p>
                </div>
              </div>
      </div>



    </div>

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