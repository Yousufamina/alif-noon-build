"use client"

import Image from 'next/image'
import React,{ useRef, useState }  from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation } from 'swiper/modules';

function OfficialsClients() {
  return (
    <main className="bg-[#231F20]">
      <Image className="w-full h-[50px] mb-4" height={50} width={100} src="/vector.svg" />
        <div className="OfficialClientSection mainContainer">
            <h1 className="max-[1024px]:text-[30px] uppercase text-center font-[700] leading-[60px] raleway  text-[52px] text-[#ECA33A] mb-[15px]">
                Our Officials
            </h1>
              <h4 className="max-[1024px]:text-[25px] text-white text-center font-[100] raleway-light font-light mb-[40px] text-[27px] leading-[35px]">
              WE ARE TO MAKE THE BEST OFFER FOR YOU.
              </h4>
        <div className='margin-[0 auto] w-100'>
              <Swiper
        effect={'coverflow'}
        initialSlide={3}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        // pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='SwiperSlide relative'>
          <div className='clientImg'>
          <img className='w-[100%] h-[100%] object-cover' src="/OurOfficial.png" alt='none'/>
          </div>
          <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
          
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
          <div className='clientImg'>
          <img className='w-[100%] h-[100%] object-cover' src="/officialclient.png" alt='none' />
          </div>
          <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
          <div className='clientImg'>
          <img className='w-[100%] h-[100%] object-cover' src="/OurOfficial.png" alt='none'/>
          </div>
          <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
           <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
        <div className='clientImg'>
          <img className='w-[100%] h-[100%] object-cover' src="/officialclient.png" alt='none' />
          </div>
           <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
        <div className='clientImg'>
          <img className='w-[100%] h-[100%] object-cover' src="/OurOfficial.png" alt='none'/>
          </div>
           <div className='absoluteLayer'>
                <h2 className='raleway uppercase text-[30px] leading-[35px] text-[#ECA33A]'> Natalia butrik </h2>
                  
                <h5 className='raleway text-[17px] leading-[19px] text-light text-[#231F20]'>Senior Property Expert</h5> 
            
                <hr className='bg-[#BCBCBC] mt-2 w-[50%] h-[2px]' />

                <p className='mt-2 raleway text-[13px] leading-[15px] text-light text-[#231F20]'>
                Experience: 2 years<br/>
                Specialization: Primary market<br/>
                Language: English, Russian
                </p>
                <div className='flex justify-end mt-[-20px]'>
                    <img className='w-[45px] h-[40px] mr-[7px]' alt='none' src='/clientCall.svg' />
                    <img className='w-[45px] h-[40px] mr-[0px]' alt='auto' src='/clientWhatsapp.svg' />
                </div>
           </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </div>
    </main>
  )
}

export default OfficialsClients