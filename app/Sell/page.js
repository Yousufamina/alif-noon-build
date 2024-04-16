'use client'
import React, { useState } from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { Row, Col } from 'antd'
import Link from 'next/link'
import SocialIconScroll from '@/components/SocialIconScroll'
import ScrollTopButton from '@/components/ScrollTopButton'
import PromptConsultation from '@/components/PromptConsultation'

function page() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className="SellSectionMax">
      <Header />
      <ScrollTopButton />
      <SocialIconScroll />
      <div className="SellSection relative">
        <img
          className="innerpagesBg"
          style={{ height: 'auto', width: '100%' }}
          src="/SellBg.png"
          alt="none"
        />
        <div className="mainContainer off-planContainer pb-[50px]">
          <div className="absoluteLayer">
            <h1> Explore </h1>
            <h1>Exciting Real Estate </h1>
            <h2>Opportunities </h2>
            <h3> sel your property with professional help </h3>
          </div>
          <img
            style={{ marginBottom: '40px', height: '80px', width: '100%' }}
            src="/VectorPng.png"
            alt="none"
          />

          <p className="text-center max-[1080px]:text-[30px] text-[40px] text-[#ECA33A] font-bold raleway">
            Looking for a Property Solution?
          </p>
          <br />
          <p className="text-center text-[35px] max-[1080px]:text-[25px] text-white raleway">
            Count on the Expertise of Our Well-Informed Specialists
          </p>
          <div
            style={{ border: '1px solid #ECA33A' }}
            className="text-center m-[20px] py-[50px] px-[30px]"
          >
            <div className="flex">
              <p className="mr-[-12px] text-[26px] text-white raleway">“ </p>
              <p className="ExpertiseContent max-[1080px]:text-[15px] text-[26px] text-white raleway">
                , your seasoned sales assistant, offers you a swift and
                profitable property selling experience. Backed by our extensive
                expertise, we navigate the market to secure the finest real
                estate solutions and connect you with the right buyers.”
              </p>
            </div>
            <div className="mt-[30px] justify-center mb-[-76px] flex">
              {/* <div className="bg-[#231F20] w-[36px]"></div>
              <button
                type="button"
                className="customGoldButton font-semibold max-[1080px]:text-[12px] text-[20px] px-10 py-2.5 border-b-4 border-[#EEC78C]"
                style={{ position: 'inherit !important' }}
              >
                <Link href="#" className="text-white">
                  EQUIRE NOW
                </Link>
              </button> */}
              <div className="bg-[#231F20] w-[36px]"></div>
              <button
                type="button"
                className="customGoldButton font-semibold text-[20px] max-[1080px]:text-[12px] px-10 py-2.5  border-b-4 border-[#EEC78C]"
                style={{ position: 'inherit !important' }}
                onClick={openModal}
              >
                <Link href="#" className="text-white">
                  TALK WITH OFFICIALS
                </Link>
              </button>
              {showModal && <PromptConsultation closeModal={closeModal} />}
              <div className="bg-[#231F20] w-[36px]"></div>
            </div>
          </div>

          <img
            style={{
              marginTop: '90px',
              marginBottom: '40px',
              height: '80px',
              width: '100%',
            }}
            src="/VectorPng.png"
            alt="none"
          />

          <p className="text-center max-[1080px]:text-[15px] text-[25px] text-white font-light raleway">
            START WITH
          </p>
          <p className="text-center max-[1080px]:text-[30px] text-[40px] text-[#ECA33A] font-bold raleway">
            READINESS PHASE
          </p>
          <Row gutter={3} className="readnessPhase flex mt-4">
            <Col style={{ padding: '30px 40px' }} sm={24} md={12} lg={8}>
              <div
                style={{ borderRadius: '10px', border: '1px solid #eca23a4a' }}
                className="readinessPhase py-[50px] px-[30px]"
              >
                <p className="leading-[30px] my-4 text-center text-[30px] text-white font-bold raleway">
                  A Sincere Assessment
                </p>
                <p className="text-center text-[20px] text-white font-light raleway">
                  Complete Openness and Direct Communication
                </p>
              </div>
            </Col>
            <Col style={{ padding: '30px 40px' }} sm={24} md={12} lg={8}>
              <div
                style={{ borderRadius: '10px', border: '1px solid #eca23a4a' }}
                className="readinessPhase py-[50px] px-[30px]"
              >
                <p className="leading-[30px] my-4 text-center text-[30px] text-white font-bold raleway">
                  Proficiency and Specialized Skills
                </p>
                <p className="text-center text-[20px] text-white font-light raleway">
                  A keen understanding of the market to secure optimal deals
                </p>
              </div>
            </Col>
            <Col style={{ padding: '30px 40px' }} sm={24} md={12} lg={8}>
              <div
                style={{ borderRadius: '10px', border: '1px solid #eca23a4a' }}
                className="readinessPhase py-[50px] px-[30px]"
              >
                <p className="leading-[30px] my-4 text-center text-[30px] text-white font-bold raleway">
                  Tailored Solutions for All
                </p>
                <p className="text-center text-[20px] text-white font-light raleway">
                  Comprehensive Service for Every Financial Plan
                </p>
              </div>
            </Col>
          </Row>

          <img
            style={{
              height: '80px',
              width: '100%',
            }}
            className="my-[30px] max-[1080px]:my-[0px]"
            src="/VectorPng.png"
            alt="none"
          />

          <Row className="PhotoImage" gutter={2}>
            <Col sm={24} md={12}>
              <div className="pr-[40px] pb-[30px] pl-[40px] pt-[40px] mt-[28%] max-[780px]:mt-[2%]">
                <h6 className="text-right leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold">
                  PHOTOGRAPHY
                </h6>
                <p
                  style={{ letterSpacing: '1px' }}
                  className="ml-auto w-[90%] uppercase raleway text-right mt-2 leading-[24px] text-white text-[18px] font-light"
                >
                  Just like you wouldn't go to a job interview without proper
                  outfit, photography is critical to setting record sale and
                  rental prices, we do it better than anyone.
                </p>
              </div>
            </Col>
            <Col sm={24} md={12} className="pt-[50px] relative">
              <div
                style={{ top: '46px', left: '622px' }}
                className="yellowBox1 absolute bg-[#ECA33A] w-[43px] h-[40px]"
              ></div>
              <div className="Images overflow-hidden  h-[450px] w-full relative">
                <img className="w-full h-full" src="/Sell2.png" alt="none" />
              </div>
              <img
                style={{ left: '-47px', bottom: '-48px' }}
                className="CrossImage z-10 absolute w-[100px] h-[100px]"
                src="/CrossImageDesign1.svg"
                alt="none"
              />
            </Col>
          </Row>
          <Row className="PhotoImage column-reverse-responsive" gutter={2}>
            <Col sm={24} md={12} className="relative">
              <div
                style={{ bottom: '-5px', right: '622px' }}
                className="absolute yellowBox2 bg-[#ECA33A] w-[43px] h-[40px]"
              ></div>
              <div className="Images overflow-hidden relative h-[450px] w-full">
                <img className="w-full h-full" src="/Sell1.png" alt="none" />
              </div>
            </Col>
            <Col sm={24} md={12}>
              <div className="pr-[40px] pl-[40px] pb-[30px] pt-[40px] mt-[26%] max-[780px]:mt-[2%]">
                <h6 className="uppercase text-left leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold">
                  VIDEOGRAPHY
                </h6>
                <p
                  style={{ letterSpacing: '1px' }}
                  className="mt-2 ml-auto uppercase pr-[10%] raleway text-left leading-[24px] text-white text-[18px] font-light"
                >
                  We have a divine videographer. Everything that we capture on
                  camera is polished to the top-notch level.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="EngageServive py-[30px]">
          <h6 className="uppercase text-center leading-[50px] raleway text-[#ECA33A] text-[40px] font-bold">
            If you engage our services
          </h6>
          <p
            style={{ letterSpacing: '2px' }}
            className="raleway text-center mt-2 leading-[29px] text-white text-[20px] font-bold"
          >
            Discover the difference our expertise can make
          </p>
          <div className="EngageServiveMain m-auto max-[1319px]:w-[100%] w-[1320px]">
            <Row>
              <Col sm={24} md={8} style={{ padding: '30px 70px' }}>
                <div
                  // style={{ borderRadius: "10px", border: "1px solid #eca23a4a" }}
                  className="px-[30px]"
                >
                  <img
                    className="m-auto w-[70px] h-[70px]"
                    src="/SellClock.svg"
                    alt="none"
                  />
                  <p className="leading-[30px] uppercase my-4 text-center text-[30px] text-[#ECA33A] font-bold raleway">
                    Swift Results
                  </p>
                  <p className="text-center uppercase text-[20px] text-white font-light raleway">
                    Homes sold in less than a month on average
                  </p>
                </div>
              </Col>
              <Col sm={24} md={8} style={{ padding: '30px 70px' }}>
                <div
                  // style={{ borderRadius: "10px", border: "1px solid #eca23a4a" }}
                  className=" px-[30px]"
                >
                  <img
                    className="m-auto w-[70px] h-[70px]"
                    src="/SellVerify.svg"
                    alt="none"
                  />
                  <p className="leading-[30px] uppercase my-4 text-center text-[30px] text-[#ECA33A] font-bold raleway">
                    Transparency
                  </p>
                  <p className="text-center uppercase text-[20px] text-white font-light raleway">
                    A smooth and transparent transaction journey
                  </p>
                </div>
              </Col>
              <Col sm={24} md={8} style={{ padding: '30px 70px' }}>
                <div
                  // style={{ borderRadius: "10px", border: "1px solid #eca23a4a" }}
                  className=" px-[30px]"
                >
                  <img
                    className="m-auto w-[70px] h-[70px]"
                    src="/SellDoller.svg"
                    alt="none"
                  />
                  <p className="leading-[30px] uppercase my-4 text-center text-[30px] text-[#ECA33A] font-bold raleway">
                    Advantage
                  </p>
                  <p className="text-center uppercase text-[20px] text-white font-light raleway">
                    Secure the best market price available
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <FreeConsultation />
      {/* <div className="py-[30px]"></div> */}
      <Footer />
    </div>
  )
}

export default page
