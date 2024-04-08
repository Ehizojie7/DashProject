"use client";
import React from 'react'
import ReviewsNavbar from '../Navbar/ReviewsNavbar';
import ReviewsBody from '../ReviewsBody/ReviewsBody';




export default function Reviews() {

  return (
    <main className="min-h-screen max-w-[1240px]">
    <div className="mx-14 mt-4">
      <ReviewsNavbar />
      <ReviewsBody />
    </div>
    </main>
    
  )
}
