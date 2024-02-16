import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsBanner from '../components/ProductsBanner';
import image from "../../../public/products-banner.jpg";
import ProductsGallery from '../components/ProductsGallery';
import products from '../products.json';
import RandomProducts from '../components/RandomProducts';

export default function Page() {

const edibleImage = image.src;
const edibleTitle = "Nos huiles alimentaires";
const edibleParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <ProductsBanner image={edibleImage} title={edibleTitle} paragraph={edibleParagraph}/>
      <div className="edible__content">
        <ProductsGallery products={products.categories.edible}/>
      </div>
        <RandomProducts/>
      
    </main>
    <Footer/>
   
   </>
  )
}

