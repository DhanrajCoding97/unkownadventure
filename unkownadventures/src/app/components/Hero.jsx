import React from 'react'


const Hero = () => {
  return (
    <section className='relative w-full h-[100vh]'>
        <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black/40'></div>
        <video autoPlay muted loop className='w-full h-full object-cover'>
            <source src='/bgVideo.mp4'></source>
        </video>
        <div className='m-auto absolute w-full h-full top-0 left-[13%] flex flex-col justify-center items-start'> 
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl text-[#F7D311]'>Travel Event</h1>
            <p className=' max-w-[600px] drop-shadow-2xl py-2 text-2xl text-lime-400'>We Are Tour & Event Company for all type of Adventure & Event Activities </p>
        </div> 
    </section>
  )
}

export default Hero