'use client'

import React from 'react'
import { Row, Col } from 'antd'
// import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <>
      <main className="relative w-full align-center justify-center bg-[#101010] footerMain">
        <div className="footerInnerDiv bg-[#231F20] mb-[15px] p pt-[75px]">
          <Row className="mb-[20px] footerRow">
            <Col
              className="LogoInFooter raleway-light pr-[60px] pt-[12px]"
              xl={7}
              lg={24}
              md={24}
              xs={24}
            >
              <div>
                <img
                  className="w-[190px] h-[200px] m-auto"
                  alt="Image"
                  src="/Logo.png"
                />
                <p className="mt-[10px] leading-[15px] raleway-light font-normal text-white text-center text-[11px]">
                  {' '}
                  WHERE YOU FIND PEACE, YES HOME{' '}
                </p>
              </div>
            </Col>
            <Col xl={7} lg={24} md={24} xs={24}>
              <div className="flex max-[1024px]:text-center ServicesList justify-center">
                <div className="rightcolumn max-[1024px]:text-center">
                  <h1
                    style={{ whiteSpace: 'nowrap' }}
                    className="text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]"
                  >
                    {' '}
                    USEFULL LINKS{' '}
                  </h1>
                  <p className="text-left max-[1024px]:text-center text-white">
                    Apartments
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Penthouse{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Villas{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Townhouse{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Off-Plan{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Catalogs{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Area Guide{' '}
                  </p>
                  <p className="text-left max-[1024px]:text-center text-white">
                    {' '}
                    Alif noon design{' '}
                  </p>
                </div>
                <div className="rightcolumn max-[1024px]:text-center">
                  <h1
                    style={{ whiteSpace: 'nowrap' }}
                    className="text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]"
                  >
                    {' '}
                    OUR SERVICES{' '}
                  </h1>
                  <Link
                    href="/Sell"
                    className="Sell-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
                  >
                    <p className="text-white">Sell</p>
                  </Link>
                  <Link href="/Rent">
                    <p className="max-[1024px]:text-center text-left text-white">
                      Rent{' '}
                    </p>
                  </Link>
                  <Link
                    href="/products/buy"
                    className="Buy-header raleway font-semibold text-[14px] leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
                  >
                    <p className="max-[1024px]:text-center text-left text-white">
                      {' '}
                      Buy{' '}
                    </p>
                  </Link>
                  {/* <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Developers
                  </p> */}
                  {/* <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Corporate{' '}
                  </p> */}
                  {/* <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Holidays{' '}
                  </p> */}
                </div>
                <div className="rightcolumn max-[1024px]:text-center">
                  <h1
                    style={{ whiteSpace: 'nowrap' }}
                    className="text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]"
                  >
                    {' '}
                    CONTACTS{' '}
                  </h1>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Contact us
                  </p>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Careers{' '}
                  </p>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Reviews{' '}
                  </p>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Privacy Policy{' '}
                  </p>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Sitemap{' '}
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={7} lg={24} md={24} xs={24} className="text-right ">
              <div
                style={{ paddingLeft: '10%', paddingRight: '40px' }}
                className="rightcolumn"
              >
                <div className="flex max justify-end">
                  <img
                    className="text-[white] h-[15px] mt-[4px] w-[12px] mx-2"
                    src="/pinVector.png"
                    alt="image"
                  />
                  <h2 className="raleway-light text-[18px] font-[300] text-[#ECA33A]">
                    {' '}
                    DUBAI, UAE{' '}
                  </h2>
                </div>

                <h3 className="text-[#cecece] raleway-light text-[18px] font-[300]">
                  {' '}
                  YOU OFFICE LOCATION..UAE{' '}
                </h3>

                <div className="pl-[20px] pt-[12px] pb-[12px] flex justify-end">
                  {/* <img
                    className="text-[white] h-[20px] w-[20px] mx-2"
                    src="/whiteMessage.svg"
                    alt='image'
                  /> */}
                  <a
                    href="https://www.facebook.com/alifnoonae"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="text-[white] h-[22px] w-[22px] mx-2"
                      src="/whiteFacebook.svg"
                      alt="image"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/alifnoonae"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="text-[white] h-[24px] w-[24px] mx-2"
                      src="/instagramwhite.svg"
                      alt="image"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@realestateuae?_t=8kzi3KmATAo&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="text-[white] h-[24px] w-[24px] mx-2"
                      src="/whitetiktok.svg"
                      alt="image"
                    />
                  </a>
                  {/* <img
                    className="text-[white] h-[20px] w-[20px] mx-2"
                    src="/whiteTwiter.svg"
                    alt="image"
                  /> */}
                  {/* <a
                    className="flex"
                    href="https://wa.me/+971557969234"
                    target="_blank"
                  >
                    <img
                      className="text-[white] h-[20px] w-[20px] mx-2"
                      src="/whiteWhatsapp.svg"
                      alt="image"
                    />
                  </a> */}
                </div>
                <a href="tel:+1234567890">
                  <button
                    type="button"
                    className="buttonColor text-white raleway-light font-light bg-[#231F20] text-[13px] px-[50px] py-[10px]"
                  >
                    CALL NOW
                  </button>
                </a>
                <div className="emailButton justify-around flex text-wrap text-white raleway-light bg-[#231F20] pl-[10px] pr-[10px] py-[10px]">
                  <button type="button" className="mr-[60px]">
                    {'YOUR EMAIL'}
                  </button>
                  <div className="bg-[#ECA33A] w-[2px] h-[20px]"></div>
                  <button
                    style={{ whiteSpace: 'nowrap' }}
                    type="button"
                    className="mr-[20px] ml-[30px]"
                  >
                    SUBSCRIBE NOW
                  </button>
                  <img
                    className="subscribeBtn"
                    alt="none"
                    src="/subscribeBtn.svg"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </div>
        <Row className="justify-center">
          <div className="flex">
            <div className="max-[1024px]:text-[9px] hover:text-[#ECA33A] px-[20px] text-[#cecece] raleway font-normal font-[16px] leading-[30.08px]">
              {' '}
              Alif noon ©2023 All Rights Reserved{' '}
            </div>
            <div className="max-[1024px]:text-[9px] px-[20px] hover:text-[#ECA33A] text-[#cecece] raleway font-normal font-[16px] leading-[30.08px]">
              {' '}
              Design & Develop by Rendrx.com{' '}
            </div>
          </div>
        </Row>
      </main>
    </>
  )
}

export default Footer
