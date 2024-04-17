import React from 'react'

export const CardHeader = ({ productTitle, location, propertyType }) => {
  return (
    <div className="cardHeader min-h-[158px]">
      <div className="w-full">
        <div className="AddFavourite flex justify-end">
          <h4> Add to Favourite </h4>
          <img
            className="w-auto h-[40px] mr-[-12px]"
            alt="auto"
            src="/heart-icon.svg"
          />
        </div>
      </div>
      <h2 className="mt-[-28px] leading-[40px] raleway font-normal text-[36px] text-[#000000] w-[70%]">
        {productTitle}{' '}
      </h2>
      <div className="iconDiv flex mt-2">
        <img src="/locationIcon.svg" className="mr-2" />
        <h6 className="text-[#000000]">{location}</h6>
      </div>
      <div className="iconDiv flex mt-2">
        <img src="/houseIcon.svg" className="mr-2" />
        <h6 className="text-[#000000]">{propertyType}</h6>
      </div>
    </div>
  )
}
