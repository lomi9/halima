import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner'
import image from "../../../public/maroc-architecture.webp";
import Contact from '../_components/Contact';

export default function ContactPage() {

const contactImage = image.src;
const contactTitle = "Contactez-nous !";
const contactParagraph = "";

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <ProductsBanner image={contactImage} title={contactTitle} paragraph={contactParagraph}/>
       <div className="contact__section flex w-full justify-center p-2 sm:p-20">
         <Contact/>
       </div>
     </main>
    
    </>
  )
}
