"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import GlobalApi from "../_utils/GlobalApi";

function CartPage() {

    const {cart,setCart}=useContext(CartContext);
    const {user}=useUser();
    const [showAlert, setShowAlert] = useState(false);
    const [alertProduct, setAlertProduct] = useState(null);

    const getTotalAmount=()=>{
        let totalAmount = 0;
        cart.forEach(element => {
            totalAmount= totalAmount+Number(element.product.attributes.price)
        });
        return totalAmount
    }

    const deleteCartItem_=(productId)=>{

      const productToDelete = cart.find(item => item.id === productId);
      if (!productToDelete) return;

      GlobalApi.deleteCartItem(productToDelete.id).then(resp=>{
        console.log(resp);
        if(resp)
        {
          setAlertProduct(productToDelete.product);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 6000);
          getCartItem()
        }
      },(error)=>{
        console.log("Erreur lors de la suppression de l'article du panier :", error);
      })

    }

    const getCartItem=()=>{
      GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        const result =resp.data.data
        setCart([]);
          result&&result.forEach(prd =>{
            setCart(cart=>[...cart,
              {
                id:prd.id,
                product: prd.attributes.products.data[0]
              }
            ])
          })
  
      })
    }

    const closeAlert = () => {
      setShowAlert(false);
    };



  return (
<section>
  <div className="kodchasan mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">

    {cart.length > 0 ? (
      <>
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Mon panier</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">

            {cart.map((item,index) =>(

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

              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
            <div>
                  <dt className="inline">{item?.product?.attributes?.price}€</dt>
                </div>


              <button className="text-gray-600 border-none bg-transparent transition hover:text-red-600 flex items-center justify-center w-[4vw] cursor-pointer"
              onClick={()=>deleteCartItem_(item.id)}
              >
                <span className="sr-only">Supprimer</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
                 </li>

                ))}

        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">


              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>{getTotalAmount()}€</dd>
              </div>
            </dl>


            <div className="flex justify-end">
              <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Passer au paiement
              </a>
            </div>
          </div>
        </div>
      </div>
      </>

) : (
  <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Votre panier est vide</h2>
                            <p className="text-gray-600">Vous n'avez ajouté aucun produit à votre panier.</p>
                            {/* Vous pouvez également inclure un bouton ou un lien pour retourner à la boutique */}
                            <a
                                href="/"
                                className="mt-4 inline-block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                            >
                                Retour à la boutique
                            </a>
                        </div>
                    )}
    </div>
  </div>

  {showAlert && alertProduct && (
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

                    <p className="chakra mt-1 text-sm text-gray-700">Produit retiré du panier</p>
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

</section>
  )
}

export default CartPage