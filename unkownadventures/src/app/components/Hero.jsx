"use client"

import React from 'react'
import Link from 'next/link'
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
    
    className="relative bg-[url(https://images.pexels.com/photos/9789339/pexels-photo-9789339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="flex flex-col md:flex-row md:justify-between gap-5 h-screen relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div>
        <h1 className="text-3xl font-bold sm:text-6xl">Travel <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
        <span className="relative text-white ">Event</span>
        </span></h1>

        <p className="my-4 text-md max-w-lg sm:text-2xl/relaxed">
        We Are Tour & Event Company for all type of Adventure & Event Activities 
        </p>

        
        <a href="https://wa.me/9867170214" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex gap-2">Connect <BsWhatsapp size={25} /> </span>
        </a>
        
      </div>
    <div className='offroad-ride h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
      <h2 className='text-3xl font-bold pb-2'>Upcoming Rides</h2>
      <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">Explore</span>
      </a>
    </div>
  </div>
</motion.section>
  )
}

export default Hero