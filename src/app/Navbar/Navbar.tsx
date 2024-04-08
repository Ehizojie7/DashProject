"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    
        <div className='flex flex-row items-center justify-between'>
          <div className='hidden lg:flex'>
          <Link href="/">
            <Image 
            src="/images/dash.png"
            alt='logo'
            width={92} height={29}
            />
            </Link>

          </div>

          <div className=' lg:hidden'>
          <Link href="/">
            <Image 
            src="/images/dash.png"
            alt='logo'
            width={50} height={29}
            />
            </Link>

          </div>
            

            <div className='flex flex-row items-center' style={{gap: 20}}>
                <span className='text-[#101012] font-medium text-base' style={{fontFamily: 'Inter'}}>Welcome</span>
                <Image 
                src="/images/Alison.jpg"
                alt='logo'
                className='rounded-full'
                width={36} height={36}
                />

            </div>
        </div>

   
  )
}

