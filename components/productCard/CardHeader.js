import React from 'react'

export const CardHeader = ({ productTitle, location, propertyType }) => {
  return (
    <div className="cardHeader min-h-[133px] lg:min-h-[165px] ">
      <div className="w-full">
        <div className="AddFavourite flex justify-end">
          <h4 className="">Add to Favourite</h4>
          <img
            className="w-auto h-[20px] sm:h-[32px] mr-[-12px]"
            alt="auto"
            src="/heart-icon.svg"
          />
        </div>
      </div>
      <p  style={{ fontWeight: '600' }} className="mt-[-33px]  leading-[30px]  raleway font-normal text-[22px] text-[#000000] w-[50%]">
        {productTitle}{' '}
      </p>
      <div className="iconDiv flex mt-2">
        <img src="/locationIcon.svg" className=" mr-2" />
        <p className="text-[#000000] text-[13px] md:text-[14px] ">{location}</p>
      </div>
      <div className="iconDiv flex mt-2 text-[13px] md:text-[14px]">
        <img src="/houseIcon.svg" className="mr-2" />
        <p className="text-[#000000]">{propertyType}</p>
      </div>
    </div>
  )
}
