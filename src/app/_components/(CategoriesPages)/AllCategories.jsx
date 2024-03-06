import React from 'react';
import CategoryCard from "../(CategoriesPages)/CategoryCard";
import oliviers from "../../../../public/oliviers.jpg";
import beautyImage from "../../../../public/terrasse-maroc-home.webp";
import spicesImage from "../../../../public/epices_maroc.webp";
import treatsImage from "../../../../public/amandes_maroc.webp";

function AllCategories() {

    const edibleImg = oliviers ;
    const edibleText = "Huiles alimentaires" ;
    const edibleLink = "/edible";

    const beautyImg = beautyImage ;
    const beautyText = "Huiles de beauté" ;
    const beautyLink = "/beauty";

    const spicesImg = spicesImage ;
    const spicesText = "épices" ;
    const spicesLink = "/spices";

    const treatsImg = treatsImage ;
    const treatsText = "Gourmandises" ;
    const treatsLink = "/treats";



  return (
    <div className="random__products flex flex-wrap overflow-hidden w-screen mt-7 pb-28 bg-yellow-main-color">
    <div className='w-full pb-20 pt-12'>
      <div className='relative flex flex-wrap justify-center content-center w-auto'>
      <h3 className='kodchasan font-light uppercase flex flex-wrap content-center justify-center text-secondary-color text-3xl m-1.5'>Toutes les catégories</h3>
      <span className='line bottom-0 absolute flex w-44 h-px bg-primary-color flex-wrap justify-center content-center'></span>
      </div>
      <div className='flex flex-wrap w-full justify-evenly items-center'>
        <div className='w-[20%] p-2'>
            <CategoryCard img={edibleImg} text={edibleText} link ={edibleLink} />
        </div>
        <div className='w-[20%] p-2'>
            <CategoryCard img={beautyImg} text={beautyText} link ={beautyLink} />
        </div>
        <div className='w-[20%] p-2'>
            <CategoryCard img={spicesImg} text={spicesText} link ={spicesLink} />
        </div>
        <div className='w-[20%] p-2'>
            <CategoryCard img={treatsImg} text={treatsText} link ={treatsLink} />
        </div>

      </div>
    </div>

  </div>
  )
}

export default AllCategories