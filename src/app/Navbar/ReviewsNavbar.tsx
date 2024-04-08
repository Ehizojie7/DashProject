"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FiBookmark } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";


export default function ReviewsNavbar() {
  return (
    <div>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center' style={{gap: 15}}>
            <Link href="/">
            <Image 
            src="/images/dash.png"
            alt='logo'
            width={50} height={29}
            />
            </Link>
            <div className=' '>
                   
                    <input 
                    className='w-[150px] h-[30px] md:w-[360px] md:h-[50px] lg:w-[778px] lg:h-[50px] border border-[#D4DCF1] bg-[#FBFAFC] rounded-md py-4 px-3 '
                    placeholder='Bonny and Clyde Street, Ajao Estate, Lagos'
                    
                    />
                </div>
            </div>
            
            

            <div className='ml-6 lg:ml-0 flex flex-row items-center' style={{gap: 20}}>
                <span className='text-[#101012] font-medium text-base' style={{fontFamily: 'Inter'}}>Welcome</span>
                <Image 
                src="/images/Alison.jpg"
                alt='logo'
                className='rounded-full'
                width={36} height={36}
                />

            </div>
        </div>

        <div className='mt-5 flex flex-col lg:flex-row items-center lg:justify-between'>
            <div>
                <div className='text-[#1E1E1E] lg:text-[24px] font-medium' style={{fontFamily: 'Inter'}}>Bonny and Clyde Street, Ajao Estate, Lagos</div>
                <div className='text-[#18181B] lg:text-[16px] font-normal' style={{fontFamily: 'Inter'}}>450 Reviews (People are raving about the selected location)</div>
            </div>

            <div className='flex flex-row items-center' style={{gap: 10}}>
                <Link href='/Reviews/:id'>
            <button 
                    className='bg-[#3366FF] py-2 px-4 lg:py-4 lg:px-10 rounded-md text-white text-base font-medium'
                    style={{fontFamily: 'Inter'}}>
                        LEAVE A REVIEW
                    </button>
                    </Link>

                    <div className='border border-[#3366FF] h-[50px] w-[56px] text-center pt-3 rounded-md'>
                    <FiBookmark 
                    className='text-center mx-auto my-auto'
                    color='#3366FF'
                    size={24}
                    />
                    </div>
                    <div className='border border-[#3366FF] h-[50px] w-[56px] text-center pt-3 rounded-md'>
                    <BiShareAlt 
                     className='text-center mx-auto my-auto'
                     color='#3366FF'
                     size={24}
                    />
                    </div>
            </div>
        </div>

        <div className='hidden lg:flex flex-row items-center mt-5' style={{gap: 10}}>
        <div className='w-[69px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Schools</div>
        <div className='w-[78px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Hospital</div>
        <div className='w-[93px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Resort park</div>
        <div className='w-[117px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Shopping malls</div>
            <div className='w-[62px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Airport</div>
            <div className='w-[100px] h-[24px] border border-[#1E1E1E] text-center bg-[#FBFAFC] text-sm'>Train station</div>
            <div className='w-[72px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Night life</div>
            <div className='w-[86px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Public Wifi</div>
            <div className='w-[125px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Public Transport</div>
            <div className='w-[92px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Bus station</div>
            <div className='w-[52px] h-[24px] border border-[#1E1E1E] text-center text-sm bg-[#FBFAFC]'>Quiet</div>
           
        </div>

        </div>

   
  )
}

