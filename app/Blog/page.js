'use client'

import React from 'react'
import { useState ,useEffect} from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { Row, Col, Tabs } from 'antd'
import DetailCard from '@/components/DetailCard'
import CatalogCard from '@/app/Catalog/CatalogCard'
import BlogCard from '@/app/Blog/blogCard'
import {
  bedroomsEnums,
  countryEnums,
  propertyTypesEnums,
  uaeCitiesEnums,
  usaCitiesEnums,
} from '@/app/utills/enums'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import CardPagination from '@/components/productCard/CardPagination'
import SocialIconScroll from '@/components/SocialIconScroll'
import ScrollTopButton from '@/components/ScrollTopButton'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const items = [
  {
    key: '1',
    label: 'Blogs',
    children: (
      <>
        <Row className="flex justify-center sm:justify-start">
          <div className="p-3 max-w-sm">
            <BlogCard
              date="Jan 13,2024"
              link="/Blog1Detail"
              heading="Investing  in Luxury Properties in Dubai"
              descriptions={
                'Dubai, a city renowned for its bold ambitions and modern wonders, stands as a global beacon of luxury living. The real estate landscape in Dubai is a testament to this, featuring a stunning array of luxury properties that redefine opulence.'
              }
              ImageSrc={'/investingInluxuryproperties.PNG'}
            />
          </div>
          <div className="p-3 max-w-sm">
            <BlogCard
              date="March 24,2024"
              link="/Blog2Detail"
              heading="Is this safe to invest in dubai to get high ROI"
              descriptions={
                'In the dynamic landscape of global investments, Dubai has emerged as a shining star, enticing investors with promises of high returns and a cosmopolitan lifestyle. However, the question that echoes in the minds of prospective investors'
              }
              ImageSrc={'/saveToInvestInDubai.jpg'}
            />
          </div>
          <div className="p-3 max-w-sm">
            <BlogCard
              date="April 13,2024"
              link="/Blog3Detail"
              heading="Unveiling the Epitome of Opulence"
              descriptions={
                'Dubai, with its iconic skyline and cosmopolitan allure, has become synonymous with luxury living. The citys real estate landscape is a canvas adorned with architectural marvels that redefine opulence.'
              }
              ImageSrc={'/UnveilingTheEpitomeofOpulence.jpg'}
            />
          </div>
        </Row>
      </>
    )
  },
  {
    key: '2',
    label: 'Social',
    children: (
      <>
        <Row className="flex justify-center sm:justify-start">
          <div className="p-3 max-w-sm">
            <BlogCard
              date="March 15,2024"
              link="/Social1Detail"
              heading="Top UAE fitness industry awards"
              descriptions={
                'Wellfit solidified its position as a leader in the UAE’s fitness industry by securing a staggering six awards at the prestigious 2024 REPs. Industry Awards Gala, held in partnership with the Dubai Sports Council.'
              }
              ImageSrc={'/socialNews1.jpg'}
            />
          </div>
          <div className="p-3 max-w-sm">
            <BlogCard
              date="March 6,2024"
              link="/Social2Detail"
              heading="Waterfront Project of the Year"
              descriptions={
                'Armani Beach Residences, a landmark collaboration between Arada, Japanese architect Tadao Ando and Armani/Casa, has won the coveted Waterfront Project of the Year award at the 2024 Pillars of Real Estate Awards.'
              }
              ImageSrc={'/socialNews2.jpg'}
            />
          </div>
          <div className="p-3 max-w-sm">
            <BlogCard
              date="March 27,2024"
              link="/Social3Detail"
              heading="Arada completes first 920 homes"
              descriptions={
                'All eight Tiraz apartment blocks finished; handovers under way Over 7,500 homes now completed. Residents to benefit from direct access to world-class cultural assets, including performing arts space designed by Tadao Ando'
              }
              ImageSrc={'/socialNews3.jpg'}
            />
          </div>
        </Row>
      </>
    )
  },
  {
    key: '3',
    label: ' Offers',
    children: (
      <>
        <Row className="flex justify-center sm:justify-start">
          <div className="mainContainer">
            <div
              className="productSectionHeader text-center"
            >
              <p className="leading-[140px] uppercase raleway font-[900] text-[50px] text-white">
                Coming Soon
              </p>
            </div>
          </div>
        </Row>
      </>
    )
  },
]

