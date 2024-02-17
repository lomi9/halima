import React from 'react'

function Contact() {
  return (
    <div className="w-2/3 p-8 bg-main-color shadow-md rounded-lg">
            <form className="space-y-4">
                <div className='flex flex-wrap'>
                    <label htmlFor="name" className="flex flex-wrap content-center chakra text-sm font-medium text-gray-700">Votre nom :</label>
                    <input type="text" id="name" name="name" className="mt-1 w-full block bg-main-color border border-primary-color py-2 px-3 focus:outline-none focus:ring-accent-color focus:border-accent-color" />
                </div>
                <div>
                    <label htmlFor="email" className="block chakra text-sm font-medium text-gray-700">Votre email :</label>
                    <input type="email" id="email" name="email" className="mt-1 bg-main-color block w-full border border-primary-color shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-color focus:border-accent-color" />
                </div>
                <div>
                    <label htmlFor="message" className="block chakra text-sm font-medium text-gray-700">Votre message :</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 bg-main-color block w-full border border-primary-color shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-color focus:border-accent-color"></textarea>
                </div>
                <div className='flex flex-wrap content-center justify-center'>
                    <button type="submit" className="w-1/3 rounded-md kodchasan uppercase flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-accent-color hover:bg-accent-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
  )
}

export default Contact