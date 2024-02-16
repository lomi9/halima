'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { Menu, X, User, ShoppingBasket, Mail } from 'lucide-react';
import logo from "../../../public/logo-rond.png";


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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


  return (
    <>
 <div className="navbar fixed bg-main-color top-3 p-0 w-full z-50 border-x-0 border-solid border-1 border-secondary min-h-0">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
       {/* Icône du menu qui change selon l'état isMenuOpen */}
              {isMenuOpen ? (
                // Icône pour le menu ouvert (croix)
               <X className='h-5 w-5 text-primary-color'/>
              ) : (
                // Icône pour le menu fermé (hamburger)
                <Menu className="h-5 w-5 text-primary-color" />
              )}
    </div>
          {/* Menu items, shown or hidden based on isMenuOpen */} 
      <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-main-color rounded-box w-52  ${isMenuOpen ? 'block' : 'hidden'}`} ref={menuRef}>
        <li><Link href="/" onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Accueil</Link></li>
        <li><Link href='/edible' onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles alimentaires</Link></li>
        <li><Link href="/beauty" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles de beauté</Link></li>
        <li><Link href="/spices" onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Épices</Link></li>
        <li><Link href="/treats" onClick={toggleMenu}className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Gourmandises</Link></li>
        <li><a onClick={toggleMenu}className='hover:text-accent-color font-semibold p-2 chakra text-lg text-primary-color flex sm:hidden'>Contact</a></li>

      </ul>
    </div>
  </div>
  <div className="navbar-center flex-wrap content-center">
    <div className='h-full w-10'>
      <img src={logo.src} className='object-cover w-full h-full object-center'/>
    </div>
    <Link href="/" className="kodchasan hidden sm:flex  font-light btn btn-ghost text-xl flex-wrap content-center">HALIMA GARDEN</Link>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle hidden sm:block">
    <Mail className='w-5 sm:w-7'/>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <User className='w-5 sm:w-7'/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle ">
    <ShoppingBasket className='w-5 sm:w-7'/>
    </button>
  </div>
</div>
</>
  )
}

