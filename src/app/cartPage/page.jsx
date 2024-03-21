"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import GlobalApi from "../_utils/GlobalApi";
import { BadgeCheck, Bird, Info } from 'lucide-react';
import Link from 'next/link';

function CartPage() {

    const {cart,setCart}=useContext(CartContext);
    const {user}=useUser();
    const [showAlert, setShowAlert] = useState(false);
    const [alertProduct, setAlertProduct] = useState(null);
    const { isSignedIn } = user || {};
    const [showTooltip, setShowTooltip] = useState(false);

    const getTotalAmount=()=>{
        let totalAmount = 0;
        cart.forEach(element => {
            totalAmount= totalAmount+Number(element.product.attributes.price)
        });
        return totalAmount
    }

    useEffect(() => {
      if (isSignedIn) {
        // L'utilisateur est connecté, récupérez les éléments du panier
        getCartItem();
      } else {
        // L'utilisateur est déconnecté, videz le panier
        setCart([]);
      }
    }, [isSignedIn]);
  
    function getCartItem() {
      if (user?.primaryEmailAddress?.emailAddress) {
        GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress)
          .then(response => {
            const cartItems = response.data.data.map(prd => ({
              id: prd.id,
              product: prd.attributes.products.data[0]
            }));
            setCart(cartItems);
          })
          .catch(error => console.error('Erreur lors de la récupération des articles du panier:', error));
      }
    }

    const deleteCartItem_=(cartItemId)=>{
      console.log("ID de l'article du panier à supprimer :", cartItemId);

      const cartItemToDelete = cart.find(item => item.id === cartItemId);
      console.log("Article du panier trouvé pour suppression :", cartItemToDelete);
     
      if (cartItemToDelete && cartItemToDelete.id) {

      GlobalApi.deleteCartItem(cartItemToDelete.id)
      .then(() => GlobalApi.removeProductFromCart(cartItemToDelete.product.id, 1))

      .then (() => {
        setAlertProduct(cartItemToDelete.product);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 6000);
        setCart(currentCart => currentCart.filter(item => item.id !== cartItemToDelete.id));

      })
        .catch((error) => {
          console.log("Erreur lors de la suppression de l'article du panier:", error);
        });
      } else {
        console.log("Erreur: Aucun article du panier trouvé avec l'ID:", cartItemId);
      }

    };


    const closeAlert = () => {
      setShowAlert(false);
    };



  return (
<section>
  <div className="kodchasan mx-auto px-4 sm:px-6  lg:px-8 min-h-screen pt-[150px]">
    <div className="flex flex-wrap justify-center">

    {cart.length > 0 ? (
      <>
      <div className="text-center w-full">
        <h1 className="text-xl font-normal text-primary-color sm:text-3xl pb-[5vw] uppercase">
          Mon panier</h1>
        <div className='text-center w-full flex flex-wrap justify-center items-center border border-solid border-primary-color'>
          <BadgeCheck className='text-green-500 w-[4vw] h-[4vw]'/>
          <p className='text-secondary-color chakra text-[2.5vw] sm:text-[1.8vw] pl-[2vw] pr-[1vw]'>
            Vos produits sont conservés dans votre panier pendant 2 heures .</p>
          <div className="relative" // Conteneur pour l'icône et l'infobulle
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                <Info className='w-[2vw] h-[2vw] text-secondary-color cursor-pointer'/>
                {showTooltip && (
                  <span className="absolute top-full right-0 mb-2 w-[300px] p-2 bg-primary-color text-white text-sm rounded shadow-md">
                    Les produits dans votre panier sont réservés. Afin de ne pas bloquer les autres commandes si vous ne passez pas au paiement au bout de 2h, le produit est automatiquement retiré de votre panier et proposé aux autres utilisateurs.
                  </span>
                )}
              </div>
        </div>
      </div>
      <div>

      </div>

      <div className="mt-8 w-[100%]">
        <ul className="space-y-6 pr-6">

            {cart.map((item,index) =>(

                <li className="flex items-center gap-4 " key={index}>
                   <Link href={`/product/${item?.product?.id}`} className=' border border-solid border-primary-color border-l-transparent border-t-transparent border-r-transparent hover:border-secondary-color  duration-300 w-full flex items-center gap-4 p-[6px]'>
            <img
                src={item?.product?.attributes?.image?.data?.attributes?.url}
                alt={item?.product?.attributes?.title}
              className=" size-24 sm:size-16 lg:size-32 rounded object-cover"
            />

            <div>
              <h3 className=" text-[3.5vw] sm:text-sm lg:text-[2vw] text-primary-color">{item?.product?.attributes?.title}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline lg:text-[1.4vw]">{item?.product?.attributes?.size}</dt>
                </div>

              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
            <div>
                  <dt className="inline text-primary-color lg:text-[2vw]">{item?.product?.attributes?.price}€</dt>
                </div>


              
            </div>
            </Link>
            <button className="text-gray-600 border-none bg-transparent transition hover:text-red-600 flex items-center justify-center text-[15vw] sm:w-[4vw] lg:text-[6vw]  cursor-pointer"
              onClick={()=>deleteCartItem_(item.id)}
              >
                <span className="sr-only">Supprimer</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 lg:h-[2vw] lg:w-[2vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
                 </li>

                ))}

        </ul>
        </div>

        <div className="mt-8 mb-[200px] w-full flex flex-wrap flex-col-reverse sm:flex-row justify-center content-center sm:justify-evenly items-center border-t border border-solid border-primary-color">
        <div className="flex justify-end my-[4vw]">
              <a
                href="#"
                className="kodchasan bg-accent-color border border-solid border-border-accent rounded-lg uppercase  text-[3vw] md:text-[1.7vw] 2xl:text-[1.6vw] text-yellow-color font-semibold hover:bg-addcart-hover hover:text-border-accent text px-[2vw] py-[2vw] shadow-md cursor-pointer transition duration-300 ease-in-out"
              >
                Passer au paiement
              </a>
            </div>
          <div className=" w-[40%] sm:w-[25%] flex flex-wrap justify-center items-center">
            <div className=" w-full text-sm text-gray-700 flex flex-wrap justify-center pr-[5vw] ">


              <div className="w-full flex flex-wrap justify-between font-medium border border-dashed border-primary-color border-l-0 border-t-0 border-r-0 ">
                <p className='uppercase text-[1rem] lg:text-[2.2vw]'>Total :</p>
                <p className='text-[1rem] lg:text-[2.2vw]'>{getTotalAmount()}€</p>
              </div>
              
            </div>

          </div>
          
        </div>
        
      
      </>

) : (
  <div className="text-center h-screen py-[100px] flex flex-wrap content-around justify-center">
    <div className='w-full flex flex-wrap justify-center py-[5vw]'>
      <Bird className='text-secondary-color w-[10vw] h-[10vw] animate-bounce'/>

    </div>
    <div className='w-full'>
      <h2 className=" w-full text-xl kodchasan font-bold text-primary-color sm:text-2xl">Oups, votre panier est vide!</h2>
      <p className="w-full text-primary-color chakra">Vous n&apos;avez ajouté aucun produit à votre panier.</p>
    </div>
    <Link href="/" className="kodchasan bg-secondary-color border border-solid border-secondary-color rounded-lg uppercase  text-[4vw] md:text-[2vw] 2xl:text-[1.6vw] text-section-color font-normal px-[5vw] py-[2.5vw] shadow-md cursor-pointer transition duration-300 ease-in-out" >
    Retour à la boutique
    </Link>
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