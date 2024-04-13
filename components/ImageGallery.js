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

const ImageGallery = () => (
    <div className='imageGallery'>
        <Image.PreviewGroup
            preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
        > 
            <Row gutter={22} className='flex max-[1024px]:flex-col'>
                <Col md={15}> <Image width="100%" src={'/galleryImage1.jpg'} /></Col>
                <Col md={8}>
                    <div className='imageGalleryRowResponsive flex flex-col'>
                    <Image className='mobileImage mb-[29px]' width="100%" src={'/galleryImage2.jpg'} />
                    <Image className="mobileImage" width="100%" src={'/gallerImage3.jpg'} />
                    </div>
                    <Image width="100%" src={'/galleryImage1.jpg'} className='hidden' />
                    <Image width="100%" src={'/galleryImage1.jpg'} className='hidden' />
                    <Image width="100%" src={'/gallerImage3.jpg'} className='hidden' />
                    <Image width="100%" src={'/gallerImage3.jpg'} className='hidden' />
                    <Image width="100%" src={'/gallerImage3.jpg'} className='hidden' />
                </Col>
            </Row>
        </Image.PreviewGroup>
    </div>
);
export default ImageGallery;