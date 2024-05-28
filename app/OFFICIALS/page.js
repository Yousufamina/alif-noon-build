"use client"

import React from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import SelectInput from '@/components/SelectInput'
import { Row,Col } from 'antd'
import DetailCard from '@/components/DetailCard';
import OfficialCard from '@/app/OFFICIALS/OfficialCard'
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import CardPagination from '@/components/productCard/CardPagination';
import SocialIconScroll from '@/components/SocialIconScroll';
import ScrollTopButton from "@/components/ScrollTopButton";
import { useState } from "react";

const Specialization = [
  
    {
      "value": "sales",
      "label": "Sales"
    },
    {
      "value": "manager",
      "label": "Manager"
    },
    {
      "value": "consultant",
      "label": "Consultant"
    },
]
const Languages = [
  
  {
    "value": "russian",
    "label": "Russian"
  },
  {
    "value": "english",
    "label": "English"
  },
  {
    "value": "lativian",
    "label": "Lativian"
  },
]

function page() {
  
  const [agentData, setAgentData] = useState([]);
  const fetchAgentData = async () => {
    await fetch('https://alifnoon.ae/GetData')
    // await fetch('http://localhost:3000/GetAgentData')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setAgentData(data.data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  if(agentData.length==0){
    fetchAgentData();
  }

  return (
    <div className='OFFICIALSectionMax'>
    <Header />
    <ScrollTopButton />
    <SocialIconScroll />
    <div className='OFFCIALSection'>
        <img style={{height:'auto', width:'100%'}} src='/OFFICIALS-BG.png' alt='none' />
        <div className='mainContainer off-planContainer'>
            <div className='absoluteLayer'>
                <h1> Meet Our  </h1>
                <h2>Accomplished Officials </h2>
                <h3> Discover the Profound Expertise of Our Official Team </h3>
            </div>
            <img style={{ marginBottom:'40px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
                <div className='searchFilter raleway'>
                <div className='filterInputsContaner'>
                <div className='InputBox'>
                <p className='mt-[-3px] leading-[27px] text-[21px] text-white font-light '> Locate Your Agent and Uncover Your
                  Ideal Home </p>
                </div>
                  <div className='InputBox '>
                     <SelectInput options={Specialization} placeholder="Specialization" />
                  </div>
                  <div className='InputBox'>
                     <SelectInput options={Languages} placeholder="Languages" />
                  </div>
                </div>
        </div>
        <Row className='mt-10' gutter={10} >
          <Col sm={24} lg={12} xl={15}>
          <div className={`justify-center flex flex-wrap detailCardRow secondSectionRow`}>
                
                {agentData?.map((data) => {
                    return (
                      <div className=" p-4 max-w-sm">
                        <OfficialCard data={data}   /> 
                      </div>
                    )
                })}
                
                
                {/* <div className="p-4 max-w-sm">
                    <OfficialCard name='Hisham El Assaad' ImageSrc={'/OFFCIAL2.png'} /> 
                </div>
                <div className="p-4 max-w-sm">
                    <OfficialCard heading='Dmitri Zolotco' ImageSrc={'/OFFICIAL3.png'} />  
                </div>
                <div className="p-4 max-w-sm">
                    <OfficialCard heading='Rona Rahim' ImageSrc={'/OFFCIALS4.png'} /> 
                </div> */}
                <CardPagination/>
            </div>
          </Col>
          <Col style={{paddingTop:'1rem', paddingRight:'20px'}} className='rightColMain' sm={24} lg={12} xl={9}>
            <div style={{borderRadius:'5px',marginRight:'90px'}} className='rightColDiv p-[20px] bg-[#FFFFFF2E]'>
              <h6 className='text-white text-[25px] mb-[16px] font-bold raleway'>Latest Listing</h6>
              <div className='flex'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard4.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>
              <div className='flex mt-3'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard5.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>
              <div className='flex mt-3'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard6.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>

            </div>
            <div style={{borderRadius:'5px',marginRight:'90px'}} className='rightColDiv mt-[20px] p-[20px] bg-[#FFFFFF2E]'>
              <h6 className='text-white text-[25px] mb-[16px] font-bold raleway'>Trending Stories</h6>
              <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Top Luxury  <br/>Restaurant In Dubai </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>

              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > UAE Year of <br/> Sustainability  </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>


              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > Emirati Hospitality <br/> Experience </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>
              

              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > Best Dubai Blogs</p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>

            </div>
             
          </Col>
        </Row>
        </div>
        
  </div>
  <FreeConsultation />
    <Footer />
  </div>
  )
}

export default page