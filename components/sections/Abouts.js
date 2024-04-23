import React from 'react'
import { Row, Col } from 'antd'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <main className="relative w-full align-center justify-center Aboutbackground aboutSection">
      <div className="Aboutinner bg-[#101010]  py-[20px] max-[760px]:mb-[20px] mb-[60px]">
        <div className="mainContainer p-[10px]">
          <Row gutter={2}>
            <Col md={24} lg={16} xs={24} className="ColText">
              <h1 className="leading-[58px] raleway font-semibold text-[45px] text-[#ECA33A] mt-3">
                Alif Noon Properties
              </h1>
              <h2 className="leading-[50px] raleway-light font-normal mb-5 text-[35px] text-white">
                A Real Estate Agency in Dubai{' '}
              </h2>
              <p className="max-[1024px]:text-[12px] text-left w-[80%] mr-[30%] text-[#ECA33A] raleway-light font-light text-[16px] mb-[20px]">
                Welcome to Alif Noon Properties, your premier destination for
                all your real estate needs in the vibrant city of Dubai. With
                years of experience in the industry, we have built a reputation
                for excellence, professionalism, and unparalleled customer
                service.{' '}
              </p>
              <p className="max-[1024px]:text-[12px] mb-[20px] w-[100%] ml-[0%]  text-[#ECA33A] raleway-light font-light text-[16px]">
                At Alif Noon, we understand that buying or renting property is
                not just a financial decision, but a significant life
                investment. That's why our team of dedicated experts is
                committed to guiding you every step of the way, ensuring a
                smooth and hassle-free experience.
              </p>
              <button
                style={{ position: 'relative' }}
                className="customGoldButton font-semibold text-[20px] px-10 py-2.5 mr-2 mt-2 border-b-4 border-[#EEC78C] mt-[25]"
              >
                <Link className="uppercase text-white" href="/AboutUsDetail">
                  Read More
                </Link>
              </button>
            </Col>
            <Col lg={8} xs={24} md={24}>
              <div className="flex">
                <div className="max-[1023px]:hidden GoldLine"></div>
                <div className="flex-col max-[1023px]:hidden">
                  <img className="m-auto " src="/goldAnimatedLogo.gif" />
                  <p
                    className="text-[#ECA33A] leading-[30px] raleway-light font-normal text-center text-[15px] mt-[10]"
                    // style={{ marginTop: '10px' }}
                  >
                    WHERE YOU FIND PEACE, YES HOME{' '}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </div>
      <img
        style={{ height: '80px', width: '100%' }}
        src="/VectorPng.png"
        alt="none"
      />
    </main>
  )
}

export default About
