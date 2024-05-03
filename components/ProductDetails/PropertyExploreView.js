'use client'

import React from 'react'
import { Col, Row } from 'antd'
import Image from 'next/image'
import { Radio, Tabs } from 'antd'
import { useState } from 'react'
import useRef from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import Link from 'next/link'

function PropertyExploreView() {
  const [defaultActiveFrom, setDefaultActiveFrom] = useState('1')
  const [dummyData, setDummyData] = useState([
    {
      key: '1',
      label: 'IN PERSON',
      content: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'VIDEO CHAT',
      content: 'Content of Tab Pane 2',
    },
  ])
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <>
      <main className="PropertyExploreView">
        <div
          style={{ marginTop: '150px', border: '1px solid #ECA33A' }}
          className="mainContainer"
        >
          <Row className="p-[10px] flex max-[1024px]:flex-col">
            <Col
              sm={24}
              md={24}
              lg={24}
              xl={8}
              className="overflow-hidden relative BookingFirstCol imageColumn max-[1024px]:w-full"
            >
              <img src="/officialclient.png" alt="none" />
              <div className="consultantName absolute">
                <h1> Oksana Uzgalova </h1>
                <h2> Property Content </h2>
              </div>
            </Col>

            <Col
              className="BookingSecCol max-[1024px]:w-full"
              sm={24}
              md={24}
              lg={24}
              xl={16}
            >
              <h1> BOOK YOUR VIEWING </h1>
              <h2> And our agend will show you property </h2>

              <div>
                <Tabs
                  onChange={onChange}
                  defaultActiveKey={defaultActiveFrom}
                  className="custom-tab-style"
                >
                  {dummyData.map((item) => (
                    <div tab={item.label} key={item.key}>
                      <div className="monthsList">
                        <Swiper
                          watchSlidesProgress={true}
                          slidesPerView={6}
                          initialSlide={2}
                          navigation={true}
                          modules={[Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <button
                              style={{
                                color: '#231F20',
                                border: '1px solid #231F20',
                              }}
                            >
                              {' '}
                              Wed,Oct 25{' '}
                            </button>
                          </SwiperSlide>
                          {/* Slides Start from here */}
                          <SwiperSlide>
                            <button> Wed,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Thu,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Fri,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Sat,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Sun,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Mon,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Tue,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Wed,Oct 25 </button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <button> Thu,Oct 25 </button>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="FormFields mt-4">
                        <input
                          className="input"
                          type="text"
                          placeholder="You Name"
                        />
                        <input
                          className="input"
                          type="text"
                          placeholder="You Phone"
                        />
                        <input
                          className="input"
                          type="text"
                          placeholder="You Email"
                        />
                        <button className="sendBtn">
                          <Link href="#" className="text-[#ECA33A]">
                            {' '}
                            SEND{' '}
                          </Link>
                        </button>
                        <div className="flex justify-center mt-[20px]">
                          <div className="flex justify-center items-center">
                            <p className="px-[2px] py-[5px] text-[#cecece] text-[15px] raleway">
                              {' '}
                              Or get availability via
                            </p>
                            <Link href="https://wa.me/+971557969234">
                              <img alt="none" src="/whatsappIcon.svg" />
                            </Link>
                            <Link href="https://wa.me/+971557969234">
                              <p className="px-[2px] py-[5px] text-[#ECA33A] text-[15px] raleway">
                                {' '}
                                WhatsApp
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Tabs>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </>
  )
}

export default PropertyExploreView
