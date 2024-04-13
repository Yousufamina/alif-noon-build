import React from 'react'
import { Row,Col } from 'antd'
import Image from 'next/image'
import TestimonialsSlider from '../TestimonialSlider'

function Testimonials() {
  return (
    <> 
        <main className='relative w-full align-center justify-center testimonialsSection'>
        <div className='mainContainer'>
            <h3 className="text-center">
                    Testimonials
            </h3>
            <h1 className="leading-[70px] text-center uppercase drop-shadow-xl raleway font-semibold mb-[10px] text-[50px] text-[#ECA33A]">
              What Client's Say?
            </h1>
              <TestimonialsSlider />
          <br />
        </div>
        </main>  
    </>
  )
}

export default Testimonials