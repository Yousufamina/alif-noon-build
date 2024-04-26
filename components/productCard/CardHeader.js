import React from 'react'

export const CardHeader = ({ productTitle, location, propertyType }) => {
  return (
    <div className="cardHeader min-h-[158px] sm:min-h-[100px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[230px]">
      <div className="w-full">
        <div className="AddFavourite flex justify-end">
          <h4 className="text-sm sm:text-base">Add to Favourite</h4>
          <img
            className="w-auto h-[40px] sm:h-[50px] mr-[-12px]"
            alt="auto"
            src="/heart-icon.svg"
          />
        </div>
      </div>
      <p className="mt-[-28px] sm:mt-[-40px] leading-[23px] sm:leading-[32px] raleway font-normal text-[17px] sm:text-[22px] text-[#000000] w-[50%] sm:w-[60%]">
        {productTitle}{' '}
      </p>
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
