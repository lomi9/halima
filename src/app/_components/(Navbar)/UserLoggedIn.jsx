import { SignOutButton, useUser } from '@clerk/nextjs'
import { BookmarkCheck, CircleUserRound, ConciergeBell, SquareUser, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function UserLoggedIn({ onSignOut, onClose }) {

    const { user } = useUser();

    const handleSignOut = () => {
        onSignOut();
      };

  return (
    <div className='h-auto w-[250px] bg-yellow-color z-10 rounded-md absolute mx-10 mt-1 right-[-20px] sm:right-0 top-[90%] p-5 border border-solid border-primary-color shadow-sm overflow-auto flex flex-wrap content-between justify-center'>

        <button onClick={onClose} className="cursor-pointer absolute top-2 right-2 border-none bg-transparent">
            <X className='text-primary-color border-none bg-transparent'/> 
        </button>
        <div className='w-full kodchasan flex justify-center font-thin text-[20px] pt-[13px] '>Bienvenue!</div>
        <p className='email chakra text-[15px] text-secondary-color'>{user?.primaryEmailAddress?.emailAddress}</p>

        <div className='w-full'>
        <ul  className="menu z-[1] px-0 py-12 m-0 bg-yellow-color rounded-box w-full">
        <li className='hover:bg-card-hover w-full p-0 m-0 font-normal text-[1vw] rounded-box'><Link href="/" className=' hover:text-accent-color chakra px-0 text-lg text-primary-color '><BookmarkCheck/>Mes commandes</Link></li>
        <li className='hover:bg-card-hover w-full p-0 m-0 font-normal text-[1vw] rounded-box'><Link href="/" className=' hover:text-accent-color chakra px-0 text-lg text-primary-color'><CircleUserRound/>Mon compte</Link></li>
        </ul>
        </div>

        <SignOutButton redirectto="/">
            <button className='chakra block rounded bg-secondary-color px-5 py-3 hover:text-secondary-color text-main-color font-normal transition hover:bg-green-hover border border-solid border-secondary-color text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] cursor-pointer'>Se déconnecter</button>
        </SignOutButton>
    </div>
  )
}

export default UserLoggedIn
