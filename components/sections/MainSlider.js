"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';
// import './styles.css';

// import required modules
import {Mousewheel, Pagination,Autoplay,EffectFade } from 'swiper/modules';


const MainSlider = () => (
  <>
    <div className='mainSlider mainSliderSection h-[90vh]'>
    <Swiper 
      // direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      effect={'fade'}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      style={{
        "--swiper-pagination-color": "#ECA33A",
        "--swiper-pagination-border": "1px solid #ECA33A",
        "--swiper-pagination-bullet-size": "18px",
        "--swiper-pagination-bullet-top": "40px !important"
      }}
      modules={[Mousewheel,Pagination, Autoplay,EffectFade]}
      className="mySwiper">

      <SwiperSlide>
        <img
        className='mainSlider'
          src="/bgnewfaded.png"  
          alt='Image'
        />
        <div className='sliderContent'>
          {/* <h4 className='barlow'>The Ultimate Luxury Experience</h4>
          <h2 className='gilda_display'>Enjoy The Best Moments of Life</h2>
          <button className='barlow'>Rooms & Suits</button> */}
          <img className='m-[auto] w-[400px]' src='/Alif Noon Logo Hero Banner Logo.png' alt='none' />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img 
          className="mainSlider"
          src="/bgnewfaded2.png"
          alt='Image'
        />
        <div className='sliderContent'>
        <img className='m-[auto] w-[400px]' src='/Alif Noon Logo Hero Banner Logo.png' alt='none' />
          {/* <h4 className='barlow'>The Ultimate Luxury Experience</h4>
          <h2 className='gilda_display'>The Perfect Base for you</h2>
          <button className='barlow'>Rooms & Suits</button> */}
        </div>
      </SwiperSlide>

    </Swiper>
    </div>

    {/* <div className="top-[20%] w-full text-white absolute justify-center">
      <Image
        className="m-auto"
        width={900}
        height={700}
        src="/Alif Noon Logo Fina-07-06.png"
        alt='Image'
      ></Image>
    </div> */}
  </>
);
export default MainSlider;
