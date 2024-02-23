import React from 'react';
import Login from '../ui/Login';
import Account from '../ui/Account';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


export default function AccountPage({session}) {

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className='login'>
        <div className='login__top'> 
            <div className='login__top-container'>
                <h1 className='login__top-container-title kodchasan'>
                    Mon compte 
                </h1>

            </div>

        </div>
        {session ? <Account /> : <Login />}
       </div>
       
     </main>
    
    </>
  )
}

export async function loader({ request }) {
  return {
    props: {
      session: await getServerSession(request, authOptions),
    },
  };
}
