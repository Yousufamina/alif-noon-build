"use client"

import React,{ useEffect,useState } from 'react'
import { Col, Row, Tabs } from "antd";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination,Autoplay } from 'swiper/modules';

const items = [
    {
      key: '1',
      label: 'BLOGS',
    },
    {
      key: '2',
      label: 'SOCIAL',
    },
    {
      key: '3',
      label: 'OFFERS',
    }
  ];

function OurDevelopments() {

    const onChange = (key) => {
        console.log(key, "My Key");
    };
    const [swipper,setSwipper] = useState(3);
    useEffect(() => {
      let mediaScreen = window.matchMedia("(max-width: 1080px)");
      if (mediaScreen.matches) {
        setSwipper(1)
      } else {
        setSwipper(3)
      }
  },[swipper]);

  return (
    <main className="OurDevelopmentSection bg-[#231F20]">
        <Image className="w-full h-[50px] mb-[80px]" height={50} width={100} src="/vector.svg" />
      <div className="mainContainer">
      <div className="productSectionHeader text-center">
                <h5 className=" raleway font-[300] uppercase text-[30px] text-white">United Arab Emirates</h5>
                <h1 className="leading-[70px] uppercase raleway font-[900] text-[50px] text-[#ECA33A]">Recent Developments</h1>
        </div>
        <div className="productsTabs">
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        </div>
        <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        slidesPerView={swipper}
        initialSlide={1}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
            clickable: true,
        }}
        loop={true}
        style={{
            "--swiper-pagination-color": "#ECA33A",
            "--swiper-pagination-bullet-inactive-color": "#fcfcfc00",
            "--swiper-pagination-bullet-size": "14px",
            "--swiper-pagination-bullet-top": "40px !important",
            "--swiper-pagination-bullet-right": "20px !important"
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper mt-4"
      >
        <SwiperSlide>
            <div className='Swiper-Slide'>

              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
              <br />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
              </p>
              <div className='ArrowIcon'>
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
              <br />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
              </p>
              <div className='ArrowIcon'>
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
              <br />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
              </p>
              <div className='ArrowIcon'>
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
        <br />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
        </p>
        <div className='ArrowIcon'>
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
        <br />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
        </p>
        <div className='ArrowIcon'>
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 24 dec 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> what is the meaning of real state? </h1>
        <br />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text....
        </p>
        <div className='ArrowIcon'>
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      
      </main>
      
  )
}

export default OurDevelopments