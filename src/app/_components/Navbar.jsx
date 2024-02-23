'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { Menu, X, User, ShoppingBasket, Mail, CheckCircle } from 'lucide-react';
import logo from "../../../public/logo-rond.png";
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';


export default function Navbar() {

  const {user}=useUser();

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
            <li><Link href="/test" onClick={toggleMenu}className='hover:text-accent-color p-2 chakra text-lg text-primary-color'>Test</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}className='hover:text-accent-color font-semibold p-2 chakra text-lg text-primary-color flex sm:hidden'>Contact</Link></li>
          </ul>
      </div>
    </div>
    <div className="navbar-center flex-wrap content-center">
      <Link href="/" className='h-10 w-10 relative'>
        <Image src={logo.src} layout="fill" objectFit="cover" alt="Logo Halima Garden" className='object-cover w-10 h-full object-center'/>
      </Link>
      <Link href="/" className="kodchasan hidden sm:flex  font-light btn btn-ghost text-xl flex-wrap content-center">
        HALIMA GARDEN
      </Link>
    </div>
    <div className="navbar-end">
      <Link href="/contact" className="btn btn-ghost btn-circle hidden sm:flex">
        <Mail className='w-5 sm:w-7 hover:text-accent-color'/>
      </Link>
      <button className="btn btn-ghost btn-circle hover:text-accent-color ">
        <ShoppingBasket className='w-5 sm:w-7'/> (1)
      </button>
      <button className="btn btn-ghost btn-circle">
        {!user?
          <a href="/sign-in" className="indicator relative">
            <User className='w-5 sm:w-7 hover:text-accent-color'/>
          </a>
          :
          <div>
            <UserButton/>
          </div>
        }
      </button>
    </div>
  </div>
</>
  )
}

