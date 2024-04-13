import Link from 'next/link'
import React from 'react'

function DetailCard({ImageSrc}) {
  return (
    <div className='productCard'>
    <div className='cardHeader'>
        <div className='w-full'>
          <div className='AddFavourite flex justify-end'>
            <h4> Add to Favourite </h4>
            <img className='w-auto h-[40px] mr-[-3px]' alt='auto' src='/heart-icon.svg' />
          </div>
        </div>
        <h6 className="mt-[-30px] leading-[40px] raleway font-normal text-[36px] text-[#000000] w-[80%]">Banyan Tree Residences </h6>
        <div className='flex mb-2'>
        <div className='iconDiv flex mt-2'>
            <img src='/locationIcon.svg' className='mr-1' />
            <h6 className='text-[#000000]'>Penthouses</h6>
        </div>
        <div className='iconDiv flex ml-3 mt-2'>
            <img src='/houseIcon.svg' className='mr-1' />
            <h6 className='text-[#000000]'>Hillside Dubai</h6>
        </div>
        </div>
        <button className='mb-4'>
            <Link href="#">View Detail</Link>
        </button>
        <div className='overflow-hidden w-full h-[220px]'>
            <img alt='none'  src={ImageSrc} className="cardbg w-full h-full" />
        </div>
    </div>
    </div>
  )
}

export default DetailCard