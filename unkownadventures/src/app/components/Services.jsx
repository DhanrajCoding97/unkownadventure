"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  
  return (
    <section className='mt-24'>
        <h1 className='text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Our <span className='text-[#F7D311]'>Services</span></h1>
        <div className='pt-10 flex flex-col justify-center items-center h-full'>
          <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            <motion.div variants={item} className='bike-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>BIKE RIDES</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='cause-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>CAUSE RIDES</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='offroad-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>OFF ROAD RIDES</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='outdoor-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>OUTDOOR RIDES</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='events-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>EVENTS</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='display-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2'>DISPLAY</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='corporate-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2 text-center'>CORPORATE OUTINGS</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
            <motion.div variants={item} className='outact-ride m-3 h-[425px] w-[300px] rounded-md flex flex-col justify-center items-center transition hover:cursor-pointer duration-300 ease-in hover:scale-105'>
              <h2 className='text-3xl font-bold pb-2 text-center'>OUTDOOR ACTIVITIES</h2>
              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Explore</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}

export default Services