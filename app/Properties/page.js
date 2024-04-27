'use client'

import { useEffect, useState } from 'react'
import { Row, Col, Tabs } from 'antd'
import ProductCard from '@/components/productCard/ProductCard'
import RightCol from '@/components/propertyContent/RightCol'
import ScrollTopButton from '@/components/ScrollTopButton'
import Header from '@/components/header/Index'
import Footer from '@/components/sections/Footer'
import About from '@/components/sections/Abouts'
import FreeConsultation from '@/components/sections/FreeConsultation'
import CardPagination from '@/components/productCard/CardPagination'
import SocialIconScroll from '@/components/SocialIconScroll'

const items = [
  {
    key: '1',
    label: 'Apartments',
  },
  {
    key: '2',
    label: 'Townhouses',
  },
  // Add other items as needed
]

function RentProperties() {
  const [dataa, setDataa] = useState([])

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
  }, []) // Empty dependency array ensures the effect runs only once after the initial render

  const onChange = (key) => {
    console.log(key, 'My Key')
  }

  return (
    <div className="RentmaxDiv">
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
              Properties in Dubai
            </h1>
          </div>
          <div className="productsTabs">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          <Row style={{ marginBottom: '100px' }} gutter={2}>
            <Col lg={24} xl={18}>
              <main className={`bg-[#231F20] `}>
                <div className="">
                  <div className="">
                    <div
                      className={`justify-around flex flex-wrap secondSectionRow`}
                    >
                      {dataa?.map((dat, index) => (
                        <div key={index} className="p-4 max-w-sm">
                          <ProductCard data={dat} />
                        </div>
                      ))}
                    </div>
                    <CardPagination />
                  </div>
                </div>
              </main>
            </Col>
            <Col className="pt-[4px]" lg={0} xl={6}>
              <RightCol />
            </Col>
          </Row>
        </div>
        <FreeConsultation />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default RentProperties
