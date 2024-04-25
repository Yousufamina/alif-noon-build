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
        <h3 className='text-white text-[35px] mt-[20px] raleway'> Wellfit dominates top UAE fitness industry awards with six major accolades</h3>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            Fitness leader wins six awards for second year running at 2024 REPs Industry Awards Gala, held in partnership with Dubai Sports Council 
        </p>
        <br/>
        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
            Key wins included Superclub of the Year, GM of the Year and Best Member Experience Team
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        Wellfit solidified its position as a leader in the UAE’s fitness industry by securing a staggering six awards at the prestigious 2024 REPs (Register of Exercise Professionals) Industry Awards Gala, held in partnership with the Dubai Sports Council. This year’s awards follows another stellar performance in 2023, where Wellfit also won six accolades  
        </p> 
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        The awards picked up in 2024 included Superclub of the Year for Wellfit JVC, which saw the 100,000 square foot facility retain this hotly contested award from last year. Wellfit JVC continues to be the best-performing large-scale gym in the UAE, with over 5,500 members despite launching less than three years ago.
        The GM of the Year award went to Nikesh Naik, the general manager of Wellfit JVC, who again retained the title from last year. Also for the second year in a row, Wellfit picked up Best Use of Technology for Shosabi, the innovative tech platform that helps to onboard members and revolutionise their experience. Wellfit JVC also picked up the Best Member Experience Team for its exceptional dedication to customer experience. 
        In addition, Wellfit also picked up two runner up awards, in the Fitness Manager of the Year category for Melissa Linke, and in the Low Price High Value Club category for Wellfit Nasma Residences.
        </p> 
        <br/> 

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        Dimitri Koutsoubakis, CEO of Wellfit, said: “These awards solidify Wellfit’s position as a leader of the UAE’s fitness industry, empowering people of all ages and fitness levels on their journey to wellness. We are confident of the unique experience we offer our members that incorporates cutting-edge technology, top-tier facilities, and the expertise of our team of 120+ certified professionals, all of whom are dedicated to supporting members achieve their fitness amnd lifestyle goals.”
        Wellfit’s remarkable and consistent industry recognition marks its commitment to innovation, outstanding standards, exceptional member experience. State-of-the-art facilities include flagship locations at JVC, Meydan and Madar at Aljada along with additional locations at Sarab and Nasma Residences. Recent additions include Olympic-training level gymnastics facilities at JVC that welcome budding gymnasts from toddlers to adults, and additional on-site Hungry Wolves eateries offering delicious and nutritious meals.
        </p>
        <br/>

        <p className='text-[#cecece] text-[20px] mt-[20px] raleway'>
        The highly regarded REPS Industry Awards, now in their eleventh year, recognise individuals and businesses making significant contributions to health, fitness, and wellness in the UAE. Held in partnership with the Dubai Sports Council, the awards provide a platform to celebrate excellence within the industry, with independent judges assessing nominees through written submissions and mystery shopper visits.
        </p>

    </div>
    </div>
    <Footer />
    </>
  )
}
export default SocialDetail;