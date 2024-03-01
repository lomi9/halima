import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

function UserLoggedIn({ onSignOut }) {

    const handleSignOut = () => {
        onSignOut();
      };

  return (
    <div className='h-[300px] w-[250px] bg-main-color z-10 rounded-md absolute mx-10 mt-1 right-10 top-12 p-5 border border-solid border-primary-color shadow-sm overflow-auto flex flex-wrap content-between justify-center'>
        <div className='w-full'>Bonjour!</div>

        <div className='w-full'>
            <p>Mes Commandes</p>
        </div>

        <SignOutButton redirectTo="/" onSignOut={handleSignOut}>
            <button className='cursor-pointer bg-accent-color border border-solid border-border-accent text-main-color kodchasan px-[3vw] py-[2vw] text-[2vw] uppercase rounded-lg'>Se déconnecter</button>
        </SignOutButton>
    </div>
  )
}

export default UserLoggedIn
