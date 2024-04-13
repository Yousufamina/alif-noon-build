import React from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
// import { Navigation } from 'swiper/modules';

export default function CardSlider() {
  return (
    <div className='CardSlider'>
        <img src='/welcome-bg-3.png'/>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src='/productImage.svg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/productImage2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/productImage.svg' />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
