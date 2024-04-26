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

// import { useRouter } from 'next/router';

// const router = useRouter();
// console.log('check',router.pathname)

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
  const [dataa, setDataa] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://alifnoon.ae/GetData')
        const response = await fetch('http://localhost:3000/GetData')
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
          <div style={{ marginBottom: '100px' }} className="container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-10  m-auto">
              <div className="col-span-1 md:col-span-7">
                <main className="bg-gray-900">
                  <div className="py-4" style={{ backgroundColor: '#231F20' }}>
                    <div className="flex justify-around flex-wrap">
                      {dataa?.map((dat, index) => (
                        <div className="p-4 max-w-sm" key={index}>
                          <ProductCard data={dat} />
                        </div>
                      ))}
                    </div>
                    <CardPagination />
                  </div>
                </main>
              </div>
              <div className="col-span-1 md:col-span-3">
                <RightCol />
              </div>
            </div>
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
