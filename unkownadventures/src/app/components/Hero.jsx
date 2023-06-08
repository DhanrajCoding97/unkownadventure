import React from 'react'
import Link from 'next/link'
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  return (
    // <section classNameName='relative w-full h-[100vh]'>
    //     <div classNameName='absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black/80'></div>
    //     {/* <video autoPlay muted loop classNameName='w-full h-full object-cover'>
    //         <source src='/bgVideo.mp4'></source>
    //     </video> */}
    //     <div classNameName='custom-img p-2 m-auto absolute w-full h-full top-0 left-0 md:left-[13%] flex flex-col justify-center items-start'> 
    //         <h1 classNameName='font-bold text-5xl md:text-7xl drop-shadow-2xl text-white'>Travel Event</h1>
    //         <p classNameName=' max-w-[600px] drop-shadow-2xl py-2 text-2xl text-white'>We Are Tour & Event Company for all type of Adventure & Event Activities </p>
    //     </div> 
    // </section>
    <section
  className="relative bg-[url(https://images.pexels.com/photos/9789339/pexels-photo-9789339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/40"
  ></div>

  <div
    className="flex flex-col md:flex-row justify-between h-screen relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div>
      <h1 className="text-3xl font-extrabold sm:text-6xl">Travel <strong className="font-extrabold text-[#1CBE12]">Event</strong></h1>

      <p className="my-4 text-md max-w-lg sm:text-2xl/relaxed">
      We Are Tour & Event Company for all type of Adventure & Event Activities 
      </p>

      
      <Link href="https://wa.me/9867170214" className="relative inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white flex gap-2">Connect <BsWhatsapp size={25} /> </span>
      </Link>
      
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
</section>
  )
}

export default Hero