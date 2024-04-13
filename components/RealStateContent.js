import React from 'react'
import Link from 'next/link'

function RealStateContent() {
  return (
    <main className='RealStateContent'>
        <div className='mainContainer'>
        <fieldset>
        <h1> Real estate for sale in dubai </h1>
        <p className='text-[#cecece]'>
        Today, Dubai properties for sale in luxury projects, such as Burj Khalifa and Emaar Beachfront, are as famous worldwide as the city’s premium amenities. A decision to buy a property in Dubai in 2023 is one of the most reliable ways for businessmen and investors to protect and grow their capital, with high-end real estate being particularly lucrative.</p>
        <p className='text-[#cececeb9]'> In January 2023, impressive data for the previous year was published. According to the latest report by the Dubai Land Department (DLD), the total property sales volume in this city reached AED 265.6 billion (over USD 72.3 billion) over 12 months, a historic high for the megalopolis’s real estate market. Property sales in general increased by approximately 78.3% in monetary terms and by 62% by the number of transactions. Notably, the value of transactions with homes in luxurious locations surged by 97%, while the number of deals rose by 85%.
        </p>
        <button>
            <Link className='mx-2' href="#">Read More</Link>    
        </button>    
        </fieldset>
        </div>
    </main>
  )
}

export default RealStateContent