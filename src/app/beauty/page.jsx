import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/maroc-architecture.webp";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';
import CategoryDescription from "../_components/(CategoriesPages)/CategoryDescription";
import AllCategories from "../_components/(CategoriesPages)/AllCategories";

export default function BeautyPage() {

  const category = 'beauty';

const beautyImage = image.src;
const beautyTitle = "Nos huiles de beauté";
const beautyParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={beautyImage} title={beautyTitle}/>
      <div className="beauty__content flex flex-wrap border-4 w-full">
      <CategoryDescription text={beautyParagraph} />
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

