'use client'
import React from 'react';
import { Col, Image, Row } from 'antd';

const imagesData = [
    {
        value: 1,
        path: '/galleryImage1.jpg'
    },
    {
        value: 2,
        path: '/galleryImage2.jpg'
    },
    {
        value: 3,
        path: '/gallerImage3.jpg'
    },
    {
        value: 4,
        path: '/galleryImage1.jpg'
    },

]

const ImageGallery = ({images}) => {
   
    return(
        <div className='imageGallery'>        
            <Image.PreviewGroup
                preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            > 
                    <Row gutter={19} className='flex max-[1024px]:flex-col'>
                    {   images?.map((img, index) => (
                        index === 0 ? (
                        <Col md={8}> <Image  className='mobileImage mb-[29px]' width="100%" src={img.preview} /></Col> 
                        ) : (
                        <Col md={8}>
                        {/* <div className='imageGalleryRowResponsive flex flex-col'> */}
                             <Image className='mobileImage mb-[29px]' width="100%" id={index}  src={img.preview} /> 
                        {/* </div> */}
                       </Col>)))
                    }
                    </Row>
            </Image.PreviewGroup>
        </div>
    )
};
export default ImageGallery;