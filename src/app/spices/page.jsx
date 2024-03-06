import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/epices_maroc.webp";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';
import CategoryDescription from "../_components/(CategoriesPages)/CategoryDescription";
import AllCategories from "../_components/(CategoriesPages)/AllCategories";

export default function SpicesPage() {

  const category = 'spices';

const epicesImage = image.src;
const epicesTitle = "Nos épices";
const epicesParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={epicesImage} title={epicesTitle}/>
      <div className="spices__content flex-wrap border-4 w-full">
      <CategoryDescription text={epicesParagraph} />
      <ProductsSection category={category}/>
      <AllCategories/>
      </div>
      <div className="random__content flex flex-wrap border-4 w-full">
        <RandomSection/>
      
        </div>
    </main>
   
   </>
  )
}

