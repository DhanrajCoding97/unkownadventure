"use client"

import React from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <nav className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href="/">
          <h1 className='font-bold text-4xl text-green-400'>Unkown Adventures</h1>
        </Link>
        <ul className='hidden md:flex text-xl'>
          <li className='p-4'>
            <Link href="#" className='hover:text-green-400 ease-in duration-300'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href="#" className='hover:text-green-400 ease-in duration-300'>About</Link>
          </li>
          <li className='p-4'>
            <Link href="#" className='hover:text-green-400 ease-in duration-300'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href="#" className='hover:text-green-400 ease-in duration-300'>Testimonial</Link>
          </li>
          <li className='p-4'>
            <Link href="#" className='hover:text-green-400 ease-in duration-300'>Contact</Link>
          </li>
        </ul>

        {/* Mobile button */}
        <div onClick={handleNav} className='md:hidden block z-10'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}  
        </div>

        {/* Mobile menu */}
        <div className={nav ? 'md:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' }> 
          <ul>
            <li className='p-4 text-4xl hover:text-gray-400'>
              <Link href="#">Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-400'>
              <Link href="#">About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-400'>
              <Link href="#">Services</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-400'>
              <Link href="#">Testimonial</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-400'>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar