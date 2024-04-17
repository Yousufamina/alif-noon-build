import React from 'react'

function CatalogCard({ ImageSrc, heading }) {
  return (
    <div
      style={{ border: '1px solid #ECA33A', padding: '0px 10px 10px 10px' }}
      className="productCard"
    >
      <div className="cardHeader">
        <div className="w-full">
          <div className="AddFavourite flex justify-end">
            <h4> Add to Download </h4>
            <a href="dummy.pdf" download="Catalog.pdf">
              <img
                className="w-auto h-[40px] mr-[-3px]"
                alt="auto"
                src="/download-icon.svg"
              />
            </a>
          </div>
        </div>
        <h6
          style={{ fontWeight: '600' }}
          className="mt-[-30px] w-[75%] leading-[40px] raleway text-[30px] text-[#000000a8]"
        >
          {heading}{' '}
        </h6>

        <p className="my-2 raleway text-black font-light text-[15px]">
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </p>
        <div className="flex justify-between mb-2">
          <div className="iconDiv flex">
            <h6
              style={{ color: '#ECA33A', fontWeight: '600' }}
              className=" raleway"
            >
              Preview
            </h6>
          </div>
          <div className="iconDiv flex ml-3">
            <h6 className="text-[#000000] font-bold raleway">May 13,2023</h6>
          </div>
        </div>

        <div className="overflow-hidden w-full h-[386px]">
          <img alt="none" src={ImageSrc} className="cardbg w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
