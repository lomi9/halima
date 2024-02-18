'use client'

import React, { useState }  from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default  function LoginPage() {

  const [activeTab, setActiveTab] = useState('connexion');


  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Navbar/>
       <div className='login'>
        <div className='login__top'> 
            <div className='login__top-container'>
                <h1 className='login__top-container-title kodchasan'>
                    Mon compte 
                </h1>

            </div>

        </div>
        <div className='login__menu'>
          <div className='login__menu-container'>
            <div className={`login__menu-container-left chakra ${activeTab === 'connexion' ? 'active' : ''}`}
            onClick={() => setActiveTab('connexion')}
            >
            Connexion
            </div>
            <div className={`login__menu-container-right chakra ${activeTab === 'inscription' ? 'active' : ''}`}
            onClick={() => setActiveTab('inscription')}
            >
            Inscription
            </div>

          </div>

        </div>
        <div className='w-full'>
            {activeTab === 'connexion' ? <LoginForm /> : <SignupForm />}
          </div>

       </div>
       
     </main>
     <Footer/>
    
    </>
  )
}

