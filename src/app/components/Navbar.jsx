'use client'
import React, { useState, useEffect, useRef } from 'react';
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
        <li><a onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Accueil</a></li>
        <li><a onClick={toggleMenu} className=' hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles alimentaires</a></li>
        <li><a onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Huiles de beauté</a></li>
        <li><a onClick={toggleMenu} className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Épices</a></li>
        <li><a onClick={toggleMenu}className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Gourmandises</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <div className='h-full w-10'>
      <img src={logo.src} className='object-cover w-full h-full object-center'/>
    </div>
    <a className="kodchasan font-light btn btn-ghost text-xl">HALIMA GARDEN</a>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
    <Mail/>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <ShoppingBasket/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
    <User/>
    </button>
  </div>
</div>
  )
}

