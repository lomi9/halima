import React from 'react'
import ProductsBanner from '../_components/(CategoriesPages)/ProductsBanner';
import image from "../../../public/products-banner.jpg";
import ProductsSection from '../_components/(CategoriesPages)/ProductsSection';
import RandomSection from '../_components/(Random_Products)/RandomSection';
import CategoryDescription from "../_components/(CategoriesPages)/CategoryDescription";
import AllCategories from "../_components/(CategoriesPages)/AllCategories";


export default function EdiblePage() {

  const category = 'edible';

  const edibleImage = image.src;
  const edibleTitle = "Nos huiles alimentaires";
  const edibleParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsBanner image={edibleImage} title={edibleTitle}/>
      <div className="edible__content flex flex-wrap border-4 w-full">
      <CategoryDescription text={edibleParagraph} />
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

