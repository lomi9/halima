import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryCard({ img, text, link }) {
  return (
    <Link href={link} className=' group relative w-full h-[130px] sm:h-[150px] overflow-hidden rounded-xl flex flex-wrap justify-center items-center shadow-lg transition-transform duration-300 group-hover:scale-105'>

    <div className='relative w-full h-full overflow-hidden'>
        <Image 
          src={img} 
          layout='fill' 
          objectFit='cover' 
          className='object-cover'
        />
      </div>

        <div className='absolute w-full h-full bg-black opacity-[40%] top-0 left-0 flex flex-wrap justify-center items-center'>

        </div>
        <div className='absolute w-full h-full top-0 left-0 flex flex-wrap justify-center items-center'>
        <h4 className=' transition-transform duration-300 relative text-main-color w-full kodchasan uppercase text-[4vw] sm:text-[1.7vw] group-hover:text-[1.8vw] font-thin flex flex-wrap justify-center items-center content center text-center'>
                {text}
            </h4>
        </div>

        
    </Link>
  )
}

export default CategoryCard