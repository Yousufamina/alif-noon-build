import React from 'react'
import { Col, Row } from "antd";

export default function ProductsAbout() {
  return (
    <main className="ProductsAboutMain">
      <div className="mainContainer">

      <Row className='relative'>
            <Col sm={6} md={5} >
             <h1>TRENDING AREAS</h1>
             <p>Properties for sale in Dubai Marina</p>
             <p> Properties for sale in Downtown Dubai</p>
             <p>Properties for sale in Palm Jumeirah</p>
             <p>Properties for sale in Dubai Hills</p>
             <p>Properties for sale in Business Bay</p>
            </Col>
            <div className='img'></div>
            <Col sm={6} md={5}>
            <h1>POPULAR SEARCHES</h1>
             <p>Properties for sale in Dubai</p>
             <p> Apartments for sale in Dubai</p>
             <p> Hotel Apartments for sale in Dubai</p>
             <p>Penthouses for sale in Dubai</p>
             <p>Townhouses for sale in Dubai</p>
             <p>Villas for sale in Dubai</p>
             <p>Luxury property for sale in Dubai</p>
            </Col>
            <div className='img'></div>
            <Col sm={6} md={5}>
            <h1> LIFESTYLE</h1>
             <p>Downtown Living</p>
             <p>Golf Estate</p>
             <p>Marina Living</p>
             <p>Beachfront Property</p>
             <p>Luxury Penthouses</p>
            </Col>
            <div className='img'></div>
            <Col sm={6} md={5}>
            <h1>OFFPLAN PROJECTS</h1>
             <p>Elara Apartments</p>
             <p> Greenside Residence</p>
             <p> Volta Residences</p>
             <p>Bayview By Address Resorts Tower 2</p>
             <p>Verona Townhouses</p>
             <p>Palmiera The Oasis</p>
            </Col>
         </Row>

        </div>
        </main> 
  )
}
