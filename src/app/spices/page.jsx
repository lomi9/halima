import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsBanner from '../components/ProductsBanner';
import image from "../../../public/epices_maroc.webp";
import ProductsGallery from '../components/ProductsGallery';
import products from '../products.json';
import RandomProducts from '../components/RandomProducts';

export default function SpicesPage() {

const epicesImage = image.src;
const epicesTitle = "Nos épices";
const epicesParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo sequi nulla distinctio porro possimus beatae quas iusto, dolores, reprehenderit quos fuga sunt ullam modi vitae ut a quisquam corrupti."

  return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <ProductsBanner image={epicesImage} title={epicesTitle} paragraph={epicesParagraph}/>
      <div className="edible__content">
        <ProductsGallery products={products.categories.spices}/>
      </div>
      <RandomProducts/>
    </main>
    <Footer/>
   
   </>
  )
}

