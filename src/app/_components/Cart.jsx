import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'

function Cart() {

    const {cart,setCart}=useContext(CartContext);

  return (
    <div className='h-[300px] w-[250px] bg-main-color z-10 rounded-md absolute mx-10 mt-1 right-10 top-12 p-5 border border-solid border-primary-color shadow-sm overflow-auto'>
<div className="mt-4 space-y-6">
    <ul className="p-0">

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


      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Voir mon panier ({cart?.length})
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
  )
}

export default Cart