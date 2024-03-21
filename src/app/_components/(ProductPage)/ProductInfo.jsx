import React, { useContext, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import GlobalApi from "../../_utils/GlobalApi";
import { CartContext } from '../../../app/_context/CartContext';
import { BadgeAlert, BadgeCheck, ShoppingBasket } from 'lucide-react';
import ProductBanner from './ProductBanner';
import PorteMaroc from "../../../../public/porte_maroc.webp";
import ProductDetailsTabs from "./ProductDetailsTabs";
import Image from 'next/image';

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

  const isOutOfStock = product?.attributes?.stock < 1;

  return (
    <div className='relative flex flex-wrap justify-center w-full'>
      <div className='bg-image relative w-full h-[200vw] sm:h-[97vw] md:h-[95vw] lg:h-[85vw] xl:h-[80vw]  overflow-hidden'>
        <img src={PorteMaroc.src} className=' h-[1000px] sm:h-[97vw] md:h-[900px] lg:h-[1100px] xl:h-[1300px] w-full object-cover rounded-bottom' alt="Porte Maroc"/>
      </div>
      <div className='top-content absolute top-[7vw] left-0 sm:left-4 flex flex-wrap justify-center'>
        <div className='flex flex-wrap w-[100%] justify-center'>
          <div className='top-bloc w-[95%] sm:w-[90%] flex border bg-yellow-color border-solid border-primary-color'>
            <h2 className='pl-[4vw] py-[5vw] sm:py-[3.5vw] m-0 infos__title kodchasan uppercase text-primary-color text-[5vw] sm:text-[3vw] font-normal items-center'>
              {product?.attributes?.title} 
            </h2>
            <p className='px-[2vw] py-[2vw] m-0 infos__size kodchasan text-primary-color text-[4vw] sm:text-[2.5vw] font-thin flex items-center'>
             - {product?.attributes?.size} 
            </p>
          </div>
        <div className='2-bloc w-[95%] sm:w-[90%] bg-yellow-color flex flex-wrap'>
         
          <div className='w-full flex'>
            <div className='w-[40%] sm:w-[50%]  py-[2vw] flex flex-wrap justify-center align-center border border-solid border-primary-color border-t-0'>
            {product?.attributes?.stock > 0 && (
              <div className='flex items-center gap-3'>
                <BadgeCheck className='text-green-500'/>
                <p className='m-0 chakra text-tabbutton-border-color text-[3.5vw] sm:text-[2.3vw] lg:text-[1.6vw]'>En stock</p>
              </div>
            )}
            {product?.attributes?.stock < 1 && (
              <div className='flex items-center gap-3'>
                <BadgeAlert className='text-red-500'/>
                <p className='chakra text-red-500 text-[3.5vw] sm:text-[2.3vw] lg:text-[1.6vw]'>Produit en rupture de stock</p>
              </div>
            )}
            </div>
          <div className='w-[60%] sm:w-[50%] py-[4vw] sm:py-[2vw] flex flex-wrap justify-evenly align-center border border-solid border-r-primary-color border-t-0 border-l-0'>
            <p className=' m-0 infos__title chakra text-primary-color text-[4.5vw] sm:text-[3.4vw] lg:text-[2vw] flex justify-center items-center'>
                {product?.attributes?.price}€
            </p>
            <div className=' flex justify-center items-center'>
              <button className={`flex gap-2 lg:gap-4 py-[2vw] lg:py-[1vw] px-[3vw] sm:px-[2.2vw] lg:px-[1.2vw] bg-accent-color border border-solid kodchasan uppercase flex-wrap justify-center items-center sm:items-end text-main-color rounded-lg border-border-accent font-normal text-[3.5vw] sm:text-[2.2vw] lg:text-[1.8vw] hover:bg-bg-accent hover:text-accent-color cursor-pointer ${isOutOfStock ? 'button-inactive' : ''}`}
                                           onClick={!isOutOfStock ? onAddToCartClick : undefined}
                                           disabled={isOutOfStock}
                >
                <ShoppingBasket className=" w-[3.5vw] sm:w-[2.3vw] lg:w-[1.7vw] h-[3.5vw] sm:h-[2.3vw] lg:h-[1.7vw] flex flex-wrap items-center" />
                {isOutOfStock ? 'En rupture' : 'Acheter'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-wrap w-[95%] sm:w-[90%]'>
      <div className=' w-[100%] bg-yellow-color py-0 sm:py-[5vw]  pb-[10vw] sm:pb-[7vw] flex flex-wrap justify-center border border-solid border-primary-color border-t-0 shadow-xl flex-col sm:flex-row'>
              <div className='w-[100%] sm:w-[45%] flex flex-wrap justify-center items-start '>
                <ProductBanner product={product}/>
              </div>
              <div className=' w-full sm:w-[55%] flex flex-wrap justify-center content-evenly'>
                <div className='flex flex-wrap justify-content items-center w-full'>
                  <h4 className='infos__title chakra my-[10vw] sm:my-[4vw] pb-[4vw] pt-[2vw] pr-[6vw] sm:pr-[2vw] pl-[6vw] sm:pl-0 text-primary-color text-[4.5vw] sm:text-[2vw] font-normal w-full flex '>
                    {product?.attributes?.description}
                  </h4>
                </div>

                <ProductDetailsTabs product={product} />
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


    </div>
  </div>
  )
}

export default ProductInfo