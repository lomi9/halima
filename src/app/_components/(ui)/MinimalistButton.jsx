import Link from 'next/link'
import React from 'react'

export default function MinimalistButton({link, btnText}) {
  return (

    <div className='relative w-full flex flex-wrap justify-center items-center'>

      <Link href={link} className='relative group border border-solid border-primary-color h-full px-[4rem] py-[1rem] sm:px-[3.5rem] sm:py-[1rem] md:px-[4rem] md:py-[1rem] flex flex-wrap justify-center items-center max-w-[80%] hover:bg-[#F2ECDB] transition duration-300 ease-in-out shadow-md'>
        <div className=' w-full h-full flex flex-wrap justify-center items-center'>
          <p className='kodchasan p-0 px-2 m-0 uppercase flex flex-wrap justify-center items-center text-[1rem] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.8vw] text-primary-color font-light group-hover:font-medium text-center '>{btnText}</p>
        </div>
        <span className=' bg-primary-color absolute w-[4rem] h-[1px] top-[50%] left-[-2rem] transition-all duration-300 ease-in-out group-hover:left-0'></span>
        <span className=' bg-primary-color absolute w-[4rem] h-[1px] top-[50%] right-[-2rem] transition-all duration-300 ease-in-out group-hover:right-0'></span>
      </Link>

    </div>
  )
}
