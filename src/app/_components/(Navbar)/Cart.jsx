import React, { useContext, forwardRef } from 'react'
import { CartContext } from '../../_context/CartContext'
import Link from 'next/link';

const Cart = forwardRef(({ onCloseCart,...props }, ref) => {

  const { cart } = useContext(CartContext);

  const handleViewCartClick = () => {
    if(onCloseCart) {
      onCloseCart();
    }
  };


  return (
    <div ref={ref} className='h-[300px] w-[250px] bg-main-color z-10 rounded-md absolute mx-10 mt-1 right-10 top-12 p-5 border border-solid border-primary-color shadow-sm overflow-auto'>
<div className="mt-4 space-y-6">
    <ul className="p-0 kodchasan">

        {cart.map((item,index)=>(
      <li className="flex items-center gap-4" key={index}>
      <img
        src={item?.product?.attributes?.image?.data?.attributes?.url}
        alt={item?.product?.attributes?.title}
        className="size-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">{item?.product?.attributes?.size}</dt>
          </div>

          <div className='flex justify-start'>
            <dd className="inline">{item?.product?.attributes?.price}€</dd>
          </div>
        </dl>
      </div>
    </li>
        ))}


      </ul>
      </div>
      <div className="space-y-4 text-center">


      <Link
        href="/cartPage"
        onClick={handleViewCartClick}
        className="chakra block rounded bg-secondary-color px-5 py-3 text-sm text-main-color hover:text-main-color font-thin hover:font-normal transition hover:bg-secondary-hover"
      >
        Voir mon panier ({cart?.length})
      </Link>

    </div>

    </div>
    
  )
});

export default Cart