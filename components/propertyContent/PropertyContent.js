import React from 'react'
import Header from "@/components/header/Index";
import Footer from '@/components/sections/Footer';
import { Col, Row } from 'antd';
import ImageGallery from '@/components/ImageGallery';
import Content from './Content';
import Features from './Features';
import Description from './Description';
import ListingDetails from './ListingDetails';
import RightCol from './RightCol';
import SchoolsNearby from './SchoolsNearby';
import Location from '../ProductDetails/Location';

function PropertyContent({propertyData}) {
  return (
    
      <Row gutter={5} className='max-[1024px]:justify-center'>
        <Col className='leftColumn' style={{paddingRight:"20px"}} lg={24} xl={17}>
            <ImageGallery images = {propertyData?.fileUpload}/>
            {console.log(propertyData?.fileUpload)}
            <Content
              title={propertyData?.name}
              price={propertyData?.price}
              location={propertyData?.location}
              propertyType={propertyData?.propertyType}
              bedrooms={propertyData?.bedrooms}
              baths={propertyData?.bedrooms}
              sqrft={propertyData?.area}
            />
            <Features featureData = {propertyData?.featureAndAminities} />
            <Description />
            <ListingDetails />
            {/* <Location /> */}
            <SchoolsNearby />
        </Col>
        {/* <Col className='RightColumn' lg={0} xl={7}>
          <RightCol />
        </Col> */}
      </Row>
  )
}

export default PropertyContent