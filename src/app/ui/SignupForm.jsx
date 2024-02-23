import React, { useState }  from 'react'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]"; 


function SignupForm( {session}) {

    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Réinitialiser l'erreur précédente

        const form = new FormData(event.target);
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (!firstName || !lastName || !email || !password || password !== confirmPassword) {
            setError("Veuillez vérifier les champs du formulaire et vous assurer que les mots de passe correspondent.");
            return;
        }

        try {
            const res = await fetch('http://localhost:1337/api/auth/local/register', { // Assurez-vous que cet endpoint correspond à votre API d'inscription
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: firstName + lastName,
                    email,
                    password,
                    firstName, 
                    lastName,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                // Si l'email est déjà pris
                if (data.error && data.error.name === "ApplicationError" && data.error.message.includes("already taken")) {
                    setError("Cette adresse e-mail est déjà associée à un compte.");
                } else {
                    throw new Error(data.message || "Erreur lors de l'inscription.");
                }
            } else {
                // Si inscription réussi
                signIn('credentials', { email, password });
            }
        } catch (error) {
            setError(error.message || "Une erreur s'est produite.");
        }
    };

    if (session) {
        return (
          <div>
            <p>Bonjour, {session.user.email}</p>
          </div>
        );
      }


  return (
    <div className='signupform w-full my-[10vw]'>

        <div className='relative w-full flex flex-wrap justify-center content-center'>
            <h2 className='chakra text-3xl text-primary-color font-normal m-[1vw]'>Première visite ?</h2>
            <span className='line absolute bottom-0 left-[42%] w-[15vw] h-[1px] bg-primary-color'></span>
        </div>
        <div className='w-full flex flex-wrap content-center justify-center pt-[4vw] pb-[2vw] kodchasan font-normal'>
            {error && <div className='w-full text-center text-red-500'>{error}</div>}

        </div>

        <form onSubmit={handleSubmit} className='signupform__content w-full flex flex-wrap flex-col content-center justify-center items-center'>

            <input type="text" name="firstName" placeholder="Prénom" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="text" name="lastName" placeholder="Nom" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="email" name="email" placeholder="Adresse e-mail" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="password" name="password" placeholder="Mot de passe" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />
            <input type="password" name="confirmPassword" placeholder="Confirmation du mot de passe" className="input input-bordered input-primary w-full max-w-xs mb-4 border border-solid border-secondary-color rounded-3xl" />

            <label className="flex items-center gap-2 mb-4 chakra">
                <input type="checkbox" className="checkbox checkbox-primary border border-solid border-primary-color" />
                J&apos;accepte les conditions
            </label>


            <div className='button-container w-full flex flex-wrap content-center justify-center'>
                <button type="submit" className="rounded-md kodchasan cursor-pointer uppercase flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-thin text-main-color bg-accent-color hover:bg-main-color hover:text-accent-color hover:border-accent-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color active:scale-70">
                        Créer mon compte
                </button>
        </div>


        </form>

    </div>
  )
}

export default SignupForm