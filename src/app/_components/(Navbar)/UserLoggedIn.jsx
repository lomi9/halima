import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

function UserLoggedIn({ onSignOut }) {

    const handleSignOut = () => {
        onSignOut();
      };

  return (
    <div className='h-auto w-[250px] bg-main-color z-10 rounded-md absolute mx-10 mt-1 right-[-20px] sm:right-0 top-[90%] p-5 border border-solid border-primary-color shadow-sm overflow-auto flex flex-wrap content-between justify-center'>
        <div className='w-full kodchasan flex justify-center font-thin text-[6vw] md:text-[1.3vw] '>Bienvenue!</div>

        <div className='w-full'>
        <ul  className="menu z-[1] px-0 py-12 m-0 bg-main-color rounded-box w-full">
        <li className='hover:bg-main-hover w-full p-0 m-0 font-normal text-[1vw] rounded-box'><Link href="/" className=' hover:text-accent-color chakra text-lg text-primary-color '>Mes commandes</Link></li>
        <li className='hover:bg-main-hover w-full p-0 m-0 font-normal text-[1vw] rounded-box'><Link href="/" className=' hover:text-accent-color chakra text-lg text-primary-color'>Mon compte</Link></li>
        </ul>
        </div>

        <SignOutButton redirectTo="/" onSignOut={handleSignOut}>
            <button className='chakra block rounded bg-secondary-color px-5 py-3 text-sm hover:text-main-color text-main-color font-thin hover:font-normal transition hover:bg-secondary-hover border-none w-full cursor-pointer'>Se déconnecter</button>
        </SignOutButton>
    </div>
  )
}

export default UserLoggedIn
