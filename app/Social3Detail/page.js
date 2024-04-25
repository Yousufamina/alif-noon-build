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
        <h3 className='text-white text-[35px] mt-[20px] raleway'>Arada completes first 920 homes in new creative district at Sharjah megaproject Aljada</h3>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            All eight Tiraz apartment blocks finished; handovers under way
            Over 7,500 homes now completed at Aljada
        </p>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            Residents to benefit from direct access to world-class cultural assets, including performing arts space designed by Tadao Ando  
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
           Arada has completed the first eight residential buildings in Naseej District, a new creative hub based at the AED35 billion Aljada megaproject in Sharjah. Each of the 920 homes in the eight Tiraz buildings is close to an array high-quality cultural, artistic and retail destinations, including Il Teatro, a landmark performing arts space that has been designed by Japanese architect Tadao Ando.
        </p> 
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            Ahmed Alkhoshaibi, Group CEO of Arada, said: “We’re delighted to welcome the first families to Naseej District, just one of the many exciting and fulfilling communities available to residents at Aljada. We’re now working hard to deliver the remaining residential blocks in Naseej District, as well as awarding the contract for Il Teatro by the end of this year, which will together result in an impressive new creative district for Sharjah.     
        </p> 
        <br/> 

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        “Our track record of quality design and timely delivery of impressive surrounding amenities, backed by the strong fundamentals of the Sharjah property market, has meant that property values at Aljada have increased significantly since launch and we expect this trend to continue in the future, adding value to our buyers’ investments.”
         </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            The contract to build the Tiraz buildings was awarded to Kuwaiti contractor Mohammad Abdulmohsen Al-Kharafi & Sons in February 2022, with the first four buildings in the complex completed in December 2023.
            Elsewhere in Naseej District, construction on the five Sokoon buildings and the two Il Teatro Residences buildings, containing 625 homes in total, is currently under way and will be completed by the end of 2024. Construction on the four blocks in the Vida Aljada hotel complex, containing another 529 units, is scheduled to be completed in the first half of 2025.
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        Spread over a 24 million square foot area, Aljada is Sharjah’s largest ever project and a transformational destination for the Emirate. As well as its numerous residential districts, Aljada also contains extensive retail, hospitality, entertainment, sporting, educational, healthcare components and a business park, all set within a green, walkable master plan
        </p>
        <br/>

    </div>
    </div>
    <Footer />
    </>
  )
}
export default SocialDetail;