"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react';
import logo from "../../../public/logo-clear.png";
import Image from 'next/image';

function Footer() {

  const {user}=useUser();

  return user&&(
    <footer className='bg-primary-color flex flex-wrap flex-col w-full'>
        <div className='flex flex-wrap justify-center p-5'> 
        <div className='w-20 h-20 relative'>
            <Image src={logo.src}  fill alt="Logo Halima Garden" className='w-20 object-cover'/>
            </div>
            <p className='w-full flex flex-wrap justify-center text-main-color kodchasan text-xl'>HALIMA GARDEN</p>

        </div>
        <div className='flex flex-wrap justify-center'>
            <p className='chakra text-main-color text-sm font-thin underline px-4'>Mentions Légales</p>
            <p className='chakra text-main-color text-sm font-thin underline px-4'>Conditions générales</p>
        </div>
        <div className='flex flex-wrap justify-center'>
            <p className='uppercase text-main-color kodchasan text-sm'>Copyright 2024 HALIMA GARDEN</p>
        </div>

    </footer>
  )
}

export default Footer