import { useUser } from '@clerk/nextjs'
import { BadgeAlert, BadgeCheck, ShoppingBasket } from 'lucide-react'
import { useRouter } from 'next/navigation';
import GlobalApi from "../../_utils/GlobalApi"
import React, { useContext } from 'react'
import { CartContext } from '../../../app/_context/CartContext';

function ProductInfo({product}) {

  const {user}=useUser();
  const router=useRouter();
  const {cart,setCart}=useContext(CartContext);
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
      GlobalApi.addToCart(data).then(resp=>{
        console.log("Add to cart",resp);
        if(resp)
        {
          setCart(cart=>[...cart,
            {
              id:resp?.data?.id,
              product:product
            }
          ])
        }

      },(error)=>{
        console.log("Erreur",error)
      }
      )
    }
  }

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
    </div>
  </div>
  )
}

export default ProductInfo