import React from 'react'

const CardDetail = ({bedrooms,bathrooms,price, img}) => {
  return (
    <div className='CardSlider'>
        <img src={img} style={{ height: '420px' }}/>
        <div className='cardDetail'>
        <div className='detailHeader'>
            <p>
            Emerald Vision Tower is a five-story residential building under development in JVT District 1, Jumeirah Village Triangle, Dubai.
            </p>
            <p>
            This opulent residential masterpiece by Vision Avenue Homes redefines prestige with its sleek design and prime location. More than an apartment complex, it’s a statement of refinement. Experience extravagance in every detail – from the grand lobby to the plush interiors, high ceilings, premium fixtures, and breathtaking views. Welcome to a world of elegance at Emerald Vision Tower.
            </p>
        </div>
        <div className='cardDetailInner'>
            <div className='flex justify-around'>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/bedroomIcon.svg' />  
                    <h1>Bedroom {bedrooms}</h1>
                </div>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/bathIcon.svg' />
                    <h1>Bath {bathrooms}</h1>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/sqrft3.svg' />  
                    <h1>1143sq.ft</h1>
                </div>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/dollarIcon.svg' />
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardDetail