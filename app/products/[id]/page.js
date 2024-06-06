'use client'

import ScrollTopButton from '@/components/ScrollTopButton'
import Header from '@/components/header/Index'
import Footer from '@/components/sections/Footer'
import RightCol from '@/components/propertyContent/RightCol'
import { Col, Row, Tabs } from 'antd'
import ProductCard from '../../../components/productCard/ProductCard'
import About from '@/components/sections/Abouts'
import Link from 'next/link'
import Image from 'next/image'
import FreeConsultation from '@/components/sections/FreeConsultation'
import CardPagination from '@/components/productCard/CardPagination'
import SocialIconScroll from '@/components/SocialIconScroll'
import { useState, useEffect } from 'react'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
import { useSearchParams } from 'next/navigation'

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

const productListingPage = ({ url }) => {
  const [propertiesData, setDataa] = useState([])
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {

    const fetchData = async () => { 
      try {  
        if(search && search !== ''){
          const response = await fetch(`${SERVER_URL}GetData?name=${search}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json()
          setDataa(data.data)
        }else{
          const response = await fetch(`${SERVER_URL}GetData`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json()
          setDataa(data.data)
        }
       
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }
    fetchData()
  }, [])
  const onChange = (key) => {
    // console.log(key, 'My Key')
  }

  // let heading_attribute;
  // if (router.pathname == "/buy") {
  //   console.log('check',router.pathname);
  // }
  // else if (router.pathname == "/sell") {
  //   return heading_attribute = 'Sale'
  // }
  // else if (router.pathname == "/rent") {
  //   return heading_attribute = 'Rent'
  // }
  return (
    <div className="BuymaxDiv">
      <ScrollTopButton />
      <SocialIconScroll />
      <Header />

      <main className="productListingPage">
        <div
          style={{ paddingBottom: '0px' }}
          className="productListingContainer productSection mainContainer"
        >
          <div className="productSectionHeader text-center">
            <h1 className="leading-[70px] uppercase raleway font-bold text-[45px] text-[#ECA33A]">
              Properties for Sale in Dubai
            </h1>
          </div>
          <div className="productsTabs">
            {true && (
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            )}
          </div>
          {/* <Row style={{ marginBottom: '100px' }} gutter={2}> */}
          {/* <Col xs={24} lg={24} xl={18}> */}
          <div style={{ marginBottom: '100px' }} className="mainContainer m-auto">
            {/* <Row
              gutter={10}
              className="grid grid-cols-1 md:grid-cols-8  m-auto"
            > */}
            {/* <div className="grid grid-cols-1 md:grid-cols-11  m-auto">
              <div className="col-span-1 md:col-span-8"> */}
                {/* <main> */}
                  <div className="py-4">
                    <div className="justify-center flex flex-wrap mt-10 secondSectionRow">
                        
                        {propertiesData?.map((dat, index) => (
                          <div className="p-4 max-w-sm" key={index}>
                            <ProductCard data={dat} />
                          </div>
                        ))}
                    
                    </div>
                    { propertiesData.length ? <CardPagination /> : ''}
                  </div>
                  <div>

                  </div>
                {/* </main> */}
              {/* </div> */}
            {/* </div> */}
              {/* <Col sm={24} md={14} lg={16} xl={16}> */}
        
              {/* </Col> */}
              {/* <Col sm={24} md={10} lg={8} xl={6}>
                 <RightCol />
              </Col> */}
            {/* </Row> */}
          </div>

          {/* </Col> */}
          {/* </Row> */}
        </div>
        <FreeConsultation />
        {/* <img style={{ marginTop:'35px',marginBottom:'35px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' />  */}
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default productListingPage
