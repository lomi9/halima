import React from 'react'

function LoginForm() {
  return (
    <div className='loginform w-full my-[10vw]'>

        <div className='relative w-full flex flex-wrap justify-center content-center'>
            <h2 className='chakra text-3xl text-primary-color font-normal m-[1vw]'>Vous avez déjà un compte ?</h2>
            <span className='line absolute bottom-0 left-[35%] w-[30vw] h-[1px] bg-primary-color'></span>
        </div>
        <div className='w-full flex flex-wrap content-center justify-center pt-[4vw] pb-[2vw] kodchasan font-normal'>
            <span className='text-[#E83B32] kodchasan font-normal'>Erreur : Message d'erreur</span>
        </div>

        <div className='loginform__content w-full flex flex-wrap flex-col content-center justify-center items-center'>

        <label className="input flex items-center gap-2 border-1 border-solid border-primary-color h-[6vw] w-[40vw] my-[2vw] flex-wrap content-center flex-row rounded-3xl ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[3vw] h-[3vw] opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow bg-transparent border-none w-1/3 chakra" placeholder="Adresse e-mail" />
        </label>


        <label className="input flex items-center gap-2 border-1 border-solid border-primary-color h-[6vw] w-[40vw] my-[2vw] flex-wrap content-center flex-row rounded-3xl ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[3vw] h-[3vw] opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow bg-transparent border-none w-1/3 chakra" placeholder="Mot de passe" />
        </label>

        <div className='button-container w-full flex flex-wrap content-center justify-center'>
                <button type="submit" className="rounded-md kodchasan cursor-pointer uppercase flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-thin text-main-color bg-accent-color hover:bg-main-color hover:text-accent-color hover:border-accent-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color active:scale-70">
                        Se connecter
                </button>
        </div>


        <span className='kodchasan text-sm  underline text-primary-color'>Mot de passe oublié</span>

        </div>

    </div>
  )
}

export default LoginForm