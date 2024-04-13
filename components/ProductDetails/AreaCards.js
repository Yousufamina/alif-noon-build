"use client"
import React from 'react'


function AreaCards({Image_Src, title,Availiblity}) {
  return (
    <div className='AreaCardSection h-[600px] overflow-hidden'>
        <img src={Image_Src} alt="none" /> 
        <div className="consultantName absolute">
            <h1> {title} </h1>
            <h2> {Availiblity} </h2>
            <div className='hr'></div>
            <p>EXPLORE</p>
        </div>
    </div> 
  )

}

export default AreaCards