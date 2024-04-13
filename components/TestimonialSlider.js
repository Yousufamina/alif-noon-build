"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

// import required modules
// import { Pagination } from "swiper/modules";
import Link from "next/link";
import {Autoplay } from 'swiper/modules';

export default function TestimonialsSlider() {
  return (
    <>
      <div className="testimonialBox">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[ Autoplay]}
          initialSlide={2}
          loop={true}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#ECA33A",
            "--swiper-pagination-bullet-inactive-color": "#fcfcfc00",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-top": "40px !important",
            "--swiper-pagination-bullet-right": "20px !important"
          }}
        >
          <SwiperSlide className="w-full">
           
            <div className="flex-col max-[780px]:mb-[20px] mb-[70px]">
              <div className="w-full">
                <p className="text-center reviewText">
                "Working with Alifnoon Properties LLC has been an absolute pleasure. Their team's dedication to providing top-notch service and their in-depth knowledge of the real estate market made our home-buying experience smooth and enjoyable. From property selection to the final closing, they guided us every step of the way, ensuring we found the perfect home. Their professionalism, attention to detail, and commitment to client satisfaction truly set them apart. Highly recommended!"
                </p>
              </div>
              <div className="flex flex-col justify-center testimonialProfile">
               
                <div className="profileName ml-3 flex flex-col item-center">
              
                  <h2 className="m-auto text-center text-white leading-[29px] raleway font-medium font-light text-[22px]">"Exceptional Service and Expertise!"</h2>
                    {/* Rating Stars */}
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <p className="text-center raleway ml-2 text-[13px] font-light text-gray-300">5 out of 5</p>
                    </div>
                </div>
                <img
                    className="m-auto mt-2"
                    src="/clientreview2.jpg"
                    style={{ width: "45px", height: "42px", borderRadius: "100%" }}
                />

              </div>

              
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
           
            <div className="flex-col max-[780px]:mb-[20px] mb-[70px]">
              <div className="w-full">
                <p className="text-center reviewText">
                "I couldn't be more pleased with the service I received from Alifnoon Properties LLC They not only helped me sell my property quickly and at a competitive price but also made the entire process transparent and stress-free. The team's communication and responsiveness were outstanding. I always felt informed and confident in their expertise. If you're looking for a real estate partner that prioritizes your needs and delivers results, [Real Estate Company] is the way to go!"
                </p>
              </div>
              <div className="flex flex-col justify-center testimonialProfile">
                
                <div className="profileName ml-3 flex flex-col item-center">
              
                  <h2 className="text-center text-white m-auto leading-[29px] raleway font-medium font-light text-[22px]">"Efficient, Transparent, and Trustworthy!"</h2>
                    {/* Rating Stars */}
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <p className="text-center raleway ml-2 text-[13px] font-light text-gray-300">5 out of 5</p>
                    </div>
                </div>
                <img
                    className="m-auto mt-2"
                    src="/clientreview2.jpg"
                    style={{ width: "45px", height: "42px", borderRadius: "100%" }}
                />

              </div>

              
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="w-full">
           
            <div className="flex-col max-[780px]:mb-[20px] mb-[70px]">
              <div className="w-full">
                <p className="text-center reviewText">
                "My family and I recently relocated, and Alifnoon Properties LLC played a crucial role in finding our dream home. Their agents took the time to understand our preferences, budget, and lifestyle, presenting us with options that perfectly matched our criteria. What stood out was their dedication to finding the right fit for us, rather than just making a sale. The entire process was efficient, and their guidance ensured we made informed decisions. Alifnoon Properties LLC is the go-to choose for anyone seeking a personalized and enjoyable real estate experience."
                </p>
              </div>
              <div className="flex flex-col justify-center testimonialProfile">
                
                <div className="profileName ml-3 flex flex-col item-center">
              
                  <h2 className="text-white text-center m-auto leading-[29px] raleway font-medium font-light text-[22px]">"Dream Home Found with [Real Estate Company]!"</h2>
                    {/* Rating Stars */}
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-[#ECA33A] mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <p className="text-center raleway ml-2 text-[13px] font-light text-gray-300">5 out of 5</p>
                    </div>
                </div>
                <img
                    className="m-auto mt-2"
                    src="/clientreview2.jpg"
                    style={{ width: "45px", height: "42px", borderRadius: "100%" }}
                />

              </div>

              
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
