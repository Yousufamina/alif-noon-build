'use client'

import React , {useEffect, useState} from 'react'
import Header from "@/components/header/Index";
import Footer from '@/components/sections/Footer';
import { Col, Row } from 'antd';
import ImageGallery from '@/components/ImageGallery';
import PropertyContent from '@/components/propertyContent/PropertyContent';
import ProductSection from '@/components/sections/ProductSection';
import PropertyExploreView from '@/components/ProductDetails/PropertyExploreView';
import AveragePrices from '@/components/ProductDetails/AveragePrices';
import SimilerProperties from '../components/ProductDetails/SimilerProperties';
import AreaNeaby from '@/components/ProductDetails/AreaNearby'
import ScrollTopButton from '@/components/ScrollTopButton';
import { useRouter } from 'next/router';


function Prod () {
  const [dataa, setDataa] = useState([]);
  const [filteredData, setFilteredData] = useState({});

  const url = window.location.pathname;
  const lastPart = url.substring(url.lastIndexOf('/') + 1);
  
  const productName  = lastPart.replace(/%20/g, ' ');

  console.log(productName);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:3000/GetData');
        const response = await fetch('https://alifnoon.ae/GetData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDataa(data.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    if (dataa.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const filtered = dataa.find(item => item.name === productName);
    if (filtered) {
      setFilteredData(filtered);
      console.log(filtered);
    }
  }, [dataa, productName]);

  return (
    <>
        <ScrollTopButton/>
        <Header />
        <main className='propertyDetail'>
            <div className='mainContainer'>
                <PropertyContent />
            </div>
        </main>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <ProductSection heading="Similar Properties" subHeadingTop="" subHeadingBottom="" categoryTabs={false} />
        <PropertyExploreView/>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <AveragePrices />
        <SimilerProperties />
        {/* <img class="opacity-0 bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" /> */}
        <AreaNeaby />
        <Footer /> 
    </>
  )
}

export default Prod;