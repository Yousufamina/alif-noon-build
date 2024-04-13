import React from 'react'
import FilterTabs from './FilterTabs' 

const Filter = (props) => {
  return (
    <div className='searchFilter raleway-light'>
      {/* <div className='tabsIcons'>
        <div className='flex justify-end'>
          <div className='bg-[#101E23] p-[10px] mr-[10px]'> <img src='/whatsappIcon.svg' alt='none' /> </div>
          <div className='bg-[#101E23] p-[10px] mr-[24px]'> <img src='/tabIcon2.svg' alt='none'/> </div>
        </div>
      </div> */}
        <FilterTabs/> 
    </div>
  )
}

export default Filter