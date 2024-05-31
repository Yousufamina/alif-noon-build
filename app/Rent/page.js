'use client'

import ScrollTopButton from '@/components/ScrollTopButton'
import Header from '@/components/header/Index'
import Footer from '@/components/sections/Footer'
import RightCol from '@/components/propertyContent/RightCol'
import react from 'react'
import { Col, Row, Tabs } from 'antd'
import ProductCard from '@/components/productCard/ProductCard'
import About from '@/components/sections/Abouts'
import Link from 'next/link'
import Image from 'next/image'
import FreeConsultation from '@/components/sections/FreeConsultation'
import CardPagination from '@/components/productCard/CardPagination'
import SocialIconScroll from '@/components/SocialIconScroll'
import { useEffect, useState } from 'react'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

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

function RentProperties() {
  const onChange = (key) => {
    // console.log(key, 'My Key')
  }
  const [dataa, setDataa] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}GetData`)
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
  return (
    <div className="RentmaxDiv">
      <ScrollTopButton />
      <SocialIconScroll />
      <Header />
      <main className="productListingPage">
        <div
          className="productListingContainer productSection mainContainer">
          <div className="productSectionHeader text-center" style={{ marginBottom: '50px' }}>
            <h1 className="leading-[70px] uppercase raleway font-bold text-[30px] text-[#ECA33A]">
              Properties for rent in Dubai
            </h1>
            <h5 className="mt-36 leading-[70px] uppercase raleway font-bold text-[45px] text-[#ECA33A]">
              Coming Soon
            </h5>
          </div>
          {/* <div className="productsTabs">
            {true && (
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            )}
          </div> */}
          <Row style={{ marginBottom: '5px' }} gutter={2}>
            <Col lg={24} xl={18}>
              <main className={`bg-[#231F20] `}>
                <div className="">
                  <div className="">
                    {/* <div
                      className={`justify-around flex flex-wrap secondSectionRow`}
                    >
                      {dataa?.map((dat, index) => (
                        <div key={index} className="p-1 mb-1 max-w-sm">
                          <ProductCard data={dat} />
                        </div>
                      ))} */}
                    {/* <div className="">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 max-w-sm">
                        <ProductCard />
                      </div> */}
                    {/* </div> */}

                    {/* <CardPagination /> */}
                  </div>
                </div>
              </main>
            </Col>
            {/* <Col className="" lg={0} xl={6}>
              <RightCol />
            </Col> */}
          </Row>
        </div>
        <FreeConsultation />
        {/* <Image
          className="my-[70px] w-full h-[50px]"
          height={50}
          width={100}
          src="/vector.svg"
        /> */}
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default RentProperties
