"use client"

// import SimilerPropCards from '../ProductDetails/SimilerPropCards';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Navigation } from 'swiper/modules';
import ProductSection from "../sections/ProductSection";
// Import Swiper styles
import "swiper/css";

function SimilerProperties({propertyData}) {
  return (
    <div className='SimilerProperties'>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <ProductSection 
          heading={"Similar Properties"} 
          subHeadingTop={false} 
          subHeadingBottom={false} 
          categoryTabs={true} 
          bgColor="#101010"
          alignJustify="justify-center"
          propertyData= {propertyData}
        /> 
    </div>
  )
}

export default SimilerProperties