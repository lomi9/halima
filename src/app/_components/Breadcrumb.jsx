import Link from 'next/link';
import React from 'react'

export default function Breadcrumb({category, product}) {

  const categoryNames = {
    'edible': 'Huiles alimentaires',
    'beauty': 'Huiles de beauté',
    'spices': 'Épices',
    'treats': 'Gourmandises',
  };

  const displayCategory = categoryNames[category] || category;

  const categoryPath = `/${encodeURIComponent(category)}`;

  return (
    <nav aria-label="Breadcrumb" className="flex w-full items-center justify-center">
      <ol className="flex overflow-hidden rounded-lg border-solid border border-tabbutton-bg-color text-gray-600 pl-0 ml-[2vw]">
        <li className="flex items-center bg-section-color border  ">
          <Link
            href="/"
            className="group flex text-primary-color h-10 items-center border gap-1.5 px-4 transition hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

          <span className=" chakra ms-1.5 text-xs font-medium text-primary-color"> 
          Home
          </span>
        </Link>
      </li>

      <li className="group relative flex items-center">
        <span
          className="absolute inset-y-0 -start-[0.1px] h-10 w-4 bg-section-color [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
        >
        </span>

        <Link
          href={categoryPath}
          className="text-primary-color chakra flex h-10 items-center bg-tabbutton-bg-color hover:bg-tabbutton-bg-color pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
        >
        {displayCategory}
      </Link>
    </li>

    {product &&(
    <li className="relative group flex items-center">
      <span
        className=" cursor:default absolute border-none inset-y-0 -start-[0px] h-10 w-4 bg-tabbutton-bg-color [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
      >
      </span>

      <p
        className=" chakra cursor:default m-0 flex h-10 items-center text-primary-color bg-yellow-color pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
      >
        {product}
      </p>
    </li>)}

  </ol>
</nav>
  )
}

