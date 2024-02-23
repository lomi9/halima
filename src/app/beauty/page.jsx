import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/maroc-architecture.webp";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';

export default function BeautyPage() {

  const category = 'beauty';

const beautyImage = image.src;
const beautyTitle = "Nos huiles de beauté";
const beautyParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={beautyImage} title={beautyTitle} paragraph={beautyParagraph}/>
      <div className="edible__content">
      <ProductsSection category={category}/>
      </div>
      <RandomSection/>
    </main>
   
   </>
  )
}

