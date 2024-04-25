'use client'

import { React, useEffect, useState } from 'react'
import Link from 'next/link'

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour 
             in place of 'smooth' */
    })
  }
  return (
    <>
      {/* <div className='whatsIconStickyMain'> */}
      <button className="whatsIconSticky hidden lg:block">
        <Link href="https://wa.me/+971557969234">
          <img
            className="h-[50px] w-[50px]"
            src="/whiteWhatsapp.svg"
            alt="image"
          />
        </Link>
      </button>
      {/* </div>     */}

      <div
        className={`ScrollTopButtonMain  ${isVisible ? 'hidden' : 'visible'}`}
      >
        <button onClick={scrollToTop} className="ScrollTopButton">
          <span className="ArrowIcon">
            <img
              style={{ top: '10px', left: '12px' }}
              className="opacity-1 absolute w-[35px] h-[40px]"
              src="/ScrollLogo.png"
              alt="none"
            />
            <h1 className="opacity-0 justify-center">↑</h1>
          </span>
        </button>
        {/* <div className='flex'>
        <imp className='w-[40px] h-[40px]' 
            src="/ScrollLogo.svg"
            alt="none" />
        </div> */}
      </div>
    </>
  )
}

export default ScrollTopButton
