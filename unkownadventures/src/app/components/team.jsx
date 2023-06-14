"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const Team = () => {
	const teamVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      },
    },
  };

  const team = {
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
    <section className='pt-14'>
        <h1 className='text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Our <span className='text-[#F7D311]'>Team</span></h1>
        <motion.div 
          variants={teamVariants}
          initial="hidden"
          animate="visible" 
          className='pt-14 max-w-[1400px] m-auto lg:flex gap-5 justify-evenly items-center'>
            <motion.div variants={team} className='mb-4 flex flex-col gap-5 items-center'>
                <div className='w-[290px] bg-white flex flex-col justify-center items-center rounded-[50px] shadow-lg shadow-lime-300'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='Rohit'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>ROHIT</h2>
                        <p className='text-xl pb-2'>Sales & Marketing</p>
                    </div>
                </div>
                 <h1 className='hidden lg:block text-4xl text-center font-bold text-[#1CBE12]'>TRAINED<br /> TESTED</h1>
            </motion.div>
            <motion.div variants={team} className='mb-4 flex flex-col  gap-5 items-center'>
                <h1 className='hidden lg:block text-4xl text-center font-bold text-[#F7D311]'>TRAVEL <br /> EXPERTS</h1>
                <div className='w-[290px] bg-white flex flex-col justify-center items-center rounded-[50px] shadow-lg shadow-lime-300'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='Viren'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>VIREN</h2>
                        <p className='text-xl pb-2'>Technical Support</p>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={team} className='mb-4 flex flex-col  gap-5 items-center'>
                <div className='w-[290px] bg-white flex flex-col justify-center items-center rounded-[50px] shadow-lg shadow-lime-300'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='Swapnil'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width:'400px', height:'400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>SWAPNIL</h2>
                        <p className='text-xl pb-2'>Outdoor Photographer</p>
                    </div>
                </div>
                <h1 className='hidden lg:block text-4xl text-center font-bold text-[#F7D311]'>EVENT <br /> EXPERTS</h1>
            </motion.div>
            <motion.div variants={team} className='flex flex-col  gap-5 items-center'>
                <h1 className='hidden lg:block text-4xl text-center font-bold text-[#1CBE12]'>15+ <br /> CREW</h1>
                <div className='w-[290px] bg-white flex flex-col justify-center items-center rounded-[50px] shadow-lg shadow-lime-300'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='Ibrahim'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>IBRAHIM</h2>
                        <p className='text-xl pb-2'>Planning Expert</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Team