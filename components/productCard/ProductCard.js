import React from 'react'
import { CardHeader } from './CardHeader'
import CardSlider from './CardSlider'
import CardDetail from './CardDetail'
import CardBottom from './CardBottom'
import Link from 'next/link';

const ProductCard = ({ data }) => {
  return (
    <div className='productCard'>
        <CardHeader 
          productTitle={data? data.name: "loading"} 
          location={data? data.location: "loading"}
          propertyType={data? data.propertyType[0]: "loading"}
        />
        <CardDetail 
          bedrooms={data? data.bedrooms: "loading"}
          bathrooms={data? data.bedrooms: "Loading"}
          price={data? data.price: "loading"}
          img={data? data.fileUpload[0].preview : ""}
          description={data? data.description: "loading"}
          area={data? data.area: "loading"}
        />
        <CardBottom />
        <div className='linkBox'>
        {/* <a href={`/product/${data.name}`} className='flex mt-[10px] text-[20px] raleway font-bold text-black'>Get Now <img className='ml-[9px]' alt='image' src='/rightArrow.svg' /></a> */}
        <Link legacyBehavior href={`/product/${encodeURIComponent(data.name)}`}>
        <a className='flex mt-[10px] text-[20px] raleway font-bold text-black'>
          Get Now <img className='ml-[9px]' alt='image' src='/rightArrow.svg' />
        </a>
        </Link>
        
        </div>

    </div>
  )
}

export default ProductCard