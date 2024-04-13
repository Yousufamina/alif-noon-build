"use client"

import CardBottom from '../productCard/CardBottom'
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Navigation } from 'swiper/modules';

function SimilerPropCards() {
  return (
    <div className='SimilerPropertyCard'>
    
        <Swiper 
        watchSlidesProgress={true} 
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        initialSlide={1}
        className="mySwiper">
            
                    <SwiperSlide>
                        <img className='w-[100%] h-[100%]' src='/propertyPhoto1.webp' alt='none' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className='w-[100%] h-[100%]' src='/propertyPhoto2.webp' alt='none' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[100%] h-[100%]' src='/propertyPhoto3.webp' alt='none' />
                    </SwiperSlide>
               
        </Swiper>
            <div className='innerContent'>
              <h1> Cavali Coutour </h1>
              <div className='flex'>
                    <img className='mt-[5px] h-[18px]' src='/pinVector.png'  />
                    <h2 className='ml-1'>Al Safa</h2>
              </div>
              <h5> Apartment </h5>
              <div className='flex items-center'>
              <img className='mr-[2px]' style={{width: '35px'}} alt='none' src='/bedroomIcon.svg' />
              <p>4</p>
              <img className='ml-3 mr-[2px]' style={{width: '35px'}} alt='none' src='/bathIcon.svg' />
              <p>6</p>
              <img className='ml-3 mr-[2px]' style={{width: '35px'}} alt='none' src='/sqrft3.svg' /> 
              <p>5163 sq.ft</p>
            </div>
            <div className='hr'></div>
            <h2 className='mt-2'>AED 23,135,000</h2>
            </div>
            

        <div className='cardBottom flex justify-center'>
          <div className='innerDiv'>
              <img src='/whatsappIcon.svg' />
          </div>
          <div className='innerDiv' style={{borderRight: '1px solid #cecece',borderLeft: '1px solid #cecece'}}>
              <img src='/phoneIcon.svg' />
          </div>
          <div className='innerDiv' style={{borderRight: '1px solid #cecece'}}>
              <img src='/shareIcon.svg' />
          </div>
          <div className='innerDiv'>
              <img src='/emailIcon.svg' />
          </div>
        </div>
    </div>
  )
}

export default SimilerPropCards