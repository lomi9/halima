'use client'
import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link'
import { Menu, X, User, ShoppingBasket, Mail, CheckCircle, UserCheck, Home, CookingPot, Coffee, Sparkles, Wheat } from 'lucide-react';
import logo from "../../../public/logo-logo.svg";
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { CartContext } from '../_context/CartContext';
import GlobalApi from "../_utils/GlobalApi";
import Cart from './(Navbar)/Cart';
import UserLoggedIn from '../_components/(Navbar)/UserLoggedIn';
import Image from 'next/image';


export default function Navbar() {

  const {user}=useUser();
  const {cart, setCart}=useContext(CartContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCart,setOpenCart]=useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const menuRef = useRef();
  const cartRef = useRef();
  const userModalRef = useRef();

  const handleCloseModalAndShowAlert = () => {
    setIsUserModalOpen(false); // Ferme la modale
    alert("Vous êtes bien déconnecté"); // Affiche l'alerte
  };

  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
  };
  
  
  const getCartItem=()=>{
    GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      const result =resp.data.data

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

  const closeMenu = () => {
      setIsMenuOpen(false);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserModal = (event) => {
    event.stopPropagation(); 
    setIsUserModalOpen(!isUserModalOpen);
    if(isMenuOpen) setIsMenuOpen(false);
    closeMenu();
  };

  const toggleCart = (event) => {
    event?.stopPropagation(); 
    setOpenCart(!openCart);
    closeMenu();
};



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
          closeMenu();
      }
      if (openCart && cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
      if (userModalRef.current && !userModalRef.current.contains(event.target)) {
        setIsUserModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCart]);



  useEffect(() => {
    if (user) {
      getCartItem();
    }
  }, [user]);




    useEffect(() => {
      if (!user) {
        // L'utilisateur vient de se déconnecter
        setIsUserModalOpen(false); // Ferme la modale
      }
    }, [user]);





  return (
    <>
    <header className='flex fixed w-full bg-transparent py-[2vw] z-50'>

  <div className="navbar bg-yellow-color top-3 p-0 w-full border-x-0 border-solid border border-secondary min-h-0 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>


              {isMenuOpen ? (
               <X className='h-[6vw] md:h-[2.5vw] w-[6vw] md:w-[2.5vw] text-primary-color'/>
              ) : (
                <Menu className="h-[6vw] md:h-[2.5vw] w-[6vw] md:w-[2.5vw] text-primary-color" />
              )}
        </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content px-6 py-8 m-3 z-[1] shadow-md bg-yellow-color rounded-lg w-[270px] border border-solid border-primary-color  ${isMenuOpen ? 'block' : 'hidden'}`} ref={menuRef}>
          <li className=' w-full px-2 pb-1 m-0 rounded-box'><Link href="/" onClick={toggleMenu} className=' hover:text-accent-color chakra text-lg text-primary-color'><Home className='w-[20px]'/>Accueil</Link></li>
            <li className=' w-full px-2 py-1 m-0 rounded-box'><Link href='/edible' onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'><CookingPot className='w-[20px]'/>Huiles alimentaires</Link></li>
            <li className='w-full px-2 py-1 m-0 rounded-box'><Link href="/beauty" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'><Sparkles className='w-[20px]'/>Huiles de beauté</Link></li>
            <li className=' w-full px-2 py-1 m-0 rounded-box'><Link href="/spices" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'><Wheat className='w-[20px]'/>Épices</Link></li>
            <li className=' w-full px-2 py-1 m-0 rounded-box'><Link href="/treats" onClick={toggleMenu}className='hover:text-accent-color p-2 chakra text-lg text-primary-color'><Coffee className='w-[20px]'/>Gourmandises</Link></li>
            <li className=' w-full px-2 pt-1 m-0 rounded-box'><Link href="/contact" onClick={toggleMenu}className='hover:text-accent-color font-semibold p-2 chakra text-lg text-primary-color flex sm:hidden'><Mail className='w-[20px]'/>Contact</Link></li>
          </ul>
      </div>

    </div>
    <div className="navbar-center flex-wrap content-center py-[0.5vw]">
      <Link href="/" className="kodchasan flex  font-light btn btn-ghost text-[2.5vw] flex-wrap content-center">
        <p className='kodchasan font-light text-[2.5vw] hidden sm:flex '>HALIMA</p> 
        <div className='w-[50px] h-[50px] overflow-hidden'>
        <Image src={logo.src} width={50} height={50}  alt="Logo Halima Garden" className='object-cover overflow-hidden w-full h-full object-center'/>
        </div>
        <p className='kodchasan font-light text-[2.5vw] hidden sm:flex '>GARDEN</p>
      </Link>
    </div>
    <div className="navbar-end px-[1.5vw] gap-3">
      <Link href="/contact" className="btn btn-ghost btn-circle hidden sm:flex hover:bg-main-hover">
        <Mail className='w-full h-[60%] hover:text-accent-color'/>
      </Link>

      {openCart&&<Cart ref={cartRef} onCloseCart={() => setOpenCart(false)}/>}


      <button className="btn relative btn-ghost btn-circle hover:bg-main-hover "
      onClick={toggleCart}
      >
        <ShoppingBasket className={`w-full h-[60%] text-primary-color ${openCart ? 'text-accent-color' : 'hover:text-accent-color'}`}/>
        <div className='chakra text-[15px] absolute top-0 right-0 w-[20px] h-[20px] bg-accent-color flex items-center justify-center rounded-xl font-normal'>
        {cart?.length}
        </div>
      </button>

        {!user?
          <a href="/sign-in" className="indicator relative hover:bg-main-hover">
            <User className={`w-full h-[60%] text-primary-color ${isUserModalOpen ? '' : 'hover:text-accent-color active:text-accent-color'}`}/>
          </a>
          :
          <button className="btn btn-ghost btn-circle hover:bg-main-hover" onClick={toggleUserModal}>

            <UserCheck className={`w-full h-[60%] text-primary-color ${isUserModalOpen ? 'text-accent-color' : 'hover:text-accent-color'}`}/>
          </button>
        }

<div
  ref={userModalRef}
  className={`user-logged-in-icon w-1 ${isUserModalOpen ? 'visible' : 'invisible'}`}
>
  <UserLoggedIn onSignOut={handleCloseModalAndShowAlert} onClose={handleCloseUserModal}/>
</div>

    </div>
    </div>
  </header>
</>
  )
}

