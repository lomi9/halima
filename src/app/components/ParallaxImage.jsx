'use client'

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function ParallaxImage({ imageUrl }) {
    const parallaxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(parallaxRef.current, 
          { y: '-30%' }, 
          {
            y: '30%', 
            scrollTrigger: {
              trigger: parallaxRef.current.parentNode, 
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            ease: "none"
          }
        );
      }, []);
    
    
      return (
        <div className="parallax__container">
          <Image layout="fill" ref={parallaxRef} src={imageUrl} alt="Patrimoine marocain"  className='parallax__container-img overflow-visible'/>
        </div>
      );
    }


export default ParallaxImage