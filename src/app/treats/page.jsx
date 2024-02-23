import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/amandes_maroc.webp";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';

export default function TreatsPage() {

  const category = 'treats';

const gourmandisesImage = image.src;
const gourmandisesTitle = "Nos gourmandises";
const gourmandisesParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={gourmandisesImage} title={gourmandisesTitle} paragraph={gourmandisesParagraph}/>
      <div className="edible__content">
      <ProductsSection category={category}/>
      </div>
      <RandomSection/>
    </main>
   
   </>
  )
}

