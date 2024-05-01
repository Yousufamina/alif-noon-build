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
      children: (
        <>
          <div className='Swiper-Slide' >
              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> Jan 13,2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> Investing in Luxury Properties in Dubai </h1>
              <br />
              <p>
                   Dubai, a city renowned for its bold ambitions and modern wonders, stands as a global beacon of luxury living.....
              </p>
              <div className='ArrowIcon'>
                <a href="/Blog1Detail">
                  <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none' />
                  <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
                </a >
              </div>
          </div>
          <div className='Swiper-Slide'>
              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> March 24,2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> Is this safe to invest in dubai to get high ROI </h1>
              <br />
              <p>
              In the dynamic landscape of global investments, Dubai has emerged as a shining star, enticing investors with promises of high ....
              </p>
              <div className='ArrowIcon'>
              <a href="/Blog2Detail">
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </a>
              </div>
          </div>
          <div className='Swiper-Slide'>
            <div className='flex mb-3'> 
              <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
              <img className='goldWhite' src='/goldenDate.svg' alt='none' />
              <span className='ml-2 text-[16px] raleway font-light'> April 13, 2024 </span>
            </div>
            <h1 className='capitalize font-semibold raleway text-[25px]'> Unveiling the Epitome of Opulence </h1>
            <br />
            <p>
            Dubai, with its iconic skyline and cosmopolitan allure, has become synonymous with luxury living. The city's....
            </p>
            <div className='ArrowIcon'>
              <a href="/Blog3Detail">
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </a>
            </div>
          </div>
        </>
      )
    },
    {
      key: '2',
      label: 'SOCIAL',
      children:(
        <div>
        <div className='Swiper-Slide'>
          <div className='flex mb-3'> 
            <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
            <img className='goldWhite' src='/goldenDate.svg' alt='none' />
            <span className='ml-2 text-[16px] raleway font-light'> 15 March 2024 </span>
          </div>
          <h1 className='capitalize font-semibold raleway text-[25px]'> Top UAE fitness industry awards  </h1>
          <br />
          <p>
          Fitness leader wins six awards for second year running at 2024 REPs Industry Awards Gala, held in partnership with Dubai Sports....
          </p>
          <div className='ArrowIcon'>
          <a href="/Social1Detail">
            <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
            <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
          </a>
          </div>
        </div>
        <div className='Swiper-Slide'>
          <div className='flex mb-3'> 
            <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
            <img className='goldWhite' src='/goldenDate.svg' alt='none' />
            <span className='ml-2 text-[16px] raleway font-light'> 6 March 2024 </span>
          </div>
          <h1 className='capitalize font-semibold raleway text-[25px]'> Waterfront Project of the Year </h1>
          <br />
          <p>
          Armani Beach Residences, a landmark collaboration between Arada, Japanese architect Tadao Ando and Armani/Casa, has won ....
          </p>
          <div className='ArrowIcon'>
          <a href="/Social2Detail">
            <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
            <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
          </a>
          </div>
        </div>
        <div className='Swiper-Slide'>
          <div className='flex mb-3'> 
            <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
            <img className='goldWhite' src='/goldenDate.svg' alt='none' />
            <span className='ml-2 text-[16px] raleway font-light'> 27 March 2024 </span>
          </div>
          <h1 className='capitalize font-semibold raleway text-[25px]'> Arada completes first 920 homes </h1>
          <br />
          <p>
            All eight Tiraz apartment blocks finished; handovers under way Over 7,500 homes now completed at Aljada....
          </p>
          <div className='ArrowIcon'>
          <a href="/Social3Detail">
            <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
            <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
          </a>
          </div>
        </div>
        </div>
      )
    },
    {
      key: '3',
      label: 'OFFERS',
      children:(
        <>
          <p>Coming Soon</p>
        </>
      )
    }
  ];


