import React, { useState } from 'react';


function ProductDetailsTabs({ product }) {

    const [selectedContent, setSelectedContent] = useState('utilisations');

    const contentOptions = [
        { name: 'Utilisation', value: 'utilisations' },
        { name: 'Bienfaits', value: 'benefits' },
        { name: 'Ingrédients', value: 'ingredients' },
      ];

      const contentMapping = {
        ingredients: 'ingredients', 
        utilisations: 'utilisation',   
        benefits: 'benefits'
      };
      

  return (
    <article className='flex flex-wrap'>
      <div className='bg-section-color mx-[3vw] sm:ml-0 sm:mr-[3vw] p-[3vw] rounded-lg'>
      <div className='flex gap-4 m-0 justify-around items-center'>
        {contentOptions.map((option) => (
            <button 
                key={option.value} 
                className={`kodchasan bg-secondary-color border border-solid border-secondary-color rounded-lg uppercase  text-[2.7vw] sm:text-[1.5vw] lg:text-[1.2vw] text-section-color font-normal px-[2.5vw] py-[1.2vw] sm:px-[1.3vw] sm:py-[0.8vw] shadow-md cursor-pointer transition duration-300 ease-in-out ${selectedContent === option.value ? 'active-tab-class' : ''}`}
                onClick={() => setSelectedContent(option.value)}
            >
            {option.name}
            </button>
        ))}
    </div>
        <div className='bg-section-color w-[100%] mr-[4vw] h-[auto] rounded-lg flex flex-wrap items-center '>
            <p className='chakra text-[3.2vw] sm:text-[2vw] lg:text-[1.4vw] font-light text-primary-color flex flex-wrap items-center py-[50px] '>
                {product?.attributes?.[contentMapping[selectedContent]]}
            </p>
        </div>
    </div>
    </article>
  );
}

export default ProductDetailsTabs;
