"use client"

import React, { useRef, useState } from "react";
import {AiFillStar} from "react-icons/ai"
import {FaQuoteLeft, FaQuoteRigt} from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay, Pagination } from "swiper";
import { delay } from "framer-motion";
const Testimonial = () => {
  return (
    <section className='max-w-[1400px] mt-24 m-auto'> 
      <h1 className='pb-12 text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Testimonial</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            Unknown Adventures organized pre masoon breakfast ride with royal enfield , We wnt place called wada which had amazing scenic views, this was my first long ride and enjoyed every single minute of this ride,the ride was very well manged at every pit stop they were provided us water and some snacks to keep us energetic, I definitely look forward go on for more such amazing rides with unknown Adventures.
            </p>
            <span className="pt-4 flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">Joshua V</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            They had organised a breakfast ride for Royal Enfield riders to a place called Pali. This was my first ever ride and excursion with them and loved every part of it. Not even for a moment could I feel that I was new there, they made sure that the entire experience should be remembered forever. I have made new connections, new memories with the entire team of Unknown Adventures and I look forward to many such adventures with them. I highly recommend them to everyone, be it for family, friends, small groups, big groups, rides, picnics anything
            </p>
            <span className="pt-4 flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">Zeenat J</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            Nicely executed the ktm urban escape ride. They took us to adventure trials where we did the kayaking. All of them were extremely cooperative and managed the ride very well. Overall a very nice experience
            </p>
            <span className="pt-4 flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">PU G</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            Unknown Adventures organized pre masoon breakfast ride with royal enfield , We wnt place called wada which had amazing scenic views, this was my first long ride and enjoyed every single minute of this ride,the ride was very well manged at every pit stop they were provided us water and some snacks to keep us energetic, I definitely look forward go on for more such amazing rides with unknown Adventures.
            </p>
            <span className="flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">Joshua V</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            Unknown Adventures organized pre masoon breakfast ride with royal enfield , We wnt place called wada which had amazing scenic views, this was my first long ride and enjoyed every single minute of this ride,the ride was very well manged at every pit stop they were provided us water and some snacks to keep us energetic, I definitely look forward go on for more such amazing rides with unknown Adventures.
            </p>
            <span className="pt-4 flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">Joshua V</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-grab px-10 py-12 bg-white rounded-xl text-black text-left relative">
            <p>
            Unknown Adventures organized pre masoon breakfast ride with royal enfield , We wnt place called wada which had amazing scenic views, this was my first long ride and enjoyed every single minute of this ride,the ride was very well manged at every pit stop they were provided us water and some snacks to keep us energetic, I definitely look forward go on for more such amazing rides with unknown Adventures.
            </p>
            <span className="pt-4 flex justify-center">
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
              <AiFillStar size={22} color="yellow"/>
            </span>
            <p className="text-center">Joshua V</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial