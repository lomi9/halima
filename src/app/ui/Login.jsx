'use client'

import React, { useState }  from 'react';



function Login() {

    const [activeTab, setActiveTab] = useState('connexion');


  return (
    <>
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

    </>
  )
}

export default Login