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
import axios from 'axios';

function Prod () {

  const [propertyData, setPropertyData] = useState([]);
  const {id} = useParams ()
  // console.log("id is ")
  // console.log(id)

  // const [filteredData, setFilteredData] = useState({});
  // const url = window.location.pathname;
  // const lastPart = url.substring(url.lastIndexOf('/') + 1);
  // const productName  = lastPart.replace(/%20/g, ' ');

  useEffect(() => {

    let dataObj = {'_id': id}
    const fetchData = async () => {
      console.log("id")
      console.log(id)
      const response = await axios.post('http://localhost:3000/GetFilteredData', dataObj ,{
        headers: {'Content-Type': 'application/json'}
      });
      // const response = await axios.post('https://alifnoon.ae/GetFilteredData', dataObj ,{
      //   headers: {'Content-Type': 'application/json'}
      // });
      console.log("response")
      let data = response.data
      setPropertyData(data.data)
      console.log(propertyData)
    }
    fetchData()
  }, []);

  // useEffect(() => {
  //   const filtered = dataa.find(item => item.name === productName);
  //   if (filtered) {
  //     setFilteredData(filtered);
  //     console.log(filtered);
  //   }
  // }, [dataa, productName]);

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