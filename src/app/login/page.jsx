import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default  function LoginPage() {
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
            <div className='login__menu-container-left chakra'>
              Connexion
            </div>
            <div className='login__menu-container-right chakra'>
              Inscription
            </div>

          </div>

        </div>


       </div>
       
     </main>
     <Footer/>
    
    </>
  )
}

