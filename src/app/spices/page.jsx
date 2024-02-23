import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/epices_maroc.webp";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';

export default function SpicesPage() {

  const category = 'spices';

const epicesImage = image.src;
const epicesTitle = "Nos épices";
const epicesParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={epicesImage} title={epicesTitle} paragraph={epicesParagraph}/>
      <div className="edible__content">
      <ProductsSection category={category}/>
      </div>
      <RandomSection/>
    </main>
   
   </>
  )
}

