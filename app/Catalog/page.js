"use client"

import React ,{useState,useEffect }from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { Row,Col } from 'antd'
import DetailCard from '@/components/DetailCard';
import CatalogCard from '@/app/Catalog/CatalogCard'
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import CardPagination from '@/components/productCard/CardPagination';
import SocialIconScroll from '@/components/SocialIconScroll';
import ScrollTopButton from "@/components/ScrollTopButton";
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

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
      fetchLatestPropertyData();
  }, [])

  return (
    <div className='CatalogSectionMax'>
    <Header />
    <ScrollTopButton />
      <SocialIconScroll/>
    <div className='CatalogSection'>
        <img className='innerpagesBg' style={{height:'auto', width:'100%'}} src='/CATALOG-BG.png' alt='none' />
        <div className='mainContainer off-planContainer'>
            <div className='absoluteLayer'>
                <h1> Dubai's Exclusive   </h1>
                <h2>Real Estate Catalogs </h2>
                <h3> Explore the Finest Properties in the Heart of Dubai </h3>
            </div>
            <img className='max-[1080px]:mb-[0px] mb-[40px]' style={{height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
        
        <Row className='mt-10 max-[1080px]:mt-2' gutter={10} >
          <Col sm={24} lg={12} xl={15}>
          <div className={`justify-center flex flex-wrap detailCardRow secondSectionRow`}>
                <div className="p-4 max-w-sm">
                    <CatalogCard heading='The prefect area in Dubai' ImageSrc={'/catalog1.png'} /> 
                </div>
                <div className="p-4 max-w-sm">
                <CatalogCard heading='The prefect area in Dubai' ImageSrc={'/catalog3.png'} /> 
                </div>
                <div className="p-4 max-w-sm">
                <CatalogCard heading='The prefect area in Dubai' ImageSrc={'/catalog4.png'} />  
                </div>
                <div className="p-4 max-w-sm">
                <CatalogCard heading='The prefect area in Dubai' ImageSrc={'/catalog5.png'} /> 
                </div>
               
                <CardPagination/>
            </div>
          </Col>
          <Col style={{paddingTop:'1rem', paddingRight:'20px'}} className='rightColMain' sm={24} lg={12} xl={9}>
            <div style={{borderRadius:'5px',marginRight:'90px'}} className='rightColDiv p-[20px] bg-[#FFFFFF2E]'>
              <h6 className='text-white text-[25px] mb-[16px] font-bold raleway'>Latest Listing</h6>
             
              {latestPropertyData?.map((data,index) => {
                return (
                  <div className='flex mt-3' key={index}>
                    <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[103px] h-[80px] mr-6'>
                      <img style={{borderRadius:'10px' ,  maxWidth: '100%' , height: 'auto'}} src={data.fileUpload[0].preview ? data.fileUpload[0].preview : '' } alt='none' />
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

              {/* <div className='flex mt-3'>
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
              </div> */}

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