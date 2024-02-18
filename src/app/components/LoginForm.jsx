import React from 'react'

function LoginForm() {
  return (
    <div className='loginform w-full'>

        <div className='loginform__content m-[10vw] w-full flex flex-wrap flex-col content-center justify-center'>

        <label className="input flex items-center gap-2 border-1 border-solid border-primary-color h-[6vw] w-[40vw] my-[4vw] flex-wrap content-center flex-row rounded-3xl ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[3vw] h-[3vw] opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow bg-transparent border-none w-1/3 chakra" placeholder="Adresse e-mail" />
        </label>


        <label className="input flex items-center gap-2 border-1 border-solid border-primary-color h-[6vw] w-[40vw] my-[4vw] flex-wrap content-center flex-row rounded-3xl ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[3vw] h-[3vw] opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow bg-transparent border-none w-1/3 chakra" placeholder="Mot de passe" />
        </label>

        <div className=' relative w-[27vw] py-[1.6vw] bg-transparent my-[4vw] cursor-pointer border-solid border border-secondary-color hover:bg-secondary-color'>
            <button type="submit" className="kodchasan uppercase text-[1.8vw] w-full h-full bg-transparent text-primary-color cursor-pointer kodchasan border-none hover:bg-secondary-color hover:text-main-color">
                Se connecter
            </button>
            <span className='absolute top-[50%] right-[-3.5vw] h-px w-[7vw] bg-secondary-color'></span>
            <span className='absolute top-[50%] left-[-3.5vw] h-px w-[7vw] bg-secondary-color'></span>
        </div>

        </div>

    </div>
  )
}

export default LoginForm