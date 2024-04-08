"use client";
import React, { useState } from 'react'
import { Data } from '../ReviewsData'
import Image from 'next/image'
import Link from 'next/link';
import { BiComment, BiLike, BiDislike } from "react-icons/bi";



export default function FirstBody() {

    console.log(Data)
    const [hidden, setHidden] = useState(true)

    const handlePost = () => {
       
        
            setHidden(false)
        
    }

  return (
    <div className='w-[722px]'>
        {
            Data.map((data) => (
                <div className='mt-2 mb-2 py-2 border-b border-[#D9D9D9]' key={data.id} onClick={ handlePost}>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center' style={{gap: 10}}>
                        <Image 
                        alt='profile'
                        src='/images/Alison.jpg'
                        width={24}
                        height={24}
                        className='rounded-full'
                        />
                        <span className='text-[#1E1E1E] font-medium text-sm' style={{fontFamily: 'Inter'}}>{data.name}</span>
                        <span className='text-[#101010] font-normal text-sm' style={{fontFamily: 'Inter'}}>{data.time}</span>
                    </div>
                    <div className='text-[#101010] font-normal text-sm' style={{fontFamily: 'Inter'}}>{data.rating}</div>
                </div>

                <div className='mt-2 mb-2 leading-6 text-base text-[#18181B]' style={{fontFamily: 'Inter'}}>{data.review}</div>

                <div className='flex flex-row items-center' style={{gap: 22}}>
                    <span className='text-[#0D2159] font-medium flex flex-row items-center text-sm' style={{fontFamily: 'Inter', gap: 4}}>
                        <BiLike />
                        {data.likes}
                        </span>
                    <span className='text-[#0D2159] font-medium flex flex-row items-center text-sm' style={{fontFamily: 'Inter', gap: 4}}>
                        <BiDislike />
                        {data.dislikes}
                        </span>
                    <span className='text-[#0D2159] font-medium flex flex-row items-center text-sm' style={{fontFamily: 'Inter', gap: 4}}> 
                    <BiComment 
                    className='text-[#0D2159] font-medium text-sm'
                    />
                    {data.comments}
                    </span>
                </div>

                <div className='flex py-2 flex-row items-center justify-between mt-3 border-t border-[#D9D9D9]' style={{display: hidden ? 'none' : 'flex'}}>
                    <div>
                        Add a comment
                    </div>

                    <Link href='/Reviews/:id'>
                    <button 
                    className='bg-[#3366FF] h-[30px] w-[68px] rounded-md text-white font-medium text-base' style={{fontFamily: 'Inter'}}>
                        Post
                    </button>
                    </Link>
                </div>
                </div>
            ))
        }
        </div>
  )
}
