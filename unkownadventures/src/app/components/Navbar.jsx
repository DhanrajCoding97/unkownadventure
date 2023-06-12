"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useRouter, usePathname} from 'next/navigation'
import { motion } from 'framer-motion'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname();
  const navLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Services",
      link: "/services"
    },
    {
      name: "Testimonial",
      link: "/testimonial"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const[textColor,setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  }

 useEffect(() => {
  const changeColor = () => {
    if(window.scrollY >= 90) {
      setColor('#ffffff')
      setTextColor('#000000')
    } else {
        setColor('transparent')
        setTextColor('white')
    }
  }
  window.addEventListener('scroll', changeColor)
 },[])

  return (
    <div style={{ backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <nav className='max-w-[1400px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href="/">
          <h1 style={{ color: `${textColor}`}} className='font-bold text-2xl md:text-3xl text-green-400 hover:text-green-400 ease-in duration-300'>Unkown Adventures</h1>
        </Link>
        <ul style={{ color: `${textColor}`}} className='hidden md:flex text-xl'>
          {navLink.map(({link, name}) => (
            <li key={name} className='p-3'>
              <Link
              key={name}
              href={link}
              className={`${pathname === link ? 'text-[#35D0BA] hover:text-[#35D0BA] ease-in duration-300':'hover:text-[#35D0BA] ease-in duration-300'}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <div onClick={handleNav} className='md:hidden block z-10'>
          {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}`}}/>}  
        </div>

        {/* Mobile menu */}
        <motion.div 
        className={nav ? 'md:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' }> 
          <ul>
            {navLink.map(({link, name}) => (
            <li key={name} className='p-3 text-2xl'>
              <Link
              onClick={handleNav}
              key={name}
              href={link}
              className={`${pathname === link ? 'text-[#35D0BA] hover:text-[#35D0BA] ease-in duration-300':'hover:text-[#35D0BA] ease-in duration-300'}`}
              >
                {name}
              </Link>
            </li>
          ))}
          </ul>
        </motion.div>
      </nav>
    </div>
  )
}

export default Navbar