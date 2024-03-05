import React from 'react';
import Link from 'next/link';

function Button({ text, href }) {
  return (
    <Link href={href}>
    <button className="btn kodchasan bg-accent-color font-thin text-main-color border-2 border-solid border-[#D0492C] hover:border-accent-color hover:text-accent-color hover:bg-transparent hover:font-normal text-xl xl:text-[2vw] xl:p-[2vw] flex flex-wrap items-center content-center ">{text}</button>
    </Link>
  )
}

export default Button