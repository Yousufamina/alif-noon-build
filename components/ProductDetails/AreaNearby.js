"use client"

import SimilerPropCards from '../ProductDetails/SimilerPropCards';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState,useEffect } from "react";
import AreaCard from '@/components/ProductDetails/AreaCards'
import { Navigation} from 'swiper/modules';

function AreaNearby() {
    const [swipper,setSwipper] = useState(3);
    useEffect(() => {
      let mediaScreen = window.matchMedia("(max-width: 1080px)");
      if (mediaScreen.matches) {
        setSwipper(1)
      } else {
        setSwipper(3)
      }
  },[swipper]);
  return (
    <div className='AreaNearbySection SimilerProperties'>
        
        <main className='mainContainer'>
        <img class="bg-[#231F20] w-[100%] h-[50px] goldLine" src="/vector.svg" alt="image" />
                <h1 className='mt-[32px]'> AREAS NEARBY </h1>
                <Swiper 
                watchSlidesProgress={true} 
                className="mySwiper"
                slidesPerView={swipper}
                initialSlide={2}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                >
                    <SwiperSlide>
                        <AreaCard 
                        Image_Src={"/AreaPicture3.jpg"}
                        title={"Al Fattan Marine Towers"}
                        Availiblity={"Available apartsment:1"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AreaCard
                        Image_Src={"/AreaPicture2.jpg"}
                        title={"Emaar Beachfront"}
                        Availiblity={"Available apartsment:17"}
                        />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <AreaCard 
                        Image_Src={"/AreaPicture.jpg"}
                        title={"Dubai Marina"}
                        Availiblity={"Available apartsment:18"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AreaCard
                        Image_Src={"/AreaPicture2.jpg"}
                        title={"Emaar Beachfront"}
                        Availiblity={"Available apartsment:17"}
                        />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <AreaCard 
                        Image_Src={"/AreaPicture3.jpg"}
                        title={"Al Fattan Marine Towers"}
                        Availiblity={"Available apartsment:1"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AreaCard 
                        Image_Src={"/AreaPicture4.jpg"}
                        title={"Palm West Beach"}
                        Availiblity={"Available apartsment:1"}
                        />
                    </SwiperSlide>

                </Swiper>
        </main>
    </div>
  )
}

export default AreaNearby