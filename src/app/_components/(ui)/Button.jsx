import React from 'react';
import Link from 'next/link';

function Button({ text, href }) {
  return (
    <Link href={href}>
    <button className="btn kodchasan bg-accent-color font-normal text-[#8F2D17] border-[#D0492C] hover:border-accent-color hover:text-accent-color hover:bg-transparent text-xl ">{text}</button>
    </Link>
  )
}

export default Button