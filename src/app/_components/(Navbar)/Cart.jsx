import React, { useContext, forwardRef, useState } from 'react'
import { CartContext } from '../../_context/CartContext'
import Link from 'next/link';
import { Frown, X } from 'lucide-react';

const Cart = forwardRef(({ onCloseCart,...props }, ref) => {

  const { cart } = useContext(CartContext);

  const [loaded, setLoaded] = useState(cart.map(() => false));

  const handleViewCartClick = () => {
    if(onCloseCart) {
      onCloseCart();
    }
  };


  return (
    <div ref={ref} className='h-[320px] w-[250px] bg-yellow-color z-10 rounded-md absolute mx-10 mt-1 top-[90%] p-5 border border-solid border-primary-color shadow-lg flex flex-wrap justify-center'>
      <div className='w-full h-full relative flex justify-center'>
      <button
        onClick={onCloseCart}
        className=" cursor-pointer absolute top-[-16px] right-[-20px] text-lg font-bold border-none bg-transparent"
      >
        <X className='text-primary-color '/>
      </button>
      <div className='w-full h-full overflow-auto'>
      <div className=" relative mt-8 space-y-6">
        {cart.length === 0 ? (
          <>
                      <div className='kodchasan flex flex-wrap justify-center content-center items-center text-primary-color text-[18px] pt-[30px]'><Frown/></div>
            <div className='kodchasan flex flex-wrap justify-center content-center items-center text-primary-color text-[18px] pb-[90px]'>Votre panier est vide.</div>
            </>
              ) : (
            <ul className="p-0 kodchasan">

              {cart.map((item,index)=>(
                <li className="flex items-center mb-[7px]" key={index}>
                   <Link href={`/product/${item?.product?.id}`} className=' transition-border border border-solid border-transparent hover:border-secondary-color  duration-300 rounded-lg w-full flex items-center gap-4 p-[6px]'>

                  <div className='relative w-[70px] h-[90px]'>
                    <img
                      src={item?.product?.attributes?.image?.data?.attributes?.url}
                      alt={item?.product?.attributes?.title}
                      className= "absolute top-0 left-0 z-[7] w-full h-full rounded object-cover"
                    />
                    <div className="absolute top-0 left-0 z-[6] skeleton w-full h-[80%] rounded bg-skeleton-bg"></div>
                  </div>

                  <div className='w-[53%]'>
                    <h3 className="text-sm text-gray-900 ">{item?.product?.attributes?.title}</h3>
                    <dl className="flex text-[10px] text-gray-600 w-full justify-between">
                      <div>
                        <dt className="flex">{item?.product?.attributes?.size}</dt>
                      </div>

                      <div className='flex w-full justify-end'>
                        <dd className=" w-full flex justify-end m-0 p-0">{item?.product?.attributes?.price}€</dd>
                      </div>
                    </dl>
                  </div>
                  </Link>
                </li>
              ))}


            </ul>
             )}
          </div>
          <div className='h-[50px] w-full'></div>
        
          </div>
          <div className="space-y-4 text-center flex flex-wrap absolute bottom-0 left-0 ">
            <Link
              href="/cartPage"
              onClick={handleViewCartClick}
              className=" z-[8] chakra block rounded bg-secondary-color px-5 py-3 hover:text-secondary-color text-main-color font-normal transition hover:bg-green-hover border border-solid border-secondary-color text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] cursor-pointer"
            >
              Voir mon panier ({cart?.length})
            </Link>

          </div>
          </div>
      </div>
    
  )
});
Cart.displayName = 'Cart';

export default Cart