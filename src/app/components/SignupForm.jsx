import React from 'react'

function SignupForm() {
  return (
    <div className='signupform w-full my-[10vw]'>

        <div className='relative w-full flex flex-wrap justify-center content-center'>
            <h2 className='chakra text-3xl text-primary-color font-normal m-[1vw]'>Première visite ?</h2>
            <span className='line absolute bottom-0 left-[42%] w-[15vw] h-[1px] bg-primary-color'></span>
        </div>
        <div className='w-full flex flex-wrap content-center justify-center pt-[4vw] pb-[2vw] kodchasan font-normal'>
            <span className='text-[#E83B32] kodchasan font-normal'>Erreur : Message d'erreur</span>
        </div>

        <div className='signupform__content w-full flex flex-wrap flex-col content-center justify-center items-center'>

            <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 kodchasan">
                    <input type="radio" name="radio-9" className="radio border-solid border border-primary-color bg-primary-color" />
                    Mr
                </label>
                <label className="flex items-center gap-2 kodchasan ">
                    <input type="radio" name="radio-9" className="radio border-solid border border-primary-color bg-main-color active:bg-primary-color"/>
                    Mme
                </label>
            </div>

            <input type="text" placeholder="Prénom" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="text" placeholder="Nom" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="email" placeholder="Adresse e-mail" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="password" placeholder="Mot de passe" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="password" placeholder="Confirmation du mot de passe" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />

            <label className="flex items-center gap-2 mb-4 chakra">
                <input type="checkbox" className="checkbox checkbox-primary border border-solid border-primary-color" />
                J'accepte les conditions
            </label>


            <div className='button-container w-full flex flex-wrap content-center justify-center'>
                <button type="submit" className="rounded-md kodchasan cursor-pointer uppercase flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-thin text-main-color bg-accent-color hover:bg-main-color hover:text-accent-color hover:border-accent-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color active:scale-70">
                        Créer mon compte
                </button>
        </div>


        </div>

    </div>
  )
}

export default SignupForm