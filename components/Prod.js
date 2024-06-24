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
import { useParams } from 'next/navigation'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
import axios from 'axios';

function Prod () {

  const [propertyData, setPropertyData] = useState([]);
  const [propertiesData, setDataa] = useState([])
  const {id} = useParams ()

  useEffect(() => {
    let dataObj = {'_id': id}
    const fetchFilteredData = async () => {
      const response = await axios.post(`${SERVER_URL}GetFilteredData`, dataObj ,{
        headers: {'Content-Type': 'application/json'}
      });
      let data = response.data
      setPropertyData(data.data)
    }

    const fetchData = async () => {
      const response = await fetch(`${SERVER_URL}GetData`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setDataa(data.data)
    }

    fetchFilteredData()
    fetchData()

  }, []);

  return (
    <>
        <ScrollTopButton/>
        <Header />
        <main className='propertyDetail'>
            <div className='mainContainer'>
                <PropertyContent propertyData = {propertyData} />
            </div>
        </main>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <ProductSection heading="Similar Properties" subHeadingTop="" subHeadingBottom="" categoryTabs={false} propertyData={propertiesData} />
        <PropertyExploreView/>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <AveragePrices />
        <SimilerProperties  propertyData={propertiesData}/>
        {/* <img class="opacity-0 bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" /> */}
        <AreaNeaby />
        <Footer /> 
    </>
  )
}

export default Prod;