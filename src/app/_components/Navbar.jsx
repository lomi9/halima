'use client'
import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link'
import { Menu, X, User, ShoppingBasket, Mail, CheckCircle, UserCheck } from 'lucide-react';
import logo from "../../../public/logo-logo.svg";
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { CartContext } from '../_context/CartContext';
import GlobalApi from "../_utils/GlobalApi";
import Cart from './(Navbar)/Cart';
import UserLoggedIn from '../_components/(Navbar)/UserLoggedIn';


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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserModal = () => {
    event.stopPropagation(); 
    setIsUserModalOpen(!isUserModalOpen);
  };

    // Gestionnaire d'événements pour détecter les clics en dehors du menu
    useEffect(() => {
      const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', closeMenu);
      return () => {
        document.removeEventListener('mousedown', closeMenu);
      };
    }, []);


    useEffect(()=>{
      user&&getCartItem();
    }, [user])

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (openCart && cartRef.current && !cartRef.current.contains(event.target)) {
          setOpenCart(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [openCart]);


    useEffect(() => {
      function handleClickOutside(event) {
        if (userModalRef.current && !userModalRef.current.contains(event.target)) {
          setIsUserModalOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [userModalRef]);

    useEffect(() => {
      if (!user) {
        // L'utilisateur vient de se déconnecter
        setIsUserModalOpen(false); // Ferme la modale
      }
    }, [user]);

  return (
    <>
  <div className="navbar fixed bg-main-color top-3 p-0 w-full z-50 border-x-0 border-solid border border-secondary min-h-0">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
              {isMenuOpen ? (
               <X className='h-5 w-5 text-primary-color'/>
              ) : (
                <Menu className="h-5 w-5 text-primary-color" />
              )}
        </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-main-color rounded-box w-52  ${isMenuOpen ? 'block' : 'hidden'}`} ref={menuRef}>
            <li><Link href="/" onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Accueil</Link></li>
            <li><Link href='/edible' onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles alimentaires</Link></li>
            <li><Link href="/beauty" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles de beauté</Link></li>
            <li><Link href="/spices" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Épices</Link></li>
            <li><Link href="/treats" onClick={toggleMenu}className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Gourmandises</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}className='hover:text-accent-color font-semibold p-2 chakra text-lg text-primary-color flex sm:hidden'>Contact</Link></li>
          </ul>
      </div>
    </div>
    <div className="navbar-center flex-wrap content-center">
      <Link href="/" className="kodchasan hidden sm:flex  font-light btn btn-ghost text-xl flex-wrap content-center">
        <p>HALIMA</p> 
        <div className='w-[30px] h-[30px] overflow-hidden'>
        <img src={logo.src} layout="fill" objectFit="cover" alt="Logo Halima Garden" className='object-cover overflow-hidden w-full h-full object-center'/>
        </div>
        <p>GARDEN</p>
      </Link>
    </div>
    <div className="navbar-end">
      <Link href="/contact" className="btn btn-ghost btn-circle hidden sm:flex">
        <Mail className='w-5 sm:w-7 hover:text-accent-color'/>
      </Link>

      {openCart&&<Cart ref={cartRef} onCloseCart={() => setOpenCart(false)}/>}


      <button className="btn relative btn-ghost btn-circle "
      onClick={()=>setOpenCart(!openCart)}
      >
        <ShoppingBasket className={`w-5 sm:w-7 ${openCart ? 'text-accent-color' : 'hover:text-accent-color'}`}/>
        <div className='chakra text-[1.3vw] absolute top-0 right-0 w-[20px] h-[20px] bg-accent-color flex items-center justify-center rounded-xl'>
        {cart?.length}
        </div>
      </button>

        {!user?
          <a href="/sign-in" className="indicator relative">
            <User className={`w-5 sm:w-7 ${isUserModalOpen ? '' : 'hover:text-accent-color active:text-accent-color'}`}/>
          </a>
          :
          <button className="btn btn-ghost btn-circle" onClick={toggleUserModal}>

            <UserCheck className={`w-5 sm:w-7 ${isUserModalOpen ? 'text-accent-color' : 'hover:text-accent-color'}`}/>
          </button>
        }

        {isUserModalOpen && (
          <div ref={userModalRef}>
            <UserLoggedIn onSignOut={handleCloseModalAndShowAlert} />
            </div>
        )}

    </div>
  </div>
</>
  )
}

