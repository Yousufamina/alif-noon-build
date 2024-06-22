import React, {useState} from 'react'

function CatalogCard({ ImageSrc, heading, desc, pdfUrl}) {
  // const [showPreview, setShowPreview] = useState();
  // setShowPreview(false)
  // function showPdfPreiew(){
  //   setShowPreview(true)
  // }
  
  return (
    <div
      style={{ border: '1px solid #ECA33A', padding: '0px 10px 10px 10px' }}
      className="productCard"
    >
      <div className="cardHeader min-h-[133px]  lg:min-h-[165px]">
        <div className="w-full">
          <div className="AddFavourite flex justify-end">
            <h4> Add to Download </h4>
            <a href={pdfUrl} download={pdfUrl}>
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
          className="mt-[-30px] w-[60%] leading-[40px] raleway text-[25px] text-[#000000a8]"
        >
          {heading}{' '}
        </h6>

        {/* <p className="my-2 raleway text-black font-light text-[15px]">
          {' '}
              {desc}
          {' '}
        </p> */}
        <div className="flex justify-between mb-2">
          <div className="iconDiv flex">
            {/* <h6 
              style={{ color: '#ECA33A', fontWeight: '600' }}
              className=" raleway"
            >
              <iframe src= {pdfUrl} width={600} height={600} />
              Preview
            </h6>  */}

          </div>
          <div className="iconDiv flex ml-3">
            <h6 className="text-[#000000] font-bold raleway">{date}</h6>
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
