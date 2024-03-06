import Link from 'next/link'
import React from 'react'

export default function MinimalistLitleButton({link, btnText}) {
  return (

    <div className='relative w-full flex flex-wrap justify-center items-center'>

      <Link href={link} className='relative group border border-solid border-primary-color h-full px-[22%] py-[3%] sm:px-[22%] sm:py-[5%] md:px-[22%] md:py-[5%] flex flex-wrap justify-center items-center max-w-[80%] hover:bg-green-hover hover:border-secondary-color transition duration-300 ease-in-out shadow-md '>
        <div className=' w-full h-full flex flex-wrap justify-center items-center'>
          <p className='kodchasan p-0 px-2 m-0 uppercase flex flex-wrap justify-center items-center text-[0.8rem] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.8vw] text-primary-color font-light group-hover:text-secondary-color text-center '>{btnText}</p>
        </div>
        <span className=' bg-primary-color absolute w-[25%] sm:w-[25%] md:w-[25%] h-[1px] top-[50%] left-[-12%] sm:left-[-12%] md:left-[-12%] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:bg-secondary-color'></span>
        <span className=' bg-primary-color absolute w-[25%] sm:w-[25%] md:w-[25%] h-[1px] top-[50%] right-[-12%] sm:right-[-12%] md:right-[-12%] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bg-secondary-color'></span>
      </Link>

    </div>
  )
}
