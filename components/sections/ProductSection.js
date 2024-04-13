"use client";

import React, {useState,useEffect} from "react";
import { Col, Row, Tabs } from "antd";
import Image from "next/image";
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import './styles.css';

import { EffectCards } from "swiper/modules";
import { Pagination } from "swiper/modules";
import ProductCard from "../productCard/ProductCard";
  
// import { useState } from "react";


const items = [
    {
      key: '1',
      label: 'Apartments',
    },
    {
      key: '2',
      label: 'Townhouses',
    },
    {
      key: '3',
      label: ' Vilas',
    },
    {
        key: '4',
        label: 'Penthouses',
      },
  ];


 function ProductSection({heading, subHeadingTop, subHeadingBottom, bgColor,categoryTabs, alignJustify, dataa}) {
    const [proType, setProType] = useState('0')
    
    const onChange = (key) => {
      console.log(key, "My Key");
  };

    
  return (
    <> 

      <main className={`${bgColor} productSection pt-[60px]`}>
        {/* <div className=""> */}
          <div className="mainContainer">
            <div className="productSectionHeader text-center">
                <h5 className="uppercase text-[25px] text-white">{subHeadingTop}</h5>
                <h1 className="leading-[70px] uppercase raleway font-semibold text-[55px] text-[#ECA33A]">{heading}</h1>
                <h4 className="max-[780px]:text-[18px] raleway-light font-regular text-[24px] text-white">{subHeadingBottom}</h4>
            </div>
            { <div className="productsTabs">
                {categoryTabs && <Tabs defaultActiveKey='1' items={items} onChange={onChange} />} 
            </div> }
            <div className={`${alignJustify} flex flex-wrap mt-10 secondSectionRow`}>
                    {dataa?.map((dat)=>{
                        return <div className="p-4 max-w-sm">
                        <ProductCard data={dat}/>
                      </div>
                    }) 
                    }
            </div>
            <div className=" flex justify-center mt-[40px]">
                <img className="mt-[6px] mr-3 h-[21px] w-[38px]" src="/right-to-left.gif"  alt="none"/>
                <p className="raleway font-bold text-[20px] text-[#ECA33A] text-center"><a href="#">VIEW ALL</a></p>
                <img className="mt-[6px] ml-3 h-[21px] w-[38px]" src="/left-to-right.gif"  alt="none"/>
            </div>
            </div>
        
      </main>
    </>
  );
}

export default ProductSection;


