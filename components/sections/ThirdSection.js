"use client";

import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// import CustomModel from "../customModel";
import  { useState } from 'react';
import { Button, Modal } from 'antd';

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import './styles.css';

import { EffectCards } from "swiper/modules";
import { Pagination } from "swiper/modules";
  
// import { useState } from "react";


function ThirdSection() {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <main className="ExploreSection bg-[#231F20]">
      <Image className="exploreBg w-full t-0 l-0 absolute" height={100} width={100} src="/Maskgroupbg.svg" />
      {/* <Image className="w-full h-[50px]" height={50} width={100} src="/vector.svg" /> */}
        <div className="exloreSection mainContainer">
          <Row className="justify-center flex items-center max-[1080px]:pt-5 max-[1080px]:flex-col">
            <Col className="pl-[5%]" sm={22} md={12} lg={10} xs={22} span={4}>
              <h1 className="leading-[65px] raleway font-semibold  text-[52px] text-[#ECA33A]">
                EXPLORE DUBAI
              </h1>
              <h2 className="mt-4 max-[760px]:mt-2 text-white raleway-light font-light text-[27px] leading-[35px] w-[90%]">
                Choose a district with the most attractive environment.Click
                below to learn more.
              </h2>
              <br />
              <button
              style={{position:'relative'}}
                type="button"
                className="customGoldButton font-semibold text-[20px] px-10 py-2.5 mr-2 mb-2 border-b-4 border-[#EEC78C]"
              >
                <Link href="#" className="text-white">
                AREA GUIDE
                </Link>
              </button>
            </Col>
            <Col className="ExploreSliderDiv overflow-hidden justify-center" sm={26} md={12} lg={14} xs={26}>
              <Swiper
                effect={"cards"}
                initialSlide={1}
                grabCursor={true}
                defaultChecked={1}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                style={{
                  "--swiper-pagination-color": "#ECA33A",
                  "--swiper-pagination-border": "2px solid white",
                  "--swiper-pagination-bullet-size": "16px",
                  "--swiper-pagination-bullet-top": "40px !important"
                }}
              >
                <SwiperSlide className="exploreSwipper">
                <div className="slide-responsive w-[35rem] h-[35rem] relative overflow-hidden m-auto">
                  <img
                  className="ExploreSlide"
                    src="/ExploreImage1.png"
                    alt='image'
                  ></img>
                  <div 
                  onClick={showModal}
                  className="VideoIcon">  
                      <img src="/playIcon.svg "
                      alt="none" />
                   </div>
                   <Modal
                    title="Slide 2"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                  >
                    <p>{modalText}</p>
                  </Modal>
                  <div className='absolute absoluteLayer'>
                  <h4> The Dubai Frame is an observatory, museum, and monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world.The Dubai Frame is an observatory,  monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world
                  <Link href="#" className='text-[1em] ml-1 raleway font-extrabold text-black'> READ MORE </Link>
                  </h4> 
                  
                </div>
                </div>
                  
                </SwiperSlide>

                <SwiperSlide className="exploreSwipper">
                  <div className="slide-responsive w-[35rem] h-[35rem] relative overflow-hidden m-auto">
                  <img
                  className="ExploreSlide"
                    src="/ExploreImage2.png"
                    alt='image'
                  ></img>
                  <div 
                  onClick={showModal}
                  className="VideoIcon">  
                      <img src="/playIcon.svg "
                      alt="none" />
                   </div>
                   <Modal
                    title="Slide 2"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                  >
                    <p>{modalText}</p>
                  </Modal>
                  <div className='absolute absoluteLayer'>
                  <h4> The Dubai Frame is an observatory, museum, and monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world.The Dubai Frame is an observatory,  monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world
                  <Link href="#" className='text-[1em] ml-1 raleway font-extrabold text-black'> READ MORE </Link>
                  </h4> 
                  
                </div>
                </div>
                  
                </SwiperSlide>

                <SwiperSlide className="exploreSwipper w-[35rem]">
                <div className="slide-responsive w-[35rem] h-[35rem] relative overflow-hidden m-auto">
                  <img
                  className="ExploreSlide"
                    src="/ExploreImage3.png"
                    alt='image'
                  ></img>
                   <div 
                  onClick={showModal}
                  className="VideoIcon">  
                      <img src="/playIcon.svg "
                      alt="none" />
                   </div>
                   <Modal
                    title="Slide 2"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                  >
                    <p>{modalText}</p>
                  </Modal>
                  <div className='absolute absoluteLayer'>
                  <h4> The Dubai Frame is an observatory, museum, and monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world.The Dubai Frame is an observatory,  monument in Zabeel Park, Dubai. It holds the record for the largest frame in the world
                  <Link href="#" className='text-[1em] ml-1 raleway font-extrabold text-black'> READ MORE </Link>
                  </h4> 
                  
                </div>
                </div>
                  
                </SwiperSlide>
               
              </Swiper>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}

export default ThirdSection;
