import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsBanner from '../components/ProductsBanner';
import image from "../../../public/maroc-architecture.webp";
import ProductsGallery from '../components/ProductsGallery';
import products from '../products.json';
import RandomProducts from '../components/RandomProducts';

export default function Page() {

const beautyImage = image.src;
const beautyTitle = "Nos huiles de beauté";
const beautyParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <ProductsBanner image={beautyImage} title={beautyTitle} paragraph={beautyParagraph}/>
      <div className="edible__content">
        <ProductsGallery products={products.categories.beauty}/>
      </div>
      <RandomProducts/>
    </main>
    <Footer/>
   
   </>
  )
}

