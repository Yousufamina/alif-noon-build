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

function PropertyContent() {
  return (
      <Row gutter={5} className='max-[1024px]:justify-center'>
        <Col className='leftColumn' style={{paddingRight:"20px"}} lg={24} xl={17}>
            <ImageGallery />
            <Content
              title={"Apartment with 2 bedrooms in Vida Residence 2, Dubai, UAE (alif-3965135)"}
              price={"USD 70,200"}
              location={"Vida Residence"}
              propertyType={"Apartment"}
              bedrooms={"2"}
              baths={"1"}
              sqrft={"1,382"}
            />
            <Features />
            <Description />
            <ListingDetails />
            {/* <Location /> */}
            <SchoolsNearby />
        </Col>
        <Col className='RightColumn' lg={0} xl={7}>
          <RightCol />
        </Col>
      </Row>
  )
}

export default PropertyContent