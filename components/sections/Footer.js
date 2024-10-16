'use client'

import React , {useState, useRef} from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import PromptContactUs from '@/components/PromptContactUs'
import PromptCarrers from '@/components/PromptCarrers'


function Footer() {

  const [showContactUsModal, setShowContactUsModal] = useState(false)
  const [showCarrersModal, setShowCarrersModal] = useState(false)
 
  const openContactUsModal = () => {
    setShowContactUsModal(true)
  }
  const closeContactUsModal = () => {
    setShowContactUsModal(false)
  }

  const openCarrersModal = () => {
    setShowCarrersModal(true)
  }
  const closeCarrersModal = () => {
    setShowCarrersModal(false)
  }
 
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
  })
  const form = useRef()
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
     // save email to db
     setFormData({
      email: '',
    })
     setShowMessage(true)
     const response = await axios.post('https://alifnoon.ae/SaveEmail', formData ,{
          headers: {'Content-Type': 'application/json'}
     });

  }
  
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
                  <Link
                    href="/products/buy"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      Apartments
                    </p>
                  </Link>

                  <Link
                    href="/products/buy"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      {' '}
                      Penthouse{' '}
                    </p>
                  </Link>
                  <Link
                    href="/products/buy"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      {' '}
                      Villas{' '}
                    </p>
                  </Link>

                  <Link
                    href="/products/buy"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      {' '}
                      Townhouse{' '}
                    </p>
                  </Link>

                  <Link
                    href="/off-plan"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      {' '}
                      Off-Plan{' '}
                    </p>
                  </Link>

                  <Link
                    href="/Catalog"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="text-left max-[1024px]:text-center text-white">
                      {' '}
                      Catalogs{' '}
                    </p>
                  </Link>
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
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                    href="/products/buy"
                    className="Buy-header raleway font-semibold text-[14px] leading-[16.44px]  hover:text-[#ECA33A]"
                  >
                    <p className="max-[1024px]:text-center text-left text-white focus:text-[#ECA33A] hover:text-[#ECA33A]">
                      {' '}
                      Buy{' '}
                    </p>
                  </Link>

                  <Link
                    href="/Rent"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    <p className="max-[1024px]:text-center text-left text-white focus:text-[#ECA33A] hover:text-[#ECA33A]">
                      Rent{' '}
                    </p>
                  </Link>
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                    href="/Sell"
                    className="Sell-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
                  >
                    <p className="focus:text-[#ECA33A] hover:text-[#ECA33A]">
                      Sell
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
                  <a  style={{ textDecoration: 'none', color: 'white' , display: 'block' , lineHeight:'26px'}}
                      onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}
                      className="max-[1024px]:text-center text-left text-white"
                      onClick={openContactUsModal}>
                    {' '}
                    Contact Us
                  </a>         
                  <a  style={{ textDecoration: 'none', color: 'white' , display: 'block' , lineHeight:'26px'}}
                      onMouseEnter={(e) => (e.target.style.color = '#eca33a')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}
                      className="max-[1024px]:text-center text-left text-white"
                      onClick={openCarrersModal}>
                    {' '}
                    Careers{' '}
                  </a>

                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Reviews{' '}
                  </p>
                  <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Privacy Policy{' '}
                  </p>
                  {/* <p className="max-[1024px]:text-center text-left text-white">
                    {' '}
                    Sitemap{' '}
                  </p> */}
                {showContactUsModal && <PromptContactUs closeContactUsModal={closeContactUsModal} />}
                {showCarrersModal && <PromptCarrers closeCarrersModal={closeCarrersModal} />}

                </div>
              </div>
            </Col>
            <Col xl={7} lg={24} md={24} xs={24} className="text-right ">
              <div
                style={{ paddingLeft: '10%', paddingRight: '40px' }}
                className="rightcolumn"
              >
                <div className="flex max justify-center md:justify-end">
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

                <h3 className="text-[#cecece] raleway-light text-[18px] font-[300] text-center md:text-end ">
                  {' '}
                  Office No. 1, Ground Floor, Emerald Vision Tower, District 1,
                    Jumeirah Village Triangle, Dubai, UAE
                    {' '}
                </h3>

                <div className="pl-[20px] pt-[12px] pb-[12px] flex justify-center md:justify-end">
                  {/* <img
                    className="text-[white] h-[20px] w-[20px] mx-2"
                    src="/whiteMessage.svg"
                    alt='image'
                  /> */}
                  <a
                    href="https://www.facebook.com/alifnoonproperties"
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
                    href="https://www.instagram.com/alifnoonproperties/?hl=en"
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
                <a
                  href="tel:+971 52 164 2020"
                  className="flex md:block justify-center  "
                >
                  <button
                    type="button"
                    className="buttonColor text-white raleway-light font-light bg-[#231F20] text-[13px] px-[50px] py-[10px]"
                  >
                    CALL NOW
                  </button>
                </a>
                <form
                    ref={form}
                    onSubmit={handleSubmit}>
                  <div className="emailButton justify-around flex text-wrap text-white raleway-light bg-[#231F20] pl-[10px] pr-[10px] py-[10px]">
                  <input type="email"
                         name="email"
                         placeholder="Your Email"
                         value={formData.email}
                         onChange={handleInputChange}
                         required
                         className="h-11 w-full min-w-[100px] border-blue-gray-200 bg-transparent text-sm font-normal text-white placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50">                   
                  </input>
                  <div className="bg-[#ECA33A] w-[2px] h-[40px]"></div>
                  <button
                    style={{ whiteSpace: 'nowrap' }}
                    type="submit"
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
                </form>
                {showMessage && <p> Thanks for subscribing us</p>}    
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
