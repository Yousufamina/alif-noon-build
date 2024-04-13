"use client";

import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
// import productDetail from "../productDetail/page";
import Link from "next/link";

function SecondSection() {
  const router = useRouter();
  return (
    <>
    <main className="bg-[#231F20] secondSection relative">
      {/* Side Icon */}
      {/* <div className="SidelogoMain1 absolute p-3"> */}
      
      {/* </div> */}

      {/* Main section start */}
      <img
        className="absolute opacity-[50%] mt-[15%] h-[70%] -Z-10 treeImage"
        alt="image"
        src="/treepng.svg"
      />
      <img className="w-full goldLine" src="/vector.svg" alt="image" />
      <div className="mainContainer">
        <Row gutter={2} className="flex max-[1024px]:flex-col secondSectionRow">
          <Col
            sm={24}
            md={12}
            lg={12}
            xs={24}
            className="max-[1024px]:w-full textSectionSecond relative"
          >
            <div className="flex items-center mt-[20px]">
              <p className="raleway font-medium text-[20px] text-white">
                Homes in Dubai
              </p>
              <Image
                className="w-[25%] h-[2px] ml-2"
                height={1}
                width={50}
                src="/VectorWhite.png"
                alt="image"
              />
              <Image
                className="w-[10px] h-[10px]"
                height={2}
                width={2}
                src="/Ellipse 7.svg"
                alt="image"
              />
            </div>

            <h1 className="leading-[64px] raleway font-semibold text-[56px] text-[#ECA33A]">
              ENJOY A LUXARY EXPERIENCE{" "}
            </h1>
            <h2
              className="text-[#dfdddd] mb-[20px] raleway font-light leading-[25px] text-[18px] w-[87%]"
              style={{ marginTop: "16px" }}
            >
              Elevate Your Realty Dreams<br />
              Unlock a world of sophistication and prestige as you invest in the most coveted real estate opportunities in Dubai

            </h2>
            
            
            <button
              type="button"
              onClick={() => router.push("/component/productDetail")}
              style={{position:"relative"}}
              className="customGoldButton max-[1024px]:py-1 max-[1024px]:px-5 font-semibold text-[20px] px-10 py-2.5 w-[200px] mr-2 mb-2 border-b-4 border-[#EEC78C]"
            >
              <Link className="text-white" href="#"> 
               <span> CALL US
               </span>
              </Link>
            </button>
          </Col>

          {/* Second Column */}

          <Col sm={24} md={12} lg={12} xs={24}>
            <div className="flex pr-[20px] max-[1024px]:pr-[2%]">
              <div className="w-2/4 h-3/4 mr-4 max-[1024px]:mr-[2%] innerBox buyBox">
                <div className="buyImage">
                 <img src="/side-image01 1.png" alt="N/A" className="w-full h-full" />
                </div>
                <button class="customGoldButton w-full font-semibold text-[20px] px-10 py-2 w-[200px] mr-2 border-b-4 border-[#EEC78C]">
                  <Link
                    className="text-white"
                    href="/products/buy"
                  >
                    <span> BUY </span>
                    
                  </Link>
                </button>
                <div type="button" className="buyBoxBottom flex justify-between raleway w-full text-white bg-[#3D3839] text-[15px] px-2 py-[16px] mr-2">
                  <span className="flex items-center">
                      <img className="ml-[12px]" src="/Ssc1.svg" alt="I" />
                    <p className="ml-[4px]">4</p>
                    <img className="ml-[12px]" src="/Ssc2.svg" alt="I" />
                    <p className="ml-[4px]">4</p>
                    <img className="ml-[12px]" src="/Ssc3.svg" alt="I" />
                    <p className="ml-[4px]">11432sq.ft</p>
                  </span>
                  <span className="items-center">
                  <p> ${"10,800,8000."} </p>
                  </span>
                </div>
              </div>
              <div className="w-2/4 h-3/4 innerBox rentBox">
                <div className="buyImage">
                  <img src="gallery-thumb02 1.png" alt="N/A" className="w-full h-full" />
                </div>
                <button class="customGoldButton w-full font-semibold text-[20px] px-10 py-2 w-[200px] mr-2 border-b-4 border-[#EEC78C]">
                  <Link
                    className="text-white hover:text-black"
                    href="/Rent"
                  >
                    RENT
                  </Link>
                </button>
                <div type="button" className="buyBoxBottom flex justify-between raleway w-full text-white bg-[#3D3839] text-[15px] px-2 py-[16px] mr-2">
                  <span className="flex items-center">
                      <img className="ml-[12px]" src="/Ssc1.svg" alt="I" />
                    <p className="ml-[4px]">4</p>
                    <img className="ml-[12px]" src="/Ssc2.svg" alt="I" />
                    <p className="ml-[4px]">4</p>
                    <img className="ml-[12px]" src="/Ssc3.svg" alt="I" />
                    <p className="ml-[4px]">11432sq.ft</p>
                  </span>
                  <span className="items-center">
                  <p> ${"10,800,8000."} </p>
                  </span>
                  
                </div>
              </div>
            </div>
          
            </Col>
        </Row>
        <Image className="mt-[8%] w-full h-[50px]" height={50} width={100} src="/vector.svg" />
        </div>
    </main>
  </>
  )
}

export default SecondSection;
