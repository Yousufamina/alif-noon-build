"use client"
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';

import React from 'react'
import SelectInput from '@/components/SelectInput'
import DetailCard from '@/components/DetailCard';
import CardPagination from '@/components/productCard/CardPagination';
import SocialIconScroll from '@/components/SocialIconScroll';
import ScrollTopButton from "@/components/ScrollTopButton";

const Developers =[
    {
        "value": "azizi",
        "label": "Azizi"
      },
      {
        "value": "emaar",
        "label": "Emaar"
      },
      {
        "value": "samana",
        "label": "Samana"
      },
      {
        "value": "omniyat",
        "label": "Omniyat"
      },
      {
        "value": "Nshama",
        "label": "nshama"
      },
      {
        "value": "reportage",
        "label": "Reportage"
      },
]
const Completion_status =[
    {
        "value": "complete",
        "label": "Complete"
      },
      {
        "value": "off-plan",
        "label": "Off-plan"
      }
]

function page() {
  return (
    <div className='Off-plansSectionMax'>
    <Header />
    <SocialIconScroll />
    <ScrollTopButton />
    <div className='Off-plansSection'>
        <img className='innerpagesBg' style={{height:'auto', width:'100%'}} src='/Off-planBgs.png' alt='none' /> 
        <div className='mainContainer off-planContainer pb-[50px]'>
            <div className='absoluteLayer'>
                <h1> Invest in Your </h1>
                <h2>Dream Dubai Home Today </h2>
                <h3> Unlock Exclusive Off-Plan Real Estate Opportunities in Dubai </h3>
            </div>
            <img style={{ marginBottom:'40px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
            <div className='searchFilter raleway'>
                <div className='filterInputsContaner'>
                <div className='InputBox'>
                <SelectInput options={uaeCitiesEnums} placeholder="Location" />
                {/* <input type='text' placeholder="Location" /> */}
                </div>
                <div className='InputBox'>
                <SelectInput options={bedroomsEnums} placeholder="Project" />
                {/* <input type='text' placeholder="Project" /> */}
                </div>
                <div className='InputBox'>
                <SelectInput options={propertyTypesEnums} placeholder="Property Type" />
                </div>
                <div className='InputBox'>
                <SelectInput options={Developers} placeholder="Developers" />
                </div>
                <div className='InputBox'>
                <SelectInput options={Completion_status} placeholder="Completion Status" />
                </div>
                </div>
            </div>
            <div className={`justify-center flex flex-wrap mt-10 max-[1080px]:mt-2 detailCardRow secondSectionRow`}>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard2.png'} /> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard3.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard4.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard5.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard6.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard7.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard8.png'}/> 
                </div>
                <div className="p-4 max-w-sm">
                    <DetailCard ImageSrc={'/OtherCard9.png'}/> 
                </div>
            </div>
            <CardPagination/>
        </div>
        
    </div>

    <FreeConsultation />
    <Footer />
    </div>
  )
}

export default page