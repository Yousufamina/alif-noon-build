"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'antd';


// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

function CardPagination() {
  return (
    <>
    {/* <Swiper
      effect={'coverflow'}
      initialSlide={0}
      navigation={true}
      modules={[EffectCoverflow,Navigation]}
      className="mySwiper"
    style={{width:'200px'}}
    >
      <SwiperSlide style={{width:'100px'}}>
        <div className='text-center m-auto border-white border-solid border-1 text-[50px] text-white w-[50px] h-[82px]'>
            1
         </div>
         </SwiperSlide>
         <SwiperSlide style={{width:'100px'}}>
        <div className='text-center m-auto border-white border-solid border-1 text-[50px] text-white w-[50px] h-[82px]'>
         2
         </div>
         </SwiperSlide>
         <SwiperSlide style={{width:'100px'}}>
        <div className='text-center m-auto border-white border-solid border-1 text-[50px] text-white w-[50px] h-[82px]'>
         3
         </div>
         </SwiperSlide>

    </Swiper> */}
    <Pagination style={{marginTop:'20px'}} className='text-center' defaultCurrent={1} total={50} />
    </>
  )
}

export default CardPagination