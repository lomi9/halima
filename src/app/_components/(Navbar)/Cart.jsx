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

  const handleImageLoaded = (index) => {
    setLoaded(loaded.map((item, idx) => (idx === index ? true : item)));
  };


  return (
    <div ref={ref} className='h-[300px] w-[250px] bg-yellow-color z-10 rounded-md absolute mx-10 mt-1 top-[90%] p-5 border border-solid border-primary-color shadow-lg flex flex-wrap justify-center'>
      <div className='w-full h-full relative'>
      <button
        onClick={onCloseCart}
        className="cursor-pointer absolute top-0 right-0 text-lg font-bold border-none bg-transparent"
      >
        <X className='text-primary-color '/>
      </button>
      <div className='w-full h-full overflow-auto'>
      <div className=" relative mt-4 space-y-6">
        {cart.length === 0 ? (
          <>
                      <div className='kodchasan flex flex-wrap justify-center content-center items-center text-primary-color text-[18px] pt-[30px]'><Frown/></div>
            <div className='kodchasan flex flex-wrap justify-center content-center items-center text-primary-color text-[18px] pb-[90px]'>Votre panier est vide.</div>
            </>
              ) : (
            <ul className="p-0 kodchasan">

              {cart.map((item,index)=>(
                <li className="flex items-center gap-4" key={index}>
                           {!loaded[index] && <div className="skeleton size-16 rounded bg-skeleton-bg"></div>}
                  <img
                    src={item?.product?.attributes?.image?.data?.attributes?.url}
                    alt={item?.product?.attributes?.title}
                    className={`size-16 rounded object-cover ${!loaded[index] ? 'hidden' : ''}`} // Cache l'image tant qu'elle n'est pas chargée
                  onLoad={() => handleImageLoaded(index)}
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>

                    <dl className="flex mt-0.5 space-y-px text-[10px] text-gray-600 w-full ">
                      <div>
                        <dt className="inline">{item?.product?.attributes?.size}</dt>
                      </div>

                      <div className='flex w-full justify-end'>
                        <dd className=" w-full flex justify-end">{item?.product?.attributes?.price}€</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}


            </ul>
             )}
          </div>
          <div className="space-y-4 text-center flex flex-wrap">
            <Link
              href="/cartPage"
              onClick={handleViewCartClick}
              className="chakra block rounded bg-secondary-color px-5 py-3 hover:text-secondary-color text-main-color font-normal transition hover:bg-green-hover border border-solid border-secondary-color text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] cursor-pointer"
            >
              Voir mon panier ({cart?.length})
            </Link>

          </div>
          </div>
          </div>
      </div>
    
  )
});
Cart.displayName = 'Cart';

export default Cart