function page() {

  const [latestPropertyData, setLatestPropertyData] = useState([]);
  useEffect(() => {
      const fetchLatestPropertyData = async () => {
        await fetch(`${SERVER_URL}GetLatestData`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setLatestPropertyData(data.data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
      fetchLatestPropertyData()
  }, [])
  const onChange = (key) => {
    // console.log(key, "My Key");
  }
  return (
    <div className="BlogSectionMax">
      <Header />
      <ScrollTopButton />
      <SocialIconScroll />
      <div className="BlogSection">
        <img
          className="innerpagesBg"
          style={{ height: 'auto', width: '100%' }}
          src="/Blog-bg.png"
          alt="none"
        />
        <div className="mainContainer off-planContainer">
          <div className="absoluteLayer">
            <h1> Stay Informed with </h1>
            <h2>OUR Latest Updates </h2>
            <h3> Explore News and Blogs for Insights and Inspiration </h3>
          </div>
          <img
            style={{ height: '80px', width: '100%' }}
            src="/VectorPng.png"
            alt="none"
          />
          {/* <div className="productsTabs">
            {true && (
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            )}
          </div> */}
          <Row className="mt-10 max-[1080px]:mt-2" gutter={10}>
            <Col sm={24} lg={12} xl={15}>
              <div
                className={`justify-center flex flex-wrap detailCardRow secondSectionRow`}
              >
                <div className="productsTabs">
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
                {/* <div className="p-3 max-w-sm">
                    <BlogCard date = "Jan 13,2024"  link ="/Blog1Detail" heading='Investing  in Luxury Properties in Dubai' descriptions={'Dubai, a city renowned for its bold ambitions and modern wonders, stands as a global beacon of luxury living. The real estate landscape in Dubai is a testament to this, featuring a stunning array of luxury properties that redefine opulence.'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard date = "March 24,2024"  link ="/Blog2Detail" heading='Is this safe to invest in dubai to get high ROI' descriptions={'In the dynamic landscape of global investments, Dubai has emerged as a shining star, enticing investors with promises of high returns and a cosmopolitan lifestyle. However, the question that echoes in the minds of prospective investors'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard date = "April 13,2024"  link ="/Blog3Detail" heading='Unveiling the Epitome of Opulence' descriptions={'Dubai, with its iconic skyline and cosmopolitan allure, has become synonymous with luxury living. The citys real estate landscape is a canvas adorned with architectural marvels that redefine opulence.'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard date = "March 15,2024"  link ="/Social1Detail" heading='Wellfit dominates top UAE fitness industry awards' descriptions={'Wellfit solidified its position as a leader in the UAE’s fitness industry by securing a staggering six awards at the prestigious 2024 REPs. Industry Awards Gala, held in partnership with the Dubai Sports Council.'} ImageSrc={'/socialNews1.jpg'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard date = "March 6,2024"  link ="/Social2Detail" heading='Waterfront Project of the Year' descriptions={'Armani Beach Residences, a landmark collaboration between Arada, Japanese architect Tadao Ando and Armani/Casa, has won the coveted Waterfront Project of the Year award at the 2024 Pillars of Real Estate Awards.'} ImageSrc={'/socialNews2.jpg'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard date = "March 27,2024"  link ="/Social3Detail" heading='Arada completes first 920 homes' descriptions={'All eight Tiraz apartment blocks finished; handovers under way Over 7,500 homes now completed. Residents to benefit from direct access to world-class cultural assets, including performing arts space designed by Tadao Ando'} ImageSrc={'/socialNews3.jpg'} /> 
                </div> */}

                {/* <div className="p-3 max-w-sm">
                    <BlogCard heading='Waterfront Retreats' descriptions={'Dubais coastline is studded with exclusive waterfront properties that redefine coastal living. Imagine waking up to the gentle lapping of waves and panoramic views of the sea. From sleek penthouses to sprawling villas, these waterfront retreats offer not just a home but a lifestyle marked by tranquility and indulgence.'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard heading='Technological Marvels' descriptions={'Luxury in Dubai goes beyond aesthetics; it integrates cutting-edge technology seamlessly into daily life. Smart homes equipped with state-of-the-art automation systems, personalized climate control, and advanced security features are becoming the norm. These properties offer a glimpse into the future of luxurious living.'} ImageSrc={'/OtherCard1.png'} />   
                </div>
                <div className="p-3 max-w-sm">
                    <BlogCard heading='Desert Oasis' descriptions={'For those who seek a retreat from the urban bustle, Dubais luxury properties extend into the serene desert landscapes. Villas and estates surrounded by dunes offer a unique blend of privacy, tranquility, and the unmistakable charm of the desert. Private pools, lush gardens, and exclusive amenities redefine luxury in this peaceful setting.'} ImageSrc={'/OtherCard1.png'} />  
                </div> */}

                {/* <CardPagination/> */}
              </div>
            </Col>
            <Col
              style={{ paddingTop: '1rem', paddingRight: '20px' }}
              className="rightColMain"
              sm={24}
              lg={12}
              xl={9}
            >
              <div
                style={{ borderRadius: '5px', marginRight: '90px' }}
                className="rightColDiv p-[20px] bg-[#FFFFFF2E]"
              >
                <h6 className="text-white text-[25px] mb-[16px] font-bold raleway">
                  Latest Listing
                </h6>
              
                {latestPropertyData?.map((data,index) => {
                return (
                  <div className='flex mt-3'  key={index}>
                    <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[103px] h-[80px] mr-6'>
                      <img style={{borderRadius:'10px' ,  width: '100%' , height: '100%'}} src={data.fileUpload[0].preview ? data.fileUpload[0].preview : '' } alt='none' />
                    </div>
                    <div>
                    <p className='text-white text-[17px] font-bold raleway leading-[23px]'> {data.name} </p> 
                    <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                      AED  {data.price}
                    </p>
                    </div>
                  </div>
                )
              })}
              
                {/* <div className="flex mt-3">
                  <div
                    style={{
                      borderRadius: '10px',
                      border: '1px solid #ECA33A',
                    }}
                    className="overflow-hidden w-[176px] h-[80px] mr-6"
                  >
                    <img
                      style={{ borderRadius: '10px' }}
                      src="/OtherCard5.png"
                      alt="none"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[17px] font-bold raleway leading-[23px]">
                      {' '}
                      Luxury 6 bed mansion in palmjumera
                    </p>
                    <p className="text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]">
                      AED 5,500,000
                    </p>
                  </div>
                </div>
                <div className="flex mt-3">
                  <div
                    style={{
                      borderRadius: '10px',
                      border: '1px solid #ECA33A',
                    }}
                    className="overflow-hidden w-[176px] h-[80px] mr-6"
                  >
                    <img
                      style={{ borderRadius: '10px' }}
                      src="/OtherCard6.png"
                      alt="none"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[17px] font-bold raleway leading-[23px]">
                      {' '}
                      Luxury 6 bed mansion in palmjumera
                    </p>
                    <p className="text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]">
                      AED 5,500,000
                    </p>
                  </div>
                </div> */}
              </div>
              <div
                style={{ borderRadius: '5px', marginRight: '90px' }}
                className="rightColDiv mt-[20px] p-[20px] bg-[#FFFFFF2E]"
              >
                <h6 className="text-white text-[25px] mb-[16px] font-bold raleway">
                  Trending Stories
                </h6>
                <p className="text-white text-[17px] font-bold raleway leading-[23px]">
                  {' '}
                  Top Luxury <br />
                  Restaurant In Dubai{' '}
                </p>
                <div
                  style={{ borderBottom: '1px solid #ECA33A' }}
                  className="flex justify-between"
                >
                  <p className="text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]">
                    {' '}
                    Read full story
                  </p>
                  <div className="flex py-[5px] items-center mt-3">
                    <FontAwesomeIcon
                      width={20}
                      height={20}
                      style={{ color: '#cecece', marginRight: '2px' }}
                      icon={faCalendarDays}
                    />
                    <p
                      style={{ whiteSpace: 'nowrap' }}
                      className="text-[#cecece] text-[17px] font-light raleway leading-[23px]"
                    >
                      {' '}
                      02 june
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-white text-[17px] font-bold raleway leading-[23px]">
                  {' '}
                  UAE Year of <br /> Sustainability{' '}
                </p>
                <div
                  style={{ borderBottom: '1px solid #ECA33A' }}
                  className="flex justify-between"
                >
                  <p className="text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]">
                    {' '}
                    Read full story
                  </p>
                  <div className="flex py-[5px] items-center mt-3">
                    <FontAwesomeIcon
                      width={20}
                      height={20}
                      style={{ color: '#cecece', marginRight: '2px' }}
                      icon={faCalendarDays}
                    />
                    <p
                      style={{ whiteSpace: 'nowrap' }}
                      className="text-[#cecece] text-[17px] font-light raleway leading-[23px]"
                    >
                      {' '}
                      02 june
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-white text-[17px] font-bold raleway leading-[23px]">
                  {' '}
                  Emirati Hospitality <br /> Experience{' '}
                </p>
                <div
                  style={{ borderBottom: '1px solid #ECA33A' }}
                  className="flex justify-between"
                >
                  <p className="text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]">
                    {' '}
                    Read full story
                  </p>
                  <div className="flex py-[5px] items-center mt-3">
                    <FontAwesomeIcon
                      width={20}
                      height={20}
                      style={{ color: '#cecece', marginRight: '2px' }}
                      icon={faCalendarDays}
                    />
                    <p
                      style={{ whiteSpace: 'nowrap' }}
                      className="text-[#cecece] text-[17px] font-light raleway leading-[23px]"
                    >
                      {' '}
                      02 june
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-white text-[17px] font-bold raleway leading-[23px]">
                  {' '}
                  Best Dubai Blogs
                </p>
                <div
                  style={{ borderBottom: '1px solid #ECA33A' }}
                  className="flex justify-between"
                >
                  <p className="text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]">
                    {' '}
                    Read full story
                  </p>
                  <div className="flex py-[5px] items-center mt-3">
                    <FontAwesomeIcon
                      width={20}
                      height={20}
                      style={{ color: '#cecece', marginRight: '2px' }}
                      icon={faCalendarDays}
                    />
                    <p
                      style={{ whiteSpace: 'nowrap' }}
                      className="text-[#cecece] text-[17px] font-light raleway leading-[23px]"
                    >
                      {' '}
                      02 june
                    </p>
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
