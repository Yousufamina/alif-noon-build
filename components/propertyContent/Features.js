import React , {useState,useEffect} from 'react'
import { FeaturesAndAminities } from "@/app/utills/enums";

const Features = ({featureData}) => {
   
    return (
        <div className='featuresContainer'>
            <h1>Features & Amenities</h1>
            <div className='grid features'>            
          
            {featureData?.map((item, index) => (
                <div className='box flex' key={index}>

                {FeaturesAndAminities.find(obj => obj.value === item) && (
                    <img src = {FeaturesAndAminities.find(obj => obj.value === item).img } />
                 )}

                <h3>{item}</h3> 
                </div>
            ))}

        
                {/*<div className='box flex'>
                    <img src='/Central-air-conditioning.png' />
                    <h3>Central Air Condition</h3> 
                </div>
                <div className='box flex'>
                    <img src='/SharedSwim.svg' />
                    <h3>Shared Swimming Pool</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Security.png' />
                    <h3>Security</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Sharedgym.svg' />
                    <h3>Shared Gym</h3> 
                </div>
                <div className='box flex'>
                    <img src='/balcony.svg' />
                    <h3>Balcony</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Concierge-service.svg' />
                    <h3>Concierge Service</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Viewoflandmark.svg' />
                    <h3>View Of Landmark</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Sharedgym.svg' />
                    <h3>Private Gym</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Petsallowed.svg' />
                    <h3>Pet Allowed</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Maidservice.svg' />
                    <h3>Maid's room</h3> 
                </div>
                <div className='box flex'>
                    <img src='/Study.svg' />
                    <h3>Study</h3> 
                </div>
                <div className='box flex'>
                    <img src='/buitinWardrop.svg' />
                    <h3>Buit-in wardrop</h3> 
                </div>
                <div className='box flex'>
                    <img src='/buitinWardrop.svg' />
                    <h3>Covered Parking</h3> 
                </div> */}
            </div>
        </div>
    )
}

export default Features