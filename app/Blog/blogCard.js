import React from 'react'

function blogCard({ImageSrc,heading,descriptions,link,date}) {
  return (
    <div style={{border:'1px solid #ECA33A', padding:'0px 10px 10px 10px'}} className='productCard'>
    <div className='cardHeader'>
        <div className='w-full'>
          <div className='AddFavourite flex justify-end'>
            <h4> Add to Favourite </h4>
            <img className='w-auto h-[40px] mr-[-3px]' alt='auto' src='/heart-icon.svg' />
          </div>
        </div>
        <h6 style={{fontWeight:'600'}} className="mt-[-30px] w-[75%] leading-[40px] raleway text-[30px] text-[#000000a8]">{heading} </h6>
        
        <p style={{lineClamp:'4'}} className='my-2 raleway text-black font-light text-[15px]'> { descriptions } </p>
        <div className='flex justify-between mb-2'>
        <div className='iconDiv flex'>
            <a href={link}><p className='text-[#ECA33A] font-bold raleway'>Continue Reading</p></a> 
        </div>
        <div className='iconDiv flex ml-3'>
            <h6 className='text-[#000000] font-bold raleway'>{date}</h6>
        </div>
        </div>
        
        <div className='overflow-hidden w-full h-[250px]'>
            <img alt='none'  src={ImageSrc} className="cardbg w-full h-full" />
        </div>
    </div>
    </div>
  )
}

export default blogCard