function OurDevelopments() {

    // const [tab, setTab] = React.useState(1);
    const onChange = (key) => {
        console.log(key, "My Key");
        // setTab(key)
    };
    
  //   const [swipper,setSwipper] = useState(3);
  //   useEffect(() => {
  //     let mediaScreen = window.matchMedia("(max-width: 1080px)");
  //     if (mediaScreen.matches) {
  //       setSwipper(1)
  //     } else {
  //       setSwipper(3)
  //     }
  // },[swipper]);

  return (
    <main className="OurDevelopmentSection bg-[#231F20]">
        <Image className="w-full h-[50px] mb-[80px]" height={50} width={100} src="/vector.svg" />
      <div className="mainContainer">
      <div className="productSectionHeader text-center">
                <h5 className=" raleway font-[300] uppercase text-[30px] text-white">United Arab Emirates</h5>
                <h1 className="leading-[70px] uppercase raleway font-[900] text-[50px] text-[#ECA33A]">Recent Developments</h1>
        </div>
        
    <div className="productsTabs">
        
        <Tabs onChange={onChange} defaultActiveKey="1"   items={items}  />
        
                     
        {/* <Swiper
        autoplay={{  
          delay: 2000,
          disableOnInteraction: true,
        }}
        slidesPerView={swipper}
        initialSlide={1}
        centeredSlides={true}
        spaceBetween={0}
        // pagination={{
        //     clickable: true,
        // }} 
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
      > */}
        {/* <SwiperSlide>
            <div className='Swiper-Slide' >
              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> Jan 13,2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> Investing in Luxury Properties in Dubai </h1>
              <br />
              <p>
                   Dubai, a city renowned for its bold ambitions and modern wonders, stands as a global beacon of luxury living.....
              </p>
              
                <div className='ArrowIcon'>
                <a href="/Blog1Detail">
                  <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none' />
                  <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
                </a >
                </div>
              
            </div>
        </SwiperSlide>   
        <SwiperSlide>
        <div className='Swiper-Slide'>
              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> March 24,2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> Is this safe to invest in dubai to get high ROI </h1>
              <br />
              <p>
              In the dynamic landscape of global investments, Dubai has emerged as a shining star, enticing investors with promises of high ....
              </p>
              <div className='ArrowIcon'>
              <a href="/Blog2Detail">
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </a>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

              <div className='flex mb-3'> 
                <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
                <img className='goldWhite' src='/goldenDate.svg' alt='none' />
                <span className='ml-2 text-[16px] raleway font-light'> April 13, 2024 </span>
              </div>
              <h1 className='capitalize font-semibold raleway text-[25px]'> Unveiling the Epitome of Opulence </h1>
              <br />
              <p>
              Dubai, with its iconic skyline and cosmopolitan allure, has become synonymous with luxury living. The city's....
              </p>
              <div className='ArrowIcon'>
              <a href="/Blog3Detail">
                <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
                <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
              </a>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 15 March 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> Top UAE fitness industry awards  </h1>
        <br />
        <p>
        Fitness leader wins six awards for second year running at 2024 REPs Industry Awards Gala, held in partnership with Dubai Sports....
        </p>
        <div className='ArrowIcon'>
        <a href="/Social1Detail">
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </a>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 6 March 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> Waterfront Project of the Year </h1>
        <br />
        <p>
        Armani Beach Residences, a landmark collaboration between Arada, Japanese architect Tadao Ando and Armani/Casa, has won ....
        </p>
        <div className='ArrowIcon'>
        <a href="/Social2Detail">
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </a>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Swiper-Slide'>

        <div className='flex mb-3'> 
          <img className='dateWhite hidden' src='/whiteDate.svg' alt='none' />
          <img className='goldWhite' src='/goldenDate.svg' alt='none' />
          <span className='ml-2 text-[16px] raleway font-light'> 27 March 2024 </span>
        </div>
        <h1 className='capitalize font-semibold raleway text-[25px]'> Arada completes first 920 homes </h1>
        <br />
        <p>
        All eight Tiraz apartment blocks finished; handovers under way Over 7,500 homes now completed at Aljada....
        </p>
        <div className='ArrowIcon'>
        <a href="/Social3Detail">
          <img className='margin-auto whiteArrow flex' src='./whiteArrow.svg' alt='none'/>
          <img className='margin-auto goldenArrow hidden' src='./goldenArrow.svg' alt='none' />
        </a>
        </div>
        </div>
        </SwiperSlide> */}
      
       
        
      {/* </Swiper> */}
      </div>
      </div>
      </main>
      
  )
}

export default OurDevelopments