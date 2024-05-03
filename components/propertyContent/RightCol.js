'use client'
import Link from 'next/link'
// components/ScrollHideDiv.js
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const RightCol = () => {
  const [isVisible, setIsVisible] = useState(true)
  // const [hideModal, setHideModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && window.scrollY < 1800) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        // className={` scroll-hide consultantBox ${
        //   isVisible ? 'onVisible' : 'onHidden'
        // }`}
        className="w-full md:min-w-[300px] scroll-hide consultantBox "
      >
        <div className="bg-[#231F20]">
          <div className="overflow-hidden flex items-center mb-[10px]">
            <img
              style={{ transformOrigin: 'top', marginRight: '10px' }}
              className="w-[80px] h-[100px] transform scale-[1.5]"
              alt="none"
              src="/officialclient.png"
            />
            <div className="ml-3">
              <h1 className="text-2xl raleway"> Dilnoza Alieva </h1>
              <h2 className="text-[#cecece] text-[15px] raleway">
                {' '}
                Property Consultent{' '}
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <button className="detailPropertyBtn rightColBtn mr-2">
              <Link className="text-[#ECA33A]" href="tel:+923040602781">
                {' '}
                CALL US{' '}
              </Link>
            </button>
            <button className="detailPropertyBtn rightColBtn ">
              <Link
                className="text-[#ECA33A]"
                href="https://wa.me/+923040602781"
              >
                {' '}
                INQUIRY{' '}
              </Link>
            </button>
          </div>
          <div className="flex justify-center mt-[8px]">
            <div className="flex justify-center items-center">
              <Link href="https://wa.me/+923040602781">
                <p className="px-[2px] py-[5px] text-[#cecece] text-[15px] raleway">
                  {' '}
                  Or get availability via
                </p>
              </Link>
              <img alt="none" src="/whatsappIcon.svg" />
              <Link href="https://wa.me/+923040602781">
                <p className="px-[2px] py-[5px] text-[#ECA33A] text-[15px] raleway">
                  {' '}
                  WhatsApp
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='consultantBox mt-[237px]'>
      <div className='bg-[#231F20]' >
      <div className='flex items-center mb-[10px]'>
        <div className=''>
          <h1 className='text-center text-3xl raleway text-white'> COMPARISON </h1>
          <h2 className='mt-[18px] text-[1.125rem] raleway'> With other studio no bedrooms Apartments in Dubai Marina </h2>
        </div>
       </div>
       <div>
       <h2 className='mt-[20px] text-[1.125rem] raleway'> 132% more expensive </h2>
       <hr className='mt-[4px] m-auto w-[98%] bg-white' /> 
       <div className='mt-[4px] flex justify-between'>
       <h2 className='text-[1.125rem] raleway'> Average price: </h2>
       <h2 className='text-[1.125rem] raleway'> 2,388 AED/sq.ft </h2>
       </div>
       <div className='mt-[4px] flex justify-between'>
       <h2 className='text-[1.125rem] raleway'> This property price: </h2>
       <h2 className='text-[1.125rem] raleway'> 5,555 AED/sq.ft </h2>
       </div>
       <h2 className='mt-[20px] text-[1.125rem] raleway'> 27% smaller </h2>
       <hr className='mt-[4px] m-auto w-[98%] bg-white' />
       </div>
       
       <div className='mt-[4px] flex justify-between'>
       <h2 className='text-[1.125rem] raleway'> Average area: </h2>
       <h2 className='text-[1.125rem] raleway'> 491 sq.ft </h2>
       </div>
       <div className='mt-[4px] flex justify-between'>
       <h2 className='text-[1.125rem] raleway'> This property area: </h2>
       <h2 className='text-[1.125rem] raleway'> 358 sq.ft </h2>
       </div>
      
    </div>
    </div> */}
      <div
        style={{
          padding: '15px 15px 15px 15px',
          minWidth: '300px',
          width: '100%',
        }}
        // className={`consultantBox mt-[240px] ${
        //   isVisible ? 'shareVisible' : 'shareHidden'
        // }`}
        className="consultantBox mt-[24px] "
      >
        <div className="bg-[#231F20]">
          <div className="justify-between flex items-center">
            <h1 className="text-center text-2xl text-white raleway"> Share </h1>
            <div className="flex">
              {/* <img className='socialIcon w-[20px] mx-[15px]' alt='none' src='/whatsappIcon.svg' /> */}
              <Link
                style={{ color: '#cecece' }}
                href="https://wa.me/+923040602781"
              >
                <FontAwesomeIcon
                  style={{ width: '24px', height: '24px', fontWeight: '900' }}
                  className="socialIcon  mx-[15px]"
                  icon={faWhatsapp}
                />
              </Link>
              {/* <img alt='none'  className=' socialIcon mx-[15px]' src='/whatsappIconCheck.svg'/> */}
              <FontAwesomeIcon
                className="socialIcon mx-[15px]"
                icon={faPhone}
              />
              <FontAwesomeIcon
                className="socialIcon mx-[15px]"
                icon={faShareNodes}
              />
              <FontAwesomeIcon
                className="socialIcon mx-[15px]"
                icon={faEnvelope}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightCol
