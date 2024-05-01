"use client"

import ScrollTopButton from "@/components/ScrollTopButton";
import Footer from '@/components/sections/Footer'
import Header from '@/components/header/Index'
import RightCol from '@/components/propertyContent/RightCol'
import { Col, Row, Tabs } from 'antd'
import ProductCard from '@/components/productCard/ProductCard'
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';
import React from 'react'
import SelectInput from '@/components/SelectInput'
import DetailCard from '@/components/DetailCard';
import FreeConsultation from '@/components/sections/FreeConsultation'
import CardPagination from '@/components/productCard/CardPagination';
import SocialIconScroll from '@/components/SocialIconScroll';
import { useState, useEffect } from 'react'

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
  {
    key: '5',
    label: 'Duplexes',
  },
  {
    key: '6',
    label: 'Plots',
  },
  {
    key: '7',
    label: 'Full Floor Properties',
  },
  {
    key: '8',
    label: 'Commercial Properties',
  },
]

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
  
  const [propertiesData, setDataa] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://alifnoon.ae/GetData')
        // const response = await fetch('http://localhost:3000/GetData')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setDataa(data.data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }
    fetchData()
  }, [])
  const onChange = (key) => {
    console.log(key, 'My Key')
  }
  
  return (
    <div className='Off-plansSectionMax'>
    <SocialIconScroll />
    <ScrollTopButton />
    <Header />

    {/* <main className="productListingPage"> */}
      <div className='Off-plansSection'> 
          <img className='innerpagesBg' style={{height:'auto', width:'100%'}} src='/Off-planBgs.png' alt='none' /> 
          <div className='mainContainer off-planContainer'>
              <div className='absoluteLayer'>
                  <h1> Invest in Your </h1>
                  <h2>Dream Dubai Home Today </h2>
                  <h3> Unlock Exclusive Off-Plan Real Estate Opportunities in Dubai </h3>
              </div>
              <img style={{ marginBottom:'40px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
              
          

                {/* <div className='searchFilter raleway'>
                  <div className='filterInputsContaner'>
                  <div className='InputBox'>
                  <SelectInput options={uaeCitiesEnums} placeholder="Location" />
                  <input type='text' placeholder="Location" /> 
                  </div>
                  <div className='InputBox'>
                  <SelectInput options={bedroomsEnums} placeholder="Project" />
                  <input type='text' placeholder="Project" /> 
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
              </div>*/}
              {/* <CardPagination/> */}
          </div>
      </div>
      <div style={{ paddingBottom: '0px' , paddingTop:'0px' }}className="productListingContainer productSection mainContainer">
              <div className="productsTabs">
                {true && (
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                )}
              </div>
              <div style={{ marginBottom: '100px' }} className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-11  m-auto">
                  <div className="col-span-1 md:col-span-8">
                    <main className="bg-gray-900">
                      <div className="py-4" style={{ backgroundColor: '#231F20' }}>
                        <div className="flex flex-wrap xl:flex-nowrap  ">
                          {propertiesData?.map((dat, index) => (
                            <div className="p-1 max-w-full" key={index}>
                              <ProductCard data={dat} />
                            </div>
                          ))}
                        </div>
                        <CardPagination/>
                      </div>
                    </main>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <RightCol />
                  </div>
                </div>
              </div>
            </div>
    {/* </main> */}
  
    <FreeConsultation />
    <Footer />
    </div>
  )
}

export default page