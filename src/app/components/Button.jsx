import React from 'react';
import Link from 'next/link';

function Button({ text, href }) {
  return (
    <Link href={href}>
    <button className="btn chakra  text-accent-color border-accent-color hover:border-accent-color hover:text-main-color hover:bg-accent-color btn-md sm:btn-md md:btn-md lg:btn-lg font-normal ">{text}</button>
    </Link>
  )
}

export default Button