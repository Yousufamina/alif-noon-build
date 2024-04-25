"use client";

import React from 'react'
import ScrollTopButton from '@/components/ScrollTopButton';
import SocialIconScroll from '@/components/SocialIconScroll';
import Footer from "@/components/sections/Footer";
import Header from "@/components/header/Index";

const SocialDetail = () => {
  return (
    <>
    <ScrollTopButton/>
    <SocialIconScroll/>
    <Header />
    <div className='py-[10%]'>
    <div className='mainContainer max-[800px]:text-center max-[800px]:p-[20px]'>
        <h1 className='text-[#ECA33A] text-[45px] raleway'> Social News </h1>
        <br/>
        <h3 className='text-white text-[35px] mt-[20px] raleway'> Armani Beach Residences at Palm Jumeirah named ‘Waterfront Project of the Year’ at the 2024 Pillars of Real Estate Awards</h3>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           Dubai: Armani Beach Residences, a landmark collaboration between Arada, Japanese architect Tadao Ando and Armani/Casa, has won the coveted Waterfront Project of the Year award at the 2024 Pillars of Real Estate Awards. 
        </p>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           The award reflects the exceptional interest in Armani Beach Residences at Palm Jumeirah, both from an aesthetic and investor perspective.
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           Enjoying sweeping, panoramic views of the Arabian Gulf as well as Dubai’s famed skyline, Armani Beach Residences at Palm Jumeirah is designed to achieve harmony between architecture, the surrounding seascape and the senses.
        </p> 
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           Alongside its exemplary architecture and seafront setting, Armani Beach Residences at Palm Jumeirah is distinguished by a set of amenities spread over a 90,000 square foot space, all designed and furnished by Armani/Casa, allowing residents to experience a truly refined lifestyle
        </p> 
        <br/> 

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           Senior Arada executives accepted the award at a ceremony held at the Habtoor Palace, LXR Hotels & Resorts on 26 February, hosted by Construction Business News Middle East and BNC Publishing.
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           This is the latest in a series of accolades for Arada, which included two awards for landscaping at the recent Landscaping Middle East awards and its position as the top employer in the real estate sector in the Great Place to Work® UAE 2024 rankings.
        </p>

    </div>
    </div>
    <Footer />
    </>
  )
}
export default SocialDetail;